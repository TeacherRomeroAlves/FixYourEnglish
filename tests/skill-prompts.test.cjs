const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const base = path.resolve(__dirname, "..");
const script = fs.readFileSync(path.join(base, "script.js"), "utf8");
const styles = fs.readFileSync(path.join(base, "styles.css"), "utf8");
const writing = fs.readFileSync(path.join(base, "writing-practice.html"), "utf8");
const speaking = fs.readFileSync(path.join(base, "speaking-practice.html"), "utf8");

assert(writing.includes('class="prompt-text" data-random-prompt'));
assert(speaking.includes('class="prompt-text" data-speaking-prompt'));
assert(script.includes("const highlightFreshPrompt = (prompt) =>"));
assert.equal((script.match(/highlightFreshPrompt\(promptText\)/g) || []).length, 2);

for (const rule of [
  ".writing-prompt-shell .prompt-card",
  ".speaking-shell .prompt-card",
  ".writing-prompt-shell .prompt-text",
  ".speaking-shell .prompt-text",
  ".prompt-text.is-new-prompt",
  "@keyframes fresh-prompt-arrival",
  "font-size: clamp(1.38rem, 2.5vw, 1.8rem)",
  "color: #fffdf5"
]) assert(styles.includes(rule), rule);

console.log("PASS: Writing and Speaking prompts use larger contrasting cards and animate each newly generated prompt.");
