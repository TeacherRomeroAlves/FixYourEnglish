const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const source = fs.readFileSync(path.join(__dirname, "../ramble.js"), "utf8");
const messageCode = source.slice(source.indexOf('  let shareMessage ='), source.indexOf("  function render"));
const handlerCode = source.slice(source.indexOf('  find("share").addEventListener'), source.lastIndexOf("  render();"));

function setup(navigator = {}, status = "complete", topic = "be") {
  const nodes = {};
  const game = { status, topic };
  const find = key => nodes[key] ||= {
    hidden: true, disabled: false, textContent: "", value: "", listeners: {},
    addEventListener(event, handler) { this.listeners[event] = handler; },
    focus() { this.focused = true; },
    select() { this.selected = true; },
    setSelectionRange(start, end) { this.selection = [start, end]; }
  };
  vm.runInNewContext(messageCode + "updateShareMessage();" + handlerCode, { find, game, navigator, topics: require("../ramble-engine.js").topics });
  return { find, game };
}

(async () => {
  const fallback = setup();
  await fallback.find("share").listeners.click();
  assert.equal(fallback.find("share-options").hidden, false);
  const message = fallback.find("share-message").value;
  assert(message.includes("\u{1F389}") && message.includes("\u{1F9E9}"));
  assert(message.includes("All 3 levels complete"));
  assert(message.includes("Verb to Be"));
  for (const [topic, data] of Object.entries(require("../ramble-engine.js").topics)) {
    const practice = setup({}, "complete", topic);
    await practice.find("share").listeners.click();
    assert(practice.find("share-message").value.includes(data.label));
  }
  assert(message.includes("https://improveyourenglish.vercel.app/unscramble-the-ramble.html"));
  assert.equal(new URL(fallback.find("whatsapp").href).searchParams.get("text"), message);
  await fallback.find("copy").listeners.click();
  assert.equal(fallback.find("share-message").selected, true);
  assert.deepEqual(fallback.find("share-message").selection, [0, message.length]);

  let shared, copied;
  const native = setup({ share: async payload => { shared = payload; }, clipboard: { writeText: async text => { copied = text; } } });
  await native.find("share").listeners.click();
  assert.equal(shared.text, message);
  assert.equal(native.find("share").disabled, false);
  await native.find("copy").listeners.click();
  assert.equal(copied, message);
  assert(native.find("share-feedback").textContent.includes("Message copied"));

  for (const name of ["NotAllowedError", "AbortError"]) {
    const denied = setup({ share: async () => { throw Object.assign(new Error(), { name }); } });
    await denied.find("share").listeners.click();
    assert.equal(denied.find("share-options").hidden, false);
    assert.equal(denied.find("share").disabled, false);
    assert(denied.find("share-feedback").textContent.includes("WhatsApp"));
  }
  const clipboardDenied = setup({ clipboard: { writeText: async () => { throw new Error("Denied"); } } });
  await clipboardDenied.find("copy").listeners.click();
  assert.equal(clipboardDenied.find("share-message").selected, true);

  for (const status of ["playing", "passed", "failed"]) {
    const unfinished = setup({ share: async () => assert.fail("Cannot share before completion") }, status);
    await unfinished.find("share").listeners.click();
    assert.equal(unfinished.find("share-options").hidden, true);
  }
  assert(source.includes('find("share").hidden = game.status !== "complete"'));
  console.log("PASS: completion guard, celebratory message, public URL, WhatsApp encoding, native sharing, cancellation, and clipboard fallbacks.");
})().catch(error => { console.error(error); process.exitCode = 1; });
