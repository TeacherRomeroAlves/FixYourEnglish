const sentenceBank = [
  ["English is fun.", "English opens doors.", "Practice builds confidence."],
  ["Verbs can express actions.", "Context helps vocabulary grow.", "Questions need auxiliary verbs."],
  ["Articles come before most nouns.", "Pronouns can replace repeated nouns.", "Every sentence needs a verb."],
  ["Adjectives do not have plural forms.", "Use does with he, she, it.", "Modal verbs take the base form."],
  ["We use an before a vowel sound.", "Present perfect connects past actions to now.", "Adverbs often describe how actions happen clearly."],
  ["Use the simple present for habits and facts.", "Past continuous describes actions happening at specific times.", "Relative pronouns connect nouns with useful additional information."],
  ["The present perfect uses have or has plus participles.", "We use going to for plans decided before speaking.", "Conditional sentences explain results that depend on certain conditions."]
];

const snakeRoot = document.querySelector("[data-word-snake]");

if (snakeRoot) {
  const canvas = snakeRoot.querySelector("[data-snake-canvas]");
  const context = canvas.getContext("2d");
  const startButton = snakeRoot.querySelector("[data-snake-start]");
  const restartButton = snakeRoot.querySelector("[data-snake-restart]");
  const levelText = snakeRoot.querySelector("[data-snake-level]");
  const scoreText = snakeRoot.querySelector("[data-snake-score]");
  const timeText = snakeRoot.querySelector("[data-snake-time]");
  const sentenceText = snakeRoot.querySelector("[data-snake-sentence]");
  const message = snakeRoot.querySelector("[data-snake-message]");
  const feedback = snakeRoot.querySelector("[data-snake-feedback]");
  const finishCard = snakeRoot.querySelector("[data-snake-finish]");
  const resultText = snakeRoot.querySelector("[data-snake-result]");
  const shareButton = snakeRoot.querySelector("[data-snake-share]");
  const playAgainButton = snakeRoot.querySelector("[data-snake-play-again]");
  const touchArea = snakeRoot.querySelector("[data-snake-touch]");
  const directionButtons = Array.from(snakeRoot.querySelectorAll("[data-snake-direction]"));

  const columns = 20;
  const rows = 14;
  const cell = 40;
  const baseDelay = 155;
  const directions = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 }
  };
  const distractorWords = ["always", "never", "quickly", "language", "grammar", "speaks", "were", "many", "because", "learned", "word", "rules", "has", "does", "writing", "clearly"];

  let level = 0;
  let chosenSentences = [];
  let words = [];
  let wordIndex = 0;
  let snake = [];
  let direction = directions.right;
  let queuedDirection = directions.right;
  let choices = [];
  let moveTimer = null;
  let clockTimer = null;
  let startedAt = 0;
  let elapsedBeforeStart = 0;
  let score = 0;
  let levelStartScore = 0;
  let running = false;
  let completed = false;
  let touchStart = null;

  const splitSentence = (sentence) => sentence.split(/\s+/);
  const normalizeWord = (word) => word.toLowerCase().replace(/[^a-z']/g, "");
  const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  const getElapsedSeconds = () => Math.floor((Date.now() - startedAt + elapsedBeforeStart) / 1000);
  const shufflePick = (items) => items[Math.floor(Math.random() * items.length)];

  const roundedRectangle = (x, y, width, height, radius) => {
    context.beginPath();
    context.roundRect(x, y, width, height, radius);
  };

  const drawBoard = () => {
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#143f46");
    gradient.addColorStop(1, "#24213f");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = "rgba(255,255,255,.045)";
    context.lineWidth = 1;
    for (let x = 0; x <= columns; x += 1) {
      context.beginPath(); context.moveTo(x * cell, 0); context.lineTo(x * cell, canvas.height); context.stroke();
    }
    for (let y = 0; y <= rows; y += 1) {
      context.beginPath(); context.moveTo(0, y * cell); context.lineTo(canvas.width, y * cell); context.stroke();
    }

    choices.forEach((choice) => {
      context.font = "700 16px Outfit, sans-serif";
      const labelWidth = Math.min(176, Math.max(70, context.measureText(choice.word).width + 28));
      const x = Math.max(5, Math.min(canvas.width - labelWidth - 5, choice.x * cell + cell / 2 - labelWidth / 2));
      const y = choice.y * cell + 4;
      context.fillStyle = choice.color;
      roundedRectangle(x, y, labelWidth, cell - 8, 12);
      context.fill();
      context.fillStyle = "#241334";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(choice.word, x + labelWidth / 2, y + (cell - 8) / 2, labelWidth - 14);
    });

    snake.forEach((segment, index) => {
      const inset = index === 0 ? 3 : 5;
      context.fillStyle = index === 0 ? "#ffd764" : `hsl(${174 - Math.min(index, 35)}, 58%, ${55 - Math.min(index, 20) * 0.6}%)`;
      roundedRectangle(segment.x * cell + inset, segment.y * cell + inset, cell - inset * 2, cell - inset * 2, index === 0 ? 12 : 9);
      context.fill();
      if (index === 0) {
        context.fillStyle = "#241334";
        const eyeY = segment.y * cell + 15;
        context.beginPath(); context.arc(segment.x * cell + 14, eyeY, 2.5, 0, Math.PI * 2); context.fill();
        context.beginPath(); context.arc(segment.x * cell + 26, eyeY, 2.5, 0, Math.PI * 2); context.fill();
      }
    });
  };

  const updateSentenceProgress = () => {
    sentenceText.innerHTML = words.map((word, index) => {
      const state = index < wordIndex ? "is-eaten" : index === wordIndex ? "is-next" : "";
      return `<span class="${state}">${word}</span>`;
    }).join("");
  };

  const updateStats = () => {
    levelText.textContent = `${level + 1} / 7`;
    scoreText.textContent = String(score);
    if (startedAt) timeText.textContent = formatTime(getElapsedSeconds());
  };

  const positionIsFree = (x, y, reserved = []) => !snake.some((segment) => segment.x === x && segment.y === y)
    && !reserved.some((item) => Math.abs(item.x - x) < 4 && Math.abs(item.y - y) < 2);

  const randomPosition = (reserved = []) => {
    for (let attempt = 0; attempt < 200; attempt += 1) {
      const position = { x: 2 + Math.floor(Math.random() * (columns - 4)), y: 1 + Math.floor(Math.random() * (rows - 2)) };
      if (positionIsFree(position.x, position.y, reserved)) return position;
    }
    return { x: 2, y: 2 };
  };

  const createDistractor = (correctWord) => {
    const otherSentenceWords = chosenSentences.flatMap(splitSentence);
    const candidates = [...otherSentenceWords, ...distractorWords].filter((word) => normalizeWord(word) !== normalizeWord(correctWord));
    return shufflePick(candidates);
  };

  const placeChoices = () => {
    const correctWord = words[wordIndex];
    const first = randomPosition();
    const second = randomPosition([first]);
    choices = [
      { ...first, word: correctWord, correct: true, color: "#ffd764" },
      { ...second, word: createDistractor(correctWord), correct: false, color: "#ffd764" }
    ];
    if (Math.random() > 0.5) choices.reverse();
    drawBoard();
  };

  const setDirection = (nextDirection) => {
    if (!running) return;
    if (nextDirection.x + direction.x === 0 && nextDirection.y + direction.y === 0) return;
    queuedDirection = nextDirection;
  };

  const stopMovement = () => {
    window.clearInterval(moveTimer);
    moveTimer = null;
    running = false;
  };

  const runMovement = () => {
    window.clearInterval(moveTimer);
    const delay = baseDelay / Math.pow(1.02, level);
    running = true;
    moveTimer = window.setInterval(moveSnake, delay);
  };

  const showBoardMessage = (title, detail) => {
    message.innerHTML = `<strong>${title}</strong><span>${detail}</span>`;
    message.hidden = false;
  };

  const loseLevel = (reason) => {
    stopMovement();
    score = levelStartScore;
    updateStats();
    restartButton.hidden = false;
    showBoardMessage("Level interrupted", `${reason} Restart Level when you are ready. The timer is still running.`);
    feedback.innerHTML = `<strong>${reason}</strong> Your level score has been reset, but your completed levels are safe.`;
  };

  const completeGame = () => {
    stopMovement();
    completed = true;
    window.clearInterval(clockTimer);
    const finalTime = formatTime(getElapsedSeconds());
    resultText.innerHTML = `You collected <strong>${score} words</strong> and completed all seven levels in <strong>${finalTime}</strong>.`;
    finishCard.hidden = false;
    showBoardMessage("Challenge complete!", "Seven sentences built. Brilliant work!");
    feedback.innerHTML = "<strong>Excellent!</strong> You completed every English sentence.";
    finishCard.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const beginLevel = () => {
    words = splitSentence(chosenSentences[level]);
    wordIndex = 0;
    levelStartScore = score;
    snake = [{ x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }];
    direction = directions.right;
    queuedDirection = directions.right;
    restartButton.hidden = true;
    message.hidden = true;
    finishCard.hidden = true;
    updateSentenceProgress();
    updateStats();
    placeChoices();
    feedback.innerHTML = `<strong>Level ${level + 1}:</strong> Eat “${words[0]}” first.`;
    runMovement();
  };

  const finishLevel = () => {
    stopMovement();
    if (level === sentenceBank.length - 1) {
      completeGame();
      return;
    }
    showBoardMessage(`Level ${level + 1} complete!`, "The next sentence is loading.");
    feedback.innerHTML = `<strong>Sentence complete!</strong> Get ready for Level ${level + 2}.`;
    window.setTimeout(() => {
      level += 1;
      beginLevel();
    }, 1100);
  };

  function moveSnake() {
    direction = queuedDirection;
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    const wallCollision = head.x < 0 || head.x >= columns || head.y < 0 || head.y >= rows;
    const bodyCollision = snake.some((segment) => segment.x === head.x && segment.y === head.y);
    if (wallCollision || bodyCollision) {
      loseLevel(wallCollision ? "You hit the wall." : "You hit your own tail.");
      return;
    }

    snake.unshift(head);
    const eatenChoice = choices.find((choice) => choice.x === head.x && choice.y === head.y);
    if (!eatenChoice) {
      snake.pop();
      drawBoard();
      return;
    }
    if (!eatenChoice.correct) {
      drawBoard();
      loseLevel(`“${eatenChoice.word}” was not the next word.`);
      return;
    }

    score += 1;
    wordIndex += 1;
    updateStats();
    updateSentenceProgress();
    if (wordIndex >= words.length) {
      choices = [];
      drawBoard();
      finishLevel();
    } else {
      feedback.innerHTML = `<strong>Correct!</strong> Now find “${words[wordIndex]}”.`;
      placeChoices();
    }
  }

  const startClock = () => {
    window.clearInterval(clockTimer);
    clockTimer = window.setInterval(updateStats, 250);
  };

  const startGame = () => {
    level = 0;
    score = 0;
    completed = false;
    chosenSentences = sentenceBank.map((sentences) => shufflePick(sentences));
    startedAt = Date.now();
    elapsedBeforeStart = 0;
    timeText.textContent = "00:00";
    startButton.hidden = true;
    startClock();
    beginLevel();
  };

  const shareResult = async () => {
    const finalTime = formatTime(getElapsedSeconds());
    const text = [
      "🐍 WORD SNAKE - CHALLENGE COMPLETED! 🎉",
      "",
      `📝 Score: ${score} words`,
      `🏆 Levels: 7 / 7`,
      `⏱️ Time: ${finalTime}`,
      "",
      "🚀 I completed the Word Snake challenge on Improve Your English!"
    ].join("\n");
    try {
      if (navigator.share) {
        await navigator.share({ title: "Word Snake Result", text });
        feedback.innerHTML = "<strong>Result shared successfully.</strong>";
      } else {
        await navigator.clipboard.writeText(text);
        feedback.innerHTML = "<strong>Result copied.</strong> Paste it into WhatsApp, email, or another app.";
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        feedback.innerHTML = "<strong>Sharing is unavailable.</strong> Try again or take a screenshot of your result.";
      }
    }
  };

  const keyDirections = {
    ArrowUp: directions.up, w: directions.up, W: directions.up,
    ArrowDown: directions.down, s: directions.down, S: directions.down,
    ArrowLeft: directions.left, a: directions.left, A: directions.left,
    ArrowRight: directions.right, d: directions.right, D: directions.right
  };

  document.addEventListener("keydown", (event) => {
    if (!keyDirections[event.key]) return;
    event.preventDefault();
    setDirection(keyDirections[event.key]);
  });

  directionButtons.forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      setDirection(directions[button.dataset.snakeDirection]);
    });
  });

  touchArea.addEventListener("touchstart", (event) => {
    const touch = event.changedTouches[0];
    touchStart = { x: touch.clientX, y: touch.clientY };
  }, { passive: true });

  touchArea.addEventListener("touchend", (event) => {
    if (!touchStart) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    touchStart = null;
    if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 24) return;
    setDirection(Math.abs(deltaX) > Math.abs(deltaY)
      ? (deltaX > 0 ? directions.right : directions.left)
      : (deltaY > 0 ? directions.down : directions.up));
  }, { passive: true });

  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", beginLevel);
  playAgainButton.addEventListener("click", () => {
    startButton.hidden = false;
    finishCard.hidden = true;
    showBoardMessage("Ready for another run?", "Choose Start Game to generate new sentences.");
    feedback.textContent = "The timer will reset when the new game begins.";
  });
  shareButton.addEventListener("click", shareResult);

  chosenSentences = sentenceBank.map((sentences) => sentences[0]);
  words = splitSentence(chosenSentences[0]);
  snake = [{ x: 6, y: 7 }, { x: 5, y: 7 }, { x: 4, y: 7 }];
  updateSentenceProgress();
  drawBoard();
}
