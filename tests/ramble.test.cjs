const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { topics, levelWords, checkSentence, checkLevel, displayWord, Game } = require("../ramble-engine.js");
const split = sentence => sentence.split(" ");
const alternatives = {
  be: [
    ["I am happy", "He isn't Mary", "Are you tired"],
    ["Lucas is ready", "We aren't at home", "Is your sister a student"],
    ["My parents are late for school", "Emma is not afraid of dogs", "Are the children in the kitchen"]
  ],
  present: [
    ["I cook", "She doesn't like music", "Do you swim"],
    ["Daniel plays soccer", "We don't work", "Where does your brother eat meat"],
    ["My sister reads books", "The boys do not drink coffee every night", "Does Anna walk to school"]
  ],
  past: [
    ["I watched TV", "He didn't dance", "Did you cook"],
    ["Sofia visited London", "We didn't call", "Did your father play tennis"],
    ["Yesterday my friends traveled by train", "Lucas did not visit their grandparents", "Did the children finish his homework"]
  ],
  continuous: [
    ["I am sleeping", "She isn't cooking", "Are you reading"],
    ["Tom is working", "We aren't washing dishes", "Is your mother watching TV"],
    ["The children are making dinner", "My brother is not playing in the garden", "Are Emma and Lucas studying now"]
  ],
  perfect: [
    ["I have cooked", "She hasn't eaten", "Have you finished my homework"],
    ["Emma has finished lunch", "We haven't called", "Has your brother visited London"],
    ["My parents have already eaten sushi", "Anna has not finished her homework yet", "Have the children ever visited Brazil"]
  ],
  future: [
    ["I will cook", "She won't help", "Will you travel"],
    ["Anna is going to swim", "We won't travel", "Are your friends going to study"],
    ["My parents will play soccer after lunch", "Tom is not going to visit us tomorrow", "Will the children drive"]
  ]
};
function fill(game, sentences) {
  sentences.forEach((sentence, row) => {
    for (const word of split(sentence.toLowerCase())) {
      const id = game.bank.find(id => game.words[id] === word);
      assert.notEqual(id, undefined, `Missing ${word} in ${game.topic}`);
      assert.equal(game.move(id, row), true);
    }
  });
}
assert.equal(Object.keys(topics).length, 6);
for (const [topic, data] of Object.entries(topics)) {
  assert.equal(data.levels.length, 3);
  const game = new Game(topic);
  assert.equal(game.check().complete, false);
  assert.equal(game.checks, 0);
  assert.equal(game.next(), false);
  let previousLength = 0;
  for (let level = 0; level < 3; level++) {
    const rows = data.levels[level].seeds.map(split);
    const count = levelWords(level, topic).length;
    assert(count > previousLength, `Gentle progression: ${topic}`);
    previousLength = count;
    if (!level) assert(count <= (topic === "perfect" ? 11 : 10));
    assert.deepEqual(checkLevel(level, rows, topic), { complete: true, results: [true, true, true] }, `${topic} ${level}`);
    assert.deepEqual(checkLevel(level, alternatives[topic][level].map(split), topic), { complete: true, results: [true, true, true] }, `Alternative ${topic} ${level}`);
    assert.equal(checkLevel(level, [rows[0].slice(1), rows[1], rows[2]], topic).complete, false);
    assert.equal(checkLevel(level, [rows[0].concat("extra"), rows[1], rows[2]], topic).complete, false);
    assert.equal(game.level, level);
    fill(game, alternatives[topic][level]);
    assert.equal(game.bank.length, 0);
    assert.equal(new Set(game.rows.flat()).size, count);
    assert.deepEqual(game.check().results, [true, true, true]);
    assert.equal(game.move(game.rows[0][0], "bank"), false);
    assert.equal(game.check().locked, true);
    if (level < 2) { assert.equal(game.next(), true); assert.equal(game.checks, 0); }
  }
  assert.equal(game.status, "complete");
  assert.equal(game.next(), false);
  const failed = new Game(topic);
  const seeds = data.levels[0].seeds;
  fill(failed, [seeds[1], seeds[0], seeds[2]]);
  for (let attempt = 1; attempt <= 3; attempt++) {
    assert.deepEqual(failed.check().results, [false, false, true]);
    assert.equal(failed.checks, attempt);
  }
  assert.equal(failed.status, "failed");
  assert.equal(failed.check().locked, true);
  assert.equal(failed.next(), false);
  failed.clear();
  assert.equal(failed.bank.length, 0);
  failed.load();
  assert.equal(failed.topic, topic);
  assert.equal(failed.checks, 0);
  fill(failed, [seeds[1], seeds[0], seeds[2]]);
  failed.check(); failed.check(); failed.clear();
  assert.equal(failed.checks, 2);
  assert.equal(failed.results, null);
  fill(failed, seeds);
  failed.check();
  assert.equal(failed.status, "passed");
  assert.equal(failed.checks, 3);
}
for (const [sentence, kind, topic] of [
  ["I'm Mary", "affirmative", "be"], ["She isn\u2019t tired", "negative", "be"],
  ["Where does your brother work", "question", "present"],
  ["I've finished", "affirmative", "perfect"], ["She's cooked", "affirmative", "perfect"],
  ["She hasn't eaten yet", "negative", "perfect"], ["Haven't you visited Brazil", "question", "perfect"],
  ["Aren't you ready", "question", "be"], ["They aren't sleeping", "negative", "continuous"],
  ["She doesn't cook", "negative", "present"], ["Didn't Tom call", "question", "past"],
  ["She won't drive", "negative", "future"], ["She's going to swim", "affirmative", "future"],
  ["I'll cook", "affirmative", "future"], ["Emma and Lucas are cooking", "affirmative", "continuous"]
]) assert.equal(checkSentence(split(sentence), kind, topic), true, sentence);
for (const [sentence, kind, topic] of [
  ["I is Mary", "affirmative", "be"], ["She aren't tired", "negative", "be"],
  ["Where your brother does work", "question", "present"],
  ["Where does your brother works", "question", "present"],
  ["Where do your brother work", "question", "present"],
  ["She have eaten", "affirmative", "perfect"], ["Has you finished", "question", "perfect"],
  ["She has eat", "affirmative", "perfect"], ["She has lunch", "affirmative", "perfect"],
  ["She cooked", "affirmative", "perfect"], ["She has cooked", "affirmative", "present"],
  ["She doesn't swims", "negative", "present"], ["Does you cook", "question", "present"],
  ["He didn't watched TV", "negative", "past"], ["Did Sofia visited London", "question", "past"],
  ["Emma and Lucas is cooking", "affirmative", "continuous"], ["She is cook", "affirmative", "continuous"],
  ["Anna is going swim", "affirmative", "future"], ["Will she cooks", "question", "future"],
  ["She is reading", "affirmative", "be"], ["She is happy", "affirmative", "continuous"],
  ["I cook", "affirmative", "future"], ["I cooked", "affirmative", "present"]
]) assert.equal(checkSentence(split(sentence), kind, topic), false, sentence);
assert.equal(displayWord("mary"), "Mary");
assert.equal(displayWord("tv"), "TV");
assert.equal(displayWord("i"), "I");
assert.throws(() => new Game("mixed"));
const movement = new Game();
const [a, b, c] = movement.bank;
movement.move(a, 0); movement.move(b, 0); movement.move(c, 0, a);
assert.deepEqual(movement.rows[0], [c, a, b]);
movement.move(b, 0, c);
assert.deepEqual(movement.rows[0], [b, c, a]);
movement.move(a, 1); movement.move(c, "bank");
assert.equal(movement.move(999, 0), false);
assert.equal(movement.move(b, 5), false);
assert.equal(new Set([movement.bank, ...movement.rows].flat()).size, movement.words.length);
const base = path.resolve(__dirname, "..");
const page = fs.readFileSync(path.join(base, "unscramble-the-ramble.html"), "utf8");
for (const match of page.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (!match[1].startsWith("https:")) assert(fs.existsSync(path.join(base, match[1].split("#")[0])), match[1]);
}
const ui = fs.readFileSync(path.join(base, "ramble.js"), "utf8");
for (const match of ui.matchAll(/find\("([a-z-]+)"\)/g)) assert(page.includes(`data-ramble-${match[1]}`), match[1]);
for (const topic of Object.keys(topics)) assert(page.includes(`data-ramble-topic="${topic}"`));
assert(page.includes('data-ramble-game aria-label="Unscramble the Ramble game" hidden'));
assert(fs.readFileSync(path.join(base, "index.html"), "utf8").includes('href="unscramble-the-ramble.html"'));
console.log("PASS: 6 topics, 18 levels, 54 model sentences and 54 alternatives; contractions, names, topic isolation, agreement, inventory, movement, attempts, retry, progression, links and chooser markup.");
