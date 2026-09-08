const createRevealButton = (exercise) => {
  const actions = exercise.querySelector(".activity-actions");
  const revealButton = document.createElement("button");
  revealButton.className = "activity-button toefl-reveal-button";
  revealButton.type = "button";
  revealButton.textContent = "Reveal Answers";
  revealButton.hidden = true;
  revealButton.disabled = true;
  revealButton.dataset.toeflReveal = "";
  actions?.append(revealButton);
  return revealButton;
};

document.querySelectorAll("[data-toefl-word-exercise]").forEach((exercise) => {
  const inputs = Array.from(exercise.querySelectorAll("[data-answer]"));
  const feedback = exercise.querySelector("[data-toefl-feedback]");
  const checkButton = exercise.querySelector("[data-toefl-check]");
  const resetButton = exercise.querySelector("[data-toefl-reset]");
  const revealButton = createRevealButton(exercise);

  inputs.forEach((input) => {
    const missingLetters = input.dataset.answer.length;
    input.maxLength = missingLetters;
    input.size = missingLetters;
    input.placeholder = "_".repeat(missingLetters);
    input.style.setProperty("--missing-letters", missingLetters);
  });

  checkButton?.addEventListener("click", () => {
    const complete = inputs.every((input) => input.value.trim());
    if (!complete) {
      feedback.innerHTML = "Complete every word before checking.";
      return;
    }

    const correct = inputs.filter((input) => input.value.trim().toLowerCase() === input.dataset.answer).length;
    revealButton.hidden = false;
    revealButton.disabled = false;
    feedback.innerHTML = correct === inputs.length
      ? `<strong>${correct} / ${inputs.length} correct.</strong> Excellent work. You completed the entire paragraph.`
      : `<strong>${correct} / ${inputs.length} correct.</strong> Keep examining the meaning and spelling of each word.`;
  });

  resetButton?.addEventListener("click", () => {
    inputs.forEach((input) => {
      input.value = "";
      input.classList.remove("is-revealed");
    });
    revealButton.hidden = true;
    revealButton.disabled = true;
    feedback.textContent = `Complete all ${inputs.length} words, then check your answers.`;
  });

  revealButton.addEventListener("click", () => {
    inputs.forEach((input) => {
      input.value = input.dataset.answer;
      input.classList.add("is-revealed");
    });
    feedback.innerHTML = "<strong>Answers revealed.</strong> Review the completed words and notice how spelling supports meaning.";
  });
});

document.querySelectorAll("[data-toefl-choice-exercise]").forEach((exercise) => {
  const questions = Array.from(exercise.querySelectorAll(".toefl-question"));
  const feedback = exercise.querySelector("[data-toefl-feedback]");
  const checkButton = exercise.querySelector("[data-toefl-check]");
  const resetButton = exercise.querySelector("[data-toefl-reset]");
  const revealButton = createRevealButton(exercise);
  const actions = exercise.querySelector(".activity-actions");
  const navigator = document.createElement("div");
  navigator.className = "toefl-question-navigator";
  navigator.innerHTML = `
    <button class="toefl-question-nav-button" type="button" data-question-back aria-label="Previous question">← Back</button>
    <div class="toefl-question-progress"><strong data-question-progress>Question 1 of ${questions.length}</strong><span data-question-dots aria-hidden="true"></span></div>
    <button class="toefl-question-nav-button is-next" type="button" data-question-next aria-label="Next question">Next →</button>
  `;
  actions?.before(navigator);
  const backButton = navigator.querySelector("[data-question-back]");
  const nextButton = navigator.querySelector("[data-question-next]");
  const progress = navigator.querySelector("[data-question-progress]");
  const dots = navigator.querySelector("[data-question-dots]");
  const questionLists = Array.from(exercise.querySelectorAll(".toefl-question-list"));
  const readingTexts = Array.from(exercise.querySelectorAll(".toefl-realworld-text"));
  let currentQuestion = 0;

  questions.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "toefl-question-dot";
    dot.title = `Question ${index + 1}`;
    dots.append(dot);
  });

  const showQuestion = (index, direction = "next") => {
    currentQuestion = Math.max(0, Math.min(index, questions.length - 1));
    questions.forEach((question, questionIndex) => {
      question.hidden = questionIndex !== currentQuestion;
      question.classList.remove("is-entering-next", "is-entering-back");
      if (questionIndex === currentQuestion) {
        void question.offsetWidth;
        question.classList.add(direction === "back" ? "is-entering-back" : "is-entering-next");
      }
    });
    const activeQuestionList = questions[currentQuestion].closest(".toefl-question-list");
    activeQuestionList?.append(navigator);
    if (readingTexts.length > 1) {
      const activeTextIndex = questionLists.indexOf(activeQuestionList);
      readingTexts.forEach((text, textIndex) => { text.hidden = textIndex !== activeTextIndex; });
    }
    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    Array.from(dots.children).forEach((dot, dotIndex) => {
      dot.classList.toggle("is-current", dotIndex === currentQuestion);
      dot.classList.toggle("is-answered", Boolean(questions[dotIndex].querySelector("input:checked")));
    });
    backButton.disabled = currentQuestion === 0;
    nextButton.disabled = currentQuestion === questions.length - 1;
  };

  backButton.addEventListener("click", () => showQuestion(currentQuestion - 1, "back"));
  nextButton.addEventListener("click", () => showQuestion(currentQuestion + 1, "next"));
  exercise.addEventListener("change", (event) => {
    if (event.target.matches("input[type='radio']")) showQuestion(currentQuestion, "next");
  });
  showQuestion(0);

  checkButton?.addEventListener("click", () => {
    const answers = questions.map((question) => question.querySelector("input:checked"));
    if (answers.some((answer) => !answer)) {
      feedback.textContent = "Answer every question before checking.";
      showQuestion(answers.findIndex((answer) => !answer), "next");
      return;
    }

    const correct = questions.reduce((total, question, index) => (
      total + (answers[index].value === question.dataset.answer ? 1 : 0)
    ), 0);
    revealButton.hidden = false;
    revealButton.disabled = false;
    feedback.innerHTML = correct === questions.length
      ? `<strong>${correct} / ${questions.length} correct.</strong> Excellent reading. You understood every question.`
      : `<strong>${correct} / ${questions.length} correct.</strong> Review the text carefully and try again.`;
  });

  resetButton?.addEventListener("click", () => {
    exercise.querySelectorAll("input[type='radio']").forEach((input) => { input.checked = false; });
    exercise.querySelectorAll(".is-answer-revealed").forEach((label) => label.classList.remove("is-answer-revealed"));
    revealButton.hidden = true;
    revealButton.disabled = true;
    feedback.textContent = `Answer all ${questions.length} questions, then check your result.`;
    showQuestion(0, "back");
  });

  revealButton.addEventListener("click", () => {
    questions.forEach((question) => {
      question.querySelector(`input[value="${question.dataset.answer}"]`)?.closest("label")?.classList.add("is-answer-revealed");
    });
    feedback.innerHTML = "<strong>Answers revealed.</strong> Compare each correct choice with the evidence in the text.";
  });
});

const testButtons = Array.from(document.querySelectorAll("[data-toefl-test-button]"));
const testExercises = Array.from(document.querySelectorAll("[data-toefl-test]"));
const currentTestLabel = document.querySelector("[data-toefl-current-test]");
const testContent = Array.from(document.querySelectorAll("[data-toefl-test-content]"));
const startPanel = document.querySelector("[data-toefl-start-panel]");
const timerPanel = document.querySelector("[data-toefl-timer-panel]");
const timerValue = document.querySelector("[data-toefl-timer]");
const timerLabel = document.querySelector("[data-toefl-timer-label]");
const timerStatus = document.querySelector("[data-toefl-timer-status]");
const pauseTimerButton = document.querySelector("[data-toefl-pause-timer]");
const timedStartButton = document.querySelector("[data-toefl-start-timed]");
const untimedStartButton = document.querySelector("[data-toefl-start-untimed]");
const exportPanel = document.querySelector("[data-toefl-export-panel]");
const printBlankButton = document.querySelector("[data-toefl-print-blank]");
const printAnswersButton = document.querySelector("[data-toefl-print-answers]");
const printTitle = document.querySelector("[data-toefl-print-title]");
const printMode = document.querySelector("[data-toefl-print-mode]");
const TEST_DURATION_SECONDS = 14 * 60;
let remainingSeconds = TEST_DURATION_SECONDS;
let timerInterval = null;
let timerPaused = false;
let timerDeadline = null;

const formatTimer = (seconds) => {
  const prefix = seconds < 0 ? "-" : "";
  const absoluteSeconds = Math.abs(seconds);
  const minutes = Math.floor(absoluteSeconds / 60);
  const secondsPart = absoluteSeconds % 60;
  return `${prefix}${String(minutes).padStart(2, "0")}:${String(secondsPart).padStart(2, "0")}`;
};

const renderTimer = () => {
  if (timerValue) timerValue.textContent = formatTimer(remainingSeconds);
  const overtime = remainingSeconds < 0;
  timerPanel?.classList.toggle("is-overtime", overtime);
  if (overtime) {
    if (timerLabel) timerLabel.textContent = "Overtime";
    if (timerStatus) timerStatus.textContent = "Time is up, but you can continue. Overtime is being counted.";
  }
};

const stopTimer = () => {
  if (timerInterval) window.clearInterval(timerInterval);
  timerInterval = null;
};

const runTimer = () => {
  stopTimer();
  timerDeadline = Date.now() + (remainingSeconds * 1000);
  timerInterval = window.setInterval(() => {
    remainingSeconds = Math.ceil((timerDeadline - Date.now()) / 1000);
    renderTimer();
  }, 250);
};

const openTestContent = () => {
  testContent.forEach((element) => { element.hidden = false; });
  if (startPanel) startPanel.hidden = true;
  if (timerPanel) timerPanel.hidden = false;
  if (exportPanel) exportPanel.hidden = false;
};

const prepareSelectedTest = () => {
  stopTimer();
  remainingSeconds = TEST_DURATION_SECONDS;
  timerPaused = false;
  if (timerPanel) {
    timerPanel.hidden = true;
    timerPanel.classList.remove("is-overtime", "is-paused", "is-untimed");
  }
  if (startPanel) startPanel.hidden = false;
  if (exportPanel) exportPanel.hidden = true;
  testContent.forEach((element) => { element.hidden = true; });
  if (timerValue) timerValue.textContent = "14:00";
  if (timerLabel) timerLabel.textContent = "Time remaining";
  if (timerStatus) timerStatus.textContent = "Complete all three tasks before the timer reaches zero.";
  if (pauseTimerButton) {
    pauseTimerButton.hidden = true;
    pauseTimerButton.textContent = "Pause";
  }
};

timedStartButton?.addEventListener("click", () => {
  remainingSeconds = TEST_DURATION_SECONDS;
  timerPaused = false;
  openTestContent();
  timerPanel?.classList.remove("is-untimed", "is-paused", "is-overtime");
  if (timerLabel) timerLabel.textContent = "Time remaining";
  if (timerStatus) timerStatus.textContent = "Complete all three tasks before the timer reaches zero.";
  if (pauseTimerButton) {
    pauseTimerButton.hidden = false;
    pauseTimerButton.textContent = "Pause";
  }
  renderTimer();
  runTimer();
  document.querySelector(".toefl-task-nav")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

untimedStartButton?.addEventListener("click", () => {
  stopTimer();
  openTestContent();
  timerPanel?.classList.add("is-untimed");
  timerPanel?.classList.remove("is-paused", "is-overtime");
  if (timerLabel) timerLabel.textContent = "Practice mode";
  if (timerValue) timerValue.textContent = "Untimed";
  if (timerStatus) timerStatus.textContent = "Take your time and focus on understanding each task.";
  if (pauseTimerButton) pauseTimerButton.hidden = true;
  document.querySelector(".toefl-task-nav")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

pauseTimerButton?.addEventListener("click", () => {
  timerPaused = !timerPaused;
  timerPanel?.classList.toggle("is-paused", timerPaused);
  if (timerPaused) {
    stopTimer();
    pauseTimerButton.textContent = "Resume";
    if (timerStatus) timerStatus.textContent = "Timer paused. Resume when you are ready.";
  } else {
    pauseTimerButton.textContent = "Pause";
    if (timerStatus) {
      timerStatus.textContent = remainingSeconds < 0
        ? "Time is up, but you can continue. Overtime is being counted."
        : "Complete all three tasks before the timer reaches zero.";
    }
    runTimer();
  }
});

let restoreAfterPrint = null;

const createReadingPrintMarkers = (controls, includeStudentAnswers) => controls.map((control) => {
  const marker = document.createElement("span");
  marker.className = "toefl-print-response";
  if (control.type === "radio" || control.type === "checkbox") {
    const selected = includeStudentAnswers && control.checked;
    marker.classList.add("toefl-print-choice-marker");
    marker.classList.toggle("is-selected", selected);
    marker.textContent = selected ? "● Student answer: " : "○ ";
  } else {
    marker.classList.add("toefl-print-text-response");
    const response = includeStudentAnswers ? control.value.trim() : "";
    marker.textContent = response || "________";
  }
  control.insertAdjacentElement("afterend", marker);
  return marker;
});

const finishPrint = () => {
  if (!restoreAfterPrint) return;
  restoreAfterPrint();
  restoreAfterPrint = null;
};

const printSelectedTest = (includeStudentAnswers) => {
  finishPrint();
  const activeButton = testButtons.find((button) => button.classList.contains("is-active"));
  const selectedTest = activeButton?.dataset.toeflTestButton || "1";
  const controls = Array.from(document.querySelectorAll(".toefl-exercise input"));
  const elementStates = [...testContent, ...testExercises].map((element) => ({
    element,
    hidden: element.hidden,
  }));
  const controlStates = controls.map((control) => ({
    control,
    value: control.value,
    checked: control.checked,
  }));

  if (!includeStudentAnswers) {
    controls.forEach((control) => {
      if (control.type === "radio") control.checked = false;
      else control.value = "";
    });
  }

  const printMarkers = createReadingPrintMarkers(controls, includeStudentAnswers);

  testContent.forEach((element) => { element.hidden = false; });
  testExercises.forEach((exercise) => {
    exercise.hidden = exercise.dataset.toeflTest !== selectedTest;
  });
  document.querySelectorAll(".is-answer-revealed").forEach((element) => element.classList.add("is-print-hidden-answer"));
  document.body.classList.add("toefl-printing");
  document.body.dataset.toeflPrintMode = includeStudentAnswers ? "answers" : "blank";
  if (printTitle) printTitle.textContent = `Mock Test ${selectedTest}`;
  if (printMode) printMode.textContent = includeStudentAnswers ? "Student Answer Copy" : "Blank Homework";

  restoreAfterPrint = () => {
    elementStates.forEach(({ element, hidden }) => { element.hidden = hidden; });
    controlStates.forEach(({ control, value, checked }) => {
      control.value = value;
      control.checked = checked;
    });
    printMarkers.forEach((marker) => marker.remove());
    document.querySelectorAll(".is-print-hidden-answer").forEach((element) => element.classList.remove("is-print-hidden-answer"));
    document.body.classList.remove("toefl-printing");
    delete document.body.dataset.toeflPrintMode;
  };

  window.requestAnimationFrame(() => window.print());
};

printBlankButton?.addEventListener("click", () => printSelectedTest(false));
printAnswersButton?.addEventListener("click", () => printSelectedTest(true));
window.addEventListener("afterprint", finishPrint);
window.addEventListener("focus", () => {
  if (document.body.classList.contains("toefl-printing")) window.setTimeout(finishPrint, 300);
});

testButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTest = button.dataset.toeflTestButton;
    testButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    testExercises.forEach((exercise) => {
      exercise.hidden = exercise.dataset.toeflTest !== selectedTest;
    });
    if (currentTestLabel) currentTestLabel.textContent = `Mock Test ${selectedTest}`;
    prepareSelectedTest();
    startPanel?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
