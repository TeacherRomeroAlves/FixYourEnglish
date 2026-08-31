(function () {
  "use strict";
  const root = document.querySelector("[data-ramble-game]");
  if (!root) return;
  const { topics, kinds, displayWord, Game } = window.Ramble;
  let game = new Game();
  let selected = 0;
  let dragged = null;
  const find = key => root.querySelector(`[data-ramble-${key}]`);
  const areas = [...root.querySelectorAll("[data-ramble-destination]")];
  const feedback = find("feedback");
  const destination = area => area.dataset.rambleDestination === "bank" ? "bank" : Number(area.dataset.rambleDestination);
  const label = index => kinds[index][0].toUpperCase() + kinds[index].slice(1);
  const chooser = document.querySelector("[data-ramble-chooser]");
  let shareMessage = "";
  function updateShareMessage() {
    shareMessage = [
    "\u{1F389} I finished Unscramble the Ramble! \u{1F9E9}",
    `Topic: ${topics[game.topic].label}. All 3 levels complete!`,
    "One word bank, three sentences, no words left behind!",
    "Can you do it too? Take the challenge!",
    "https://improveyourenglish.vercel.app/unscramble-the-ramble.html"
  ].join("\n\n");
  find("share-message").value = shareMessage;
  find("whatsapp").href = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
  }

  function render(focusId = null) {
    const levels = topics[game.topic].levels;
    const playing = game.status === "playing";
    find("level").textContent = `${topics[game.topic].label} - Level ${game.level + 1} of 3`;
    find("title").textContent = levels[game.level].name;
    find("focus").textContent = levels[game.level].focus;
    find("checks").textContent = `${3 - game.checks} / 3`;
    find("remaining").textContent = `${game.bank.length} / ${game.words.length} words left`;
    find("selection").textContent = playing ? `Click words to add them to: ${label(selected)}.` : "This round is finished. Your sentences remain below.";
    root.querySelectorAll("[data-ramble-step]").forEach((step, i) => {
      step.querySelector("span").textContent = levels[i].name;
      step.classList.toggle("is-current", i === game.level);
      step.classList.toggle("is-complete", i < game.level || game.status === "complete");
      if (i === game.level) step.setAttribute("aria-current", "step");
      else step.removeAttribute("aria-current");
    });
    root.querySelectorAll("[data-ramble-select]").forEach((button, i) => {
      button.setAttribute("aria-pressed", String(i === selected));
      button.disabled = !playing;
      const row = button.closest("[data-ramble-row]");
      row.classList.toggle("is-selected", i === selected && playing);
      const result = row.querySelector("[data-ramble-result]");
      result.textContent = game.results ? (game.results[i] ? "Correct" : "Incorrect") : "";
      row.classList.toggle("is-correct", Boolean(game.results?.[i]));
      row.classList.toggle("is-incorrect", game.results?.[i] === false);
    });
    for (const area of areas) {
      const dest = destination(area);
      const ids = dest === "bank" ? game.bank : game.rows[dest];
      area.replaceChildren();
      if (!ids.length) {
        const empty = document.createElement("span");
        empty.className = "ramble-empty";
        empty.textContent = dest === "bank" ? "All words placed. Ready to check?" : "Select this row, then click words. Or drop them here.";
        area.append(empty);
      }
      ids.forEach((id, position) => {
        const button = document.createElement("button");
        const word = game.words[id];
        button.type = "button";
        button.className = "word-token ramble-token";
        button.dataset.rambleToken = String(id);
        button.draggable = playing;
        button.disabled = !playing;
        const displayed = displayWord(word);
        button.textContent = dest !== "bank" && position === 0 ? displayed[0].toUpperCase() + displayed.slice(1) : displayed;
        button.setAttribute("aria-label", `${button.textContent}: ${dest === "bank" ? "add to " + label(selected) : "return to word bank"}`);
        button.title = dest === "bank" ? "Click to place in selected row" : "Click to return; drag or use arrow keys to reorder";
        area.append(button);
      });
    }
    find("check").disabled = !playing;
    find("clear").disabled = !playing;
    find("outcome").hidden = playing;
    find("next").hidden = game.status !== "passed";
    find("retry").hidden = game.status !== "failed";
    find("replay").hidden = game.status !== "complete";
    find("share").hidden = game.status !== "complete";
    if (game.status === "complete") updateShareMessage();
    if (game.status !== "complete") {
      find("share-options").hidden = true;
      find("share-feedback").textContent = "";
    }
    if (!playing) {
      find("outcome-title").textContent = game.status === "complete" ? "You unscrambled the ramble!" : game.status === "passed" ? "Three sentences. Nicely done!" : "Keep practicing!";
      find("outcome-copy").textContent = game.status === "complete" ? `All three ${topics[game.topic].label} levels complete. Try another topic when you are ready!` : game.status === "passed" ? "The next level is unlocked. Continue when you are ready." : "You used all three checks. Retry this level with a fresh word bank and three new checks.";
      find("next").textContent = `Continue to Level ${game.level + 2}`;
    }
    if (focusId !== null) root.querySelector(`[data-ramble-token="${focusId}"]`)?.focus({ preventScroll: true });
  }

  function moved(id) {
    feedback.textContent = "Words updated. Check when all three sentences are ready.";
    render(id);
  }
  root.addEventListener("click", event => {
    const select = event.target.closest("[data-ramble-select]");
    if (select && game.status === "playing") {
      selected = Number(select.dataset.rambleSelect);
      render();
      return;
    }
    const token = event.target.closest("[data-ramble-token]");
    if (token) {
      const id = Number(token.dataset.rambleToken);
      if (game.move(id, game.bank.includes(id) ? selected : "bank")) moved(id);
      return;
    }
    const row = event.target.closest("[data-ramble-row]");
    if (row && game.status === "playing") { selected = Number(row.dataset.rambleRow); render(); }
  });
  root.addEventListener("keydown", event => {
    const token = event.target.closest("[data-ramble-token]");
    if (!token || !["ArrowLeft", "ArrowRight"].includes(event.key) || game.status !== "playing") return;
    event.preventDefault();
    const dest = destination(token.closest("[data-ramble-destination]"));
    const ids = dest === "bank" ? game.bank : game.rows[dest];
    const id = Number(token.dataset.rambleToken);
    const index = ids.indexOf(id);
    const next = index + (event.key === "ArrowLeft" ? -1 : 1);
    if (next < 0 || next >= ids.length) return;
    const before = event.key === "ArrowLeft" ? ids[next] : (ids[next + 1] ?? null);
    if (game.move(id, dest, before)) moved(id);
  });
  root.addEventListener("dragstart", event => {
    const token = event.target.closest("[data-ramble-token]");
    if (!token || game.status !== "playing") { event.preventDefault(); return; }
    dragged = Number(token.dataset.rambleToken);
    event.dataTransfer.setData("text/plain", String(dragged));
    event.dataTransfer.effectAllowed = "move";
  });
  root.addEventListener("dragover", event => {
    if (dragged === null || game.status !== "playing") return;
    const area = event.target.closest("[data-ramble-destination]");
    if (!area) return;
    event.preventDefault();
    areas.forEach(other => other.classList.toggle("is-drag-over", other === area));
    event.dataTransfer.dropEffect = "move";
  });
  root.addEventListener("drop", event => {
    const area = event.target.closest("[data-ramble-destination]");
    if (!area || dragged === null) return;
    event.preventDefault();
    const dest = destination(area);
    const before = event.target.closest("[data-ramble-token]");
    if (typeof dest === "number") selected = dest;
    const id = dragged;
    dragged = null;
    areas.forEach(other => other.classList.remove("is-drag-over"));
    if (game.move(id, dest, before ? Number(before.dataset.rambleToken) : null)) moved(id);
  });
  root.addEventListener("dragend", () => {
    dragged = null;
    areas.forEach(area => area.classList.remove("is-drag-over"));
  });
  find("clear").addEventListener("click", () => {
    game.clear();
    feedback.textContent = "Words returned to the bank. Your remaining checks have not changed.";
    render();
  });
  find("check").addEventListener("click", () => {
    const outcome = game.check();
    if (outcome.locked) return;
    if (!outcome.complete) {
      feedback.textContent = "Use every block and fill all three rows before checking. No check was used.";
      return;
    }
    render();
    feedback.textContent = kinds.map((_, i) => `${label(i)}: ${game.results[i] ? "correct" : "incorrect"}.`).join(" ") +
      (game.status === "playing" ? ` Keep trying! ${3 - game.checks} check${game.checks === 2 ? "" : "s"} left.` : "");
    if (game.status !== "playing") {
      const target = game.status === "passed" ? "next" : game.status === "failed" ? "retry" : "replay";
      find(target).focus({ preventScroll: true });
    }
  });
  function startLevel() {
    selected = 0;
    render();
    feedback.textContent = "Take your time. Use all the words before checking.";
    find("title").focus();
  }
  find("next").addEventListener("click", () => { if (game.next()) startLevel(); });
  find("retry").addEventListener("click", () => { if (game.status === "failed") { game.load(); startLevel(); } });
  find("replay").addEventListener("click", () => { if (game.status === "complete") { game = new Game(game.topic); startLevel(); } });
  chooser.querySelectorAll("[data-ramble-topic]").forEach(button => {
    button.addEventListener("click", () => {
      game = new Game(button.dataset.rambleTopic);
      dragged = null;
      chooser.hidden = true;
      root.hidden = false;
      startLevel();
    });
  });
  find("change-topic").addEventListener("click", () => {
    root.hidden = true;
    chooser.hidden = false;
    document.querySelector("[data-ramble-chooser-title]").focus();
  });
  find("share").addEventListener("click", async () => {
    if (game.status !== "complete") return;
    // Keep explicit links available even when native sharing is unsupported or denied.
    find("share-options").hidden = false;
    find("share-feedback").textContent = "Choose WhatsApp, or copy the message to share in another app.";
    if (typeof navigator.share !== "function") return;
    find("share").disabled = true;
    try {
      await navigator.share({ title: "Unscramble the Ramble - Complete!", text: shareMessage });
    } catch (error) {
      if (error.name !== "AbortError") {
        find("share-feedback").textContent = "Your browser could not open sharing. Use WhatsApp or Copy Message below.";
      }
    } finally {
      find("share").disabled = false;
    }
  });
  find("copy").addEventListener("click", async () => {
    if (game.status !== "complete") return;
    try {
      await navigator.clipboard.writeText(shareMessage);
      find("share-feedback").textContent = "Message copied! Paste it into WhatsApp, email, or another app.";
    } catch {
      const message = find("share-message");
      message.focus();
      message.select();
      message.setSelectionRange(0, message.value.length);
      find("share-feedback").textContent = "Automatic copying is unavailable. Copy the selected message, or use Share on WhatsApp.";
    }
  });
  render();
})();
