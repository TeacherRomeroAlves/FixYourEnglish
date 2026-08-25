const extraReadingTests = [
  {
    id: 8, cloze: { title: "How Mangroves Protect Coasts", parts: [
      "Mangrove forests grow where tropical coastlines meet the sea. Unlike most trees, they can survive in salty water and oxygen-poor soil. Their tan", ["gled", "tangled"], " roots tr", ["ap", "trap"], " sediment and sl", ["ow", "slow"], " moving w", ["ater", "water"], ", which he", ["lps", "helps"], " reduce erosion. During st", ["orms", "storms"], ", the dense vegetation ab", ["sorbs", "absorbs"], " wave energy and pro", ["tects", "protects"], " nearby com", ["munities", "communities"], ". Mangroves also pro", ["vide", "provide"], " nurseries for young fish and store large amounts of carbon. For this reason, restoring mangrove forests can benefit both coastal residents and marine ecosystems."
    ]},
    daily: { title: "Transit Update and Workshop Invitation", docs: [
      { label: "City Transit Authority", heading: "Temporary route change", text: "Beginning Tuesday, Route 14 buses will avoid Central Avenue while water pipes are replaced. Riders traveling to City Hall should exit at Pine Street and walk two blocks east. The temporary stop beside the pharmacy will operate from 6:00 a.m. to 9:00 p.m. Although construction is expected to last ten days, heavy rain could extend the schedule.", questions: [
        ["Why is Route 14 changing?", ["A public event is closing City Hall.", "Roadwork is affecting its usual path.", "The pharmacy requested a new stop.", "The route is becoming permanently shorter."], 1, "lower"],
        ["What should a passenger going to City Hall do?", ["Transfer to a train at Central Avenue.", "Wait beside the pharmacy after 9:00 p.m.", "Leave the bus at Pine Street and continue on foot.", "Remain on the bus for two additional stops."], 2, "lower"],
        ["What does the notice imply about the ten-day estimate?", ["It depends partly on weather conditions.", "It includes a permanent trial period.", "It applies only to morning passengers.", "It will be shortened if ridership falls."], 0, "upper"]
      ]},
      { label: "Riverside Makers Club", heading: "Repair your household items", text: "Instead of throwing away a broken lamp, toaster, or fan, bring it to Saturday's repair workshop. Volunteer technicians will explain the problem and help you attempt a repair. Participation is free, but replacement parts must be purchased by the owner. For safety reasons, microwaves and devices with damaged batteries cannot be accepted.", questions: [
        ["Which item would the workshop refuse?", ["A lamp with a loose wire", "A toaster that does not heat", "A fan with a broken switch", "A phone with a damaged battery"], 3, "lower"],
        ["What is the workshop primarily designed to do?", ["Provide free professional repair guarantees", "Teach owners while reducing unnecessary waste", "Sell replacement appliances at low prices", "Collect electronics for commercial recycling"], 1, "upper"]
      ]},
    ]},
    academic: { title: "The Recovery of Forests", paragraphs: [
      "A forest disturbed by fire, farming, or severe weather does not simply return to its former condition all at once. Recovery generally occurs through ecological succession, a sequence in which different communities of organisms become established over time.",
      "Early colonizers are often grasses and fast-growing plants whose seeds travel easily. They stabilize soil and add organic material when they die. Shrubs and young trees may then take root, gradually producing shade that changes which species can survive. Later trees are not inherently superior; they are better suited to the conditions created by earlier communities.",
      "Succession does not always lead to a single predictable endpoint. Rainfall, soil damage, nearby seed sources, and repeated human disturbance influence the result. Consequently, two forests recovering from apparently similar events may develop different structures and species mixtures."
    ], questions: [
      ["What is the passage mainly about?", ["Why forest fires are becoming more severe", "How forest communities change during recovery", "Why mature trees prevent plant diversity", "How farmers select fast-growing trees"], 1, "lower"],
      ["What role do early colonizers play?", ["They immediately recreate a mature forest.", "They eliminate the need for nearby seed sources.", "They improve conditions for organisms that arrive later.", "They keep shrubs from receiving sunlight."], 2, "lower"],
      ["The word “inherently” is closest in meaning to", ["by their essential nature.", "in a visibly measurable way.", "because of earlier damage.", "for a limited period."], 0, "upper"],
      ["Why does the author say later trees are not “superior”?", ["To dispute the idea that succession is a simple ranking of species", "To show that early plants usually live longer than trees", "To argue that mature forests contain no competition", "To explain why trees cannot change soil conditions"], 0, "upper"],
      ["What can be inferred from the final paragraph?", ["Recovery can follow multiple pathways even after similar disturbances.", "Human activity always prevents forests from returning.", "Rainfall is the only reliable predictor of recovery.", "All forests eventually contain the same species mixture."], 0, "upper"]
    ]}
  },
  {
    id: 9, cloze: { title: "The Science of Fermentation", parts: [
      "Fermentation has been used for thousands of years to preserve food and create distinctive flavors. Familiar foods such as bread, yogurt, cheese, and pickled vegetables depend on this natural process. Micro", ["organisms", "microorganisms"], " such as yeast and bac", ["teria", "bacteria"], " con", ["vert", "convert"], " sugars in", ["to", "into"], " acids, gases, or al", ["cohol", "alcohol"], ". These che", ["mical", "chemical"], " changes can pre", ["vent", "prevent"], " harmful microbes from gro", ["wing", "growing"], " and may im", ["prove", "improve"], " flavor or diges", ["tibility", "digestibility"], ". Although methods vary across cultures, fermentation continues to play an important role in food production around the world."
    ]},
    daily: { title: "Course Message and Product Recall", docs: [
      { label: "Professor Chen", heading: "Change to Friday's seminar", text: "Friday's seminar will begin at 11:30 rather than 10:00 because the guest speaker's train arrives late. We will meet in Room 204, not our regular classroom. Please submit your discussion question online by Thursday evening; I will select several questions to guide the conversation. Students unable to attend may watch a recording next week.", questions: [
        ["When will the seminar begin?", ["Thursday evening", "Friday at 10:00", "Friday at 11:30", "Next week"], 2, "lower"],
        ["What must students do before the seminar?", ["Watch the recording", "Post a discussion question", "Meet the speaker at the station", "Reserve Room 204"], 1, "lower"],
        ["Why does Professor Chen mention selecting questions?", ["To clarify how student submissions will be used", "To warn that late questions receive lower grades", "To replace the guest speaker's presentation", "To explain why the classroom changed"], 0, "upper"]
      ]},
      { label: "North Valley Foods", heading: "Recall of almond snack bars", text: "Packages marked NV-442 may contain peanuts that are not listed on the label. Customers with peanut allergies should not eat these bars. Return the package to any North Valley store for a refund; a receipt is unnecessary. Other production codes are unaffected and remain safe to consume.", questions: [
        ["Who faces the greatest risk from the recalled bars?", ["Customers avoiding almonds", "People with peanut allergies", "Anyone without a receipt", "Employees handling refunds"], 1, "lower"],
        ["Which conclusion is best supported by the notice?", ["Every product from the company is unsafe.", "The recall concerns labeling as well as ingredients.", "Refunds are available only where the bars were purchased.", "The company intentionally substituted peanuts for almonds."], 1, "upper"]
      ]}
    ]},
    academic: { title: "Why Some Languages Disappear", paragraphs: [
      "A language becomes endangered when children no longer learn it as their main means of communication. This shift may occur after speakers move to cities, attend schools using a dominant language, or conclude that another language offers greater economic opportunity.",
      "Language loss involves more than replacing one set of words with another. Oral histories, environmental knowledge, humor, and ways of categorizing experience may be difficult to transfer fully. Nevertheless, preservation efforts cannot succeed merely by recording dictionaries and grammar. A language remains living only when people use it in ordinary relationships and new situations.",
      "Successful revitalization programs therefore often combine documentation with community action. They may train teachers, create children's media, establish immersion schools, and encourage public use. The goal is not to freeze a language in an earlier form but to give speakers the means and confidence to adapt it to contemporary life."
    ], questions: [
      ["When does a language become endangered according to the passage?", ["When it lacks a written dictionary", "When children stop learning it as their primary language", "When speakers move between cities", "When it develops new vocabulary"], 1, "lower"],
      ["Which action is mentioned as part of revitalization?", ["Preventing speakers from learning dominant languages", "Replacing oral histories with written records", "Producing media for children", "Keeping the language unchanged"], 2, "lower"],
      ["Why is documentation alone described as insufficient?", ["Recorded grammar is usually inaccurate.", "A language also depends on active social use.", "Communities rarely permit researchers to record words.", "Documentation prevents languages from adapting."], 1, "upper"],
      ["The phrase “freeze a language” suggests", ["limiting it to a fixed historical form.", "making pronunciation easier to study.", "protecting it from economic pressure.", "translating it into a dominant language."], 0, "upper"],
      ["Which idea connects the second and third paragraphs?", ["Cultural knowledge can survive only in dictionaries.", "Economic opportunity makes revitalization impossible.", "Preservation must support both cultural continuity and present-day use.", "Immersion schools should avoid contemporary subjects."], 2, "upper"]
    ]}
  },
  {
    id: 10, cloze: { title: "Measuring Earthquakes", parts: [
      "Earthquakes release energy when rocks suddenly move along faults in Earth's crust. Although scientists cannot reliably predict the exact moment of an earthquake, they can study how and where seismic activity occurs. Sensitive instru", ["ments", "instruments"], " called seismo", ["meters", "seismometers"], " rec", ["ord", "record"], " ground mo", ["tion", "motion"], ". Scientists com", ["pare", "compare"], " the arrival ti", ["mes", "times"], " of different wa", ["ves", "waves"], " to esti", ["mate", "estimate"], " an earthquake's loca", ["tion", "location"], " and mag", ["nitude", "magnitude"], ". This information helps engineers design safer buildings and allows emergency planners to identify communities at greater risk."
    ]},
    daily: { title: "Apartment Notice and Museum Membership", docs: [
      { label: "Oak House Management", heading: "Annual fire-alarm inspection", text: "Technicians will enter all apartments between 9:00 a.m. and 4:00 p.m. on May 18. Each inspection takes approximately five minutes. Residents need not be home, but pets must be secured and the area beneath each alarm must be accessible. Contact the office by May 15 if a medical condition makes the alarm sound a concern.", questions: [
        ["What should residents do before May 18?", ["Replace every alarm", "Keep pets secured during the visit", "Remain home all day", "Remove medical equipment"], 1, "lower"],
        ["Who should contact the office by May 15?", ["Residents who cannot hear alarms", "Everyone who owns a pet", "People for whom the noise may cause a health problem", "Residents who want a longer inspection"], 2, "lower"],
        ["Why does the notice state that inspections take five minutes?", ["To reassure residents that entry should be brief", "To guarantee technicians will arrive at an exact time", "To justify charging residents an inspection fee", "To suggest residents test alarms themselves"], 0, "upper"]
      ]},
      { label: "Modern Art Museum", heading: "Bring a friend in August", text: "Individual members may bring one guest free on weekday afternoons throughout August. The offer excludes ticketed lectures and the special photography exhibition. Members must present a valid membership card at admission, and guest tickets cannot be reserved in advance.", questions: [
        ["When may a member use the guest offer?", ["Any weekend morning", "A weekday afternoon in August", "During a ticketed lecture", "At the photography exhibition"], 1, "lower"],
        ["What limitation is implied by the final sentence?", ["Members may need to obtain the guest ticket upon arrival.", "Guests must purchase annual memberships online.", "The offer is guaranteed even when the museum is full.", "Membership cards can be presented after the visit."], 0, "upper"]
      ]}
    ]},
    academic: { title: "The Value of Scientific Models", paragraphs: [
      "Scientific models are simplified representations of systems that may be too large, small, complex, or distant to examine directly. A model can be a physical object, a mathematical equation, or a computer simulation. Its usefulness does not depend on reproducing every detail.",
      "By excluding some features, a model allows researchers to focus on relationships relevant to a particular question. A climate model, for example, cannot represent every air molecule, but it can describe interactions among the atmosphere, oceans, and land. Simplification is therefore both a limitation and a source of analytical power.",
      "Models are evaluated by comparing their predictions with observations. When results disagree, scientists may revise assumptions, improve data, or recognize that a model is unsuitable for a certain purpose. Such revision is not necessarily evidence that modeling has failed; it is one way scientific understanding develops."
    ], questions: [
      ["What is a scientific model?", ["A complete copy of a natural system", "A simplified representation used for investigation", "An observation that cannot be tested", "A prediction made without data"], 1, "lower"],
      ["How are models evaluated?", ["By making them include every detail", "By comparing predictions with observations", "By preventing assumptions from changing", "By selecting only physical models"], 1, "lower"],
      ["Why does the author call simplification a source of power?", ["It guarantees that predictions are correct.", "It permits attention to relationships that matter for a question.", "It removes the need to collect observations.", "It makes one model suitable for every purpose."], 1, "upper"],
      ["What does “Such revision” refer to?", ["Representing every air molecule", "Comparing physical objects", "Changing a model after disagreement with evidence", "Excluding oceans from climate research"], 2, "upper"],
      ["Which statement best expresses the author's view?", ["A useful model balances purpose and simplification rather than perfect detail.", "Computer simulations are always more reliable than equations.", "A revised model proves that earlier scientific work had no value.", "Models should be judged mainly by how realistic they look."], 0, "upper"]
    ]}
  },
  {
    id: 11, cloze: { title: "The Origins of Public Parks", parts: [
      "During the nineteenth century, rapidly growing cities created crowded neighborhoods with little open space. Industrial growth brought jobs and prosperity, but it also produced pollution and unhealthy living conditions. Reformers ar", ["gued", "argued"], " that public pa", ["rks", "parks"], " could im", ["prove", "improve"], " health by pro", ["viding", "providing"], " fresh air and ro", ["om", "room"], " for exer", ["cise", "exercise"], ". Parks al", ["so", "also"], " offered ga", ["thering", "gathering"], " places for peo", ["ple", "people"], " from dif", ["ferent", "different"], " backgrounds. Many parks created during this period remain important public spaces in modern cities."
    ]},
    daily: { title: "Scholarship Reminder and Café Announcement", docs: [
      { label: "Student Support Office", heading: "Travel scholarship deadline", text: "Applications for conference travel funding close at noon on September 12. Submit the online form, a 300-word explanation of the conference's relevance, and a budget approved by your adviser. Recommendation letters are not required. Awards will be announced by October 1, but funds cannot be used for travel completed before that date.", questions: [
        ["Which document must an adviser approve?", ["The recommendation letter", "The conference program", "The proposed budget", "The award announcement"], 2, "lower"],
        ["Which trip could the scholarship support?", ["Travel completed in September", "A conference after October 1", "Any trip without a budget", "A vacation recommended by an adviser"], 1, "lower"],
        ["Why is the October 1 restriction important?", ["It distinguishes notification from the period in which funding is usable.", "It extends the application deadline for late travelers.", "It requires students to attend conferences on that date.", "It allows advisers to rewrite applications after submission."], 0, "upper"]
      ]},
      { label: "Corner Cup Café", heading: "Reusable-container pilot", text: "Customers ordering takeout may borrow a reusable container for a $5 deposit. Return it clean to any participating café within fourteen days to receive the full deposit. Containers returned later will still be accepted, but the deposit will become a donation to the city's waste-reduction program.", questions: [
        ["How can customers recover the full deposit?", ["Donate the container", "Return it clean within fourteen days", "Use it at a nonparticipating café", "Order another takeout meal"], 1, "lower"],
        ["What purpose does the late-return policy serve?", ["It turns unclaimed deposits into support for a related environmental goal.", "It prevents containers from being accepted after two weeks.", "It guarantees customers receive a partial refund.", "It pays cafés to stop offering takeout service."], 0, "upper"]
      ]}
    ]},
    academic: { title: "Collective Memory", paragraphs: [
      "Groups, like individuals, develop accounts of the past. This collective memory is expressed through monuments, ceremonies, school lessons, family stories, and media. It helps communities explain who they are and which events they consider significant.",
      "Collective memory is selective rather than a complete record. Some experiences receive repeated public attention, while others are neglected or actively disputed. Selection may reflect available evidence, but it can also reflect present-day values and power. Thus, public memories often change even though the past itself does not.",
      "Historians distinguish memory from historical analysis, but they do not treat memory as useless. Debates about monuments or anniversaries reveal how societies interpret evidence and negotiate identity. Studying what is remembered, forgotten, or contested can therefore illuminate both past events and current concerns."
    ], questions: [
      ["Where can collective memory be expressed?", ["Only in official archives", "In monuments, ceremonies, stories, and media", "Only through individual dreams", "In events that have not yet occurred"], 1, "lower"],
      ["Why can public memories change?", ["The past itself changes over time.", "Communities select and reinterpret what receives attention.", "Historical evidence always disappears.", "Ceremonies prevent stable interpretation."], 1, "lower"],
      ["The word “illuminate” is closest in meaning to", ["publicly celebrate.", "make easier to understand.", "remove from debate.", "preserve without change."], 1, "upper"],
      ["Why does the author mention present-day values and power?", ["To explain forces that influence which past experiences are emphasized", "To prove collective memories are always intentionally false", "To show historical analysis should ignore public debate", "To argue that evidence has no role in memory"], 0, "upper"],
      ["Which claim would the author most likely support?", ["Disagreement about a monument can reveal contemporary social priorities.", "Only forgotten events deserve historical investigation.", "Collective memory and historical analysis are identical activities.", "A society with accurate records has no selective memory."], 0, "upper"]
    ]}
  },
  {
    id: 12, cloze: { title: "How Birds Migrate", parts: [
      "Many bird species travel enormous distances between breeding and feeding areas. These seasonal journeys allow them to find abundant food, suitable weather, and safe places to raise their young. They nav", ["igate", "navigate"], " by us", ["ing", "using"], " several cu", ["es", "cues"], ", including the po", ["sition", "position"], " of the sun, st", ["ars", "stars"], ", landmarks, and Earth's mag", ["netic", "magnetic"], " field. Young bi", ["rds", "birds"], " may inherit a gen", ["eral", "general"], " direction, while exper", ["ience", "experience"], " helps older birds re", ["fine", "refine"], " their routes. Researchers study migration to understand how birds respond when climate change and urban development alter familiar routes."
    ]},
    daily: { title: "Clinic Instructions and Theater Exchange", docs: [
      { label: "Lakeside Medical Clinic", heading: "Preparing for your blood test", text: "Do not eat for eight hours before your appointment, though you may drink plain water. Continue prescribed medication unless your doctor has instructed otherwise. Arrive fifteen minutes early and bring photo identification. If you feel unwell while fasting, contact the clinic rather than canceling through the online system.", questions: [
        ["What may a patient consume during the fasting period?", ["Plain water", "Coffee without sugar", "Fruit juice", "A light snack"], 0, "lower"],
        ["What should patients bring?", ["Their own medical equipment", "Photo identification", "A printed cancellation form", "Eight hours of medication"], 1, "lower"],
        ["Why should an unwell patient contact the clinic directly?", ["The clinic may need to advise them rather than receive an automatic cancellation.", "The online system cannot display appointment times.", "Fasting patients are forbidden to cancel appointments.", "The clinic needs permission to provide water."], 0, "upper"]
      ]},
      { label: "Grand Avenue Theater", heading: "Ticket exchange policy", text: "Tickets may be exchanged for another performance of the same production up to twenty-four hours before the original show. A $4 exchange fee applies unless the performance has been canceled. Price differences must be paid, but no refund is issued when the new seat costs less. Promotional tickets are final and cannot be exchanged.", questions: [
        ["Which ticket cannot be exchanged?", ["A regular ticket exchanged two days early", "A ticket for a canceled show", "A promotional ticket", "A ticket for a more expensive seat"], 2, "lower"],
        ["What can be inferred about choosing a cheaper new seat?", ["The customer loses the difference in price.", "The exchange fee is automatically removed.", "The original production may be changed.", "The request can be made after the show."], 0, "upper"]
      ]}
    ]},
    academic: { title: "The Economics of Attention", paragraphs: [
      "Digital services often appear free because users pay no direct monetary price. However, many platforms earn revenue by selling advertising, and the value of that advertising depends partly on capturing and retaining user attention. Time and focus therefore function as scarce resources within an attention economy.",
      "Platforms may design notifications, recommendations, and endless content feeds to encourage repeated engagement. These features can help users discover relevant material, but they can also make stopping difficult. The same mechanism may be useful in one context and distracting in another, so its effect cannot be judged solely by the amount of time spent online.",
      "Some researchers advocate design standards that give users greater control, while others emphasize education and individual habits. Regulation is complicated because attention is difficult to measure and because restrictions may also reduce access to valued services. The debate concerns not simply technology use, but how responsibility should be divided among companies, governments, and users."
    ], questions: [
      ["Why can a digital service appear free?", ["It has no operating costs.", "Users may not pay money directly.", "Advertisers receive no benefit.", "It does not compete for attention."], 1, "lower"],
      ["Which feature is mentioned as encouraging engagement?", ["Printed instructions", "Endless content feeds", "Subscription cancellation", "Government standards"], 1, "lower"],
      ["What does the author mean by calling attention “scarce”?", ["People have a limited amount of it to allocate.", "Platforms cannot observe any user behavior.", "Advertising has eliminated online content.", "Only governments can distribute it."], 0, "upper"],
      ["Why does the author say time online is not sufficient to judge a feature?", ["Long use always indicates educational value.", "The consequences depend on purpose and context as well as duration.", "Recommendations never influence user behavior.", "All digital services use identical designs."], 1, "upper"],
      ["Which issue makes regulation especially complex?", ["There is universal agreement about company responsibility.", "Attention is measurable in exactly the same way as money.", "Protective rules may also limit services people value.", "Individual habits have no relationship to platform design."], 2, "upper"]
    ]}
  }
];

const choiceLetters = ["a", "b", "c", "d"];
const renderQuestion = (question, name, index) => {
  const [text, options, answer, level] = question;
  return `<fieldset class="toefl-question" data-answer="${choiceLetters[answer]}" data-question-level="${level}"><legend>${index + 1}. ${text}</legend>${options.map((option, optionIndex) => `<label><input type="radio" name="${name}q${index + 1}" value="${choiceLetters[optionIndex]}"> ${option}</label>`).join("")}</fieldset>`;
};

const renderCloze = (test) => {
  const text = test.cloze.parts.map((part) => Array.isArray(part)
    ? `<input class="toefl-letter-gap${part[0].length <= 3 ? " short" : ""}" data-answer="${part[0]}" aria-label="Missing letters in ${part[1]}" autocomplete="off">`
    : part).join("");
  return `<article class="lesson-card activity-card toefl-exercise" data-toefl-word-exercise data-toefl-test="${test.id}" hidden><div class="toefl-exercise-heading"><div><span>Mock Test ${test.id} - Task 1</span><h3>${test.cloze.title}</h3></div><strong>10 gaps</strong></div><p class="toefl-directions">Fill in the missing letters in the paragraph.</p><p class="toefl-cloze-text">${text}</p><div class="activity-actions"><button class="activity-button secondary-button" type="button" data-toefl-reset>Reset</button><button class="activity-button" type="button" data-toefl-check>Check Answers</button></div><p class="activity-feedback" data-toefl-feedback aria-live="polite">Complete all 10 words, then check your answers.</p></article>`;
};

const renderDaily = (test) => {
  let questionNumber = 0;
  const docs = test.daily.docs.map((doc) => {
    const questions = doc.questions.map((question) => renderQuestion(question, `daily${test.id}`, questionNumber++)).join("");
    return `<div class="toefl-realworld-text"><p class="prompt-label">${doc.label}</p><h4>${doc.heading}</h4><p>${doc.text}</p></div><div class="toefl-question-list">${questions}</div>`;
  }).join("");
  return `<article class="lesson-card activity-card toefl-exercise" data-toefl-choice-exercise data-toefl-test="${test.id}" hidden><div class="toefl-exercise-heading"><div><span>Mock Test ${test.id} - Task 2</span><h3>${test.daily.title}</h3></div><strong>5 questions</strong></div>${docs}<div class="activity-actions"><button class="activity-button secondary-button" type="button" data-toefl-reset>Reset</button><button class="activity-button" type="button" data-toefl-check>Check Answers</button></div><p class="activity-feedback" data-toefl-feedback aria-live="polite">Answer all five questions, then check your result.</p></article>`;
};

const renderAcademic = (test) => `<article class="lesson-card activity-card toefl-exercise" data-toefl-choice-exercise data-toefl-test="${test.id}" hidden><div class="toefl-exercise-heading"><div><span>Mock Test ${test.id} - Task 3</span><h3>${test.academic.title}</h3></div><strong>5 questions</strong></div><div class="toefl-academic-layout"><div class="toefl-academic-text">${test.academic.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div><div class="toefl-question-list">${test.academic.questions.map((question, index) => renderQuestion(question, `academic${test.id}`, index)).join("")}</div></div><div class="activity-actions"><button class="activity-button secondary-button" type="button" data-toefl-reset>Reset</button><button class="activity-button" type="button" data-toefl-check>Check Answers</button></div><p class="activity-feedback" data-toefl-feedback aria-live="polite">Answer all five questions, then check your result.</p></article>`;

const readingButtons = document.querySelector(".toefl-test-picker .toefl-test-buttons");
const readingSections = document.querySelectorAll("[data-toefl-task-section]");
extraReadingTests.forEach((test) => {
  readingButtons?.insertAdjacentHTML("beforeend", `<button class="toefl-test-button" type="button" data-toefl-test-button="${test.id}" aria-pressed="false"><span>Mock Test</span><strong>${String(test.id).padStart(2, "0")}</strong></button>`);
  readingSections[0]?.insertAdjacentHTML("beforeend", renderCloze(test));
  readingSections[1]?.insertAdjacentHTML("beforeend", renderDaily(test));
  readingSections[2]?.insertAdjacentHTML("beforeend", renderAcademic(test));
});

// In the original seven mocks, questions 3 and 5 in both reading tasks target
// vocabulary in context, inference, purpose, reference, or synthesis.
document.querySelectorAll('[data-toefl-choice-exercise][data-toefl-test]').forEach((exercise) => {
  if (Number(exercise.dataset.toeflTest) > 7) return;
  exercise.querySelectorAll('.toefl-question').forEach((question, index) => {
    question.dataset.questionLevel = [2, 4].includes(index) ? 'upper' : 'lower';
  });
});

const readingPickerTitle = document.querySelector("#toefl-test-picker-title");
if (readingPickerTitle) readingPickerTitle.textContent = "Twelve complete reading mocks";
