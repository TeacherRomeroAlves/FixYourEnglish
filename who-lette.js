(function () {
  "use strict";
  const root = document.querySelector("[data-who-lette]");
  const bank = window.WhoLetteData;
  if (!root || !bank) return;
  const $ = (selector) => root.querySelector(selector);
  const state = { celebrity: null, questionsUsed: 0, exampleUsed: false, round: 1, shuffleTimer: null };
  const stages = ["[data-spin-stage]", "[data-question-stage]", "[data-result]"];

  function showStage(selector) {
    stages.forEach((item) => { $(item).hidden = item !== selector; });
  }
  function normalize(value) { return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim(); }
  function renderRows() {
    $("[data-question-list]").innerHTML = Array.from({length: 6}, (_, index) => `<label class="wholet-question-row"><b>${index + 1}</b><input type="text" data-question-input="${index}" placeholder="Type the question asked"><input type="text" data-answer-input="${index}" placeholder="Note Player A's answer"></label>`).join("");
  }
  function updateQuestionCount() {
    const used = new Set();
    root.querySelectorAll("[data-question-input]").forEach((input) => { if (input.value.trim()) used.add(input.dataset.questionInput); });
    state.questionsUsed = used.size;
    $("[data-used]").textContent = state.questionsUsed;
  }
  function resetRound() {
    clearInterval(state.shuffleTimer);
    state.celebrity = null;
    state.questionsUsed = 0;
    state.exampleUsed = false;
    $("[data-used]").textContent = "0";
    $("[data-example-output]").textContent = "";
    $("[data-example]").disabled = false;
    $("[data-guess]").value = "";
    renderRows();
    showStage("[data-spin-stage]");
  }
  function spin() {
    const card = $("[data-flip-card]");
    const face = $("[data-shuffle-face]");
    const button = $("[data-spin]");
    button.disabled = true;
    button.textContent = "Shuffling...";
    state.celebrity = bank.celebrities[Math.floor(Math.random() * bank.celebrities.length)];
    let flips = 0;
    clearInterval(state.shuffleTimer);
    state.shuffleTimer = window.setInterval(() => {
      flips += 1;
      card.classList.toggle("is-flipped");
      face.innerHTML = flips % 2 ? "&#128105;" : "&#128104;";
      if (flips >= 14) {
        clearInterval(state.shuffleTimer);
        window.setTimeout(prepareMystery, 180);
      }
    }, 105);
  }
  function prepareMystery() {
    const celebrity = state.celebrity;
    $("[data-spin]").disabled = false;
    $("[data-spin]").textContent = "Shuffle the Cards";
    $("[data-public-avatar]").innerHTML = celebrity.emoji;
    $("[data-pronoun]").textContent = celebrity.gender === "man" ? "he" : "she";
    $("[data-profile]").hidden = true;
    fillProfile();
    showStage("[data-question-stage]");
  }
  function fillProfile() {
    const celebrity = state.celebrity;
    $("[data-profile-avatar]").innerHTML = celebrity.emoji;
    $("[data-profile-name]").textContent = celebrity.name;
    $("[data-profile-field]").textContent = celebrity.field;
    $("[data-profile-facts]").innerHTML = celebrity.facts.map((fact) => `<li>${fact}</li>`).join("");
  }
  function hideProfile() {
    $("[data-profile]").hidden = true;
    $("[data-show-profile]").focus();
  }
  function useExample() {
    if (state.exampleUsed) return;
    const empty = [...root.querySelectorAll("[data-question-input]")].find((input) => !input.value.trim());
    if (!empty) { $("[data-example-output]").textContent = "All six question spaces are already being used."; return; }
    const sample = bank.sampleQuestions[Math.floor(Math.random() * bank.sampleQuestions.length)];
    empty.value = sample;
    state.exampleUsed = true;
    $("[data-example]").disabled = true;
    $("[data-example-output]").textContent = `Example used: ${sample}`;
    updateQuestionCount();
  }
  function submitGuess() {
    const guess = normalize($("[data-guess]").value);
    if (!guess) { $("[data-guess]").focus(); return; }
    const correct = state.celebrity.aliases.some((alias) => normalize(alias) === guess);
    const count = state.questionsUsed;
    $("[data-result-icon]").textContent = correct ? "🎉" : "🔎";
    $("[data-result-title]").textContent = correct ? `Solved in ${count} question${count === 1 ? "" : "s"}!` : "The mystery continues...";
    $("[data-result-copy]").textContent = correct ? "Excellent questioning. You identified the mystery celebrity." : `That was your final chance. You used ${count} question${count === 1 ? "" : "s"} before making the guess.`;
    $("[data-result-avatar]").innerHTML = state.celebrity.emoji;
    $("[data-result-name]").textContent = state.celebrity.name;
    $("[data-result-field]").textContent = state.celebrity.field;
    showStage("[data-result]");
  }

  $("[data-start]").addEventListener("click", () => { $("[data-intro]").hidden = true; $("[data-game]").hidden = false; resetRound(); });
  $("[data-spin]").addEventListener("click", spin);
  $("[data-show-profile]").addEventListener("click", () => { $("[data-profile]").hidden = false; $("[data-profile]").scrollIntoView({behavior:"smooth", block:"center"}); });
  $("[data-hide-profile]").addEventListener("click", hideProfile);
  $("[data-example]").addEventListener("click", useExample);
  $("[data-question-list]").addEventListener("input", updateQuestionCount);
  $("[data-submit-guess]").addEventListener("click", submitGuess);
  $("[data-guess]").addEventListener("keydown", (event) => { if (event.key === "Enter") submitGuess(); });
  $("[data-new-round]").addEventListener("click", () => { state.round += 1; $("[data-round]").textContent = state.round; resetRound(); });
  renderRows();
})();
