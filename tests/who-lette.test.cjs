const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const data = require(path.join(root, "who-lette-data.js"));
const page = fs.readFileSync(path.join(root, "who-lette.html"), "utf8");
const script = fs.readFileSync(path.join(root, "who-lette.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "who-lette.css"), "utf8");
const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
const homeStyles = fs.readFileSync(path.join(root, "styles.css"), "utf8");

assert.equal(data.celebrities.length, 24, "Who-lette should contain 24 celebrities");
assert.equal(new Set(data.celebrities.map((person) => person.name)).size, 24, "Celebrity names should be unique");
for (const celebrity of data.celebrities) {
  assert(["man", "woman"].includes(celebrity.gender), `${celebrity.name} should have a pronoun category`);
  assert.equal(celebrity.facts.length, 6, `${celebrity.name} should have six stable clues`);
  assert(celebrity.aliases.length >= 2, `${celebrity.name} should accept a practical guess alias`);
}
assert(data.sampleQuestions.length >= 10, "The example trade should have a varied question bank");
assert(page.includes("WHO-LETTE"), "The game should use the requested Who-lette name");
assert(page.includes("data-show-profile"), "Celebrity information should be available on demand");
assert.equal((page.match(/data-question-input/g) || []).length, 0, "Question rows should be generated consistently in JavaScript");
assert(script.includes("Array.from({length: 6}"), "Each round should provide six question spaces");
assert(script.includes("data-shuffle-face"), "The mystery selection should use rapidly alternating cards");
assert(script.includes('$("[data-profile]").hidden = true'), "Player A should be able to hide the information again");
assert(script.includes("state.exampleUsed = true"), "Only one question may be traded for an example");
assert(script.includes("aliases.some"), "Final guesses should accept defined aliases");
assert(home.includes('href="who-lette.html"'), "The homepage should link to Who-lette");
assert(homeStyles.includes(".games-grid > .game-card-question-queue { grid-column: span 6;"), "Question Queue should occupy half of the desktop game row");
assert(homeStyles.includes(".games-grid > .game-card-who-lette { grid-column: span 6;"), "Who-lette should sit beside Question Queue on desktop");
assert(styles.includes("body:not(.home-v2) .lesson-card.wholet-result h2"), "The result title should override the global dark lesson heading color");
assert(styles.includes("body:not(.home-v2) .lesson-card .wholet-mystery-banner h2"), "The mystery banner title should override the global dark lesson heading color");

console.log("PASS: Who-lette has 24 celebrities, reusable private profiles, a card shuffle, six question notes, one example trade, and one final guess.");
