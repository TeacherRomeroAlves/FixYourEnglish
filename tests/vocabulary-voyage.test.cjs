const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { words, VoyageGame } = require("../vocabulary-voyage-engine.js");

assert.equal(words.length, 50);
const poolCounts = words.reduce((counts, item) => counts.set(item.destination, (counts.get(item.destination) || 0) + 1), new Map());
assert.ok([...poolCounts.values()].every(count => count <= 3), "No destination may have more than three pool words");
assert.equal(words.some(item => ["amok", "batik", "anorak"].includes(item.word)), false);
assert.equal(words.some(item => item.word === "pizza"), true);
words.forEach(item => {
  ["word", "flag", "destination", "language", "meaning", "context", "original"].forEach(key => assert.ok(item[key], `${item.word} needs ${key}`));
  assert.match(item.context, /_____/);
  const clueText = `${item.meaning} ${item.original}`.toLowerCase().replace(/[^a-z]/g, "");
  assert.equal(clueText.includes(item.word.toLowerCase()), false, `${item.word} is exposed by a clue`);
});

const game = new VoyageGame(() => 0.42);
assert.equal(game.stops.length, 7);
const tripCounts = game.stops.reduce((counts, item) => counts.set(item.destination, (counts.get(item.destination) || 0) + 1), new Map());
assert.ok([...tripCounts.values()].every(count => count <= 2), "A trip may visit one destination at most twice");
assert.equal(game.mask().length, game.current.word.length);
assert.equal(game.clue("meaning"), "meaning");
assert.equal(game.total, 690);
assert.equal(game.clue("meaning"), null);
assert.equal(game.clue("letter", () => 0), "letter");
assert.equal(game.total, 680);
assert.equal(game.guess("definitelywrong").correct, false);
assert.equal(game.guess(game.current.word.toUpperCase()).correct, true);
assert.equal(game.total, 675);
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
const script = fs.readFileSync(path.join(root, "vocabulary-voyage.js"), "utf8");
const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert.match(html, /data-voyage-share/);
assert.match(html, /data-voyage-stop/);
assert.doesNotMatch(html, /data-voyage-round/);
assert.match(html, /data-clue="meaning"/);
assert.match(home, /href="vocabulary-voyage\.html"/);
assert.match(script, /flagcdn\.com/);
assert.match(script, /stamp-country-flag/);
for (let seed = 1; seed <= 200; seed += 1) {
  let state = seed;
  const random = () => ((state = (state * 1664525 + 1013904223) >>> 0) / 4294967296);
  const sampledTrip = new VoyageGame(random).stops;
  const counts = sampledTrip.reduce((map, item) => map.set(item.destination, (map.get(item.destination) || 0) + 1), new Map());
  assert.equal(sampledTrip.length, 7);
  assert.ok([...counts.values()].every(count => count <= 2));
}

console.log("PASS: 50-word bank, balanced 7-stop voyages, 700-point scoring, letter reveals, guesses, passport progression, SVG flags, sharing, and homepage link.");
