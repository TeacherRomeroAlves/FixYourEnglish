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
      ["The campus tour starts at ten.", ["where", "meet", "we", "should", "are", "supposed to"], ["where", "are", "we", "supposed to", "meet"], ["where", "should", "we", "meet"]],
      ["I missed yesterday's biology lecture.", ["could", "I", "borrow", "your notes", "would", "be able to"], ["would", "I", "be able to", "borrow", "your notes"], ["could", "I", "borrow", "your notes"]],
      ["The library closes earlier now.", ["why", "did", "the schedule", "change", "do", "you know"], ["do", "you know", "why", "the schedule", "did", "change"], ["why", "did", "the schedule", "change"]],
      ["I'm applying for a summer internship.", ["when", "is", "the application deadline", "could", "you tell me"], ["could", "you tell me", "when", "the application deadline", "is"], ["when", "is", "the application deadline"]],
      ["Our professor assigned a research presentation.", ["have", "you", "chosen", "a topic", "already", "for the presentation"], ["have", "you", "already", "chosen", "a topic", "for the presentation"], ["have", "you", "chosen", "a topic"]],
      ["The student center is organizing a concert.", ["who", "is performing", "do", "you know", "at the concert"], ["do", "you know", "who", "is performing", "at the concert"], ["who", "is performing"]],
      ["I want to join the debate club.", ["where", "are", "the meetings", "held", "could", "you tell me"], ["could", "you tell me", "where", "the meetings", "are", "held"], ["where", "are", "the meetings", "held"]],
      ["My statistics assignment is difficult.", ["could", "you", "help me", "find", "a tutor", "who understands statistics"], ["could", "you", "help me", "find", "a tutor", "who understands statistics"], ["could", "you", "help me"]],
      ["What did Rosa say about the workshop?", ["she said", "it", "was useful", "that", "was", "extremely", "useful", "for new students"], ["she said", "that", "it", "was", "extremely", "useful", "for new students"], ["she said", "it", "was useful"]],
      ["Why are you going to the administration office?", ["I", "need", "my student ID", "replaced", "because", "I lost it"], ["I", "need", "my student ID", "replaced", "because", "I lost it"], ["I", "need", "my student ID", "replaced"]]
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
      ["The language school offers conversation classes.", ["which level", "is", "for beginners", "would", "be suitable"], ["which level", "would", "be suitable", "for beginners"]],
      ["My classroom is always very noisy.", ["could", "we", "move", "to another room", "would", "it be possible to"], ["would", "it be possible to", "move", "to another room"]],
      ["I downloaded the new learning app.", ["have", "you", "used it", "yet", "had", "a chance to", "use it"], ["have", "you", "had", "a chance to", "use it", "yet"]],
      ["Our teacher recommended an English podcast.", ["what", "is it called", "do", "you remember", "it is called"], ["do", "you remember", "what", "it is called"]],
      ["The school is planning an international day.", ["how", "can", "students", "participate", "do", "you know"], ["do", "you know", "how", "students", "can", "participate"]],
      ["I have trouble understanding fast speech.", ["what practice", "do", "you suggest", "would", "you recommend"], ["what practice", "would", "you recommend"]],
      ["We're taking a placement test tomorrow.", ["how long", "will it last", "do", "you know", "it will last"], ["do", "you know", "how long", "it will last"]],
      ["The coordinator announced a schedule change.", ["will", "classes", "start earlier", "now", "does that mean"], ["does that mean", "classes", "will", "start earlier", "now"]],
      ["What did Ben ask about the course?", ["he asked", "if", "materials", "were included", "he", "wanted to know", "whether"], ["he", "wanted to know", "whether", "materials", "were included"]],
      ["Why are you recording yourself speaking?", ["I want to", "check", "my pronunciation", "so that", "I can", "improve it"], ["I want to", "check", "my pronunciation", "so that", "I can", "improve it"]]
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
      ["Our group project is due next Friday.", ["have", "you", "finished", "your section", "been able to", "finish", "of the report"], ["have", "you", "been able to", "finish", "your section", "of the report"]],
      ["One teammate has missed every meeting.", ["has", "anyone", "contacted him", "to find out", "what happened"], ["has", "anyone", "contacted him", "to find out", "what happened"]],
      ["We need to divide the remaining work.", ["which task", "can", "you take", "would", "you be willing to", "take"], ["which task", "would", "you be willing to", "take"]],
      ["The professor wants a progress report.", ["what", "should", "we include", "do", "you think", "we", "include"], ["what", "do", "you think", "we", "should", "include"]],
      ["I'm worried we won't finish on time.", ["should", "we", "ask for", "an extension", "do", "you think"], ["do", "you think", "we", "should", "ask for", "an extension"]],
      ["Maria created the presentation slides.", ["have", "you", "reviewed them", "had", "a chance to", "review them"], ["have", "you", "had", "a chance to", "review them"]],
      ["We are meeting online this evening.", ["has", "the link", "been sent", "do", "you know", "whether"], ["do", "you know", "whether", "the link", "has", "been sent"]],
      ["The research results are surprising.", ["how", "will", "we explain them", "are", "we going to", "explain them"], ["how", "are", "we going to", "explain them"]],
      ["What did the professor recommend?", ["she suggested", "assigning roles", "that", "we", "assign roles", "clearly"], ["she suggested", "that", "we", "assign roles", "clearly"]],
      ["Why did you email the whole group?", ["everyone", "needed", "an update", "because", "I thought", "that"], ["because", "I thought", "that", "everyone", "needed", "an update"]]
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

Object.assign(writingTests, {
  6: {
    sentences: [
      ["The science lab opens at eight.", ["when", "should", "we arrive", "are", "expected to"], ["when", "are", "we", "expected to", "arrive"]],
      ["I cannot access the online journal.", ["can", "you", "help me", "figure out", "why", "it is unavailable"], ["can", "you", "help me", "figure out", "why", "it is unavailable"]],
      ["The guest lecturer canceled her visit.", ["why", "did she cancel", "do", "you know", "she canceled"], ["do", "you know", "why", "she canceled"]],
      ["I need permission to enter the archive.", ["who", "should", "I ask", "could", "you tell me"], ["could", "you tell me", "who", "I", "should", "ask"]],
      ["The chemistry assignment is due tomorrow.", ["have", "you", "completed it", "managed to", "yet"], ["have", "you", "managed to", "complete it", "yet"]],
      ["Our class is visiting the observatory.", ["what", "will", "we see", "are", "likely to"], ["what", "are", "we", "likely to", "see"]],
      ["The experiment produced unexpected results.", ["how", "can", "we explain them", "do", "you think"], ["how", "do", "you think", "we", "can", "explain them"]],
      ["I lost the worksheet from class.", ["could", "you send it", "would", "you mind", "sending it again"], ["would", "you mind", "sending it again"]],
      ["What did the lab assistant warn you about?", ["she warned me", "not to touch", "the equipment", "unless", "a teacher was present"], ["she warned me", "not to touch", "the equipment", "unless", "a teacher was present"]],
      ["Why are you repeating the measurement?", ["I want to", "make sure", "that", "the first result", "was accurate"], ["I want to", "make sure", "that", "the first result", "was accurate"]]
    ],
    email: { scenario: "Your campus laboratory has introduced a booking system, but your confirmed reservation disappeared and you cannot complete an important assignment.", recipient: "lab.manager@university.edu", subject: "Missing laboratory reservation", goals: ["Explain the assignment you need to complete.", "Describe what happened to your reservation.", "Request a practical solution."] },
    discussion: { course: "Science and Society", professor: "Should universities require every student, regardless of major, to take at least one laboratory science course? Why or why not?", students: [["Nina", "A laboratory course develops evidence-based thinking and helps students understand how scientific claims are tested."], ["Omar", "A universal requirement may reduce room for courses that are more relevant to a student's academic and professional goals."]] }
  },
  7: {
    sentences: [
      ["The career fair begins after lunch.", ["where", "is it", "being held", "do", "you know"], ["do", "you know", "where", "it is", "being held"]],
      ["I am updating my resume.", ["could", "you review it", "would", "you be willing to", "review it"], ["would", "you be willing to", "review it"]],
      ["Several companies will conduct interviews.", ["which companies", "are attending", "can", "you tell me"], ["can", "you tell me", "which companies", "are attending"]],
      ["My interview is at two o'clock.", ["how early", "should", "I arrive", "am", "supposed to"], ["how early", "am", "I", "supposed to", "arrive"]],
      ["The application requires two references.", ["have", "you", "asked anyone", "been able to", "yet"], ["have", "you", "been able to", "ask anyone", "yet"]],
      ["I received an internship offer.", ["when", "must", "you reply", "are", "required to"], ["when", "are", "you", "required to", "reply"]],
      ["The position involves weekend work.", ["would", "you accept it", "if", "you had to work Saturdays"], ["would", "you accept it", "if", "you had to work Saturdays"]],
      ["I do not understand the salary information.", ["could", "you explain it", "would", "you mind", "explaining it"], ["would", "you mind", "explaining it"]],
      ["What did the recruiter ask?", ["she wanted to know", "whether", "I had", "any previous experience"], ["she wanted to know", "whether", "I had", "any previous experience"]],
      ["Why did you decline the interview?", ["because", "the schedule", "would have conflicted", "with my classes"], ["because", "the schedule", "would have conflicted", "with my classes"]]
    ],
    email: { scenario: "You attended a university career fair and spoke with a company representative who invited you to apply, but the application link they provided does not work.", recipient: "recruitment@northstartech.com", subject: "Application link from career fair", goals: ["Remind the representative where you met.", "Describe the problem with the link.", "Ask how you should submit your application."] },
    discussion: { course: "Career Development", professor: "Is practical work experience more valuable to university students than earning high grades? Explain your view.", students: [["Leo", "Internships teach workplace communication and allow students to apply ideas that can remain abstract in class."], ["Priya", "Strong grades demonstrate discipline and subject knowledge, and they can open the door to competitive opportunities."]] }
  },
  8: {
    sentences: [
      ["The residence hall is being renovated.", ["when", "will it reopen", "is", "expected to"], ["when", "is", "it", "expected to", "reopen"]],
      ["My room has no hot water.", ["who", "should", "I contact", "could", "you tell me"], ["could", "you tell me", "who", "I", "should", "contact"]],
      ["The kitchen closes at ten.", ["are", "we allowed to", "cook later", "can", "we cook later"], ["are", "we allowed to", "cook later"]],
      ["A package arrived for me.", ["where", "can", "I collect it", "do", "you know"], ["do", "you know", "where", "I", "can", "collect it"]],
      ["My neighbor plays loud music.", ["have", "you", "spoken to them", "considered", "speaking to them"], ["have", "you", "considered", "speaking to them"]],
      ["The elevator is out of service.", ["how long", "has it been broken", "do", "you know"], ["do", "you know", "how long", "it has been broken"]],
      ["We need to choose a new roommate.", ["what qualities", "should", "we look for", "do", "you think"], ["what qualities", "do", "you think", "we", "should", "look for"]],
      ["The housing payment is due Friday.", ["can", "I pay online", "would", "it be possible to", "pay online"], ["would", "it be possible to", "pay online"]],
      ["What did the resident adviser announce?", ["she said", "that", "all visitors", "must register", "at the front desk"], ["she said", "that", "all visitors", "must register", "at the front desk"]],
      ["Why are you moving to another floor?", ["because", "I need", "a room", "that is", "more accessible"], ["because", "I need", "a room", "that is", "more accessible"]]
    ],
    email: { scenario: "Your residence hall has had unreliable hot water for several days, and earlier reports have not solved the problem.", recipient: "housing.services@university.edu", subject: "Continuing hot-water problem", goals: ["Describe how long the problem has continued.", "Explain how it affects residents.", "Request action and an update."] },
    discussion: { course: "Campus Life", professor: "Should first-year university students be required to live on campus? Why or why not?", students: [["Mateo", "Living on campus helps new students build friendships and participate in university life more easily."], ["Sara", "Students have different financial and family circumstances, so housing decisions should remain flexible."]] }
  },
  9: {
    sentences: [
      ["The history seminar has a waiting list.", ["can", "I still join", "would", "it be possible to", "join it"], ["would", "it be possible to", "join it"]],
      ["I need to change my course schedule.", ["who", "should", "I speak to", "could", "you tell me"], ["could", "you tell me", "who", "I", "should", "speak to"]],
      ["The economics class conflicts with chemistry.", ["which one", "should", "I keep", "do", "you think"], ["which one", "do", "you think", "I", "should", "keep"]],
      ["Registration closes tonight.", ["have", "you", "registered", "managed to", "yet"], ["have", "you", "managed to", "register", "yet"]],
      ["The professor approved my request.", ["when", "can", "you start", "are", "you allowed to"], ["when", "are", "you", "allowed to", "start"]],
      ["This course has several prerequisites.", ["what", "are they", "do", "you know"], ["do", "you know", "what", "they are"]],
      ["I may drop advanced calculus.", ["what", "will happen", "if", "you drop it"], ["what", "will happen", "if", "you drop it"]],
      ["My academic record has an error.", ["could", "you correct it", "would", "you mind", "checking it"], ["would", "you mind", "checking it"]],
      ["What did your adviser recommend?", ["she recommended", "taking", "a lighter course load", "until", "I adjusted"], ["she recommended", "taking", "a lighter course load", "until", "I adjusted"]],
      ["Why did you postpone graduation?", ["because", "I decided", "to complete", "an additional minor"], ["because", "I decided", "to complete", "an additional minor"]]
    ],
    email: { scenario: "A required course is full, and without it you may have to delay graduation. You want to contact your academic adviser.", recipient: "adviser@university.edu", subject: "Required course is full", goals: ["Explain why the course is necessary.", "Describe the registration problem.", "Ask about alternatives or special permission."] },
    discussion: { course: "Higher Education", professor: "Should students be permitted to design part of their own university curriculum instead of following only fixed requirements?", students: [["Amira", "Choice lets students connect their studies to personal goals and may increase motivation."], ["Daniel", "Core requirements ensure that graduates develop essential knowledge and prevent important gaps in their education."]] }
  },
  10: {
    sentences: [
      ["The volunteer program begins in June.", ["when", "must", "we apply", "are", "required to"], ["when", "are", "we", "required to", "apply"]],
      ["I want to help at the food bank.", ["what", "can", "I do", "could", "you tell me"], ["could", "you tell me", "what", "I", "can", "do"]],
      ["The organization provides training.", ["is it required", "do", "you know", "whether"], ["do", "you know", "whether", "it is required"]],
      ["My shift starts very early.", ["could", "I change it", "would", "it be possible to", "change it"], ["would", "it be possible to", "change it"]],
      ["We collected many winter coats.", ["where", "will", "they be donated", "are", "going to"], ["where", "are", "they", "going to", "be donated"]],
      ["The event needs more volunteers.", ["have", "you", "invited anyone", "considered", "inviting your classmates"], ["have", "you", "considered", "inviting your classmates"]],
      ["Some volunteers did not arrive.", ["how", "should", "we respond", "do", "you think"], ["how", "do", "you think", "we", "should", "respond"]],
      ["I cannot attend Saturday's event.", ["could", "someone replace me", "would", "anyone be able to"], ["would", "anyone be able to", "replace me"]],
      ["What did the coordinator request?", ["she asked us", "to arrive early", "so that", "we could", "set up"], ["she asked us", "to arrive early", "so that", "we could", "set up"]],
      ["Why do you continue volunteering?", ["because", "it gives me", "the opportunity", "to support", "my community"], ["because", "it gives me", "the opportunity", "to support", "my community"]]
    ],
    email: { scenario: "You registered to volunteer at a community event, but the assigned shift overlaps with an important class presentation.", recipient: "volunteers@communityday.org", subject: "Request to change volunteer shift", goals: ["Confirm your interest in volunteering.", "Explain the scheduling conflict.", "Propose another shift or solution."] },
    discussion: { course: "Civic Engagement", professor: "What is the most effective way for universities to encourage students to serve their communities?", students: [["Hana", "Universities should connect volunteer projects to courses so students can apply academic knowledge to real needs."], ["Eric", "Recognition and flexible opportunities are better than requirements because genuine service depends on personal commitment."]] }
  },
  11: {
    sentences: [
      ["The art museum offers student admission.", ["how much", "does it cost", "could", "you tell me"], ["could", "you tell me", "how much", "it costs"]],
      ["The photography exhibit ends Sunday.", ["have", "you", "seen it", "had", "a chance to"], ["have", "you", "had", "a chance to", "see it"]],
      ["We are writing a review of the play.", ["what", "should", "we discuss", "do", "you think"], ["what", "do", "you think", "we", "should", "discuss"]],
      ["The performance is sold out.", ["can", "we join a waiting list", "would", "it be possible to"], ["would", "it be possible to", "join a waiting list"]],
      ["Our class will meet the director.", ["what questions", "are", "we supposed to ask", "should", "we ask"], ["what questions", "are", "we", "supposed to ask"]],
      ["The gallery prohibits flash photography.", ["why", "is it prohibited", "do", "you know"], ["do", "you know", "why", "it is prohibited"]],
      ["I prefer the earlier performance.", ["would", "you attend it", "if", "tickets were available"], ["would", "you attend it", "if", "tickets were available"]],
      ["The sculpture has been moved.", ["where", "is it now", "could", "you tell me"], ["could", "you tell me", "where", "it is now"]],
      ["What did the critic write?", ["she argued", "that", "the ending", "was less convincing", "than the opening"], ["she argued", "that", "the ending", "was less convincing", "than the opening"]],
      ["Why are you taking notes during the film?", ["so that", "I can compare", "its visual style", "with", "the director's earlier work"], ["so that", "I can compare", "its visual style", "with", "the director's earlier work"]]
    ],
    email: { scenario: "Your class bought tickets for a museum exhibition, but the museum changed the visit date without notifying your group.", recipient: "education@citymuseum.org", subject: "Unexpected change to group visit", goals: ["Identify your class and original booking.", "Explain the problem caused by the change.", "Request a suitable new arrangement."] },
    discussion: { course: "Arts and Culture", professor: "Should public museums charge admission or remain free for everyone? Support your position.", students: [["Mei", "Free admission makes culture accessible and allows families and students to visit repeatedly."], ["Jonas", "Reasonable fees can fund preservation, staff, and high-quality exhibitions when public budgets are limited."]] }
  },
  12: {
    sentences: [
      ["The university is reducing paper use.", ["how", "will it help", "is", "expected to"], ["how", "is", "it", "expected to", "help"]],
      ["Our building needs recycling bins.", ["who", "should", "we contact", "could", "you tell me"], ["could", "you tell me", "who", "we", "should", "contact"]],
      ["The environmental club meets tonight.", ["are", "you going", "do", "you plan to", "attend"], ["do", "you plan to", "attend"]],
      ["The cafeteria wastes a lot of food.", ["what", "can", "be done", "do", "you think"], ["what", "do", "you think", "can", "be done"]],
      ["Students proposed a bicycle program.", ["when", "will it begin", "is", "likely to"], ["when", "is", "it", "likely to", "begin"]],
      ["The campus uses too much electricity.", ["could", "we reduce it", "would", "it be possible to"], ["would", "it be possible to", "reduce it"]],
      ["The new policy may be expensive.", ["would", "you support it", "even if", "fees increased"], ["would", "you support it", "even if", "fees increased"]],
      ["I missed the sustainability lecture.", ["can", "you summarize it", "would", "you mind", "summarizing it"], ["would", "you mind", "summarizing it"]],
      ["What did the researcher conclude?", ["she concluded", "that", "small changes", "could produce", "significant savings"], ["she concluded", "that", "small changes", "could produce", "significant savings"]],
      ["Why did the committee reject the proposal?", ["because", "it had not explained", "how the project", "would be funded"], ["because", "it had not explained", "how the project", "would be funded"]]
    ],
    email: { scenario: "Your university removed several recycling stations during construction and has not replaced them, causing recyclable waste to be thrown away.", recipient: "sustainability@university.edu", subject: "Missing recycling stations", goals: ["Describe where stations are missing.", "Explain the effect on students and waste.", "Suggest where replacements should be installed."] },
    discussion: { course: "Environmental Policy", professor: "Should universities spend more money now to make campuses environmentally sustainable, even if student fees increase slightly?", students: [["Aisha", "Early investment can lower future energy costs and gives universities a responsibility to model sustainable behavior."], ["Tom", "Students already face high expenses, so institutions should find savings or outside funding before raising fees."]] }
  }
});

const writingPicker = document.querySelector("[data-toefl-writing] .toefl-test-buttons");
if (writingPicker) {
  for (let test = 6; test <= 12; test += 1) {
    writingPicker.insertAdjacentHTML("beforeend", `<button class="toefl-test-button" type="button" data-writing-test-button="${test}" aria-pressed="false"><span>Mock Test</span><strong>${String(test).padStart(2, "0")}</strong></button>`);
  }
  const pickerTitle = document.querySelector("#writing-test-picker-title");
  if (pickerTitle) pickerTitle.textContent = "Twelve complete writing mocks";
}

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
    const complete = $$('[data-build-answer]').filter((zone) => zone.children.length > 0).length;
    buildProgress.textContent = `${complete} of 10 attempted`;
    Array.from(buildDots.children).forEach((dot, index) => {
      const zone = $$('[data-build-answer]')[index];
      dot.classList.toggle("is-answered", Boolean(zone) && zone.children.length > 0);
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
      // Keep every modeled construction available while still allowing unused blocks.
      const displayBank = [...new Set([...bank, ...answer])];
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

  const getBuildExportItems = () => $$('.build-sentence-item').map((item, index) => {
    const zone = item.querySelector('[data-build-answer]');
    const response = Array.from(zone.children, (piece) => piece.textContent).join(' ');
    const unused = Array.from(item.querySelector('[data-build-bank]').children, (piece) => piece.textContent);
    return {
      number: index + 1,
      prompt: writingTests[selectedTest].sentences[index][0],
      response: response ? `${response}${zone.dataset.ending}` : 'No response built.',
      unused
    };
  });
  const formatBuildExport = () => getBuildExportItems().map((item) => [
    `${item.number}. Prompt: ${item.prompt}`,
    `Student sentence: ${item.response}`,
    `Unused options: ${item.unused.length ? item.unused.join(' | ') : 'None'}`
  ].join('\n')).join('\n\n');
  const formatEmailPrompt = () => {
    const email = writingTests[selectedTest].email;
    return [
      `Situation: ${email.scenario}`,
      `To: ${email.recipient}`,
      `Subject: ${email.subject}`,
      'Goals:',
      ...email.goals.map((goal) => `- ${goal}`)
    ].join('\n');
  };
  const formatDiscussionPrompt = () => {
    const discussion = writingTests[selectedTest].discussion;
    return [
      `Course: ${discussion.course}`,
      `Professor's question: ${discussion.professor}`,
      'Student posts:',
      ...discussion.students.map(([name, post]) => `- ${name}: ${post}`)
    ].join('\n');
  };
  const buildShareText = () => `TOEFL iBT Writing - Mock Test ${selectedTest}

BUILD A SENTENCE
${formatBuildExport()}

WRITE AN EMAIL - PROMPT
${formatEmailPrompt()}

STUDENT EMAIL
${emailResponse.value || "No response written."}

ACADEMIC DISCUSSION - PROMPT
${formatDiscussionPrompt()}

STUDENT DISCUSSION RESPONSE
${discussionResponse.value || "No response written."}`;
  const buildTaskShareText = (task) => {
    if (task === 'sentences') {
      return `TOEFL iBT Writing - Mock Test ${selectedTest}\nBUILD A SENTENCE\n\n${formatBuildExport()}`;
    }
    if (task === 'email') return `TOEFL iBT Writing - Mock Test ${selectedTest}\nWRITE AN EMAIL\n\n${formatEmailPrompt()}\n\nSTUDENT RESPONSE\n${emailResponse.value || 'No response written.'}`;
    return `TOEFL iBT Writing - Mock Test ${selectedTest}\nACADEMIC DISCUSSION\n\n${formatDiscussionPrompt()}\n\nSTUDENT RESPONSE\n${discussionResponse.value || 'No response written.'}`;
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
    const printSummaries = [];
    if (!withAnswers) { emailResponse.value = ""; discussionResponse.value = ""; answerZones.forEach((zone) => { Array.from(zone.children).forEach((piece) => bankZones[answerZones.indexOf(zone)].append(piece)); }); }
    document.body.classList.add("toefl-writing-printing");
    document.body.dataset.writingPrintMode = withAnswers ? "answers" : "blank";
    if (withAnswers) {
      getBuildExportItems().forEach((entry, index) => {
        const summary = document.createElement('div');
        summary.className = 'build-print-summary';
        const answerLabel = document.createElement('strong');
        answerLabel.textContent = 'Student sentence';
        const answer = document.createElement('p');
        answer.textContent = entry.response;
        const unusedLabel = document.createElement('strong');
        unusedLabel.textContent = 'Unused options';
        const unused = document.createElement('p');
        unused.textContent = entry.unused.length ? entry.unused.join('  |  ') : 'None';
        summary.append(answerLabel, answer, unusedLabel, unused);
        $$('.build-sentence-item')[index].querySelector('.build-sentence-work').append(summary);
        printSummaries.push(summary);
      });
    }
    $('[data-writing-print-title]').textContent = `Mock Test ${selectedTest}`;
    $('[data-writing-print-mode]').textContent = withAnswers ? "Student Answer Copy" : "Blank Homework";
    restoreAfterPrint = () => {
      textValues.forEach((value, index) => { [emailResponse, discussionResponse][index].value = value; });
      pieceStates.forEach(({ piece }) => piece.remove());
      printSummaries.forEach((summary) => summary.remove());
      const parents = [...new Set(pieceStates.map(({ parent }) => parent))];
      parents.forEach((parent) => pieceStates.filter((state) => state.parent === parent).sort((a, b) => a.order - b.order).forEach(({ piece }) => parent.append(piece)));
      document.body.classList.remove("toefl-writing-printing"); updateProgress();
      delete document.body.dataset.writingPrintMode;
    };
    requestAnimationFrame(() => window.print());
  };
  $('[data-writing-print-blank]').addEventListener("click", () => printTest(false));
  $('[data-writing-print-answers]').addEventListener("click", () => printTest(true));
  window.addEventListener("afterprint", finishPrint);
  window.addEventListener("focus", () => { if (document.body.classList.contains("toefl-writing-printing")) setTimeout(finishPrint, 300); });

  prepareTest();
}
