(function () {
  "use strict";
  if (!window.VocabularyVoyage) return;
  const { VoyageGame } = window.VocabularyVoyage;
  const $ = selector => document.querySelector(selector);
  const start = $("[data-voyage-start]");
  const gameView = $("[data-voyage-game]");
  const finish = $("[data-voyage-finish]");
  const answer = $("[data-voyage-answer]");
  const clues = $("[data-voyage-clues]");
  const feedback = $("[data-voyage-feedback]");
  let game;

  const renderRoute = () => {
    $("[data-voyage-route]").innerHTML = game.stops.map((stop, index) => `<span class="${index < game.completed.length ? "is-stamped" : index === game.stopIndex ? "is-current" : ""}">${index < game.completed.length ? stop.flag : index + 1}</span>`).join("");
  };

  const renderMask = () => {
    $("[data-voyage-mask]").innerHTML = game.mask().map(letter => `<span class="${letter === "_" ? "" : "is-revealed"}">${letter}</span>`).join("");
  };

  const renderStop = () => {
    const stop = game.current;
    $("[data-voyage-progress]").textContent = `Stop ${game.stopIndex + 1} of 10`;
    $("[data-voyage-total]").textContent = game.total.toLocaleString("en-US");
    $("[data-voyage-flag]").innerHTML = `<span aria-hidden="true">${stop.flag}</span><small>${stop.destination}</small>`;
    $("[data-voyage-country]").textContent = stop.destination;
    $("[data-voyage-language]").textContent = stop.language;
    $("[data-voyage-letter-count]").textContent = `${stop.word.length} letters`;
    clues.innerHTML = "";
    feedback.textContent = "Look at the flag and language, then make your first guess or request a clue.";
    answer.value = "";
    answer.disabled = false;
    $("[data-voyage-form] button").disabled = false;
    $("[data-voyage-arrival]").hidden = true;
    document.querySelectorAll("[data-clue]").forEach(button => { button.disabled = false; button.classList.remove("is-used"); });
    renderMask();
    renderRoute();
    window.setTimeout(() => answer.focus(), 100);
  };

  const begin = () => {
    game = new VoyageGame();
    start.hidden = true;
    finish.hidden = true;
    gameView.hidden = false;
    renderStop();
    gameView.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clueContent = type => {
    const stop = game.current;
    if (type === "meaning") return ["Current meaning", stop.meaning];
    if (type === "context") return ["Use it in English", stop.context];
    if (type === "original") return ["Original meaning", stop.original];
    return null;
  };

  document.querySelectorAll("[data-clue]").forEach(button => button.addEventListener("click", () => {
    const type = button.dataset.clue;
    if (!game.clue(type)) return;
    $("[data-voyage-total]").textContent = game.total.toLocaleString("en-US");
    if (game.over) { showFinish("points"); return; }
    if (type === "letter") {
      renderMask();
      feedback.textContent = "One letter has been stamped onto your boarding pass.";
      if (game.mask().filter(letter => letter === "_").length <= 2) button.disabled = true;
      return;
    }
    const [title, copy] = clueContent(type);
    clues.insertAdjacentHTML("beforeend", `<div><span>${title}</span><p>${copy}</p></div>`);
    button.disabled = true;
    button.classList.add("is-used");
  }));

  $("[data-voyage-form]").addEventListener("submit", event => {
    event.preventDefault();
    if (!answer.value.trim()) { feedback.textContent = "Type a word before checking your passport."; return; }
    const outcome = game.guess(answer.value);
    $("[data-voyage-total]").textContent = game.total.toLocaleString("en-US");
    if (!outcome.correct) {
      if (outcome.gameOver) { showFinish("points"); return; }
      feedback.innerHTML = `<strong>Not this word yet.</strong> Five points were deducted. Try another spelling or unlock a clue.`;
      answer.select();
      return;
    }
    answer.disabled = true;
    $("[data-voyage-form] button").disabled = true;
    document.querySelectorAll("[data-clue]").forEach(button => { button.disabled = true; });
    game.revealed = new Set([...game.current.word].map((_, index) => index));
    renderMask();
    $("[data-arrival-flag]").textContent = outcome.result.flag;
    $("[data-arrival-country]").textContent = outcome.result.destination;
    $("[data-arrival-word]").textContent = outcome.result.word.toUpperCase();
    $("[data-arrival-summary]").textContent = `Passport stamp collected. ${outcome.result.meaning}`;
    $("[data-voyage-next]").textContent = game.completed.length === 10 ? "Complete My Voyage" : "Fly to the Next Stop";
    $("[data-voyage-arrival]").hidden = false;
    feedback.textContent = "Correct! Your passport has received a new stamp.";
    renderRoute();
  });

  const showFinish = (reason = "complete") => {
    gameView.hidden = true;
    finish.hidden = false;
    const countries = game.completed.map(stop => stop.destination);
    const complete = reason === "complete";
    $("[data-voyage-finish-kicker]").textContent = complete ? "Journey complete" : reason === "points" ? "Travel budget exhausted" : "Voyage paused";
    $("[data-voyage-finish-title]").textContent = complete ? "You traveled through ten words!" : `You collected ${countries.length} passport stamp${countries.length === 1 ? "" : "s"}.`;
    $("[data-voyage-final-copy]").textContent = countries.length ? `Your English passport includes words connected to ${countries.join(", ")}.` : "This trip ended before the first word was discovered. Start another voyage whenever you are ready.";
    $("[data-voyage-final-score]").textContent = game.total;
    $("[data-voyage-final-stamps]").innerHTML = game.completed.map(stop => `<span><b>${stop.flag}</b><small>${stop.destination}</small></span>`).join("");
    finish.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  $("[data-voyage-next]").addEventListener("click", () => {
    game.next();
    if (game.finished) showFinish("complete"); else renderStop();
  });

  const shareText = () => {
    const route = game.completed.length ? game.completed.map(stop => `${stop.flag} ${stop.destination}`).join(" · ") : "My passport is still waiting for its first stamp.";
    const headline = game.completed.length === 10 ? "🌍 VOCABULARY VOYAGE COMPLETE! ✈️" : "🧳 MY VOCABULARY VOYAGE SO FAR ✈️";
    return `${headline}\n\nI discovered ${game.completed.length} of 10 traveling English words and finished with ${game.total}/1,000 points!\n\nMy route: ${route}\n\nCan you complete the voyage too?\n${new URL("vocabulary-voyage.html", window.location.href).href}`;
  };

  $("[data-voyage-share]").addEventListener("click", async () => {
    const text = shareText();
    const status = $("[data-voyage-share-feedback]");
    try {
      if (navigator.share) await navigator.share({ title: "Vocabulary Voyage", text });
      else if (navigator.clipboard) { await navigator.clipboard.writeText(text); status.textContent = "Your voyage result was copied. Paste it into WhatsApp or another app."; }
      else { window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener"); }
    } catch (error) {
      if (error.name !== "AbortError") window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    }
  });

  $("[data-voyage-begin]").addEventListener("click", begin);
  $("[data-voyage-restart]").addEventListener("click", begin);
  $("[data-voyage-stop]").addEventListener("click", () => { game.stop(); showFinish("stopped"); });
})();
