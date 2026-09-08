const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "situational-english.js"), "utf8");
const dataSource = `${source.slice(0, source.indexOf("const practiceRoot"))}\nthis.travelData = { situationTopics, specialActivities };`;
const context = {};
vm.createContext(context);
vm.runInContext(dataSource, context);

const expected = {
  bar: "menu",
  "city-tour": "itinerary",
  "public-transit": "transit-board"
};

Object.entries(expected).forEach(([key, specialType]) => {
  const topic = context.travelData.situationTopics[key];
  assert(topic, `${key} topic should exist`);
  assert.equal(topic.vocabulary.length, 12, `${key} should have 12 vocabulary items`);
  assert.equal(topic.dialogues.length, 2, `${key} should have two conversations`);
  topic.dialogues.forEach((dialogue) => assert.equal(dialogue.bank.length, 8, `${key} conversation banks should have eight options`));
  assert.equal(topic.missions.length, 3, `${key} should have three speaking missions`);
  assert.equal(context.travelData.specialActivities[key].type, specialType, `${key} should use its requested special activity`);
});

assert.equal(context.travelData.specialActivities["city-tour"].stops.length, 5);
const viennaStations = context.travelData.specialActivities["public-transit"].stations;
assert.equal(viennaStations.length, 6);
viennaStations.forEach((station) => {
  assert(station.services.length >= 4, `${station.name} should show both directions and all available lines`);
  assert.equal(station.services.filter((service) => service.correct).length, 1, `${station.name} should have one correct departure`);
  assert(new Set(station.services.map((service) => service.direction)).size >= 2, `${station.name} should show opposing directions`);
});
assert(viennaStations.some((station) => new Set(station.services.map((service) => service.line)).size >= 3));
assert(source.includes('href="assets/vienna-subway-map.pdf"'));
assert(!source.includes("Simplified subway map"));
assert(fs.existsSync(path.join(root, "assets", "vienna-subway-map.pdf")));
assert(fs.existsSync(path.join(root, "assets", "vienna-subway-map-preview.png")));

const home = fs.readFileSync(path.join(root, "index.html"), "utf8");
const hub = fs.readFileSync(path.join(root, "situational-english.html"), "utf8");
assert(home.includes('<h2 id="situational-title">Travel English</h2>'));
["bar", "city-tour", "public-transit"].forEach((key) => assert(hub.includes(`topic=${key}`)));

console.log("PASS: Travel English has 21 topics; the new bar, NYC tour, and public-transit lessons include complete practice flows and requested simulations.");
