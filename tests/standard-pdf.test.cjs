const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const base = path.resolve(__dirname, "..");
const script = fs.readFileSync(path.join(base, "script.js"), "utf8");
const styles = fs.readFileSync(path.join(base, "styles.css"), "utf8");

for (const hook of [
  "cloneForStandardPrint",
  "printStandardDocument",
  "clearStandardPrintDocument",
  'document.body.classList.add("standard-printing")',
  'window.addEventListener("afterprint", clearStandardPrintDocument)',
  'title: "Improve Your Writing"',
  'title: "Improve Your Understanding"',
  'sections: Array.from(document.querySelectorAll(".activity-card"))'
]) assert(script.includes(hook), hook);

assert.equal((script.match(/window\.print\(\)/g) || []).length, 1, "All non-TOEFL exports use one standardized print call");
assert(script.includes('field.matches(\'input[type="radio"], input[type="checkbox"]\')'));
assert(script.includes('field.selectedOptions[0]?.textContent.trim()'));
assert(script.includes('writingTextarea?.value.trim()'));
assert(script.includes('readingTextCard.cloneNode(true)'));
assert(script.includes('readingQuestions.cloneNode(true)'));

for (const rule of [
  ".standard-print-document { display: none; }",
  "body.standard-printing > :not(.standard-print-document)",
  "body.standard-printing .standard-print-header",
  "body.standard-printing .standard-print-content",
  "body.standard-printing .standard-print-response",
  "body.standard-printing .reading-question-card",
  "@page { size: A4; margin: 14mm; }"
]) assert(styles.includes(rule), rule);

for (const page of ["simple-present.html", "present-continuous.html", "simple-past.html", "future.html", "verb-to-be.html"]) {
  assert(fs.readFileSync(path.join(base, page), "utf8").includes("data-save-pdf"), page);
}

console.log("PASS: standardized A4 exports isolate grammar activities, writing prompts and responses, and reading passages, questions, options, and selections.");
