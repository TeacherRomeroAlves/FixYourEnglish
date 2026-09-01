(function () {
  "use strict";
  const root = document.querySelector("[data-sliding-words]");
  if (!root) return;
  const { sentences, SlidingPuzzle } = window.SlidingWords;
  const board = root.querySelector("[data-slide-board]");
  const moves = root.querySelector("[data-slide-moves]");
  const feedback = root.querySelector("[data-slide-feedback]");
  const finish = root.querySelector("[data-slide-finish]");
  const result = root.querySelector("[data-slide-result]");
  let previousSentence = -1;
  let puzzle;
  let draggedPosition = null;

  const chooseSentence = () => {
    let index;
    do index = Math.floor(Math.random() * sentences.length);
    while (sentences.length > 1 && index === previousSentence);
    previousSentence = index;
    return sentences[index];
  };

  const animateMove = (tile, action) => {
    const before = tile.getBoundingClientRect();
    action();
    const after = tile.getBoundingClientRect();
    tile.animate([
      { transform: `translate(${before.left - after.left}px, ${before.top - after.top}px)` },
      { transform: "translate(0, 0)" }
    ], { duration: 170, easing: "cubic-bezier(.2,.8,.3,1)" });
  };

  const completePuzzle = () => {
    board.classList.add("is-complete");
    board.querySelectorAll(".slide-word").forEach(tile => { tile.disabled = true; tile.draggable = false; });
    result.textContent = `You rebuilt the sentence in ${puzzle.moves} moves: “${puzzle.sentence}”`;
    feedback.innerHTML = `<strong>Sentence complete!</strong> Excellent word order and puzzle solving.`;
    finish.hidden = false;
    finish.querySelector("[data-slide-share]").focus({ preventScroll: true });
  };

  const moveTile = (position, tile) => {
    if (!puzzle.movablePositions().includes(position) || puzzle.complete) {
      feedback.textContent = "Only a word next to the empty space can move.";
      return;
    }
    const gap = puzzle.board.indexOf(null);
    const target = board.children[gap];
    const source = board.children[position];
    const gapElement = target.firstElementChild;
    animateMove(tile, () => {
      source.replaceChildren(gapElement);
      target.replaceChildren(tile);
      puzzle.move(position);
      tile.dataset.slidePosition = String(gap);
      gapElement.dataset.slidePosition = String(position);
    });
    moves.textContent = String(puzzle.moves);
    feedback.textContent = "Good move. Keep reading from left to right, top to bottom.";
    if (puzzle.complete) completePuzzle();
  };

  const render = () => {
    board.replaceChildren();
    puzzle.board.forEach((tileId, position) => {
      const cell = document.createElement("div");
      cell.className = "slide-cell";
      if (tileId === null) {
        const gap = document.createElement("span");
        gap.className = "slide-gap";
        gap.dataset.slidePosition = String(position);
        gap.setAttribute("aria-label", "Empty space");
        cell.append(gap);
      } else {
        const tile = document.createElement("button");
        tile.type = "button";
        tile.className = "slide-word";
        tile.draggable = true;
        tile.dataset.slidePosition = String(position);
        tile.textContent = puzzle.words[tileId];
        tile.setAttribute("aria-label", `${tile.textContent}. Slide tile`);
        cell.append(tile);
      }
      board.append(cell);
    });
    moves.textContent = "0";
    board.classList.remove("is-complete");
    finish.hidden = true;
  };

  const startPuzzle = (newSentence = true) => {
    puzzle = new SlidingPuzzle(newSentence || !puzzle ? chooseSentence() : puzzle.sentence);
    render();
    feedback.textContent = "Move a neighboring word into the empty space. The sentence changes every new round.";
  };

  board.addEventListener("click", event => {
    const tile = event.target.closest("[data-slide-position].slide-word");
    if (tile) moveTile(Number(tile.dataset.slidePosition), tile);
  });
  board.addEventListener("dragstart", event => {
    const tile = event.target.closest(".slide-word");
    if (!tile || puzzle.complete) return event.preventDefault();
    draggedPosition = Number(tile.dataset.slidePosition);
    event.dataTransfer.setData("text/plain", String(draggedPosition));
    event.dataTransfer.effectAllowed = "move";
  });
  board.addEventListener("dragover", event => {
    const gap = event.target.closest(".slide-gap");
    if (gap && draggedPosition !== null && puzzle.movablePositions().includes(draggedPosition)) {
      event.preventDefault();
      gap.classList.add("is-ready");
    }
  });
  board.addEventListener("dragleave", event => event.target.closest(".slide-gap")?.classList.remove("is-ready"));
  board.addEventListener("drop", event => {
    const gap = event.target.closest(".slide-gap");
    if (!gap || draggedPosition === null) return;
    event.preventDefault();
    gap.classList.remove("is-ready");
    const tile = board.querySelector(`.slide-word[data-slide-position="${draggedPosition}"]`);
    if (tile) moveTile(draggedPosition, tile);
    draggedPosition = null;
  });
  board.addEventListener("dragend", () => {
    draggedPosition = null;
    board.querySelectorAll(".slide-gap").forEach(gap => gap.classList.remove("is-ready"));
  });
  root.querySelector("[data-slide-new]").addEventListener("click", () => startPuzzle(true));
  root.querySelector("[data-slide-reset]").addEventListener("click", () => {
    puzzle.reset(); render(); feedback.textContent = "The original scrambled board is back. Try a new route!";
  });
  root.querySelector("[data-slide-play-again]").addEventListener("click", () => startPuzzle(true));
  root.querySelector("[data-slide-share]").addEventListener("click", async () => {
    const text = `🧩 I solved Sliding Words in ${puzzle.moves} moves! 🎉\n\nCan you put all 8 words in order?\nhttps://improveyourenglish.vercel.app/sliding-words.html`;
    try {
      if (navigator.share) await navigator.share({ title: "Sliding Words", text });
      else { await navigator.clipboard.writeText(text); feedback.innerHTML = "<strong>Result copied!</strong> Paste it into WhatsApp or another app."; }
    } catch (error) {
      if (error.name !== "AbortError") feedback.textContent = "Sharing is unavailable. You can still take a screenshot of your result.";
    }
  });
  startPuzzle(true);
})();
