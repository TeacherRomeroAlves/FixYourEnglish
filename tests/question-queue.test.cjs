const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const data = require(path.join(root, "question-queue-data.js"));
const page = fs.readFileSync(path.join(root, "question-queue.html"), "utf8");
const script = fs.readFileSync(path.join(root, "question-queue.js"), "utf8");
const home = fs.readFileSync(path.join(root, "index.html"), "utf8");

assert.deepEqual(Object.keys(data.levels), ["beginner", "elementary", "intermediate"]);
assert.equal(Object.keys(data.topics).length, 9, "Question Queue should offer nine grammar topics");

let questionCount = 0;
for (const topic of Object.values(data.topics)) {
  assert.equal(topic.themes.length, 4, `${topic.name} should contain four conversation themes`);
  for (const theme of topic.themes) {
    for (const levelId of Object.keys(data.levels)) {
      assert.equal(theme.questions[levelId].length, 4, `${topic.name} / ${theme.name} / ${levelId} should contain four questions`);
      assert(theme.questions[levelId].every((question) => question.trim().length > 8), "Questions should contain meaningful text");
      questionCount += theme.questions[levelId].length;
    }
  }
}
assert.equal(questionCount, 432, "The complete bank should contain 432 questions");
assert(page.includes('data-listen-question'), "The page should include a listen control");
assert(page.includes('data-reveal-question disabled'), "Reveal should begin locked");
assert(script.includes("SpeechSynthesisUtterance"), "Browser speech synthesis should read questions aloud");
assert(script.includes("question.listens < 2"), "Reveal should remain locked until two completed listens");
assert(script.includes("utterance.onend"), "A listen should count only after speech finishes");
assert(home.includes('href="question-queue.html"'), "The homepage should link to Question Queue");

console.log(`Question Queue verified: ${questionCount} questions across ${Object.keys(data.topics).length} topics.`);
