const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { sentences, splitSentence, adjacent, SlidingPuzzle } = require('../sliding-words-engine.js');

assert.equal(sentences.length, 18);
assert.equal(new Set(sentences).size, sentences.length);
sentences.forEach((sentence, index) => {
  assert.equal(splitSentence(sentence).length, 8, `Sentence ${index + 1}`);
  assert(/[.?]$/.test(sentence), `Punctuation ${index + 1}`);
});
assert(sentences.some(sentence => sentence.endsWith('?')));
assert(sentences.some(sentence => /\bnot\b/.test(sentence)));
assert(sentences.some(sentence => /\b(should|can|could|will)\b/i.test(sentence)));
assert(sentences.some(sentence => /\b(has|have)\b/.test(sentence)));

const inversionParity = board => {
  const tiles = board.filter(tile => tile !== null);
  let inversions = 0;
  for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) if (tiles[i] > tiles[j]) inversions++;
  }
  return inversions % 2;
};
const seeded = seed => () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};
for (let seed = 1; seed <= 1000; seed++) {
  const puzzle = new SlidingPuzzle(sentences[seed % sentences.length], seeded(seed));
  assert.equal(puzzle.board.length, 9);
  assert.equal(puzzle.board.filter(tile => tile === null).length, 1);
  assert.equal(new Set(puzzle.board.filter(tile => tile !== null)).size, 8);
  assert.equal(puzzle.isSolved(), false);
  assert.equal(puzzle.moves, 0);
  assert.equal(inversionParity(puzzle.board), 0, `Solvable parity ${seed}`);
  const gap = puzzle.board.indexOf(null);
  assert(puzzle.movablePositions().every(position => adjacent(position, gap)));
  assert([2, 3, 4].includes(puzzle.movablePositions().length));
}

const puzzle = new SlidingPuzzle(sentences[0], seeded(42));
const snapshot = [...puzzle.board];
const legal = puzzle.movablePositions()[0];
assert.equal(puzzle.move(legal), true);
assert.equal(puzzle.moves, 1);
const reverse = snapshot.indexOf(null);
assert.equal(puzzle.move(reverse), true, 'A move can be immediately reversed');
assert.deepEqual(puzzle.board, snapshot, 'Reverse move restores the previous board');
assert.equal(puzzle.moves, 2);
puzzle.reset();
assert.deepEqual(puzzle.board, snapshot);
assert.equal(puzzle.moves, 0);
assert.equal(puzzle.complete, false);
puzzle.board = [...Array(7).keys(), null, 7];
puzzle.moves = 0;
assert.equal(puzzle.move(8), true);
assert.equal(puzzle.isSolved(), true);
assert.equal(puzzle.complete, true);
assert.equal(puzzle.moves, 1);
assert.equal(puzzle.move(7), false);
assert.throws(() => new SlidingPuzzle('This sentence does not have eight words.'));

const base = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(base, 'sliding-words.html'), 'utf8');
const ui = fs.readFileSync(path.join(base, 'sliding-words.js'), 'utf8');
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (!match[1].startsWith('https:')) assert(fs.existsSync(path.join(base, match[1].split('#')[0])), match[1]);
}
for (const hook of ['board', 'moves', 'feedback', 'finish', 'result', 'new', 'reset', 'share', 'play-again']) {
  assert(html.includes(`data-slide-${hook}`), hook);
}
assert(ui.includes('navigator.share'));
assert(ui.includes('navigator.clipboard.writeText'));
assert(ui.includes('const gapElement = target.firstElementChild'));
assert(ui.includes('gapElement.dataset.slidePosition = String(position)'));
assert(!ui.includes('target.firstElementChild.dataset.slidePosition'));
assert(fs.readFileSync(path.join(base, 'index.html'), 'utf8').includes('href="sliding-words.html"'));
console.log('PASS: 18 unique eight-word sentences, 1,000 solvable 3x3 scrambles, reversible moves, reset, completion, page assets, controls, sharing, and homepage link.');
