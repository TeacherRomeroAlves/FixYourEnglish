const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { words, VoyageGame } = require("../vocabulary-voyage-engine.js");

assert.equal(words.length, 30);
assert.equal(new Set(words.map(item => item.destination)).size, 29);
assert.equal(words.some(item => ["amok", "batik", "anorak"].includes(item.word)), false);
assert.equal(words.some(item => item.word === "pizza"), true);
words.forEach(item => {
  ["word", "flag", "destination", "language", "meaning", "context", "original"].forEach(key => assert.ok(item[key], `${item.word} needs ${key}`));
  assert.match(item.context, /_____/);
  const clueText = `${item.meaning} ${item.original}`.toLowerCase().replace(/[^a-z]/g, "");
  assert.equal(clueText.includes(item.word.toLowerCase()), false, `${item.word} is exposed by a clue`);
});

const game = new VoyageGame(() => 0.42);
assert.equal(game.stops.length, 10);
assert.equal(new Set(game.stops.map(item => item.destination)).size, 10);
assert.equal(game.mask().length, game.current.word.length);
assert.equal(game.clue("meaning"), "meaning");
assert.equal(game.total, 990);
assert.equal(game.clue("meaning"), null);
assert.equal(game.clue("letter", () => 0), "letter");
assert.equal(game.total, 980);
assert.equal(game.guess("definitelywrong").correct, false);
assert.equal(game.guess(game.current.word.toUpperCase()).correct, true);
assert.equal(game.total, 975);
assert.equal(game.next(), true);
assert.equal(game.stopIndex, 1);
game.stop();
assert.equal(game.endedEarly, true);
assert.equal(game.over, true);

const letterLimitGame = new VoyageGame(() => 0.25);
while (letterLimitGame.mask().filter(letter => letter === "_").length > 2) {
  assert.equal(letterLimitGame.clue("letter", () => 0), "letter");
}
const scoreAtLimit = letterLimitGame.total;
assert.equal(letterLimitGame.mask().filter(letter => letter === "_").length, 2);
assert.equal(letterLimitGame.clue("letter", () => 0), null);
assert.equal(letterLimitGame.total, scoreAtLimit);

const whiskyGame = new VoyageGame(() => 0);
whiskyGame.stops[0] = words.find(item => item.word === "whisky");
assert.equal(whiskyGame.guess("whiskey").correct, true);

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "vocabulary-voyage.html"), "utf8");
const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert.match(html, /data-voyage-share/);
assert.match(html, /data-voyage-stop/);
assert.doesNotMatch(html, /data-voyage-round/);
assert.match(html, /data-clue="meaning"/);
assert.match(home, /href="vocabulary-voyage\.html"/);
console.log("PASS: 30-word bank, destination-safe 10-stop voyages, clue scoring, letter reveals, guesses, passport progression, sharing, and homepage link.");
