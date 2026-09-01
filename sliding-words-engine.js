(function (host) {
  "use strict";

  const sentences = [
    "My brother takes the bus to work daily.",
    "Our teacher explains grammar with very clear examples.",
    "The children are playing together in the garden.",
    "My parents did not watch the movie yesterday.",
    "Will you help your sister after dinner tonight?",
    "Students should read short English texts every day.",
    "The hotel will not charge us extra tomorrow.",
    "Have you ever visited another English speaking country?",
    "My best friend has already finished her homework.",
    "We are going to cook dinner at home.",
    "The little dog was sleeping under the table.",
    "You can learn useful expressions by watching movies.",
    "My sister does not drink coffee before work.",
    "We will have lunch outside if weather permits.",
    "The students were talking quietly during the lesson.",
    "Could you show me the nearest train station?",
    "There are several interesting books on that shelf.",
    "She usually calls her parents after work today."
  ];

  const splitSentence = sentence => sentence.split(/\s+/);
  const adjacent = (first, second) => {
    const rowDistance = Math.abs(Math.floor(first / 3) - Math.floor(second / 3));
    const columnDistance = Math.abs((first % 3) - (second % 3));
    return rowDistance + columnDistance === 1;
  };

  class SlidingPuzzle {
    constructor(sentence = sentences[0], random = Math.random) {
      const words = splitSentence(sentence);
      if (words.length !== 8) throw new Error("Sliding puzzle sentences must contain exactly 8 words.");
      this.sentence = sentence;
      this.words = words;
      this.random = random;
      this.board = [...Array(8).keys(), null];
      this.moves = 0;
      this.complete = false;
      this.scramble();
    }

    movablePositions() {
      const gap = this.board.indexOf(null);
      return this.board.map((_, index) => index).filter(index => adjacent(index, gap));
    }

    move(position, countMove = true) {
      if (this.complete || !this.movablePositions().includes(position)) return false;
      const gap = this.board.indexOf(null);
      [this.board[gap], this.board[position]] = [this.board[position], this.board[gap]];
      if (countMove) this.moves += 1;
      this.complete = this.isSolved();
      return true;
    }

    isSolved() {
      return this.board.every((tile, position) => position === 8 ? tile === null : tile === position);
    }

    scramble(steps = 90) {
      let previousGap = -1;
      for (let step = 0; step < steps; step += 1) {
        const gap = this.board.indexOf(null);
        let choices = this.movablePositions().filter(position => position !== previousGap);
        if (!choices.length) choices = this.movablePositions();
        const choice = choices[Math.floor(this.random() * choices.length)];
        previousGap = gap;
        this.move(choice, false);
        this.complete = false;
      }
      if (this.isSolved()) this.move(this.movablePositions()[0], false);
      this.moves = 0;
      this.complete = false;
      this.initialBoard = [...this.board];
    }

    reset() {
      this.board = [...this.initialBoard];
      this.moves = 0;
      this.complete = false;
    }
  }

  const api = { sentences, splitSentence, adjacent, SlidingPuzzle };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else host.SlidingWords = api;
})(typeof window !== "undefined" ? window : {});
