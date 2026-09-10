const foodMoodRoot = document.querySelector("[data-food-mood]");

if (foodMoodRoot && window.FoodMoodEngine) {
  const {maskWord, isSolved, unrevealedLetters, pickWord} = window.FoodMoodEngine;
  const startPanel = foodMoodRoot.querySelector("[data-food-start-panel]");
  const roundPanel = foodMoodRoot.querySelector("[data-food-round]");
  const livesDisplay = foodMoodRoot.querySelector("[data-food-lives]");
  const wordDisplay = foodMoodRoot.querySelector("[data-food-word]");
  const keyboard = foodMoodRoot.querySelector("[data-food-keyboard]");
  const clueResults = foodMoodRoot.querySelector("[data-food-clues]");
  const feedback = foodMoodRoot.querySelector("[data-food-feedback]");
  const countability = foodMoodRoot.querySelector("[data-food-countability]");
  const context = foodMoodRoot.querySelector("[data-food-context]");
  const countFeedback = foodMoodRoot.querySelector("[data-count-feedback]");
  const nextButton = foodMoodRoot.querySelector("[data-food-next]");
  let current = null;
  let previousWord = "";
  let lives = 5;
  let revealed = new Set();
  let guessed = new Set();
  let usedClues = new Set();
  let roundComplete = false;

  const renderLives = () => {
    livesDisplay.innerHTML = Array.from({length: 5}, (_, index) => `<span class="${index >= lives ? "is-lost" : ""}" aria-hidden="true">&#127813;</span>`).join("");
    livesDisplay.setAttribute("aria-label", `${lives} tomato ${lives === 1 ? "life" : "lives"} remaining`);
  };

  const renderWord = (revealAll = false) => {
    const visible = revealAll ? new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ") : revealed;
    wordDisplay.innerHTML = maskWord(current.word, visible).map((character) => character === " " ? `<span class="food-word-space" aria-hidden="true"></span>` : `<span>${character}</span>`).join("");
  };

  const setRoundControls = (disabled) => {
    keyboard.querySelectorAll("button").forEach((button) => { button.disabled = disabled || guessed.has(button.dataset.letter); });
    foodMoodRoot.querySelectorAll("[data-food-clue]").forEach((button) => { button.disabled = disabled || usedClues.has(button.dataset.foodClue); });
  };

  const finishRound = (won) => {
    roundComplete = true;
    renderWord(true);
    setRoundControls(true);
    feedback.innerHTML = won ? `<strong>Recipe saved!</strong> The word is <b>${current.word}</b>.` : `<strong>The tomatoes are gone!</strong> The word was <b>${current.word}</b>, but the kitchen is ready for another round.`;
    countability.hidden = false;
    context.innerHTML = current.context.replace(new RegExp(current.word, "i"), `<strong>$&</strong>`);
    countFeedback.textContent = "Choose the meaning that fits this sentence.";
    nextButton.hidden = true;
    foodMoodRoot.querySelectorAll("[data-count-answer]").forEach((button) => { button.disabled = false; button.classList.remove("is-correct", "is-wrong"); });
    countability.scrollIntoView({behavior:"smooth", block:"nearest"});
  };

  const loseLife = () => {
    lives = Math.max(0, lives - 1);
    renderLives();
    if (lives === 0) finishRound(false);
  };

  const chooseLetter = (letter, fromClue = false) => {
    if (roundComplete || guessed.has(letter)) return;
    guessed.add(letter);
    const exists = current.word.toUpperCase().includes(letter);
    if (exists) {
      revealed.add(letter);
      renderWord();
      const key = keyboard.querySelector(`[data-letter="${letter}"]`);
      key?.classList.add("is-right");
      if (isSolved(current.word, revealed)) finishRound(true);
      else if (!fromClue) feedback.innerHTML = `<strong>Good letter!</strong> Keep cooking.`;
    } else {
      const key = keyboard.querySelector(`[data-letter="${letter}"]`);
      key?.classList.add("is-wrong");
      feedback.innerHTML = `<strong>${letter} is not in this word.</strong> One tomato is gone.`;
      loseLife();
    }
    setRoundControls(roundComplete);
  };

  const buildKeyboard = () => {
    keyboard.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => `<button type="button" data-letter="${letter}" aria-label="Choose letter ${letter}">${letter}</button>`).join("");
    keyboard.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => chooseLetter(button.dataset.letter)));
  };

  const beginRound = () => {
    current = pickWord(previousWord);
    previousWord = current.word;
    lives = 5;
    revealed = new Set();
    guessed = new Set();
    usedClues = new Set();
    roundComplete = false;
    startPanel.hidden = true;
    roundPanel.hidden = false;
    countability.hidden = true;
    countFeedback.textContent = "";
    clueResults.innerHTML = "<p>No clues opened yet.</p>";
    feedback.textContent = "Choose your first letter.";
    renderLives();
    renderWord();
    buildKeyboard();
    setRoundControls(false);
  };

  foodMoodRoot.querySelector("[data-food-start]").addEventListener("click", beginRound);
  foodMoodRoot.querySelector("[data-food-new]").addEventListener("click", beginRound);
  nextButton.addEventListener("click", beginRound);

  foodMoodRoot.querySelectorAll("[data-food-clue]").forEach((button) => button.addEventListener("click", () => {
    const clue = button.dataset.foodClue;
    if (roundComplete || usedClues.has(clue)) return;
    usedClues.add(clue);
    button.disabled = true;
    loseLife();
    if (roundComplete) return;
    const labels = {category:`Category: ${current.category}`, definition:`Definition: ${current.definition}`, example:`Example: ${current.example}`};
    if (clue === "letter") {
      const options = unrevealedLetters(current.word, revealed);
      if (options.length) chooseLetter(options[Math.floor(Math.random() * options.length)], true);
    }
    const message = clue === "letter" ? "Random letter: One hidden letter was added to the word." : labels[clue];
    if (clueResults.querySelector("p")) clueResults.innerHTML = "";
    clueResults.insertAdjacentHTML("beforeend", `<div><strong>${message.split(":")[0]}</strong><span>${message.includes(":") ? message.slice(message.indexOf(":") + 1).trim() : ""}</span></div>`);
    feedback.innerHTML = `<strong>Clue opened.</strong> It cost one tomato.`;
    setRoundControls(roundComplete);
  }));

  foodMoodRoot.querySelectorAll("[data-count-answer]").forEach((button) => button.addEventListener("click", () => {
    const correct = button.dataset.countAnswer === current.countability;
    foodMoodRoot.querySelectorAll("[data-count-answer]").forEach((item) => {
      item.disabled = true;
      item.classList.toggle("is-correct", item.dataset.countAnswer === current.countability);
      item.classList.toggle("is-wrong", item === button && !correct);
    });
    countFeedback.innerHTML = correct ? `<strong>Exactly!</strong> In this sentence, <b>${current.word}</b> is ${current.countability}.` : `<strong>Almost.</strong> In this sentence, <b>${current.word}</b> is ${current.countability}.`;
    nextButton.hidden = false;
  }));
}
