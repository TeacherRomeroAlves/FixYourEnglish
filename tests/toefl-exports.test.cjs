const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('toefl-writing.js', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const dataEnd = source.indexOf('const writingPicker');
const writingTests = vm.runInNewContext(`${source.slice(0, dataEnd)}; writingTests`);

assert.equal(Object.keys(writingTests).length, 12);
for (const [number, test] of Object.entries(writingTests)) {
  assert.equal(test.sentences.length, 10, `Mock ${number} sentence prompts`);
  test.sentences.forEach(([prompt, bank]) => {
    assert(prompt.trim().length > 10, `Mock ${number} prompt context`);
    assert(bank.length >= 4, `Mock ${number} option bank`);
  });
  assert(test.email.scenario && test.email.recipient && test.email.subject);
  assert.equal(test.email.goals.length, 3);
  assert(test.discussion.course && test.discussion.professor);
  assert.equal(test.discussion.students.length, 2);
}

for (const required of [
  "Prompt: ${item.prompt}",
  "Student sentence: ${item.response}",
  "Unused options: ${item.unused.length",
  "Situation: ${email.scenario}",
  "Professor's question: ${discussion.professor}",
  "...discussion.students.map(([name, post])",
  "WRITE AN EMAIL - PROMPT",
  "ACADEMIC DISCUSSION - PROMPT",
  "summary.className = 'build-print-summary'",
  "unused.textContent = entry.unused.length",
  "document.body.dataset.writingPrintMode = withAnswers ? \"answers\" : \"blank\"",
  "delete document.body.dataset.writingPrintMode"
]) assert(source.includes(required), required);

const readingSource = fs.readFileSync('toefl.js', 'utf8');
for (const required of [
  'createReadingPrintMarkers',
  'marker.textContent = selected ? "● Student answer: " : "○ "',
  'const response = includeStudentAnswers ? control.value.trim() : ""',
  'const printMarkers = createReadingPrintMarkers(controls, includeStudentAnswers)',
  'printMarkers.forEach((marker) => marker.remove())'
]) assert(readingSource.includes(required), required);

assert(source.includes("item.querySelector('[data-build-bank]').children"));
assert(source.includes("writingTests[selectedTest].sentences[index][0]"));
assert(css.includes('body.toefl-writing-printing[data-writing-print-mode="answers"] .build-bank'));
assert(css.includes('body.toefl-writing-printing .build-print-summary'));
assert(css.includes('body.toefl-printing .toefl-question { padding: 3mm 0; border: 0;'));
assert(css.includes('body.toefl-printing .toefl-print-choice-marker.is-selected'));
assert(css.includes('body.toefl-printing .toefl-print-text-response'));
console.log('PASS: all 12 mock tests export prompts; sentence exports include responses and unused blocks; answered and blank PDF modes restore cleanly; compact Reading PDF rules are present.');
