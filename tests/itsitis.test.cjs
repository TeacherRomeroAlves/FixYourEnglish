const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const situations = require(path.join(root, 'itsitis-data.js'));

assert.equal(situations.length, 26);
assert.equal(new Set(situations.map(item => item.title)).size, 26);
for (const situation of situations) {
  assert.equal(situation.answers.length, 6, `${situation.title} should have six gaps`);
  assert.equal(situation.parts.length, 7, `${situation.title} should have seven text parts`);
  assert.ok(situation.answers.every(answer => ["IT'S", 'IT', 'IS'].includes(answer)));
  for (const answer of ["IT'S", 'IT', 'IS']) assert.ok(situation.answers.filter(value => value === answer).length <= 3, `${situation.title} exceeds the bank inventory for ${answer}`);
  assert.doesNotMatch(situation.parts.join(' '), /\bits\b/i, `${situation.title} should not teach possessive its`);
}
const html = read('itsitis.html');
const script = read('itsitis.js');
assert.match(read('index.html'), /href="itsitis\.html"/);
assert.match(html, /Hello! My name is IT'SITIS/);
assert.match(html, /itsitis-data\.js/);
assert.match(html, /data-day-dot="2"/);
assert.match(script, /slice\(0, 3\)/);
assert.match(script, /\["IT'S", 'IT', 'IS'/);
assert.match(script, /navigator\.share/);
assert.match(read('itsitis.css'), /background-size: cover/);
assert.match(read('styles.css'), /\.games-grid > \.game-card-itsitis \{ grid-column: span 3;/);
for (const set of ['action', 'everyday', 'extra']) for (let number = 1; number <= 9; number++) assert.ok(fs.existsSync(path.join(root, 'assets', `itsitis-${set}-${String(number).padStart(2, '0')}.png`)));
console.log("PASS: IT'SITIS has 26 six-gap stories, a fixed nine-block bank, three randomized weekend days, source artwork, answer checks, and sharing.");
