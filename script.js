const topicDetails = {
  "Simple Present": "A good place to begin with daily routines, habits, likes and dislikes, and statements of fact.",
  "Present Continuous": "Useful for actions happening now, temporary situations, and what is in progress at the moment.",
  "Simple Past": "Focuses on completed actions, past experiences, and finished events with clear past time references.",
  "Present Perfect": "Explores actions that connect the past and the present, including life experiences and recent results.",
  "Future (Will and Going To)": "Great for future plans, predictions, promises, intentions, and decisions made in the moment."
};

const cards = document.querySelectorAll(".topic-card");
const selectedTopic = document.querySelector("#selected-topic");
const selectedCopy = document.querySelector("#selected-copy");
const performanceState = {
  activity1: null,
  activity2: null,
  activity3: null
};

if (cards.length && selectedTopic && selectedCopy) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((item) => item.classList.remove("is-selected"));
      card.classList.add("is-selected");

      const topicName = card.dataset.topic;
      selectedTopic.textContent = topicName;
      selectedCopy.textContent = topicDetails[topicName];
    });
  });
}

const activity = document.querySelector("[data-activity='simple-present-routine']");

if (activity) {
  const bank = activity.querySelector("[data-bank]");
  const slots = Array.from(activity.querySelectorAll(".drop-slot"));
  const feedback = document.querySelector("[data-activity-feedback]");
  const resetButton = document.querySelector("[data-reset-activity]");
  const checkButton = document.querySelector("[data-check-activity]");
  const dragState = {
    token: null
  };

  const allTokens = Array.from(activity.querySelectorAll(".verb-token"));
  const shuffleTokens = () => {
    const tokens = Array.from(activity.querySelectorAll(".verb-token"));
    const shuffled = [...tokens].sort(() => Math.random() - 0.5);
    shuffled.forEach((token) => bank.appendChild(token));
  };

  const clearSlotState = (slot) => {
    slot.classList.remove("is-active");
  };

  const placeTokenInSlot = (slot, token) => {
    if (!slot || !token) {
      return;
    }

    const existingToken = slot.querySelector(".verb-token");
    if (existingToken && existingToken !== token) {
      bank.appendChild(existingToken);
      existingToken.classList.remove("is-dragging");
    }

    slot.appendChild(token);
    token.classList.remove("is-dragging");
    updateSlotStyles();
  };

  const updateSlotStyles = () => {
    slots.forEach((slot) => {
      slot.classList.toggle("has-token", Boolean(slot.querySelector(".verb-token")));
    });
  };

  const resetActivity = () => {
    allTokens.forEach((token) => {
      token.classList.remove("is-dragging");
      bank.appendChild(token);
    });

    shuffleTokens();

    updateSlotStyles();

    if (feedback) {
      feedback.textContent = "Place all six verbs in the sentences and then check your answers.";
    }
  };

  allTokens.forEach((token) => {
    token.addEventListener("dragstart", () => {
      dragState.token = token;
      token.classList.add("is-dragging");
    });

    token.addEventListener("dragend", () => {
      token.classList.remove("is-dragging");
      dragState.token = null;
      slots.forEach(clearSlotState);
    });
  });

  [bank, ...slots].forEach((dropTarget) => {
    dropTarget.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (dropTarget.classList.contains("drop-slot")) {
        dropTarget.classList.add("is-active");
      }
    });

    dropTarget.addEventListener("dragleave", () => {
      clearSlotState(dropTarget);
    });

    dropTarget.addEventListener("drop", (event) => {
      event.preventDefault();

      const token = dragState.token;
      if (!token) {
        return;
      }

      if (dropTarget === bank) {
        bank.appendChild(token);
        token.classList.remove("is-dragging");
        updateSlotStyles();
      } else {
        placeTokenInSlot(dropTarget, token);
      }

      slots.forEach(clearSlotState);
    });
  });

  if (resetButton) {
    resetButton.addEventListener("click", resetActivity);
  }

  if (checkButton) {
    checkButton.addEventListener("click", () => {
      const filledSlots = slots.filter((slot) => slot.querySelector(".verb-token"));

      if (filledSlots.length < slots.length) {
        if (feedback) {
          feedback.innerHTML = "<strong>Complete all six sentences first</strong>, then check your answers.";
        }
        return;
      }

      const correctCount = slots.reduce((count, slot) => {
        const token = slot.querySelector(".verb-token");
        return count + Number(token && token.dataset.verb === slot.dataset.answer);
      }, 0);

      if (feedback) {
        if (correctCount === slots.length) {
          performanceState.activity1 = { correct: correctCount, total: slots.length };
          feedback.innerHTML = "Excellent work. <strong>You got 6 out of 6 correct.</strong>";
        } else {
          performanceState.activity1 = { correct: correctCount, total: slots.length };
          feedback.innerHTML = `<strong>You got ${correctCount} out of 6 correct.</strong> Keep trying. You can do it.`;
        }
      }
    });
  }

  updateSlotStyles();
  shuffleTokens();
}

const reorderActivity = document.querySelector("[data-reorder-activity='simple-present-order']");

if (reorderActivity) {
  const sentenceBuilders = Array.from(reorderActivity.querySelectorAll("[data-sentence-builder]"));
  const reorderFeedback = document.querySelector("[data-order-activity-feedback]");
  const resetOrderButton = document.querySelector("[data-reset-order-activity]");
  const checkOrderButton = document.querySelector("[data-check-order-activity]");
  const reorderDragState = {
    token: null
  };

  const normalizeSentence = (text) => text.replace(/[?!.]/g, "").replace(/\s+/g, " ").trim();

  const updateWordSlotStyles = () => {
    sentenceBuilders.forEach((builder) => {
      builder.querySelectorAll(".word-slot").forEach((slot) => {
        slot.classList.toggle("has-token", Boolean(slot.querySelector(".word-token")));
      });
    });
  };

  const clearWordSlotState = (slot) => {
    if (slot.classList.contains("word-slot")) {
      slot.classList.remove("is-active");
    }
  };

  const placeWordToken = (target, token, builder) => {
    if (!target || !token || !builder) {
      return;
    }

    if (target.classList.contains("word-slot")) {
      const existingToken = target.querySelector(".word-token");
      const builderBank = builder.querySelector("[data-word-bank]");

      if (existingToken && existingToken !== token) {
        builderBank.appendChild(existingToken);
      }

      target.appendChild(token);
    } else {
      target.appendChild(token);
    }

    token.classList.remove("is-dragging");
    updateWordSlotStyles();
  };

  const resetOrderActivity = () => {
    sentenceBuilders.forEach((builder) => {
      const bank = builder.querySelector("[data-word-bank]");
      const tokens = Array.from(builder.querySelectorAll(".word-token"));
      const shuffled = [...tokens].sort(() => Math.random() - 0.5);

      shuffled.forEach((token) => {
        token.classList.remove("is-dragging");
        bank.appendChild(token);
      });
    });

    updateWordSlotStyles();

    if (reorderFeedback) {
      reorderFeedback.textContent = "Build the four sentences and then check your answers.";
    }
  };

  sentenceBuilders.forEach((builder) => {
    const bank = builder.querySelector("[data-word-bank]");
    const slots = Array.from(builder.querySelectorAll(".word-slot"));
    const tokens = Array.from(builder.querySelectorAll(".word-token"));

    tokens.forEach((token) => {
      token.addEventListener("dragstart", () => {
        reorderDragState.token = token;
        token.classList.add("is-dragging");
      });

      token.addEventListener("dragend", () => {
        token.classList.remove("is-dragging");
        reorderDragState.token = null;
        sentenceBuilders.forEach((item) => {
          item.querySelectorAll(".word-slot").forEach(clearWordSlotState);
        });
      });
    });

    [bank, ...slots].forEach((target) => {
      target.addEventListener("dragover", (event) => {
        event.preventDefault();

        if (target.classList.contains("word-slot")) {
          target.classList.add("is-active");
        }
      });

      target.addEventListener("dragleave", () => {
        clearWordSlotState(target);
      });

      target.addEventListener("drop", (event) => {
        event.preventDefault();

        const token = reorderDragState.token;
        if (!token || !builder.contains(token)) {
          return;
        }

        placeWordToken(target, token, builder);
        slots.forEach(clearWordSlotState);
      });
    });
  });

  if (resetOrderButton) {
    resetOrderButton.addEventListener("click", resetOrderActivity);
  }

  if (checkOrderButton) {
    checkOrderButton.addEventListener("click", () => {
      const allFilled = sentenceBuilders.every((builder) => {
        const slots = Array.from(builder.querySelectorAll(".word-slot"));
        return slots.every((slot) => slot.querySelector(".word-token"));
      });

      if (!allFilled) {
        if (reorderFeedback) {
          reorderFeedback.innerHTML = "<strong>Complete all four sentences first</strong>, then check your answers.";
        }
        return;
      }

      const correctCount = sentenceBuilders.reduce((count, builder) => {
        const builtSentence = Array.from(builder.querySelectorAll(".word-slot .word-token"))
          .map((token) => token.dataset.word)
          .join(" ");

        return count + Number(normalizeSentence(builtSentence) === normalizeSentence(builder.dataset.answer));
      }, 0);

      if (reorderFeedback) {
        if (correctCount === sentenceBuilders.length) {
          performanceState.activity2 = { correct: correctCount, total: sentenceBuilders.length };
          reorderFeedback.innerHTML = "Excellent work. <strong>You got 4 out of 4 correct.</strong>";
        } else {
          performanceState.activity2 = { correct: correctCount, total: sentenceBuilders.length };
          reorderFeedback.innerHTML = `<strong>You got ${correctCount} out of 4 correct.</strong> Keep trying. You can do it.`;
        }
      }
    });
  }

  resetOrderActivity();
}

const paragraphActivity = document.querySelector("[data-paragraph-activity='simple-present-paragraph']");

if (paragraphActivity) {
  const textGaps = Array.from(paragraphActivity.querySelectorAll(".text-gap"));
  const paragraphFeedback = document.querySelector("[data-paragraph-activity-feedback]");
  const resetParagraphButton = document.querySelector("[data-reset-paragraph-activity]");
  const checkParagraphButton = document.querySelector("[data-check-paragraph-activity]");

  const normalizeTextAnswer = (text) => text
    .trim()
    .replace(/doesn't/gi, "does not")
    .replace(/don't/gi, "do not")
    .replace(/\s+/g, " ")
    .toLowerCase();

  const resetParagraphActivity = () => {
    textGaps.forEach((gap) => {
      gap.value = "";
    });

    if (paragraphFeedback) {
      paragraphFeedback.textContent = "Complete all eight blanks and then check your answers.";
    }
  };

  if (resetParagraphButton) {
    resetParagraphButton.addEventListener("click", resetParagraphActivity);
  }

  if (checkParagraphButton) {
    checkParagraphButton.addEventListener("click", () => {
      const allFilled = textGaps.every((gap) => normalizeTextAnswer(gap.value) !== "");

      if (!allFilled) {
        if (paragraphFeedback) {
          paragraphFeedback.innerHTML = "<strong>Complete all eight blanks first</strong>, then check your answers.";
        }
        return;
      }

      const correctCount = textGaps.reduce((count, gap) => {
        return count + Number(normalizeTextAnswer(gap.value) === normalizeTextAnswer(gap.dataset.textAnswer));
      }, 0);

      if (paragraphFeedback) {
        if (correctCount === textGaps.length) {
          performanceState.activity3 = { correct: correctCount, total: textGaps.length };
          paragraphFeedback.innerHTML = "Excellent work. <strong>You got 8 out of 8 correct.</strong>";
        } else {
          performanceState.activity3 = { correct: correctCount, total: textGaps.length };
          paragraphFeedback.innerHTML = `<strong>You got ${correctCount} out of 8 correct.</strong> Keep trying. You can do it.`;
        }
      }
    });
  }
}

const shareButton = document.querySelector("[data-share-performance]");
const savePdfButton = document.querySelector("[data-save-pdf]");
const shareFeedback = document.querySelector("[data-share-feedback]");
const routineWriting = document.querySelector("#routine-writing");

const formatPerformanceLine = (label, result) => {
  if (!result) {
    return `${label}: not checked yet`;
  }

  return `${label}: ${result.correct}/${result.total}`;
};

const buildShareText = () => {
  const studentText = routineWriting && routineWriting.value.trim()
    ? routineWriting.value.trim()
    : "No final paragraph written yet.";

  return [
    "Fix Your English - Simple Present Performance",
    "",
    formatPerformanceLine("Activity 1", performanceState.activity1),
    formatPerformanceLine("Activity 2", performanceState.activity2),
    formatPerformanceLine("Activity 3", performanceState.activity3),
    "",
    "Student paragraph:",
    studentText
  ].join("\n");
};

if (shareButton) {
  shareButton.addEventListener("click", async () => {
    const shareText = buildShareText();

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Fix Your English - Simple Present",
          text: shareText
        });

        if (shareFeedback) {
          shareFeedback.innerHTML = "<strong>Performance shared successfully.</strong>";
        }
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);

        if (shareFeedback) {
          shareFeedback.innerHTML = "<strong>Performance copied to the clipboard.</strong> You can now paste it into WhatsApp, email, or another app.";
        }
      } else if (shareFeedback) {
        shareFeedback.innerHTML = "<strong>Sharing is not available on this device.</strong> Try the Save as PDF button.";
      }
    } catch (error) {
      if (shareFeedback) {
        shareFeedback.innerHTML = "<strong>Sharing was canceled or not available.</strong> You can try again or use Save as PDF.";
      }
    }
  });
}

if (savePdfButton) {
  savePdfButton.addEventListener("click", () => {
    window.print();
  });
}
