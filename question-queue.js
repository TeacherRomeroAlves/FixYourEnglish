(function () {
  "use strict";

  const root = document.querySelector("[data-question-queue]");
  const bank = window.QuestionQueueData;
  if (!root || !bank) return;

  const $ = (selector) => root.querySelector(selector);
  const state = { levelId: "", topicId: "", themeId: "", questions: [], index: 0, speaking: false };
  const levelsEl = $("[data-queue-levels]");
  const topicsEl = $("[data-queue-topics]");
  const continueButton = $("[data-queue-continue]");
  const setup = $("[data-queue-setup]");
  const room = $("[data-queue-room]");
  const player = $("[data-queue-player]");
  const themesEl = $("[data-queue-themes]");
  const numbersEl = $("[data-queue-numbers]");
  const listenButton = $("[data-listen-question]");
  const revealButton = $("[data-reveal-question]");
  const feedback = $("[data-queue-feedback]");
  const speechSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

  function selectCard(container, id, attribute) {
    container.querySelectorAll("button").forEach((button) => {
      const active = button.dataset[attribute] === id;
      button.classList.toggle("is-selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    continueButton.disabled = !(state.levelId && state.topicId);
  }

  function renderSetup() {
    levelsEl.innerHTML = Object.entries(bank.levels).map(([id, level]) => `
      <button class="queue-character-card" type="button" data-level-id="${id}" aria-pressed="false">
        <span class="queue-avatar" aria-hidden="true">${level.icon}</span>
        <span class="queue-character-copy"><strong>${level.name}, ${level.age}</strong><b>${level.label}</b><small>${level.description}</small></span>
      </button>`).join("");
    topicsEl.innerHTML = Object.entries(bank.topics).map(([id, topic]) => `
      <button class="queue-topic-card" type="button" data-topic-id="${id}" aria-pressed="false">
        <span>${topic.symbol}</span><strong>${topic.name}</strong><small>${topic.description}</small>
      </button>`).join("");
  }

  function stopSpeech() {
    if (speechSupported) window.speechSynthesis.cancel();
    state.speaking = false;
  }

  function renderCharacter(target, compact) {
    const level = bank.levels[state.levelId];
    target.innerHTML = `<span class="queue-avatar${compact ? " is-compact" : ""}" aria-hidden="true">${level.icon}</span><div><strong>${level.name}</strong><small>${level.label}</small></div>`;
  }

  function enterRoom() {
    stopSpeech();
    const topic = bank.topics[state.topicId];
    setup.hidden = true;
    room.hidden = false;
    player.hidden = true;
    $("[data-room-title]").textContent = topic.name;
    $("[data-room-description]").textContent = topic.description;
    renderCharacter($("[data-active-character]"), true);
    renderCharacter($("[data-speaker-character]"), false);
    themesEl.innerHTML = topic.themes.map((theme) => `
      <button class="queue-theme-card" type="button" data-theme-id="${theme.id}" aria-pressed="false">
        <span aria-hidden="true">${theme.icon}</span><strong>${theme.name}</strong><small>4 questions</small>
      </button>`).join("");
  }

  function chooseTheme(themeId) {
    stopSpeech();
    state.themeId = themeId;
    state.index = 0;
    state.questions = bank.shuffle(bank.getQuestions(state.topicId, themeId, state.levelId)).map((text) => ({ text, listens: 0, revealed: false }));
    themesEl.querySelectorAll("button").forEach((button) => {
      const active = button.dataset.themeId === themeId;
      button.classList.toggle("is-selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    player.hidden = false;
    renderQuestion();
    player.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderQuestion() {
    stopSpeech();
    const question = state.questions[state.index];
    const theme = bank.topics[state.topicId].themes.find((item) => item.id === state.themeId);
    $("[data-queue-progress]").textContent = `${state.index + 1} of ${state.questions.length}`;
    $("[data-question-theme]").textContent = `${theme.name} question`;
    $("[data-revealed-question]").textContent = question.text;
    $("[data-revealed-question]").hidden = !question.revealed;
    $("[data-hidden-question]").hidden = question.revealed;
    revealButton.disabled = question.listens < 2;
    revealButton.textContent = question.revealed ? "Question Revealed" : "Reveal Question";
    listenButton.textContent = question.listens ? "Listen Again" : "Listen to the Question";
    listenButton.disabled = false;
    [1, 2].forEach((number) => $("[data-listen-dot='" + number + "']").classList.toggle("is-complete", question.listens >= number));
    $("[data-listen-status]").textContent = `Listen ${Math.min(question.listens, 2)} of 2`;
    feedback.textContent = question.revealed ? "The question is visible. Answer it aloud in your own words." : question.listens >= 2 ? "You may answer now or reveal the question if you need help." : "Listen carefully before answering.";
    numbersEl.innerHTML = state.questions.map((item, index) => `<button type="button" data-question-index="${index}" class="${index === state.index ? "is-current" : ""}${item.revealed ? " is-visited" : ""}" aria-label="Question ${index + 1}">${index + 1}</button>`).join("");
    $("[data-queue-previous]").disabled = state.index === 0;
    $("[data-queue-next]").disabled = state.index === state.questions.length - 1;
  }

  function findEnglishVoice() {
    return window.speechSynthesis.getVoices().find((voice) => /^en(-|_)/i.test(voice.lang)) || null;
  }

  function listen() {
    const question = state.questions[state.index];
    if (!speechSupported) {
      question.listens = 2;
      revealButton.disabled = false;
      feedback.textContent = "Audio is not available in this browser. You can reveal the question instead.";
      renderQuestion();
      return;
    }
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(question.text);
    const voice = findEnglishVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = voice ? voice.lang : "en-US";
    utterance.rate = state.levelId === "beginner" ? 0.82 : state.levelId === "elementary" ? 0.9 : 0.96;
    state.speaking = true;
    listenButton.disabled = true;
    listenButton.textContent = "Listening...";
    feedback.textContent = "Listen to the whole question before answering.";
    utterance.onend = function () {
      state.speaking = false;
      question.listens = Math.min(2, question.listens + 1);
      renderQuestion();
    };
    utterance.onerror = function () {
      state.speaking = false;
      listenButton.disabled = false;
      feedback.textContent = "The voice could not play. Check your browser audio and try again.";
    };
    window.speechSynthesis.speak(utterance);
  }

  levelsEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-level-id]");
    if (!button) return;
    state.levelId = button.dataset.levelId;
    selectCard(levelsEl, state.levelId, "levelId");
  });
  topicsEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-topic-id]");
    if (!button) return;
    state.topicId = button.dataset.topicId;
    selectCard(topicsEl, state.topicId, "topicId");
  });
  themesEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-id]");
    if (button) chooseTheme(button.dataset.themeId);
  });
  numbersEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-question-index]");
    if (!button) return;
    state.index = Number(button.dataset.questionIndex);
    renderQuestion();
  });
  continueButton.addEventListener("click", enterRoom);
  listenButton.addEventListener("click", listen);
  revealButton.addEventListener("click", () => { state.questions[state.index].revealed = true; renderQuestion(); });
  $("[data-queue-previous]").addEventListener("click", () => { if (state.index > 0) { state.index -= 1; renderQuestion(); } });
  $("[data-queue-next]").addEventListener("click", () => { if (state.index < state.questions.length - 1) { state.index += 1; renderQuestion(); } });
  $("[data-change-selection]").addEventListener("click", () => { stopSpeech(); room.hidden = true; setup.hidden = false; setup.scrollIntoView({ behavior: "smooth" }); });
  window.addEventListener("pagehide", stopSpeech);

  renderSetup();
})();
