const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const engine = require("../food-mood-engine.js");

const root = path.resolve(__dirname, "..");
const page = fs.readFileSync(path.join(root, "food-mood.html"), "utf8");
const game = fs.readFileSync(path.join(root, "food-mood.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "food-mood.css"), "utf8");
const home = fs.readFileSync(path.join(root, "index.html"), "utf8");

assert(engine.words.length >= 45, "The arcade should have a broad food vocabulary bank");
assert.equal(new Set(engine.words.map((item) => item.word)).size, engine.words.length, "Food words should be unique");
assert(engine.words.some((item) => item.word.includes(" ")), "The bank should support multiword foods");
engine.words.forEach((item) => {
  assert(["countable", "uncountable"].includes(item.countability), `${item.word} needs a valid countability answer`);
  assert(item.example.includes("___"), `${item.word} needs a concealed example clue`);
  assert(item.context.toLowerCase().includes(item.word), `${item.word} needs a contextual countability sentence`);
  assert(!item.example.toLowerCase().includes(item.word), `${item.word} must not appear in its example clue`);
});

assert.deepEqual(engine.maskWord("ice cream", new Set(["C"])), ["_","C","_"," ","C","_","_","_","_"]);
assert(engine.isSolved("apple", new Set(["A","P","L","E"])));
assert.deepEqual(engine.unrevealedLetters("banana", new Set(["A"])).sort(), ["B","N"]);
assert.equal(engine.pickWord("apple", () => 0).word === "apple", false, "Consecutive rounds should not repeat the same word");

assert(page.includes("5 tomato lives"));
assert(page.includes('data-food-clue="category"'));
assert(page.includes('data-food-clue="definition"'));
assert(page.includes('data-food-clue="letter"'));
assert(page.includes('data-food-clue="example"'));
assert(page.includes('data-count-answer="countable"'));
assert(page.includes('data-count-answer="uncountable"'));
assert(game.includes("lives = 5"));
assert(game.includes("loseLife()"));
assert(game.includes("finishRound(false)"));
assert(styles.includes(".tomato-lives span.is-lost"));
assert(styles.includes(".food-start[hidden]"));
assert(home.includes('href="food-mood.html"'));
assert.equal((home.match(/class="game-card /g) || []).length, 9, "The homepage should contain nine game cards");
const homeStyles = fs.readFileSync(path.join(root, "styles.css"), "utf8");
assert(homeStyles.includes(".games-grid > .game-card { grid-column: span 4;"), "Desktop games should form a three-column grid");

console.log(`PASS: Food Mood has ${engine.words.length} contextual foods, five tomato lives, four paid clues, letter guessing, and countability follow-up.`);
