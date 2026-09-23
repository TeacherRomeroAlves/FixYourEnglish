(() => {
  const root = document.querySelector('[data-itsitis]');
  if (!root || !Array.isArray(window.ITSITIS_SITUATIONS)) return;
  const days = ['Friday', 'Saturday', 'Sunday'];
  const tokenValues = ["IT'S", 'IT', 'IS', "IT'S", 'IT', 'IS', "IT'S", 'IT', 'IS'];
  const intro = root.querySelector('[data-intro]');
  const round = root.querySelector('[data-round]');
  const finish = root.querySelector('[data-finish]');
  const bank = root.querySelector('[data-bank]');
  const paragraph = root.querySelector('[data-paragraph]');
  const feedback = root.querySelector('[data-feedback]');
  const nextButton = root.querySelector('[data-next]');
  let weekend = [];
  let dayIndex = 0;

  const shuffle = values => [...values].sort(() => Math.random() - .5);
  function setScene(element, situation) {
    const number = (situation.y * 3) + situation.x + 1;
    element.style.setProperty('--scene-image', `url('assets/itsitis-${situation.grid}-${String(number).padStart(2, '0')}.png')`);
    element.setAttribute('aria-label', situation.title);
  }
  function clearGap(gap) {
    const token = bank.querySelector(`[data-token-id="${gap.dataset.tokenId}"]`);
    if (token) token.classList.remove('is-used');
    gap.textContent = '';
    gap.dataset.value = '';
    gap.dataset.tokenId = '';
    gap.classList.remove('is-wrong', 'is-correct');
  }
  function placeToken(token, gap) {
    if (!token || token.classList.contains('is-used') || !gap) return;
    if (gap.dataset.tokenId) clearGap(gap);
    gap.textContent = token.dataset.value.replace("'", '’');
    gap.dataset.value = token.dataset.value;
    gap.dataset.tokenId = token.dataset.tokenId;
    token.classList.add('is-used');
    gap.classList.remove('is-wrong', 'is-correct');
    feedback.textContent = '';
    round.classList.remove('is-complete');
  }
  function firstEmptyGap() { return [...paragraph.querySelectorAll('[data-gap]')].find(gap => !gap.dataset.value); }
  function renderBank() {
    bank.innerHTML = tokenValues.map((value, index) => `<button class="itsitis-token" type="button" draggable="true" data-token-id="token-${index}" data-value="${value}">${value.replace("'", '’')}</button>`).join('');
  }
  function renderParagraph(situation) {
    paragraph.innerHTML = situation.parts.map((part, index) => `${part}${index < situation.answers.length ? `<button class="itsitis-gap" type="button" data-gap="${index}" aria-label="Gap ${index + 1}"></button>` : ''}`).join('');
  }
  function updateDayDots() {
    root.querySelectorAll('[data-day-dot]').forEach((dot, index) => {
      dot.classList.toggle('is-current', index === dayIndex);
      dot.classList.toggle('is-done', index < dayIndex);
    });
  }
  function showDay() {
    const situation = weekend[dayIndex];
    root.querySelector('[data-day-number]').textContent = `Day ${dayIndex + 1}`;
    root.querySelector('[data-day]').textContent = days[dayIndex];
    root.querySelector('[data-scene-title]').textContent = situation.title;
    setScene(root.querySelector('[data-scene]'), situation);
    renderBank();
    renderParagraph(situation);
    feedback.textContent = '';
    nextButton.hidden = true;
    nextButton.textContent = dayIndex === 2 ? 'Finish the weekend' : 'Continue to the next day';
    root.querySelector('[data-check]').disabled = false;
    root.querySelector('[data-clear]').disabled = false;
    updateDayDots();
  }
  function startGame() {
    weekend = shuffle(window.ITSITIS_SITUATIONS).slice(0, 3);
    dayIndex = 0;
    intro.hidden = true;
    finish.hidden = true;
    round.hidden = false;
    showDay();
  }
  root.querySelector('[data-start]').addEventListener('click', startGame);
  root.querySelector('[data-restart]').addEventListener('click', startGame);
  bank.addEventListener('click', event => {
    if (round.classList.contains('is-complete')) return;
    const token = event.target.closest('[data-token-id]');
    if (token) placeToken(token, firstEmptyGap());
  });
  bank.addEventListener('dragstart', event => {
    const token = event.target.closest('[data-token-id]');
    if (!token || token.classList.contains('is-used')) return event.preventDefault();
    event.dataTransfer.setData('text/plain', token.dataset.tokenId);
  });
  paragraph.addEventListener('click', event => {
    if (round.classList.contains('is-complete')) return;
    const gap = event.target.closest('[data-gap]');
    if (gap?.dataset.tokenId) clearGap(gap);
  });
  paragraph.addEventListener('dragover', event => { if (event.target.closest('[data-gap]')) event.preventDefault(); });
  paragraph.addEventListener('drop', event => {
    const gap = event.target.closest('[data-gap]');
    if (!gap) return;
    event.preventDefault();
    placeToken(bank.querySelector(`[data-token-id="${event.dataTransfer.getData('text/plain')}"]`), gap);
  });
  root.querySelector('[data-clear]').addEventListener('click', () => {
    paragraph.querySelectorAll('[data-gap]').forEach(clearGap);
    feedback.textContent = '';
  });
  root.querySelector('[data-check]').addEventListener('click', () => {
    const gaps = [...paragraph.querySelectorAll('[data-gap]')];
    if (gaps.some(gap => !gap.dataset.value)) { feedback.textContent = 'Complete all six gaps before checking the story.'; return; }
    const answers = weekend[dayIndex].answers;
    let correct = 0;
    gaps.forEach((gap, index) => {
      const matches = gap.dataset.value === answers[index];
      gap.classList.toggle('is-correct', matches);
      gap.classList.toggle('is-wrong', !matches);
      if (matches) correct += 1;
    });
    if (correct === answers.length) {
      feedback.textContent = `Excellent! You discovered what happened on ${days[dayIndex]}.`;
      nextButton.hidden = false;
      root.querySelector('[data-check]').disabled = true;
      root.querySelector('[data-clear]').disabled = true;
      round.classList.add('is-complete');
    } else feedback.textContent = `${correct} of ${answers.length} gaps are correct. Change the red gaps and try again.`;
  });
  nextButton.addEventListener('click', () => {
    if (dayIndex < 2) { dayIndex += 1; showDay(); return; }
    round.hidden = true;
    finish.hidden = false;
    root.querySelector('[data-share-feedback]').textContent = '';
  });
  root.querySelector('[data-share]').addEventListener('click', async () => {
    const text = "🎉 I discovered what happened during IT'SITIS's whole weekend! 👀 Can you complete the three stories too?";
    const url = 'https://improveyourenglish.vercel.app/itsitis.html';
    try {
      if (navigator.share) { await navigator.share({ title: "IT'SITIS", text, url }); return; }
      window.open(`https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`, '_blank', 'noopener');
      root.querySelector('[data-share-feedback]').textContent = 'Your share message is ready.';
    } catch (error) {
      if (error.name !== 'AbortError') root.querySelector('[data-share-feedback]').textContent = 'Sharing was not available. You can share this page link instead.';
    }
  });
})();
