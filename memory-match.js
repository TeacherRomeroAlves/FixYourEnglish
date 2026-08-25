const memoryTopics = {
  past: {
    label: "Infinitive + Simple Past",
    pairs: [["be", "was / were"], ["have", "had"], ["do", "did"], ["say", "said"], ["go", "went"], ["get", "got"], ["make", "made"], ["know", "knew"], ["think", "thought"], ["take", "took"], ["see", "saw"], ["come", "came"]]
  },
  numbers: {
    label: "Number + Written Number",
    pairs: [["1", "one"], ["2", "two"], ["3", "three"], ["4", "four"], ["5", "five"], ["6", "six"], ["7", "seven"], ["8", "eight"], ["9", "nine"], ["10", "ten"], ["11", "eleven"], ["12", "twelve"]]
  },
  participle: {
    label: "Infinitive + Past Participle",
    pairs: [["be", "been"], ["have", "had"], ["do", "done"], ["go", "gone"], ["make", "made"], ["know", "known"], ["take", "taken"], ["see", "seen"], ["give", "given"], ["write", "written"], ["speak", "spoken"], ["eat", "eaten"]]
  },
  phrasal: {
    label: "Phrasal Verb Part 1 + Part 2",
    pairs: [["wake", "up"], ["look", "after"], ["find", "out"], ["give", "away"], ["take", "off"], ["turn", "down"], ["carry", "on"], ["run", "into"], ["fill", "in"], ["break", "through"], ["check", "over"], ["put", "aside"]]
  },
  opposites: {
    label: "Adjective + Opposite",
    pairs: [["big", "small"], ["hot", "cold"], ["happy", "sad"], ["fast", "slow"], ["easy", "difficult"], ["old", "young"], ["early", "late"], ["strong", "weak"], ["clean", "dirty"], ["cheap", "expensive"], ["quiet", "noisy"], ["safe", "dangerous"]]
  }
};

const memoryRoot = document.querySelector("[data-memory-game]");

if (memoryRoot) {
  const topicButtons = Array.from(memoryRoot.querySelectorAll("[data-memory-topic]"));
  const board = memoryRoot.querySelector("[data-memory-board]");
  const startButton = memoryRoot.querySelector("[data-memory-start]");
  const newButton = memoryRoot.querySelector("[data-memory-new]");
  const pairsText = memoryRoot.querySelector("[data-memory-pairs]");
  const attemptsText = memoryRoot.querySelector("[data-memory-attempts]");
  const timeText = memoryRoot.querySelector("[data-memory-time]");
  const deckLabel = memoryRoot.querySelector("[data-memory-deck-label]");
  const feedback = memoryRoot.querySelector("[data-memory-feedback]");
  const finishCard = memoryRoot.querySelector("[data-memory-finish]");
  const resultText = memoryRoot.querySelector("[data-memory-result]");
  const shareButton = memoryRoot.querySelector("[data-memory-share]");
  const playAgainButton = memoryRoot.querySelector("[data-memory-play-again]");

  let selectedTopic = "past";
  let cards = [];
  let flippedIds = [];
  let matchedPairs = 0;
  let attempts = 0;
  let startedAt = 0;
  let clockTimer = null;
  let resolving = false;
  let gameActive = false;

  const shuffle = (items) => {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  };

  const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  const elapsedSeconds = () => startedAt ? Math.floor((Date.now() - startedAt) / 1000) : 0;

  const createDeck = () => {
    const pairCards = memoryTopics[selectedTopic].pairs.flatMap((pair, pairIndex) => pair.map((value, sideIndex) => ({
      id: `${pairIndex}-${sideIndex}-${Math.random().toString(36).slice(2)}`,
      pairId: pairIndex,
      value,
      matched: false,
      joker: false
    })));
    return shuffle([...pairCards, { id: `joker-${Date.now()}`, pairId: null, value: "🃏", matched: false, joker: true }]);
  };

  const updateStats = () => {
    pairsText.textContent = `${matchedPairs} / 12`;
    attemptsText.textContent = String(attempts);
    timeText.textContent = formatTime(elapsedSeconds());
  };

  const renderBoard = () => {
    board.innerHTML = cards.map((card, positionIndex) => {
      const flipped = flippedIds.includes(card.id) || card.matched;
      const position = positionIndex + 1;
      return `<button type="button" class="memory-card${flipped ? " is-flipped" : ""}${card.matched ? " is-matched" : ""}${card.joker ? " is-joker" : ""}" data-memory-card="${card.id}" aria-label="${flipped ? card.value : `Hidden card ${position}`}" ${card.matched ? "disabled" : ""}><span class="memory-card-inner"><span class="memory-card-back" aria-hidden="${flipped}"><i></i><b>${position}</b></span><span class="memory-card-front" aria-hidden="${!flipped}">${card.value}</span></span></button>`;
    }).join("");
  };

  const moveJoker = (jokerId, protectedIds = []) => {
    const jokerIndex = cards.findIndex((card) => card.id === jokerId);
    const availableIndexes = cards.map((card, index) => ({ card, index })).filter(({ card, index }) => index !== jokerIndex && card.matched && !protectedIds.includes(card.id)).map(({ index }) => index);
    if (!availableIndexes.length) return;
    const destination = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    [cards[jokerIndex], cards[destination]] = [cards[destination], cards[jokerIndex]];
  };

  const finishGame = () => {
    gameActive = false;
    resolving = false;
    window.clearInterval(clockTimer);
    board.classList.add("is-locked");
    const finalTime = formatTime(elapsedSeconds());
    resultText.innerHTML = `You completed <strong>${memoryTopics[selectedTopic].label}</strong> in <strong>${finalTime}</strong> with <strong>${attempts} attempts</strong>.`;
    finishCard.hidden = false;
    feedback.innerHTML = "<strong>All twelve pairs found!</strong> Your memory was excellent.";
    finishCard.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const resolveTurn = () => {
    if (flippedIds.length < 2) return;
    resolving = true;
    attempts += 1;
    updateStats();
    const selectedCards = flippedIds.map((id) => cards.find((card) => card.id === id));
    const joker = selectedCards.find((card) => card.joker);

    if (joker) {
      const canMove = cards.some((card) => card.matched);
      feedback.innerHTML = canMove
        ? "<strong>You found the Joker!</strong> Watch carefully: it will exchange places with a card from a completed pair."
        : "<strong>You found the Joker!</strong> Complete a pair before it can move to a new position.";
      window.setTimeout(() => {
        const protectedIds = selectedCards.filter((card) => !card.joker).map((card) => card.id);
        flippedIds = [];
        moveJoker(joker.id, protectedIds);
        resolving = false;
        renderBoard();
      }, 850);
      return;
    }

    if (selectedCards[0].pairId === selectedCards[1].pairId) {
      selectedCards.forEach((card) => { card.matched = true; });
      matchedPairs += 1;
      feedback.innerHTML = `<strong>Correct pair!</strong> ${selectedCards[0].value} + ${selectedCards[1].value}`;
      flippedIds = [];
      resolving = false;
      renderBoard();
      updateStats();
      if (matchedPairs === 12) finishGame();
      return;
    }

    feedback.innerHTML = "<strong>Not a pair.</strong> Remember these positions and try again.";
    window.setTimeout(() => {
      flippedIds = [];
      resolving = false;
      renderBoard();
    }, 900);
  };

  const flipCard = (cardId) => {
    if (!gameActive || resolving || flippedIds.includes(cardId)) return;
    const card = cards.find((item) => item.id === cardId);
    if (!card || card.matched) return;
    flippedIds.push(cardId);
    renderBoard();
    if (flippedIds.length === 2) resolveTurn();
  };

  const startGame = () => {
    window.clearInterval(clockTimer);
    cards = createDeck();
    flippedIds = [];
    matchedPairs = 0;
    attempts = 0;
    resolving = false;
    gameActive = true;
    startedAt = Date.now();
    finishCard.hidden = true;
    startButton.hidden = true;
    newButton.hidden = false;
    board.classList.remove("is-locked");
    feedback.innerHTML = "<strong>Game started!</strong> Flip two cards to find your first pair.";
    renderBoard();
    updateStats();
    clockTimer = window.setInterval(updateStats, 250);
  };

  const selectTopic = (topic) => {
    selectedTopic = topic;
    topicButtons.forEach((button) => button.classList.toggle("is-selected", button.dataset.memoryTopic === topic));
    deckLabel.textContent = memoryTopics[topic].label;
    window.clearInterval(clockTimer);
    gameActive = false;
    startedAt = 0;
    matchedPairs = 0;
    attempts = 0;
    flippedIds = [];
    cards = createDeck();
    board.classList.add("is-locked");
    startButton.hidden = false;
    newButton.hidden = true;
    finishCard.hidden = true;
    feedback.textContent = "Topic selected. Click Start Game when you are ready.";
    renderBoard();
    updateStats();
  };

  const shareResult = async () => {
    const text = [
      "🧠 MEMORY MATCH - COMPLETED! 🎉",
      "",
      `📚 Topic: ${memoryTopics[selectedTopic].label}`,
      "✅ Pairs: 12 / 12",
      `🎯 Attempts: ${attempts}`,
      `⏱️ Time: ${formatTime(elapsedSeconds())}`,
      "",
      "🚀 I completed the Memory Match challenge on Improve Your English!"
    ].join("\n");
    try {
      if (navigator.share) await navigator.share({ title: "Memory Match Result", text });
      else {
        await navigator.clipboard.writeText(text);
        feedback.innerHTML = "<strong>Result copied.</strong> Paste it into WhatsApp, email, or another app.";
      }
    } catch (error) {
      if (error.name !== "AbortError") feedback.innerHTML = "<strong>Sharing is unavailable.</strong> Try again or take a screenshot.";
    }
  };

  board.addEventListener("click", (event) => {
    const card = event.target.closest("[data-memory-card]");
    if (card) flipCard(card.dataset.memoryCard);
  });
  topicButtons.forEach((button) => button.addEventListener("click", () => selectTopic(button.dataset.memoryTopic)));
  startButton.addEventListener("click", startGame);
  newButton.addEventListener("click", startGame);
  playAgainButton.addEventListener("click", startGame);
  shareButton.addEventListener("click", shareResult);

  cards = createDeck();
  renderBoard();
  updateStats();
}
