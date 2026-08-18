const writingTests = {
  1: {
    sentences: [
      ["What was the highlight of your trip?", ["were", "the", "was", "old city", "showed us around", "who", "tour guides", "the", "fantastic"], ["the", "tour guides", "who", "showed us around", "the", "old city", "were", "fantastic"]],
      ["I heard Anna got a promotion.", ["a different department", "if", "moving to", "know", "do", "you", "she will be"], ["do", "you", "know", "if", "she will be", "moving to", "a different department"]],
      ["We're planning a trip to the mountains next weekend.", ["the cabins", "available", "whether", "can", "will be", "you", "tell me"], ["can", "you", "tell me", "whether", "the cabins", "will be", "available"]],
      ["I'm looking forward to the concert this weekend.", ["does", "what", "time", "it", "start"], ["what", "time", "does", "it", "start"]],
      ["The museum exhibition opens next month.", ["do", "you", "how", "know", "tickets", "will cost", "much"], ["do", "you", "know", "how", "much", "tickets", "will cost"]],
      ["I'm planning to go to the beach tomorrow.", ["is", "time of year", "what", "the water", "this", "like", "temperature"], ["what", "is", "the water", "temperature", "like", "this", "time of year"]],
      ["I need to buy groceries today.", ["list", "do", "a", "have", "shopping", "you"], ["do", "you", "have", "a", "shopping", "list"]],
      ["I'll be taking a cooking class this weekend.", ["learn", "what", "will", "you", "recipes"], ["what", "recipes", "will", "you", "learn"]],
      ["What did Maria ask you about the book you're reading?", ["she", "wanted", "a copy", "buy", "to know", "could", "where", "she"], ["she", "wanted", "to know", "where", "she", "could", "buy", "a copy"]],
      ["How did you prepare for the exam?", ["by", "the professor", "that", "the study guide", "was provided", "I", "used"], ["I", "used", "the study guide", "that", "was provided", "by", "the professor"]]
    ],
    email: {
      scenario: "A new poetry magazine has asked its readers for submissions, and you submitted two poems. However, you had a problem with the online form and are not certain that your submissions were received.",
      recipient: "editor@sunshinepoetrymagazine.com",
      subject: "Problem using submission form",
      goals: ["Tell the editor what you like about the new magazine.", "Describe the problem you experienced.", "Ask about the status of your submissions."]
    },
    discussion: {
      course: "Social Studies",
      professor: "Some institutions require volunteer service. High schools, for example, may require students to complete volunteer hours before graduation. Should high school students be required to do volunteer work? Why or why not?",
      students: [
        ["Lena", "Schools should require volunteer hours because service helps students develop civic responsibility and see how their effort can benefit others."],
        ["Andrew", "Volunteer work should not be mandatory. Many students already balance school, jobs, and family responsibilities, so another requirement could create unfair stress."]
      ]
    }
  },
  2: {
    sentences: [
      ["I need to buy a new laptop.", ["has", "the best", "which", "store", "deals"], ["which", "store", "has", "the best", "deals"]],
      ["I'm thinking about starting a blog.", ["decided", "you", "a topic", "have", "on", "yet"], ["have", "you", "decided", "on", "a topic", "yet"]],
      ["I'm going to study at the library this afternoon.", ["to", "do", "borrow", "any books", "you", "need"], ["do", "you", "need", "to", "borrow", "any books"]],
      ["I'm thinking about getting a pet.", ["are", "you", "considering", "kind", "of", "what", "animal"], ["what", "kind", "of", "animal", "are", "you", "considering"]],
      ["I'm excited to see the new science fiction movie tonight.", ["it", "showing", "is", "where"], ["where", "is", "it", "showing"]],
      ["I have an interview for a new job next week.", ["ready", "resume", "have", "you", "do", "your"], ["do", "you", "have", "your", "resume", "ready"]],
      ["I need to submit my assignment by tomorrow.", ["writing", "finished", "you", "it", "have"], ["have", "you", "finished", "writing", "it"]],
      ["I'm planning a trip to Europe this summer.", ["did", "flight", "you", "yet", "book", "your"], ["did", "you", "book", "your", "flight", "yet"]],
      ["I just started learning French.", ["you", "taking", "are", "where", "classes"], ["where", "are", "you", "taking", "classes"]],
      ["Why are you asking about the project deadline?", ["checking", "to see", "if", "has been", "extended", "it", "I'm"], ["I'm", "checking", "to see", "if", "it", "has been", "extended"]]
    ],
    email: {
      scenario: "Your coworker Kevin recommended a new restaurant for your team. You took the team there, but everyone was disappointed because the food was not as good as expected and the service was slow.",
      recipient: "Kevin",
      subject: "Team lunch experience",
      goals: ["Explain what was wrong with the restaurant.", "Describe the team's reaction to the visit.", "Suggest alternative lunch arrangements."]
    },
    discussion: {
      course: "Psychology",
      professor: "Regular physical activity can improve mood and reduce stress, while some people believe mental health is influenced more strongly by genetics and the environment. Which plays a larger role in mental health? Why?",
      students: [
        ["Maya", "Exercise has a significant positive impact because it can reduce stress, improve mood, and support overall well-being."],
        ["Jordan", "Exercise matters, but genetics and a supportive environment may play a larger role in a person's long-term mental health."]
      ]
    }
  },
  3: {
    sentences: [
      ["The campus tour starts at ten.", ["where", "meet", "we", "should"], ["where", "should", "we", "meet"]],
      ["I missed yesterday's biology lecture.", ["notes", "could", "your", "borrow", "I"], ["could", "I", "borrow", "your", "notes"]],
      ["The library closes earlier now.", ["why", "changed", "do", "the schedule", "you know"], ["do", "you know", "why", "the schedule", "changed"]],
      ["I'm applying for a summer internship.", ["deadline", "when", "the", "is", "application"], ["when", "is", "the", "application", "deadline"]],
      ["Our professor assigned a research presentation.", ["topic", "have", "chosen", "you", "a"], ["have", "you", "chosen", "a", "topic"]],
      ["The student center is organizing a concert.", ["performing", "who", "know", "do", "you", "is"], ["do", "you", "know", "who", "is", "performing"]],
      ["I want to join the debate club.", ["meetings", "held", "are", "where", "the"], ["where", "are", "the", "meetings", "held"]],
      ["My statistics assignment is difficult.", ["help", "tutor", "could", "a", "me", "find", "you"], ["could", "you", "help", "me", "find", "a", "tutor"]],
      ["What did Rosa say about the workshop?", ["that", "useful", "extremely", "it", "was", "she said"], ["she said", "that", "it", "was", "extremely", "useful"]],
      ["Why are you going to the administration office?", ["student ID", "need", "replaced", "I", "my"], ["I", "need", "my", "student ID", "replaced"]]
    ],
    email: {
      scenario: "Your university library recently changed its opening hours. It now closes much earlier, and many students are unhappy because they cannot study there in the evening. You want to write to the library director about the situation.",
      recipient: "director@universitylibrary.edu",
      subject: "Library opening hours",
      goals: ["Explain why the library is important for students.", "Describe the problem with the new schedule.", "Suggest a possible solution."]
    },
    discussion: {
      course: "Sociology",
      professor: "Living in urban areas can be expensive, but many people still prefer cities to rural areas. If governments want to attract more people to live in rural areas or villages, what is the best strategy they can use? Why?",
      students: [
        ["Claire", "Governments should offer financial support for housing, education, or new farms. Lower starting costs could make rural life realistic for more families."],
        ["Kelly", "Rural areas first need stronger services and cultural opportunities. People may not move if they cannot easily access shops, health care, entertainment, and reliable internet."]
      ]
    }
  },
  4: {
    sentences: [
      ["The language school offers conversation classes.", ["level", "which", "for", "suitable", "is", "beginners"], ["which", "level", "is", "suitable", "for", "beginners"]],
      ["My classroom is always very noisy.", ["another room", "could", "move", "we", "to"], ["could", "we", "move", "to", "another room"]],
      ["I downloaded the new learning app.", ["used", "have", "it", "yet", "you"], ["have", "you", "used", "it", "yet"]],
      ["Our teacher recommended an English podcast.", ["called", "remember", "it", "what", "do", "you", "is"], ["do", "you", "remember", "what", "it", "is", "called"]],
      ["The school is planning an international day.", ["can", "students", "participate", "how"], ["how", "can", "students", "participate"]],
      ["I have trouble understanding fast speech.", ["practice", "suggest", "what", "do", "you"], ["what", "practice", "do", "you", "suggest"]],
      ["We're taking a placement test tomorrow.", ["long", "will", "know", "do", "last", "how", "it", "you"], ["do", "you", "know", "how", "long", "it", "will", "last"]],
      ["The coordinator announced a schedule change.", ["classes", "start", "earlier", "will", "now"], ["will", "classes", "start", "earlier", "now"]],
      ["What did Ben ask about the course?", ["included", "materials", "whether", "wanted to know", "were", "he"], ["he", "wanted to know", "whether", "materials", "were", "included"]],
      ["Why are you recording yourself speaking?", ["pronunciation", "so that", "check", "I can", "my"], ["so that", "I can", "check", "my", "pronunciation"]]
    ],
    email: {
      scenario: "You recently started taking classes at a language school. Although you like the teacher, the classroom is too small and very noisy, which makes it difficult to concentrate. You want to write to the school coordinator.",
      recipient: "coordinator@globalenglishschool.com",
      subject: "Classroom environment concern",
      goals: ["Say what you like about the course.", "Describe the classroom problem.", "Suggest an improvement."]
    },
    discussion: {
      course: "Environmental Science",
      professor: "Governments want to reduce carbon dioxide emissions from cars. One proposal is to improve public transportation. Another is to provide financial support to electric-car manufacturers and consumers. Which proposal is better? Why?",
      students: [
        ["Claire", "Improving public transportation would help more people and reduce the number of cars on the road, especially if buses and trains became cheaper and more convenient."],
        ["Paul", "Financial support for electric cars may be a better long-term strategy because people in rural areas often need personal vehicles and cannot benefit from urban train systems."]
      ]
    }
  },
  5: {
    sentences: [
      ["Our group project is due next Friday.", ["finished", "your section", "have", "you"], ["have", "you", "finished", "your section"]],
      ["One teammate has missed every meeting.", ["contacted", "anyone", "has", "him"], ["has", "anyone", "contacted", "him"]],
      ["We need to divide the remaining work.", ["take", "task", "which", "you", "can"], ["which", "task", "can", "you", "take"]],
      ["The professor wants a progress report.", ["include", "should", "what", "we"], ["what", "should", "we", "include"]],
      ["I'm worried we won't finish on time.", ["extension", "ask", "we", "for", "should", "an"], ["should", "we", "ask", "for", "an", "extension"]],
      ["Maria created the presentation slides.", ["reviewed", "have", "them", "you"], ["have", "you", "reviewed", "them"]],
      ["We are meeting online this evening.", ["sent", "link", "the", "has", "been"], ["has", "the", "link", "been", "sent"]],
      ["The research results are surprising.", ["them", "explain", "how", "will", "we"], ["how", "will", "we", "explain", "them"]],
      ["What did the professor recommend?", ["roles", "assign", "clearly", "that", "we", "she suggested"], ["she suggested", "that", "we", "assign", "roles", "clearly"]],
      ["Why did you email the whole group?", ["everyone", "because", "update", "needed", "an"], ["because", "everyone", "needed", "an", "update"]]
    ],
    email: {
      scenario: "You are working on a group project for one of your classes. One member has not attended meetings or completed their part of the work. You want to inform your professor about the situation.",
      recipient: "professor.smith@university.edu",
      subject: "Concern about group project",
      goals: ["Explain the purpose of the group project.", "Describe the problem with your teammate.", "Ask for advice on how to proceed."]
    },
    discussion: {
      course: "Education",
      professor: "Educational computer games for children aged two to eight often teach basic math and reading in a playful way, but critics worry about excessive screen time. Is it a good idea for very young children to play educational computer games? Why or why not?",
      students: [
        ["Andrew", "Very young children can learn the same skills through books and direct interaction with adults, which may be healthier than spending additional time looking at screens."],
        ["Kelly", "Educational games can help children become comfortable with technology and introduce school subjects early, especially when adults choose suitable games and set limits."]
      ]
    }
  }
};

const root = document.querySelector("[data-toefl-writing]");
if (root) {
  const $ = (selector) => root.querySelector(selector);
  const $$ = (selector) => Array.from(root.querySelectorAll(selector));
  const testButtons = $$('[data-writing-test-button]');
  const content = $('[data-writing-content]');
  const exportPanel = $('[data-writing-export]');
  const buildList = $('[data-build-list]');
  const buildFeedback = $('[data-build-feedback]');
  const buildProgress = $('[data-build-progress]');
  const buildBackButton = $('[data-build-back]');
  const buildNextButton = $('[data-build-next]');
  const buildQuestionProgress = $('[data-build-question-progress]');
  const buildDots = $('[data-build-dots]');
  const emailResponse = $('[data-email-response]');
  const discussionResponse = $('[data-discussion-response]');
  let selectedTest = 1;
  let currentBuildQuestion = 0;
  let dragPiece = null;
  let restoreAfterPrint = null;
  const taskTimers = new Map();

  const normalize = (text) => text.toLowerCase().replace(/[?.!,]/g, "").replace(/\s+/g, " ").trim();
  const countWords = (text) => text.trim() ? text.trim().split(/\s+/).length : 0;
  const formatTime = (seconds) => `${seconds < 0 ? "-" : ""}${String(Math.floor(Math.abs(seconds) / 60)).padStart(2, "0")}:${String(Math.abs(seconds) % 60).padStart(2, "0")}`;

  const stopTaskTimer = (state) => { if (state.interval) clearInterval(state.interval); state.interval = null; };
  const renderTaskTimer = (state) => {
    state.value.textContent = formatTime(state.remaining);
    const overtime = state.remaining < 0;
    state.panel.classList.toggle("is-overtime", overtime);
    if (overtime) { state.label.textContent = "Overtime"; state.status.textContent = "Time is up, but you can continue. Overtime is being counted."; }
  };
  const runTaskTimer = (state) => {
    stopTaskTimer(state);
    state.deadline = Date.now() + state.remaining * 1000;
    state.interval = setInterval(() => { state.remaining = Math.ceil((state.deadline - Date.now()) / 1000); renderTaskTimer(state); }, 250);
  };
  const resetTaskTimers = () => {
    taskTimers.forEach((state) => {
      stopTaskTimer(state); state.remaining = state.duration; state.paused = false; state.started = false;
      state.panel.classList.remove("is-overtime", "is-paused"); state.value.textContent = formatTime(state.duration);
      state.label.textContent = "Ready"; state.status.textContent = "Your timer starts only when you click Start.";
      state.start.hidden = false; state.pause.hidden = true; state.pause.textContent = "Pause";
    });
  };

  const movePiece = (piece, destination) => {
    destination.append(piece);
    updateProgress();
  };
  const wirePiece = (piece) => {
    piece.addEventListener("click", () => {
      const item = piece.closest(".build-sentence-item");
      movePiece(piece, piece.parentElement.matches("[data-build-bank]") ? item.querySelector("[data-build-answer]") : item.querySelector("[data-build-bank]"));
    });
    piece.addEventListener("dragstart", () => { dragPiece = piece; piece.classList.add("is-dragging"); });
    piece.addEventListener("dragend", () => { dragPiece = null; piece.classList.remove("is-dragging"); });
  };
  const wireDropZone = (zone) => {
    zone.addEventListener("dragover", (event) => { event.preventDefault(); zone.classList.add("is-drag-over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("is-drag-over"));
    zone.addEventListener("drop", (event) => { event.preventDefault(); zone.classList.remove("is-drag-over"); if (dragPiece) movePiece(dragPiece, zone); });
  };
  const getDistractors = (index, testNumber, answer) => {
    if (index < 2) return [];
    const sentence = answer.join(" ").toLowerCase();
    const firstPiece = answer[0].toLowerCase();
    let candidates;

    if (sentence.includes("whether") || sentence.includes(" if ")) {
      candidates = ["that it", "does it", "will they be", "that was"];
    } else if (sentence.includes("wanted to know") || sentence.includes("she said") || sentence.includes("she suggested")) {
      candidates = ["did she", "was she", "was asking", "does she"];
    } else if (/\b(was|were|been|held|provided|replaced|included|extended)\b/.test(sentence)) {
      candidates = ["did it", "was being", "have they", "by them"];
    } else if (["what", "where", "when", "which", "how", "who"].includes(firstPiece)) {
      candidates = ["do you", "does it", "were they", "to know"];
    } else if (["do", "does", "did", "can", "could", "will", "should", "have", "has"].includes(firstPiece)) {
      candidates = ["does she", "did they", "has been", "to do"];
    } else if (["because", "so that"].includes(firstPiece)) {
      candidates = ["why did", "because of", "in order to", "did everyone"];
    } else {
      candidates = ["did she", "were they", "has been", "to have"];
    }

    const available = candidates.filter((piece) => !answer.includes(piece));
    const rotated = available.slice((index + testNumber) % available.length).concat(available.slice(0, (index + testNumber) % available.length));
    return rotated.slice(0, index >= 7 ? 2 : 1);
  };
  const updateProgress = () => {
    const complete = $$('[data-build-answer]').filter((zone, index) => zone.children.length === writingTests[selectedTest].sentences[index][2].length).length;
    buildProgress.textContent = `${complete} of 10 complete`;
    Array.from(buildDots.children).forEach((dot, index) => {
      const zone = $$('[data-build-answer]')[index];
      dot.classList.toggle("is-answered", Boolean(zone) && zone.children.length === writingTests[selectedTest].sentences[index][2].length);
      dot.classList.toggle("is-current", index === currentBuildQuestion);
    });
  };
  const showBuildQuestion = (index, direction = "next") => {
    const items = $$('.build-sentence-item');
    currentBuildQuestion = Math.max(0, Math.min(index, items.length - 1));
    items.forEach((item, itemIndex) => {
      item.hidden = itemIndex !== currentBuildQuestion;
      item.classList.remove("is-entering-next", "is-entering-back");
      if (itemIndex === currentBuildQuestion) {
        void item.offsetWidth;
        item.classList.add(direction === "back" ? "is-entering-back" : "is-entering-next");
      }
    });
    buildQuestionProgress.textContent = `Sentence ${currentBuildQuestion + 1} of ${items.length}`;
    buildBackButton.disabled = currentBuildQuestion === 0;
    buildNextButton.disabled = currentBuildQuestion === items.length - 1;
    updateProgress();
  };

  buildBackButton.addEventListener("click", () => showBuildQuestion(currentBuildQuestion - 1, "back"));
  buildNextButton.addEventListener("click", () => showBuildQuestion(currentBuildQuestion + 1, "next"));

  const renderTest = () => {
    const test = writingTests[selectedTest];
    buildList.innerHTML = "";
    buildDots.innerHTML = "";
    test.sentences.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = "toefl-question-dot";
      dot.title = `Sentence ${index + 1}`;
      buildDots.append(dot);
    });
    test.sentences.forEach(([prompt, bank, answer], index) => {
      const item = document.createElement("article");
      item.className = "build-sentence-item";
      item.innerHTML = `<div class="build-sentence-number">${index + 1}</div><div class="build-sentence-work"><p class="build-conversation-line">${prompt}</p><div class="build-answer-zone" data-build-answer aria-label="Your sentence"></div><div class="build-bank" data-build-bank aria-label="Word bank"></div></div>`;
      const firstAnswerPiece = answer[0].toLowerCase();
      item.querySelector("[data-build-answer]").dataset.ending = ["the", "she", "i", "i'm", "because", "so that"].includes(firstAnswerPiece) ? "." : "?";
      const bankZone = item.querySelector("[data-build-bank]");
      const displayBank = [...bank];
      getDistractors(index, selectedTest, answer).forEach((piece, distractorIndex) => {
        const position = (selectedTest * 3 + index * 2 + distractorIndex * 4) % (displayBank.length + 1);
        displayBank.splice(position, 0, piece);
      });
      displayBank.forEach((text, pieceIndex) => {
        const piece = document.createElement("button");
        piece.type = "button"; piece.className = "build-piece"; piece.draggable = true; piece.textContent = text; piece.dataset.pieceId = `${index}-${pieceIndex}`;
        wirePiece(piece); bankZone.append(piece);
      });
      item.querySelectorAll("[data-build-bank], [data-build-answer]").forEach(wireDropZone);
      buildList.append(item);
    });
    showBuildQuestion(0);
    const email = test.email;
    $('[data-email-prompt]').innerHTML = `<p class="panel-kicker">Situation</p><p>${email.scenario}</p><h3>Write an email. In your email:</h3><ul>${email.goals.map((goal) => `<li>${goal}</li>`).join("")}</ul>`;
    $('[data-email-header]').innerHTML = `<p><strong>To:</strong> ${email.recipient}</p><p><strong>Subject:</strong> ${email.subject}</p>`;
    const discussion = test.discussion;
    const courseIcons = { "Social Studies": "🌍", Psychology: "🧠", Sociology: "🏘️", "Environmental Science": "🌱", Education: "📚" };
    $('[data-discussion-prompt]').innerHTML = `<div class="discussion-professor"><div class="discussion-avatar professor-avatar"><span>👩‍🏫</span><small>Professor</small></div><div><span>${courseIcons[discussion.course] || "💬"} ${discussion.course}</span><p>${discussion.professor}</p></div></div><div class="discussion-student-posts">${discussion.students.map(([name, post], index) => `<div class="discussion-student" style="--post-order:${index}"><div class="discussion-avatar"><span>${index === 0 ? "👩‍🎓" : "👨‍🎓"}</span><small>${name}</small></div><p>${post}</p></div>`).join("")}</div>`;
    emailResponse.value = ""; discussionResponse.value = "";
    $('[data-email-count]').textContent = "0"; $('[data-discussion-count]').textContent = "0";
    buildFeedback.textContent = "Build all ten replies. This practice task does not reveal or score the answers.";
    updateProgress();
  };

  $$('[data-task-timer]').forEach((panel) => {
    const state = {
      panel,
      duration: Number(panel.dataset.duration),
      remaining: Number(panel.dataset.duration),
      interval: null,
      deadline: null,
      paused: false,
      started: false,
      value: panel.querySelector('[data-task-timer-value]'),
      label: panel.querySelector('[data-task-timer-label]'),
      status: panel.querySelector('[data-task-timer-status]'),
      start: panel.querySelector('[data-task-timer-start]'),
      pause: panel.querySelector('[data-task-timer-pause]')
    };
    taskTimers.set(panel, state);
    state.start.addEventListener('click', () => {
      stopTaskTimer(state); state.remaining = state.duration; state.paused = false; state.started = true;
      state.panel.classList.remove('is-overtime', 'is-paused'); state.label.textContent = 'Time remaining';
      state.status.textContent = 'Work on this task before the timer reaches zero.'; state.start.hidden = true; state.pause.hidden = false; state.pause.textContent = 'Pause';
      renderTaskTimer(state); runTaskTimer(state);
    });
    state.pause.addEventListener('click', () => {
      state.paused = !state.paused; state.panel.classList.toggle('is-paused', state.paused);
      if (state.paused) { stopTaskTimer(state); state.pause.textContent = 'Resume'; state.status.textContent = 'Timer paused. Resume when you are ready.'; }
      else { state.pause.textContent = 'Pause'; state.status.textContent = state.remaining < 0 ? 'Time is up, but you can continue. Overtime is being counted.' : 'Work on this task before the timer reaches zero.'; runTaskTimer(state); }
    });
  });

  const prepareTest = () => {
    resetTaskTimers(); content.hidden = false; exportPanel.hidden = false;
    renderTest();
  };

  testButtons.forEach((button) => button.addEventListener("click", () => {
    selectedTest = Number(button.dataset.writingTestButton);
    testButtons.forEach((item) => { const active = item === button; item.classList.toggle("is-active", active); item.setAttribute("aria-pressed", String(active)); });
    prepareTest();
  }));
  $('[data-build-reset]').addEventListener("click", () => {
    $$('.build-sentence-item').forEach((item) => {
      const bank = item.querySelector('[data-build-bank]');
      Array.from(item.querySelectorAll('.build-piece'))
        .sort((a, b) => Number(a.dataset.pieceId.split('-')[1]) - Number(b.dataset.pieceId.split('-')[1]))
        .forEach((piece) => bank.append(piece));
    });
    buildFeedback.textContent = "Build all ten replies. This practice task does not reveal or score the answers.";
    showBuildQuestion(0, "back");
  });

  emailResponse.addEventListener("input", () => { $('[data-email-count]').textContent = countWords(emailResponse.value); });
  discussionResponse.addEventListener("input", () => { const count = countWords(discussionResponse.value); $('[data-discussion-count]').textContent = count; $('.discussion-count').classList.toggle("has-target", count >= 100); });

  const buildShareText = () => {
    const sentences = $$('[data-build-answer]').map((zone, index) => `${index + 1}. ${Array.from(zone.children, (piece) => piece.textContent).join(" ")}`).join("\n");
    return `TOEFL iBT Writing - Mock Test ${selectedTest}\n\nBUILD A SENTENCE\n${sentences}\n\nEMAIL RESPONSE\n${emailResponse.value || "No response written."}\n\nACADEMIC DISCUSSION\n${discussionResponse.value || "No response written."}`;
  };
  const buildTaskShareText = (task) => {
    if (task === 'sentences') {
      const sentences = $$('[data-build-answer]').map((zone, index) => {
        const response = Array.from(zone.children, (piece) => piece.textContent).join(' ');
        return `${index + 1}. ${response}${response ? zone.dataset.ending : ''}`;
      }).join('\n');
      return `TOEFL iBT Writing - Mock Test ${selectedTest}\nBUILD A SENTENCE\n\n${sentences}`;
    }
    if (task === 'email') return `TOEFL iBT Writing - Mock Test ${selectedTest}\nWRITE AN EMAIL\nTo: ${writingTests[selectedTest].email.recipient}\nSubject: ${writingTests[selectedTest].email.subject}\n\n${emailResponse.value || 'No response written.'}`;
    return `TOEFL iBT Writing - Mock Test ${selectedTest}\nACADEMIC DISCUSSION\n\n${discussionResponse.value || 'No response written.'}`;
  };
  $$('[data-share-task]').forEach((button) => button.addEventListener('click', async () => {
    const task = button.dataset.shareTask;
    const feedback = task === 'sentences' ? buildFeedback : $(`[data-task-share-feedback="${task}"]`);
    const shareText = buildTaskShareText(task);
    try {
      if (navigator.share) { await navigator.share({ title: `TOEFL Writing - ${task}`, text: shareText }); feedback.innerHTML = '<strong>This exercise was shared successfully.</strong>'; }
      else { await navigator.clipboard.writeText(shareText); feedback.innerHTML = '<strong>This exercise was copied.</strong> Paste it into WhatsApp, email, or another app.'; }
    } catch { feedback.innerHTML = '<strong>Sharing was canceled or unavailable.</strong> You can still use the full-test PDF buttons.'; }
  }));
  $('[data-writing-share]').addEventListener("click", async () => {
    const feedback = $('[data-writing-share-feedback]');
    try {
      if (navigator.share) { await navigator.share({ title: `TOEFL Writing Mock Test ${selectedTest}`, text: buildShareText() }); feedback.innerHTML = "<strong>Responses shared successfully.</strong>"; }
      else { await navigator.clipboard.writeText(buildShareText()); feedback.innerHTML = "<strong>Responses copied.</strong> Paste them into WhatsApp, email, or another app."; }
    } catch { feedback.innerHTML = "<strong>Sharing was canceled or unavailable.</strong> You can use Save PDF instead."; }
  });

  const finishPrint = () => { if (restoreAfterPrint) { restoreAfterPrint(); restoreAfterPrint = null; } };
  const printTest = (withAnswers) => {
    finishPrint();
    const textValues = [emailResponse.value, discussionResponse.value];
    const answerZones = $$('[data-build-answer]');
    const bankZones = $$('[data-build-bank]');
    const pieceStates = $$('.build-piece').map((piece) => ({ piece, parent: piece.parentElement, order: Array.from(piece.parentElement.children).indexOf(piece) }));
    if (!withAnswers) { emailResponse.value = ""; discussionResponse.value = ""; answerZones.forEach((zone) => { Array.from(zone.children).forEach((piece) => bankZones[answerZones.indexOf(zone)].append(piece)); }); }
    document.body.classList.add("toefl-writing-printing");
    $('[data-writing-print-title]').textContent = `Mock Test ${selectedTest}`;
    $('[data-writing-print-mode]').textContent = withAnswers ? "Student Answer Copy" : "Blank Homework";
    restoreAfterPrint = () => {
      textValues.forEach((value, index) => { [emailResponse, discussionResponse][index].value = value; });
      pieceStates.forEach(({ piece }) => piece.remove());
      const parents = [...new Set(pieceStates.map(({ parent }) => parent))];
      parents.forEach((parent) => pieceStates.filter((state) => state.parent === parent).sort((a, b) => a.order - b.order).forEach(({ piece }) => parent.append(piece)));
      document.body.classList.remove("toefl-writing-printing"); updateProgress();
    };
    requestAnimationFrame(() => window.print());
  };
  $('[data-writing-print-blank]').addEventListener("click", () => printTest(false));
  $('[data-writing-print-answers]').addEventListener("click", () => printTest(true));
  window.addEventListener("afterprint", finishPrint);
  window.addEventListener("focus", () => { if (document.body.classList.contains("toefl-writing-printing")) setTimeout(finishPrint, 300); });

  prepareTest();
}
