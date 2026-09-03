const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const base = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(base, "four-tos-and-two-fors.html"), "utf8");
const script = fs.readFileSync(path.join(base, "script.js"), "utf8");
const styles = fs.readFileSync(path.join(base, "styles.css"), "utf8");

assert(html.includes("Machine 42"));
assert(html.includes("data-to-for-machine"));
assert(html.includes("data-to-for-level"));
assert(html.includes("data-to-for-lives"));
assert.equal((html.match(/data-to-for-power-segment/g) || []).length, 6);
assert(html.includes("Power all 6 parts of Machine 42 to advance automatically."));

for (const behavior of [
  "const updateMachine = (correctCount = 0, complete = false)",
  'segment.classList.toggle("is-powered", index < safeCount)',
  'life.classList.toggle("is-spent", index >= checksLeft)',
  "updateMachine(correctCount, correctCount === 6)",
  "levelTransitionTimer = window.setTimeout(() => loadNextParagraph(true), 1800)",
  "loadNextParagraph(false)"
]) assert(script.includes(behavior), behavior);

for (const selector of [
  ".to-for-game-dashboard",
  ".to-for-machine",
  ".machine-power-grid span.is-powered",
  ".to-for-machine.is-complete",
  ".to-for-lives span.is-spent",
  "@keyframes machine-power-up"
]) assert(styles.includes(selector), selector);

console.log("PASS: Machine 42 has six power cells, three lives, level progression, reset safety, and automatic advancement after 6/6.");
