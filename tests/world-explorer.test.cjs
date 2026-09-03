const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const base = path.resolve(__dirname, "..");
const script = fs.readFileSync(path.join(base, "script.js"), "utf8");
const html = fs.readFileSync(path.join(base, "to-have-or-there-to-be.html"), "utf8");
const styles = fs.readFileSync(path.join(base, "styles.css"), "utf8");
const bankMatch = script.match(/const worldStops = (\[[\s\S]*?\n  \]);\n\n  const list = haveThereGame/);

assert(bankMatch, "World Explorer destination bank");
const stops = Function(`"use strict"; return ${bankMatch[1]};`)();
assert.equal(stops.length, 10);
assert.equal(new Set(stops.map((stop) => stop.name)).size, stops.length);

stops.forEach((stop) => {
  assert(stop.name && stop.region && stop.icon && stop.intro, stop.name);
  assert.equal(stop.facts.length, 3, `${stop.name} fact count`);
  stop.facts.forEach((fact) => {
    assert(fact.options.includes(fact.answer), `${stop.name}: ${fact.answer}`);
    assert(fact.options.length >= 5, `${stop.name} option count`);
  });
});

const answers = stops.flatMap((stop) => stop.facts.map((fact) => fact.answer));
assert(answers.some((answer) => /n't|aren't|isn't/.test(answer)), "negative structures");
assert(answers.some((answer) => /^(Do|Does|Is|Are|Was|Were)/.test(answer)), "question structures");
assert(answers.some((answer) => /^there/i.test(answer)), "there to be structures");
assert(answers.some((answer) => /have|has|had/i.test(answer)), "have structures");

for (const hook of ["data-world-stop-name", "data-world-stop-region", "data-world-stop-intro", "data-have-there-share"]) {
  assert(html.includes(hook), hook);
}
for (const behavior of ["destinationQueue", "currentStop.facts", "navigator.share", "navigator.clipboard.writeText", "I explored ${currentStop.name}"]) {
  assert(script.includes(behavior), behavior);
}
for (const selector of [".world-stop-card", ".world-stop-icon", ".have-there-item::before", "[data-have-there-share]:disabled"]) {
  assert(styles.includes(selector), selector);
}

console.log("PASS: World Explorer has 10 randomized geographic stops, 3 coherent facts each, grammar variety, destination feedback, and share support.");
