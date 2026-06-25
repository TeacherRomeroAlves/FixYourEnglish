const topicDetails = {
  "Simple Present": "A good place to begin with daily routines, habits, likes and dislikes, and statements of fact.",
  "Present Continuous": "Useful for actions happening now, temporary situations, and what is in progress at the moment.",
  "Simple Past": "Focuses on completed actions, past experiences, and finished events with clear past time references.",
  "Present Perfect": "Explores actions that connect the past and the present, including life experiences and recent results.",
  "Future (Will and Going To)": "Great for future plans, predictions, promises, intentions, and decisions made in the moment."
};

const writingPromptBank = {
  beginner: [
    "Write about your daily routine from morning to night.",
    "Describe your family and say what each person likes.",
    "Write about your favorite food and when you usually eat it.",
    "Describe your bedroom or your study space.",
    "Write about your best friend and the things you do together.",
    "Describe your school day or your workday.",
    "Write about a typical Saturday in your life.",
    "Describe your neighborhood and the places near your home.",
    "Write about your favorite hobby and why you enjoy it.",
    "Describe your pet, or the pet you would like to have.",
    "Write about your favorite day of the week and explain why you like it.",
    "Describe your best teacher or a person who helps you learn.",
    "Write about what you do after school or after work.",
    "Describe your favorite clothes and when you wear them.",
    "Write about your favorite season of the year.",
    "Describe a simple meal you can make or would like to make.",
    "Write about a place you visit often.",
    "Describe a movie or cartoon you really like.",
    "Write about what you usually do with your family at home.",
    "Describe your dream house using simple details."
  ],
  intermediate: [
    "Write about a memorable weekend and explain why it was special.",
    "Describe a place in your city that visitors should know.",
    "Write about a challenge you had and how you solved it.",
    "Describe a family tradition or celebration in your home.",
    "Write about a time when you learned something important.",
    "Describe your ideal vacation and the activities you would do there.",
    "Agree or disagree: Studying online is better than studying in a classroom.",
    "Describe a person who inspires you and explain why.",
    "Write about this idea by Walt Disney: 'If you can dream it, you can do it.' Do you agree? Why or why not?",
    "Agree or disagree: Technology makes our daily lives easier.",
    "Describe a goal you have for this year and how you plan to reach it.",
    "Write about a book, film, or series that taught you something important.",
    "Agree or disagree: Teenagers should have more freedom to make their own decisions.",
    "Describe a moment when you felt proud of yourself.",
    "Write about how friendships change over time.",
    "Write about this quote by Confucius: 'It does not matter how slowly you go as long as you do not stop.' What does it mean to you?",
    "Agree or disagree: Learning English can create better opportunities in life.",
    "Describe an important decision you made and its result.",
    "Write about the advantages and disadvantages of living in a big city.",
    "Describe a skill you would like to improve and explain why.",
    "Agree or disagree: People learn more from mistakes than from success."
  ],
  advanced: [
    "Write about how social media influences relationships and communication.",
    "Agree or disagree: Success depends more on persistence than on talent.",
    "Write about a social problem in your community and suggest solutions.",
    "Describe how travel can change a person's worldview.",
    "Write about this quote by Nelson Mandela: 'Education is the most powerful weapon which you can use to change the world.' Do you agree or disagree?",
    "Agree or disagree: Artificial intelligence will improve education more than it will harm it.",
    "Write about a life lesson that becomes more meaningful with age.",
    "Agree or disagree: People should always follow their passion when choosing a career.",
    "Write about this quote by Maya Angelou: 'If you don't like something, change it. If you can't change it, change your attitude.' What does it mean to you?",
    "Agree or disagree: Modern life is more stressful than life in the past.",
    "Discuss whether governments should invest more in public education than in other areas.",
    "Write about how climate change should influence personal choices and public policy.",
    "Agree or disagree: Freedom of speech should have limits in online spaces.",
    "Write about this quote by Albert Einstein: 'Try not to become a person of success, but rather try to become a person of value.' Do you agree or disagree?",
    "Discuss whether competition is more helpful or more harmful in education.",
    "Agree or disagree: Cultural globalization is beneficial for most societies.",
    "Write about the role of failure in personal and professional development.",
    "Discuss whether schools should teach more practical life skills.",
    "Write about this quote by Mahatma Gandhi: 'Be the change that you wish to see in the world.' How can people apply it today?",
    "Agree or disagree: Happiness is more important than financial success."
  ]
};

const speakingPromptBank = {
  beginner: [
    "Introduce yourself and say your age, your city, and one thing you like.",
    "Talk about your daily routine from morning to night.",
    "Describe your family and say something about each person.",
    "Talk about your favorite food and when you usually eat it.",
    "Describe your bedroom or your study area.",
    "Talk about your best friend and what you do together.",
    "Describe a normal school day or workday.",
    "Talk about what you usually do on Saturdays.",
    "Describe your favorite hobby and explain why you like it.",
    "Talk about a place near your home that you like.",
    "Describe your favorite clothes.",
    "Talk about your favorite season and why you like it.",
    "Describe your pet, or the pet you would like to have.",
    "Talk about your favorite teacher or a person who helps you learn.",
    "Describe your favorite movie, cartoon, or series.",
    "Talk about what you do after school or after work.",
    "Describe your dream house with simple details.",
    "Talk about your favorite day of the week.",
    "Describe a meal you really enjoy.",
    "Talk about what you usually do with your family at home."
  ],
  intermediate: [
    "Talk about a memorable weekend and explain why it was special.",
    "Describe a place in your city that visitors should know.",
    "Talk about a challenge you had and how you solved it.",
    "Describe a family tradition or celebration.",
    "Talk about a time when you learned something important.",
    "Describe your ideal vacation and what you would do there.",
    "Do you agree or disagree: Studying online is better than studying in a classroom? Explain.",
    "Talk about a person who inspires you and explain why.",
    "Do you agree or disagree: Technology makes daily life easier? Explain.",
    "Talk about a goal you have for this year and how you plan to reach it.",
    "Describe a moment when you felt proud of yourself.",
    "Talk about how friendships can change over time.",
    "Do you agree or disagree: Teenagers should have more freedom to make their own decisions?",
    "Talk about this idea by Walt Disney: 'If you can dream it, you can do it.' Do you agree?",
    "Describe a skill you would like to improve and explain why.",
    "Do you agree or disagree: People learn more from mistakes than from success?",
    "Talk about a book, movie, or series that taught you something important.",
    "Describe an important decision you made and its result.",
    "Talk about the advantages and disadvantages of living in a big city.",
    "Discuss whether learning English creates better opportunities in life."
  ],
  advanced: [
    "Discuss how social media influences relationships and communication.",
    "Do you agree or disagree: Success depends more on persistence than on talent?",
    "Talk about a social problem in your community and suggest solutions.",
    "Explain how travel can change a person's worldview.",
    "Discuss this quote by Nelson Mandela: 'Education is the most powerful weapon which you can use to change the world.'",
    "Do you agree or disagree: Artificial intelligence will improve education more than it will harm it?",
    "Talk about a life lesson that becomes more meaningful with age.",
    "Do you agree or disagree: People should always follow their passion when choosing a career?",
    "Discuss this quote by Maya Angelou: 'If you don't like something, change it. If you can't change it, change your attitude.'",
    "Do you agree or disagree: Modern life is more stressful than life in the past?",
    "Discuss whether governments should invest more in public education than in other areas.",
    "Talk about how climate change should influence personal choices and public policy.",
    "Do you agree or disagree: Freedom of speech should have limits in online spaces?",
    "Discuss this quote by Albert Einstein: 'Try not to become a person of success, but rather try to become a person of value.'",
    "Do you agree or disagree: Competition is more helpful than harmful in education?",
    "Discuss whether cultural globalization is beneficial for most societies.",
    "Talk about the role of failure in personal and professional development.",
    "Discuss whether schools should teach more practical life skills.",
    "Explain how people can apply Gandhi's idea: 'Be the change that you wish to see in the world.'",
    "Do you agree or disagree: Happiness is more important than financial success?"
  ]
};

const tfQuestion = (prompt, correct) => ({
  type: "tf",
  prompt,
  correct
});

const singleQuestion = (prompt, options, correct) => ({
  type: "single",
  prompt,
  options,
  correct
});

const multiQuestion = (prompt, options, correct) => ({
  type: "multi",
  prompt,
  options,
  correct
});

const readingBank = {
  beginner: [
    {
      title: "Lina's Morning",
      paragraphs: [
        "Lina is ten years old. She wakes up at six thirty every morning. First, she washes her face and brushes her teeth. Then she eats bread and fruit for breakfast.",
        "After breakfast, Lina puts her books in her school bag. She walks to school with her cousin. They arrive early, and Lina feels happy because she likes her teacher and her friends."
      ],
      questions: [
        tfQuestion("Lina is ten years old.", "true"),
        tfQuestion("Lina goes to school alone.", "false"),
        singleQuestion("What is the main idea of the text?", ["Lina's morning routine", "A school trip", "A birthday party"], 0),
        singleQuestion("What does Lina do first in the morning?", ["She eats breakfast", "She washes her face", "She plays with friends"], 1),
        singleQuestion("What does Lina eat for breakfast?", ["Rice and beans", "Bread and fruit", "Cake and juice"], 1),
        singleQuestion("The word 'arrive' is closest in meaning to...", ["reach", "draw", "forget"], 0),
        singleQuestion("Complete the idea: Lina feels happy because she likes her...", ["teacher and friends", "new shoes", "big lunch"], 0),
        multiQuestion("Which actions are part of Lina's morning? Choose all correct answers.", ["She brushes her teeth.", "She puts books in her bag.", "She takes a bus to school.", "She eats breakfast."], [0, 1, 3]),
        multiQuestion("Which people are mentioned in the text?", ["Lina", "her cousin", "her teacher", "her grandmother"], [0, 1, 2]),
        multiQuestion("Which sentences match the text? Choose all correct answers.", ["Lina arrives early.", "Lina dislikes school.", "Lina walks to school.", "Lina wakes up at night."], [0, 2])
      ]
    },
    {
      title: "A New Puppy",
      paragraphs: [
        "Tom's family has a new puppy named Coco. Coco is small, brown, and very playful. In the morning, Coco runs around the living room and follows Tom everywhere.",
        "Tom gives Coco water and a little food before school. In the afternoon, Tom plays with the puppy in the yard. Coco is noisy sometimes, but everyone in the family loves her."
      ],
      questions: [
        tfQuestion("Coco is a cat.", "false"),
        tfQuestion("Tom plays with Coco in the afternoon.", "true"),
        singleQuestion("What is the text mostly about?", ["A family meal", "Tom's new puppy", "A school game"], 1),
        singleQuestion("What color is Coco?", ["Black", "White", "Brown"], 2),
        singleQuestion("Where does Coco run in the morning?", ["In the kitchen", "In the living room", "At school"], 1),
        singleQuestion("The word 'playful' suggests that Coco is...", ["full of energy", "very old", "always sleepy"], 0),
        singleQuestion("Before school, Tom gives Coco...", ["milk and bread", "water and food", "a bath and a toy"], 1),
        multiQuestion("Which sentences are true about Coco?", ["She is small.", "She follows Tom.", "She never makes noise.", "She is loved by the family."], [0, 1, 3]),
        multiQuestion("Which places are mentioned in the text?", ["living room", "yard", "library", "school"], [0, 1, 3]),
        multiQuestion("Which activities does Tom do? Choose all correct answers.", ["He gives Coco water.", "He plays with Coco.", "He sells Coco.", "He goes to school."], [0, 1, 3])
      ]
    },
    {
      title: "Saturday at the Market",
      paragraphs: [
        "Every Saturday, Maria goes to the market with her father. They buy fresh fruit, vegetables, bread, and cheese. Maria likes looking at the colorful stands.",
        "Sometimes the sellers give her a piece of orange or banana to taste. After shopping, Maria and her father sit at a small cafe and drink juice. Then they go home with two full bags."
      ],
      questions: [
        tfQuestion("Maria goes to the market on Sundays.", "false"),
        tfQuestion("Maria and her father drink juice after shopping.", "true"),
        singleQuestion("What is the text about?", ["A Saturday market visit", "A school lunch", "A train ride"], 0),
        singleQuestion("Who goes with Maria?", ["Her mother", "Her father", "Her sister"], 1),
        singleQuestion("What do they buy?", ["Books and toys", "Fruit and vegetables", "Shoes and jackets"], 1),
        singleQuestion("What does 'fresh' mean here?", ["new and good to eat", "very expensive", "cold and wet"], 0),
        singleQuestion("Where do they sit after shopping?", ["At a small cafe", "In the car", "At school"], 0),
        multiQuestion("Which foods are mentioned?", ["cheese", "bread", "rice", "banana"], [0, 1, 3]),
        multiQuestion("Which details match the text?", ["The stands are colorful.", "The sellers are sometimes friendly.", "Maria goes alone.", "They carry full bags home."], [0, 1, 3]),
        multiQuestion("Choose the correct endings for the day.", ["They taste fruit.", "They drink juice.", "They take a plane.", "They return home."], [0, 1, 3])
      ]
    },
    {
      title: "The School Garden",
      paragraphs: [
        "At Ben's school, there is a small garden behind the library. Students grow tomatoes, lettuce, and flowers there. Ben waters the plants on Tuesdays and Thursdays.",
        "His friend Sara pulls out the weeds and writes the names of the plants on small signs. The garden is not very big, but it helps the students learn about nature and teamwork."
      ],
      questions: [
        tfQuestion("The garden is behind the library.", "true"),
        tfQuestion("Sara waters the plants on Mondays.", "false"),
        singleQuestion("What is the main idea?", ["Students use a school garden", "Students build a library", "Ben visits a zoo"], 0),
        singleQuestion("What does Ben do in the garden?", ["He paints signs", "He waters the plants", "He cooks tomatoes"], 1),
        singleQuestion("What does Sara write on the signs?", ["student names", "plant names", "library rules"], 1),
        singleQuestion("What are weeds?", ["plants people do not want there", "small animals", "garden tools"], 0),
        singleQuestion("The garden helps students learn about nature and...", ["music", "teamwork", "driving"], 1),
        multiQuestion("Which things grow in the garden?", ["tomatoes", "lettuce", "flowers", "apples"], [0, 1, 2]),
        multiQuestion("Which sentences are correct?", ["The garden is small.", "Students work together.", "Ben never goes there.", "There are signs in the garden."], [0, 1, 3]),
        multiQuestion("Which activities happen in the garden?", ["watering plants", "pulling weeds", "writing signs", "playing soccer"], [0, 1, 2])
      ]
    },
    {
      title: "Nora's Library Card",
      paragraphs: [
        "Nora gets her first library card this month. She feels excited because she loves stories about animals and space. On Saturday, she visits the library with her aunt.",
        "A librarian shows Nora where the children's books are. Nora chooses two books and one magazine. She promises to return them in two weeks and keeps the card in her blue wallet."
      ],
      questions: [
        tfQuestion("Nora gets her first library card this month.", "true"),
        tfQuestion("Nora borrows five books.", "false"),
        singleQuestion("What is the text mostly about?", ["Nora's first library card", "Nora's school test", "A trip to the museum"], 0),
        singleQuestion("Who goes with Nora to the library?", ["Her mother", "Her aunt", "Her cousin"], 1),
        singleQuestion("What kind of stories does Nora love?", ["Stories about animals and space", "Stories about cooking", "Stories about sports"], 0),
        singleQuestion("A librarian is a person who works in a...", ["hospital", "library", "restaurant"], 1),
        singleQuestion("Where does Nora keep the card?", ["In her desk", "In her blue wallet", "Inside a book"], 1),
        multiQuestion("Which items does Nora choose?", ["two books", "one magazine", "a wallet", "a newspaper"], [0, 1]),
        multiQuestion("Which feelings or actions are in the text?", ["She feels excited.", "She promises to return the books.", "She loses the card.", "She visits on Saturday."], [0, 1, 3]),
        multiQuestion("Which people are mentioned?", ["Nora", "her aunt", "a librarian", "her teacher"], [0, 1, 2])
      ]
    },
    {
      title: "Rainy Day at Home",
      paragraphs: [
        "It rains all day, so Diego stays at home with his older sister Ana. They cannot ride their bikes or play in the park. Instead, they make hot chocolate and listen to music.",
        "Later, Ana teaches Diego how to play a card game. They laugh a lot because Diego forgets the rules at first. In the evening, they watch a short movie with their parents."
      ],
      questions: [
        tfQuestion("Diego goes to the park.", "false"),
        tfQuestion("Ana teaches Diego a card game.", "true"),
        singleQuestion("Why do Diego and Ana stay at home?", ["It is too late", "It rains all day", "Their bikes are broken"], 1),
        singleQuestion("What do they drink?", ["Tea", "Hot chocolate", "Milk"], 1),
        singleQuestion("What is the main idea?", ["A rainy day at home", "A trip to the beach", "A school concert"], 0),
        singleQuestion("The word 'instead' shows a different...", ["place", "choice", "person"], 1),
        singleQuestion("Who watches the movie in the evening?", ["Only Diego", "Diego and Ana", "Diego, Ana, and their parents"], 2),
        multiQuestion("Which activities happen at home?", ["listening to music", "playing a card game", "riding bikes", "watching a movie"], [0, 1, 3]),
        multiQuestion("Which people are mentioned?", ["Diego", "Ana", "their parents", "their teacher"], [0, 1, 2]),
        multiQuestion("Which details are true?", ["Diego forgets the rules at first.", "The children are sad all day.", "They laugh a lot.", "They cannot play in the park."], [0, 2, 3])
      ]
    },
    {
      title: "A Helpful Neighbor",
      paragraphs: [
        "Mr. Lee lives next door to Emma's family. He is an older man with a kind smile. Every week, he waters the flowers in front of his house and says hello to everyone on the street.",
        "One afternoon, Emma drops her grocery bag near the gate. Apples roll onto the sidewalk. Mr. Lee quickly helps her pick them up, and Emma thanks him for being so helpful."
      ],
      questions: [
        tfQuestion("Mr. Lee lives far from Emma's family.", "false"),
        tfQuestion("Emma drops her grocery bag one afternoon.", "true"),
        singleQuestion("What is the text mainly about?", ["A helpful neighbor", "A garden party", "A lost dog"], 0),
        singleQuestion("What does Mr. Lee do every week?", ["He paints his house", "He waters the flowers", "He drives Emma to school"], 1),
        singleQuestion("What rolls onto the sidewalk?", ["Apples", "Books", "Coins"], 0),
        singleQuestion("The word 'quickly' means...", ["slowly", "suddenly", "fast"], 2),
        singleQuestion("Why does Emma thank Mr. Lee?", ["He gives her flowers", "He helps pick up the apples", "He fixes the gate"], 1),
        multiQuestion("Which details describe Mr. Lee?", ["older", "kind", "rude", "helpful"], [0, 1, 3]),
        multiQuestion("Which places are mentioned?", ["his house", "the street", "the sidewalk", "the airport"], [0, 1, 2]),
        multiQuestion("Which actions happen in the text?", ["watering flowers", "dropping a bag", "picking up apples", "buying new shoes"], [0, 1, 2])
      ]
    },
    {
      title: "The Art Club Poster",
      paragraphs: [
        "Mia sees a bright poster on the school wall. It invites students to join the art club every Wednesday after class. Mia enjoys drawing, so she reads the poster carefully.",
        "The club meets in Room 12, and students can paint, draw, and make small crafts there. Mia decides to join because she wants to learn new techniques and meet other creative students."
      ],
      questions: [
        tfQuestion("The art club meets every Friday.", "false"),
        tfQuestion("Mia wants to learn new techniques.", "true"),
        singleQuestion("What is the text mostly about?", ["A poster about the art club", "A math exam", "A school lunch menu"], 0),
        singleQuestion("When does the art club meet?", ["Before school", "Every Wednesday after class", "Only once a month"], 1),
        singleQuestion("Where does the club meet?", ["Room 10", "Room 11", "Room 12"], 2),
        singleQuestion("What does 'carefully' suggest?", ["Mia reads with attention", "Mia is afraid", "Mia is angry"], 0),
        singleQuestion("Why does Mia decide to join?", ["She needs extra homework", "She wants to draw on the wall", "She wants to improve and meet students"], 2),
        multiQuestion("What can students do in the club?", ["paint", "draw", "make crafts", "play tennis"], [0, 1, 2]),
        multiQuestion("Which ideas are in the text?", ["The poster is bright.", "Mia enjoys drawing.", "The club is after class.", "Mia's brother joins too."], [0, 1, 2]),
        multiQuestion("Which words describe the club?", ["creative", "artistic", "weekly", "dangerous"], [0, 1, 2])
      ]
    },
    {
      title: "A Picnic in the Park",
      paragraphs: [
        "On Sunday, Hugo's family goes to the park for a picnic. They bring sandwiches, juice, fruit, and a large blanket. Hugo's little brother carries a red ball.",
        "After lunch, the family plays together under the trees. Hugo reads for a few minutes while his mother takes photos. Before going home, they clean the area and throw their trash away."
      ],
      questions: [
        tfQuestion("The picnic happens on Sunday.", "true"),
        tfQuestion("The family leaves trash in the park.", "false"),
        singleQuestion("What is the main topic of the text?", ["A park picnic", "A football match", "A rainy day"], 0),
        singleQuestion("What does Hugo's family bring?", ["Sandwiches and juice", "Pizza and soup", "Books and shoes"], 0),
        singleQuestion("Who carries a red ball?", ["Hugo", "Hugo's brother", "Hugo's mother"], 1),
        singleQuestion("What does Hugo do after lunch?", ["He reads for a few minutes", "He cooks dinner", "He goes to school"], 0),
        singleQuestion("The word 'area' refers to the...", ["place around them", "weather", "photo album"], 0),
        multiQuestion("Which activities happen after lunch?", ["playing together", "reading", "taking photos", "buying more food"], [0, 1, 2]),
        multiQuestion("Which people are mentioned?", ["Hugo", "his little brother", "his mother", "his teacher"], [0, 1, 2]),
        multiQuestion("Which details show good behavior in the park?", ["They clean the area.", "They throw trash away.", "They shout at people.", "They bring a blanket."], [0, 1, 3])
      ]
    },
    {
      title: "The Class Pet",
      paragraphs: [
        "Ms. Green's class has a class pet named Peanut. Peanut is a small hamster with soft gray fur. The students take turns giving him food and cleaning his cage.",
        "On Fridays, one student takes Peanut home for the weekend. This week it is Alex's turn. He feels proud, and he promises to keep Peanut safe, clean, and comfortable."
      ],
      questions: [
        tfQuestion("Peanut is a hamster.", "true"),
        tfQuestion("Alex takes Peanut home every weekend.", "false"),
        singleQuestion("What is the text mainly about?", ["A class pet", "A science test", "A school concert"], 0),
        singleQuestion("What color is Peanut's fur?", ["White", "Brown", "Gray"], 2),
        singleQuestion("What do students do for Peanut?", ["They teach him tricks", "They feed him and clean the cage", "They buy him books"], 1),
        singleQuestion("Why does Alex feel proud?", ["It is his turn to take Peanut home", "He wins a race", "He buys a hamster"], 0),
        singleQuestion("The word 'comfortable' is closest in meaning to...", ["safe and relaxed", "loud and fast", "hungry and weak"], 0),
        multiQuestion("Which details are true?", ["Peanut is small.", "Ms. Green teaches the class.", "Students take turns helping.", "Peanut is a bird."], [0, 1, 2]),
        multiQuestion("Which actions are mentioned?", ["giving food", "cleaning the cage", "taking Peanut home", "washing the classroom walls"], [0, 1, 2]),
        multiQuestion("Which words describe Alex's responsibility?", ["safe", "clean", "comfortable", "careless"], [0, 1, 2])
      ]
    }
  ],
  intermediate: [
    {
      title: "A Community Library Project",
      paragraphs: [
        "In a quiet neighborhood, an old bus stop stood empty for years. Most people walked past it without noticing, but a group of teenagers saw a different possibility. They decided to turn the space into a small community library where neighbors could leave and borrow books for free.",
        "At first, the project seemed simple, but the group quickly discovered that it required planning. They cleaned the area, painted the walls, and asked local businesses for used shelves. One bakery donated paint, while a carpenter helped fix the roof during his free time.",
        "When the library finally opened, children visited after school and older residents stopped by in the evenings. The project did more than provide books. It also gave people a reason to talk to one another and feel proud of their street."
      ],
      questions: [
        tfQuestion("The bus stop was already a busy library before the teenagers arrived.", "false"),
        tfQuestion("A carpenter helped repair the roof.", "true"),
        singleQuestion("What is the main idea of the text?", ["Teenagers transformed an unused place into a community library.", "A bakery opened a new shop at a bus stop.", "Residents wanted the bus stop to be removed."], 0),
        singleQuestion("Why did the project require more effort than expected?", ["The teenagers forgot about books.", "It needed planning, repairs, and support.", "The neighbors did not like reading."], 1),
        singleQuestion("What did the bakery donate?", ["used shelves", "books", "paint", "money"], 2),
        singleQuestion("In paragraph 3, the project 'did more than provide books' means it also...", ["made the street noisier", "brought neighbors together", "created more traffic", "closed local stores"], 1),
        singleQuestion("What can we infer about the teenagers?", ["They wanted attention only.", "They were patient and cooperative.", "They were forced to work.", "They had professional jobs."], 1),
        multiQuestion("Which actions were part of the project? Choose all correct answers.", ["cleaning the area", "painting the walls", "asking businesses for help", "moving the bus stop to another city"], [0, 1, 2]),
        multiQuestion("Which groups benefited from the library?", ["children", "older residents", "local businesses", "after-school visitors"], [0, 1, 3]),
        multiQuestion("Which ideas are supported by the text?", ["Small projects can strengthen a community.", "Cooperation can solve practical problems.", "The library only helped young people.", "Unused spaces can become useful again."], [0, 1, 3])
      ]
    },
    {
      title: "Learning to Cook",
      paragraphs: [
        "When Ravi moved to another city for college, he realized that he depended too much on ready-made food. At first, he burned rice, forgot ingredients, and made soups that tasted bland. Still, he kept trying because eating out every day was expensive and unhealthy.",
        "Ravi began by watching short cooking videos and asking his mother simple questions over the phone. Instead of trying difficult recipes, he focused on basic meals such as pasta, rice, eggs, and vegetable soup. After a few weeks, his confidence grew.",
        "Cooking changed more than Ravi's diet. It also made him more organized because he had to plan meals, buy groceries, and clean the kitchen. What began as a necessary skill eventually became a relaxing hobby."
      ],
      questions: [
        tfQuestion("Ravi was already an excellent cook before college.", "false"),
        tfQuestion("Ravi asked his mother questions about cooking.", "true"),
        singleQuestion("What is the text mainly about?", ["Ravi learns to cook and becomes more independent.", "Ravi opens a restaurant.", "Ravi stops eating vegetables."], 0),
        singleQuestion("Why did Ravi want to improve his cooking?", ["He wanted to impress a chef.", "Eating out was costly and unhealthy.", "He did not like his classes."], 1),
        singleQuestion("What did Ravi do first to improve?", ["He bought expensive equipment.", "He watched videos and asked for help.", "He hired a cook.", "He read only long recipe books."], 1),
        singleQuestion("The word 'bland' is closest in meaning to...", ["colorful", "without much flavor", "too spicy", "cold"], 1),
        singleQuestion("According to paragraph 3, cooking also helped Ravi become more...", ["organized", "famous", "lazy", "competitive"], 0),
        multiQuestion("Which foods are mentioned in the text?", ["pasta", "rice", "eggs", "fish"], [0, 1, 2]),
        multiQuestion("Which changes happened over time?", ["Ravi's confidence grew.", "Cooking became relaxing.", "Ravi stopped buying groceries.", "Ravi improved his diet."], [0, 1, 3]),
        multiQuestion("Which tasks did Ravi need to manage?", ["planning meals", "buying groceries", "cleaning the kitchen", "repairing ovens for neighbors"], [0, 1, 2])
      ]
    },
    {
      title: "The Bicycle Commute",
      paragraphs: [
        "For years, Helena traveled to work by car, even though the office was only five kilometers from her apartment. Traffic was heavy every morning, and she often arrived frustrated before the day even began. One month, when fuel prices rose again, she decided to try cycling.",
        "The first week was difficult. Helena had to wake up earlier, learn a safer route, and get used to riding in different weather conditions. However, she soon noticed that the trip felt more predictable than driving because she no longer depended on traffic jams.",
        "After two months, Helena saved money, felt more energetic, and knew her neighborhood better. She still drove on stormy days, but cycling became her usual choice. What started as a practical decision also improved her mood."
      ],
      questions: [
        tfQuestion("Helena's office was far from her apartment.", "false"),
        tfQuestion("Cycling became Helena's usual way to go to work.", "true"),
        singleQuestion("What is the text mainly about?", ["Helena changes her way of commuting.", "Helena buys a new car.", "Helena moves to another neighborhood."], 0),
        singleQuestion("What pushed Helena to try cycling?", ["A race with coworkers", "Rising fuel prices", "A broken bicycle shop"], 1),
        singleQuestion("What was difficult in the first week?", ["Finding a bicycle color", "Waking up earlier and learning a route", "Working fewer hours", "Talking to neighbors"], 1),
        singleQuestion("What does 'predictable' suggest in paragraph 2?", ["easy to avoid", "likely to happen the same way", "dangerous", "boring"], 1),
        singleQuestion("How did cycling affect Helena's mood?", ["It made her more tired every day.", "It improved her mood.", "It made her angrier.", "It had no effect."], 1),
        multiQuestion("Which benefits did Helena notice?", ["saving money", "feeling more energetic", "knowing her neighborhood better", "arriving later every day"], [0, 1, 2]),
        multiQuestion("Which challenges are mentioned?", ["weather conditions", "traffic jams", "waking up earlier", "buying a train ticket"], [0, 1, 2]),
        multiQuestion("Which statements are supported by the text?", ["Her first reason was practical.", "She still uses the car sometimes.", "She never liked cycling.", "The office is close to her apartment."], [0, 1, 3])
      ]
    },
    {
      title: "The Lost Wallet",
      paragraphs: [
        "On a crowded train home, Lucia noticed a wallet under the seat across from her. For a moment, she hesitated. She could leave it where it was, take it to the station office, or try to find its owner before the train stopped.",
        "Inside the wallet, there was some cash, a student card, and a folded supermarket receipt. Lucia looked at the student card and saw the owner's name and university. She used social media to search for the student and sent a message before the train reached the final station.",
        "To her surprise, the student replied almost immediately. He was in another car of the same train. They met near the exit, and he thanked Lucia again and again. The experience reminded her that small honest actions can have a big impact on someone's day."
      ],
      questions: [
        tfQuestion("Lucia found the wallet at a supermarket.", "false"),
        tfQuestion("The owner answered Lucia before the train reached the final station.", "true"),
        singleQuestion("What is the main idea of the text?", ["Lucia returns a lost wallet through quick action.", "Lucia loses her student card.", "A train arrives late at the station."], 0),
        singleQuestion("What was inside the wallet?", ["cash, a student card, and a receipt", "only money and keys", "a passport and photos", "nothing important"], 0),
        singleQuestion("How did Lucia try to find the owner?", ["She called the police first.", "She searched social media.", "She left the wallet on the seat.", "She asked the train driver."], 1),
        singleQuestion("What does the word 'hesitated' suggest?", ["She ran quickly.", "She felt uncertain for a moment.", "She laughed loudly.", "She became angry."], 1),
        singleQuestion("What lesson did Lucia take from the experience?", ["Trains are always crowded.", "Honest actions matter.", "Social media is dangerous.", "People should carry less cash."], 1),
        multiQuestion("Which choices did Lucia consider at first?", ["leaving the wallet there", "taking it to the station office", "finding the owner herself", "keeping the wallet"], [0, 1, 2]),
        multiQuestion("Which details help solve the problem?", ["the student card", "the owner's quick reply", "the folded receipt", "another car on the same train"], [0, 1, 3]),
        multiQuestion("Which ideas are supported by the text?", ["Lucia acted responsibly.", "Technology helped return the wallet.", "The owner was angry with Lucia.", "The event happened before the final station."], [0, 1, 3])
      ]
    },
    {
      title: "After-School Podcast",
      paragraphs: [
        "At first, the podcast club at Oliver's school attracted only five students. They met every Thursday after class in an empty language room and recorded short episodes about school events. The sound quality was poor, and they often laughed at their own mistakes.",
        "Instead of giving up, the group decided to improve a little each week. One student learned simple audio editing, another wrote clearer scripts, and Oliver practiced asking better interview questions. Their teachers noticed the effort and gave them access to a better microphone.",
        "By the end of the semester, the club had more listeners than anyone expected. Students liked hearing familiar voices discuss sports matches, book suggestions, and school news. The club succeeded because it treated each problem as something that could be solved."
      ],
      questions: [
        tfQuestion("The podcast club was popular from the first day.", "false"),
        tfQuestion("Teachers helped the group by giving them a better microphone.", "true"),
        singleQuestion("What is the main idea of the text?", ["A small podcast club improves through steady effort.", "Students stop meeting after class.", "The school opens a radio station for teachers only."], 0),
        singleQuestion("What problem did the club have at the beginning?", ["No one could speak English.", "The sound quality was poor.", "The room was too large.", "They had no topics to discuss."], 1),
        singleQuestion("How did the students improve the podcast?", ["They waited for professionals.", "They worked on different skills.", "They changed schools.", "They canceled interviews."], 1),
        singleQuestion("The phrase 'instead of giving up' means the students...", ["stopped trying", "continued despite problems", "changed the club's name", "ignored the listeners"], 1),
        singleQuestion("Why did students enjoy the podcast later?", ["It had famous guests only.", "It discussed topics connected to school life.", "It played music all day.", "It replaced classes."], 1),
        multiQuestion("Which skills did the group improve?", ["audio editing", "script writing", "interviewing", "building furniture"], [0, 1, 2]),
        multiQuestion("Which topics were mentioned in the podcast?", ["sports matches", "book suggestions", "school news", "space travel"], [0, 1, 2]),
        multiQuestion("Which ideas explain the club's success?", ["steady improvement", "teacher support", "problem-solving attitude", "luck with no effort"], [0, 1, 2])
      ]
    },
    {
      title: "A Visit to the Island",
      paragraphs: [
        "During a school break, Camila visited a small island with her grandparents. She expected to spend most of her time taking photos of the sea, but the trip became more interesting when her grandfather began telling stories about the island's past.",
        "He described how the island had once depended on fishing and how many families repaired their own boats by hand. Camila noticed that even the older houses seemed connected to those stories. They were simple, strong, and built close to the shore.",
        "By the end of the visit, Camila realized that the island was more than a beautiful place. It was also a living memory of the people who had worked there for generations. The stories helped her see the landscape in a new way."
      ],
      questions: [
        tfQuestion("Camila visited the island alone.", "false"),
        tfQuestion("Her grandfather's stories changed the way Camila saw the island.", "true"),
        singleQuestion("What is the main idea of the text?", ["Stories helped Camila understand the island more deeply.", "Camila learned to repair boats.", "The island was empty and silent."], 0),
        singleQuestion("What did Camila expect to do at first?", ["Go fishing", "Take photos of the sea", "Study architecture", "Meet a teacher"], 1),
        singleQuestion("What had the island once depended on?", ["tourism", "fishing", "farming", "mining"], 1),
        singleQuestion("What does the phrase 'living memory' suggest?", ["The island is a museum with no people.", "The past is still present in the place and its people.", "The sea changes color every day.", "Camila forgot the stories later."], 1),
        singleQuestion("How were the older houses described?", ["simple, strong, and near the shore", "tall, modern, and colorful", "empty and damaged", "hidden in the forest"], 0),
        multiQuestion("Which details came from the grandfather's stories?", ["families repaired boats by hand", "the island depended on fishing", "people flew small planes", "the past shaped daily life"], [0, 1, 3]),
        multiQuestion("Which things influenced Camila's understanding?", ["the sea", "the stories", "the older houses", "a train station"], [0, 1, 2]),
        multiQuestion("Which ideas are supported by the text?", ["A place can be both beautiful and historical.", "Stories can change how we see a landscape.", "Camila was bored all the time.", "Generations of people worked on the island."], [0, 1, 3])
      ]
    },
    {
      title: "The Silent Floor",
      paragraphs: [
        "When Mina started her new job, she was surprised by how quiet the office was. People spoke politely, but most communication happened through messages, even when coworkers sat only a few desks apart. At first, she thought the silence meant the team was unfriendly.",
        "After a few days, Mina understood the reason. Many workers were writing reports that required concentration, and interruptions slowed them down. The team was not cold; it was simply careful about protecting one another's focus.",
        "Once Mina adjusted, she began to appreciate the system. Meetings were shorter, messages were clearer, and people seemed to respect each other's time. She learned that a workplace can feel unusual at first without being negative."
      ],
      questions: [
        tfQuestion("Mina first believed the team was unfriendly.", "true"),
        tfQuestion("The office was quiet because people disliked Mina.", "false"),
        singleQuestion("What is the main idea of the text?", ["Mina learns that a quiet office can still be respectful and productive.", "Mina decides to quit her new job.", "The office has no internet service."], 0),
        singleQuestion("Why did coworkers often use messages?", ["They were shy children.", "They wanted to avoid slowing down focused work.", "They worked in different cities.", "They disliked speaking."], 1),
        singleQuestion("What changed Mina's opinion?", ["A long vacation", "Understanding the reason for the silence", "A new manager", "A loud meeting"], 1),
        singleQuestion("The word 'interruptions' is closest in meaning to...", ["short pauses caused by others", "important celebrations", "private messages", "weekly reports"], 0),
        singleQuestion("What did Mina appreciate later?", ["Shorter meetings and clearer messages", "More noise and long conversations", "Fewer tasks", "A different building"], 0),
        multiQuestion("Which ideas describe the team culture?", ["respect for focus", "careful communication", "unfriendliness", "respect for time"], [0, 1, 3]),
        multiQuestion("Which things did Mina notice after adjusting?", ["shorter meetings", "clearer messages", "better understanding", "fewer coworkers"], [0, 1, 2]),
        multiQuestion("Which lessons come from the text?", ["First impressions can be misleading.", "Silence always means dislike.", "Work habits can have practical reasons.", "Unusual does not always mean bad."], [0, 2, 3])
      ]
    },
    {
      title: "Saving the Theater",
      paragraphs: [
        "The old theater in Daniel's town had been closed for almost a decade. Dust covered the seats, the stage lights were broken, and many people assumed the building would eventually be demolished. However, a local group refused to let that happen.",
        "They organized concerts, bake sales, and online campaigns to raise money for repairs. Volunteers cleaned walls, repaired curtains, and painted signs by hand. The work was slow, but each small success encouraged more people to join.",
        "When the theater finally reopened, the first event was not a professional performance. It was a community show created by local students, musicians, and dancers. That choice made the reopening feel less like the end of a repair project and more like the return of a shared dream."
      ],
      questions: [
        tfQuestion("Many people expected the theater to be demolished.", "true"),
        tfQuestion("The first event after reopening was a professional show from another city.", "false"),
        singleQuestion("What is the main idea of the text?", ["A community works together to reopen an old theater.", "Daniel becomes a famous actor.", "The town builds a completely new theater."], 0),
        singleQuestion("How did the group raise money?", ["Only through tickets", "Through events and online campaigns", "By selling the building", "By asking one company only"], 1),
        singleQuestion("What effect did each small success have?", ["It caused delays.", "It encouraged more people to join.", "It closed the theater again.", "It reduced interest."], 1),
        singleQuestion("Why was the first event meaningful?", ["It was free food for volunteers.", "It involved local creative people.", "It used only recorded music.", "It lasted all night."], 1),
        singleQuestion("The phrase 'shared dream' suggests that the theater...", ["mattered to many people", "belonged to one family", "was not important anymore", "should be sold"], 0),
        multiQuestion("Which activities helped the project?", ["concerts", "bake sales", "painting signs", "tearing down the stage"], [0, 1, 2]),
        multiQuestion("Which people were included in the first event?", ["students", "musicians", "dancers", "engineers only"], [0, 1, 2]),
        multiQuestion("Which ideas are supported by the text?", ["Community projects can take time.", "Volunteers can make a real difference.", "Nobody cared about the theater.", "Reopening restored community pride."], [0, 1, 3])
      ]
    },
    {
      title: "The Mountain Message",
      paragraphs: [
        "During a hiking trip, Yasmin noticed a painted sign near the trail. It reminded visitors to stay on marked paths, carry their trash out, and avoid picking flowers. At first glance, the message seemed obvious, but the path itself showed why the rules mattered.",
        "In places where people had stepped away from the trail, the soil was loose and some plants had stopped growing. A guide explained that mountain environments can recover slowly because weather conditions are harsh and many species are delicate.",
        "By the end of the walk, Yasmin no longer saw the sign as a list of restrictions. Instead, she understood it as a way of protecting the beauty that visitors come to enjoy. The message was simple, but its purpose was serious."
      ],
      questions: [
        tfQuestion("The sign encouraged visitors to pick flowers.", "false"),
        tfQuestion("Yasmin's understanding of the sign changed by the end of the hike.", "true"),
        singleQuestion("What is the main idea of the text?", ["Environmental rules on the trail help protect fragile places.", "Yasmin gets lost in the mountains.", "The guide paints signs for a living."], 0),
        singleQuestion("Why did the rules matter?", ["They made the trail longer.", "The environment was easily damaged.", "Visitors asked for more signs.", "The weather was warm."], 1),
        singleQuestion("What did the guide explain?", ["How to climb faster", "Why mountain areas recover slowly", "Where to buy flowers", "How to paint signs"], 1),
        singleQuestion("The word 'delicate' is closest in meaning to...", ["strong", "fragile", "colorful", "expensive"], 1),
        singleQuestion("How did Yasmin see the sign in the end?", ["As an unnecessary warning", "As a way to protect nature", "As a map to another trail", "As a tourist advertisement"], 1),
        multiQuestion("Which instructions were on the sign?", ["stay on marked paths", "carry trash out", "avoid picking flowers", "light fires at night"], [0, 1, 2]),
        multiQuestion("Which details show environmental damage?", ["loose soil", "plants that stopped growing", "more birds singing", "people stepping off the trail"], [0, 1, 3]),
        multiQuestion("Which ideas are supported by the text?", ["Simple rules can protect natural beauty.", "Visitors sometimes ignore instructions.", "Mountain environments are always easy to restore.", "The purpose of the sign is serious."], [0, 1, 3])
      ]
    },
    {
      title: "The Late Train Conversation",
      paragraphs: [
        "One evening, Amir and a stranger were both waiting for a delayed train. At first, they stood in silence, checking the platform screen every few minutes. When the delay reached forty minutes, the stranger joked that the train was probably on vacation.",
        "The comment made Amir laugh, and soon they were talking about travel, work, and the books they liked to read on long trips. By the time the train arrived, the wait felt shorter than either of them expected.",
        "Amir never learned the stranger's full story, but the conversation stayed with him. It reminded him that brief encounters can still be meaningful, especially when they interrupt an ordinary routine."
      ],
      questions: [
        tfQuestion("Amir and the stranger started talking immediately.", "false"),
        tfQuestion("Humor helped begin the conversation.", "true"),
        singleQuestion("What is the main idea of the text?", ["A delay leads to an unexpectedly meaningful conversation.", "Amir misses the last train home.", "Two friends plan a vacation together."], 0),
        singleQuestion("What started the conversation?", ["A lost ticket", "A joke about the train", "A loud announcement", "A book falling down"], 1),
        singleQuestion("How long was the delay when the stranger joked?", ["twenty minutes", "thirty minutes", "forty minutes", "one hour"], 2),
        singleQuestion("What does the text suggest about the wait after they began talking?", ["It felt longer.", "It felt shorter.", "It became more stressful.", "It ended immediately."], 1),
        singleQuestion("What lesson did Amir take from the moment?", ["Strangers should be avoided.", "Brief conversations can matter.", "Trains are never on time.", "Reading is better than talking."], 1),
        multiQuestion("Which topics did they discuss?", ["travel", "work", "books", "cooking classes"], [0, 1, 2]),
        multiQuestion("Which details are true?", ["They first stood in silence.", "The train was delayed.", "They became lifelong business partners.", "The stranger used humor."], [0, 1, 3]),
        multiQuestion("Which ideas are supported by the text?", ["Ordinary moments can become memorable.", "Conversation can change how time feels.", "The train arrived before the joke.", "Small connections can interrupt routine in a positive way."], [0, 1, 3])
      ]
    }
  ],
  advanced: [
    {
      title: "The Value of Silence",
      paragraphs: [
        "Modern life often rewards speed, reaction, and constant expression. In many spaces, silence is treated almost like a problem to be solved, a gap that must be filled before discomfort appears. Yet silence can also function as a form of attention. It creates room for thought, observation, and emotional processing in a way that nonstop conversation rarely allows.",
        "This does not mean silence is always positive. In some situations, silence hides fear, avoidance, or inequality. A person may remain quiet not because they are reflective, but because they do not feel safe enough to speak. For that reason, silence should not be romanticized without context.",
        "Still, when chosen freely, silence can be powerful. It helps people listen more carefully, question automatic opinions, and notice details they might otherwise miss. In a culture that often equates visibility with value, silence can become an intentional act of independence."
      ],
      questions: [
        tfQuestion("The text argues that silence is always beneficial.", "false"),
        tfQuestion("According to the text, silence can support observation and reflection.", "true"),
        singleQuestion("What is the main idea of the text?", ["Silence has complex value and depends on context.", "People should stop speaking in public.", "Modern life has eliminated silence completely.", "Silence is mainly a sign of weakness."], 0),
        singleQuestion("Why does the author say silence should not be romanticized?", ["It is too rare to study.", "It can also come from fear or inequality.", "It is less useful than technology.", "It makes people less creative."], 1),
        singleQuestion("In paragraph 1, the phrase 'a gap that must be filled' suggests that silence is often seen as...", ["a welcome rest", "an uncomfortable absence", "a creative tool", "a political strategy"], 1),
        singleQuestion("What can freely chosen silence help people do?", ["avoid all conflict", "listen more carefully and question opinions", "become more famous", "speak more quickly"], 1),
        singleQuestion("What is the author's overall tone?", ["purely humorous", "balanced and reflective", "angry and sarcastic", "careless and informal"], 1),
        multiQuestion("Which ideas are supported by the text?", ["Silence can create room for thought.", "Silence may reflect unsafe conditions.", "Silence always improves equality.", "Silence can be an intentional act."], [0, 1, 3]),
        multiQuestion("Which words best relate to the positive side of silence in the text?", ["attention", "observation", "reflection", "noise"], [0, 1, 2]),
        multiQuestion("Which statements capture the author's nuance?", ["Context matters when judging silence.", "Silence can hide social problems.", "The author rejects silence completely.", "Silence can challenge a culture of constant visibility."], [0, 1, 3])
      ]
    },
    {
      title: "Why Cities Remember Through Buildings",
      paragraphs: [
        "Cities are often described through statistics: population, traffic, income, housing, or pollution. These measurements are useful, but they rarely explain why people feel attached to a particular street or square. Emotional memory often settles in physical spaces. A staircase, a market, or a theater can hold meaning far beyond its practical function.",
        "When an old building disappears, the loss is not only architectural. What vanishes with it is a network of associations: conversations, routines, milestones, and shared references. Even people who never entered the building may still experience its presence as part of the city's identity.",
        "This does not mean every structure should be preserved forever. Cities must adapt, and new needs are real. The challenge is to distinguish between change that creates possibility and change that erases memory without reflection. Urban development is not only about building the future; it is also about deciding what kind of past deserves to remain visible."
      ],
      questions: [
        tfQuestion("The author believes all old buildings must always be preserved.", "false"),
        tfQuestion("The text suggests that buildings can carry emotional memory.", "true"),
        singleQuestion("What is the central idea of the text?", ["Buildings matter because they connect cities to memory and identity.", "Statistics are useless for understanding cities.", "Modern architecture should replace all old spaces.", "Markets are the most important urban spaces."], 0),
        singleQuestion("According to paragraph 1, what do statistics often fail to explain?", ["the cost of construction", "why people feel attached to places", "how cities expand", "how many stairs a building has"], 1),
        singleQuestion("What disappears when an old building is lost?", ["only its physical materials", "a network of shared meanings and memories", "the city's climate", "all future development"], 1),
        singleQuestion("What is the challenge described in paragraph 3?", ["choosing between history and all change", "distinguishing thoughtful change from careless erasure", "keeping every building the same", "preventing any new construction"], 1),
        singleQuestion("The author's perspective can best be described as...", ["extreme and nostalgic", "practical but historically aware", "hostile to cities", "indifferent to identity"], 1),
        multiQuestion("Which places are mentioned as examples of meaningful spaces?", ["a staircase", "a market", "a theater", "an airport"], [0, 1, 2]),
        multiQuestion("Which ideas does the text support?", ["Physical spaces can hold collective memory.", "Development always destroys identity.", "Urban change requires judgment.", "People may value buildings they never used directly."], [0, 2, 3]),
        multiQuestion("Which concepts are central to the text?", ["identity", "memory", "adaptation", "randomness"], [0, 1, 2])
      ]
    },
    {
      title: "The Hidden Cost of Convenience",
      paragraphs: [
        "Convenience has become one of the strongest values in contemporary consumer culture. Meals arrive with a tap, entertainment begins instantly, and products appear at our doors with almost no visible effort. Because the process feels seamless, it is easy to imagine convenience as a neutral improvement in daily life.",
        "However, convenience often moves effort rather than eliminating it. The time saved by one person may depend on the invisible labor of another person working under pressure, often with little security or recognition. In that sense, convenience can function as a mask, hiding the systems that sustain it.",
        "This does not require rejecting all modern services. Instead, it calls for a more honest relationship with them. A society that celebrates convenience without questioning its human and environmental costs risks becoming increasingly efficient at ignoring responsibility."
      ],
      questions: [
        tfQuestion("The text claims convenience removes effort for everyone involved.", "false"),
        tfQuestion("The author suggests convenience may hide invisible labor.", "true"),
        singleQuestion("What is the main idea of the text?", ["Convenience can conceal labor and responsibility.", "Technology should be banned.", "Entertainment is too easy to access.", "Delivery services are always unethical."], 0),
        singleQuestion("Why does convenience feel neutral to many people?", ["Because the process appears seamless.", "Because people enjoy pressure.", "Because labor is highly visible.", "Because products take a long time to arrive."], 0),
        singleQuestion("What does the phrase 'moves effort rather than eliminating it' mean?", ["People work less than before.", "The burden often shifts to someone else.", "Consumers become stronger.", "Convenience creates no costs."], 1),
        singleQuestion("What solution does the author suggest?", ["Reject all modern services.", "Use services without thinking.", "Develop a more honest relationship with convenience.", "Return to life without technology."], 2),
        singleQuestion("Which word best describes the author's tone?", ["celebratory", "critical but measured", "comic", "confused"], 1),
        multiQuestion("Which examples of convenience appear in the text?", ["delivered meals", "instant entertainment", "doorstep products", "private airplanes"], [0, 1, 2]),
        multiQuestion("Which costs does the author want readers to consider?", ["human labor conditions", "environmental impact", "personal responsibility", "fashion trends"], [0, 1, 2]),
        multiQuestion("Which ideas are supported by the passage?", ["Convenience can hide dependence on others.", "Efficiency can discourage reflection.", "All convenience is inherently evil.", "Modern services should be questioned, not blindly worshiped."], [0, 1, 3])
      ]
    },
    {
      title: "When Failure Becomes Useful",
      paragraphs: [
        "Failure is usually discussed as something to avoid, soften, or recover from as quickly as possible. In schools and workplaces alike, success is treated as proof of value, while failure is often framed as embarrassment. Yet this view may be too narrow to explain how learning actually happens.",
        "Useful failure is not the same as repeated carelessness. It refers to attempts that reveal the limits of current knowledge and make revision necessary. A failed experiment, draft, or conversation can expose assumptions that success might have hidden.",
        "The difficulty is psychological rather than theoretical. Many people understand that failure can teach valuable lessons, but they still experience it as a threat to identity. For that reason, the most productive environments are often those that demand effort while also making room for revision without humiliation."
      ],
      questions: [
        tfQuestion("The text presents failure as identical to carelessness.", "false"),
        tfQuestion("A failed attempt can reveal hidden assumptions.", "true"),
        singleQuestion("What is the central idea of the passage?", ["Failure can support learning when it leads to revision.", "People should aim to fail often without effort.", "Success is meaningless.", "Schools should lower standards."], 0),
        singleQuestion("How is failure usually framed in schools and workplaces, according to the text?", ["as a creative gift", "as embarrassment", "as teamwork", "as entertainment"], 1),
        singleQuestion("What is 'useful failure' in the passage?", ["a random mistake with no lesson", "an attempt that exposes limits and invites revision", "avoiding difficult tasks", "a public performance"], 1),
        singleQuestion("Why is failure hard to use productively?", ["It is always technically confusing.", "It can feel like a threat to identity.", "It only happens in science.", "It makes revision impossible."], 1),
        singleQuestion("What kind of environment does the author support?", ["one with no standards", "one that combines effort with room to revise", "one that rewards speed only", "one that avoids feedback"], 1),
        multiQuestion("Which examples of failure are mentioned?", ["an experiment", "a draft", "a conversation", "a map"], [0, 1, 2]),
        multiQuestion("Which ideas are supported by the text?", ["Success can hide assumptions.", "Failure can teach when reflection follows.", "Humiliation helps learning.", "Revision is an important part of growth."], [0, 1, 3]),
        multiQuestion("Which words connect closely to the author's argument?", ["revision", "identity", "assumptions", "perfection"], [0, 1, 2])
      ]
    },
    {
      title: "The Attention Economy",
      paragraphs: [
        "Many digital platforms do not simply offer information; they compete for attention as aggressively as possible. Their success depends less on whether users finish a task and more on whether users remain engaged, return often, and keep scrolling. In that environment, distraction is not always an accident. It can be a business strategy.",
        "This does not mean users lack responsibility. People still make choices about what they read, watch, and share. However, personal responsibility becomes harder to exercise when systems are intentionally designed to interrupt focus and reward impulsive behavior.",
        "A healthier digital culture may require more than individual discipline. It may also demand design choices, educational habits, and public discussions that treat attention as something worth protecting rather than endlessly extracting."
      ],
      questions: [
        tfQuestion("The text argues that distraction online is always accidental.", "false"),
        tfQuestion("The author believes both users and systems matter in shaping attention.", "true"),
        singleQuestion("What is the main idea of the text?", ["Digital systems often compete for attention in ways that challenge focus.", "Users have no responsibility online.", "Scrolling is always harmful.", "Education has nothing to do with attention."], 0),
        singleQuestion("According to the text, what often defines platform success?", ["whether users finish tasks quickly", "whether users stay engaged and return", "whether users agree with one another", "whether platforms use less color"], 1),
        singleQuestion("Why is personal responsibility harder to exercise online?", ["Because all devices are broken.", "Because systems are designed to interrupt focus.", "Because users cannot read.", "Because information is too accurate."], 1),
        singleQuestion("What does the author suggest may be needed for a healthier culture?", ["Only stricter punishment", "Design changes, educational habits, and public discussion", "Less internet access for everyone", "More advertisements"], 1),
        singleQuestion("The phrase 'worth protecting' refers to...", ["platform profits", "attention itself", "impulsive behavior", "digital speed"], 1),
        multiQuestion("Which forces does the author think matter?", ["design choices", "educational habits", "public discussion", "attention extraction"], [0, 1, 2, 3]),
        multiQuestion("Which behaviors are encouraged by some systems, according to the text?", ["constant engagement", "returning often", "impulsive reactions", "deep concentration by default"], [0, 1, 2]),
        multiQuestion("Which ideas are supported by the passage?", ["Attention has social value.", "Platform design can influence behavior.", "Users have zero agency.", "Protecting focus may require collective action."], [0, 1, 3])
      ]
    },
    {
      title: "A Museum Without Objects",
      paragraphs: [
        "A new museum project in one coastal town made an unusual choice: instead of focusing on physical artifacts, it built its collection around recorded memories. Fishermen described storms, teachers spoke about migration, and shop owners reflected on how the town changed over decades. Visitors listened through headphones rather than looking at glass cases.",
        "Some critics questioned whether a museum without many objects could feel complete. Yet supporters argued that memory itself was part of the heritage worth preserving. Objects can survive while meaning fades; recorded voices, by contrast, capture emotion, tone, and perspective.",
        "The project raises an important question about history: is preservation mainly about keeping things, or about keeping ways of understanding? The strongest answer may be that both matter, but not always in the same proportion."
      ],
      questions: [
        tfQuestion("The museum project centered mainly on recorded memories.", "true"),
        tfQuestion("The text says objects are useless in all museums.", "false"),
        singleQuestion("What is the main idea of the passage?", ["A museum based on memory challenges traditional ideas of preservation.", "The coastal town wants fewer visitors.", "Glass cases are old-fashioned and should disappear.", "Teachers and fishermen disagree about history."], 0),
        singleQuestion("How did visitors experience the collection?", ["Through headphones", "Only through written notes", "By touching objects", "On television screens outdoors"], 0),
        singleQuestion("Why did some people support the project?", ["It avoided all local history.", "It preserved voices, emotion, and perspective.", "It was cheaper than any other museum.", "It had no artifacts at all."], 1),
        singleQuestion("What question does the final paragraph raise?", ["Who should enter museums for free?", "Whether preservation means keeping things or ways of understanding", "How long museum visits should last", "Why critics dislike headphones"], 1),
        singleQuestion("The author's approach to the project is best described as...", ["dismissive", "thoughtful and exploratory", "purely negative", "angry"], 1),
        multiQuestion("Whose memories were recorded?", ["fishermen", "teachers", "shop owners", "astronauts"], [0, 1, 2]),
        multiQuestion("Which contrasts appear in the text?", ["objects versus memories", "survival versus fading meaning", "voices versus glass cases", "history versus weather"], [0, 1, 2]),
        multiQuestion("Which ideas are supported by the passage?", ["Heritage can include personal memory.", "Preservation is not only physical.", "A museum must choose one method forever.", "Meaning can fade even when objects remain."], [0, 1, 3])
      ]
    },
    {
      title: "The Ethics of Repair",
      paragraphs: [
        "Repair used to be an ordinary part of daily life. Clothes were mended, radios were opened, and furniture was restored when possible. Today, however, many products are replaced long before they stop being useful, partly because repair is expensive, inconvenient, or deliberately difficult.",
        "This shift is often discussed in economic terms, but it also has ethical consequences. A culture of replacement encourages people to see objects as temporary and disposable. Over time, that attitude can shape how value itself is understood, making durability seem less important than novelty.",
        "Defending repair is not simply nostalgia. It can also express respect for labor, materials, and environmental limits. To repair something is to act as though usefulness deserves extension rather than immediate abandonment."
      ],
      questions: [
        tfQuestion("The author treats repair as a purely nostalgic idea.", "false"),
        tfQuestion("The text connects repair to environmental and ethical concerns.", "true"),
        singleQuestion("What is the main idea of the text?", ["Repair carries ethical meaning in a culture of replacement.", "Old radios are better than new technology.", "People should never buy new things.", "Novelty is always harmful."], 0),
        singleQuestion("Why are many products replaced early?", ["They all break in one week.", "Repair can be costly or intentionally difficult.", "People no longer need objects.", "Materials never last."], 1),
        singleQuestion("What attitude can a replacement culture encourage?", ["Objects should be treated as disposable.", "Durability matters most.", "People should repair everything alone.", "Novelty is impossible."], 0),
        singleQuestion("Why does the author say defending repair is not just nostalgia?", ["Because repair can express respect for labor and materials.", "Because old products are always cheaper.", "Because all modern products are weak.", "Because only experts can repair objects."], 0),
        singleQuestion("What does 'immediate abandonment' mean in the final line?", ["careful recycling", "quickly giving up on something", "sharing objects with others", "buying tools"], 1),
        multiQuestion("Which values are linked to repair?", ["respect for labor", "respect for materials", "awareness of environmental limits", "constant novelty"], [0, 1, 2]),
        multiQuestion("Which ideas are supported by the text?", ["Repair changes how people think about value.", "Economic questions are the only issue.", "Durability can matter ethically.", "Replacement can be encouraged by design."], [0, 2, 3]),
        multiQuestion("Which words connect closely to the argument?", ["durability", "disposable", "novelty", "abandonment"], [0, 1, 2, 3])
      ]
    },
    {
      title: "Reading Slowly",
      paragraphs: [
        "In many academic and professional settings, reading is treated as a race against time. Students skim for keywords, workers search for bullet points, and online readers jump between tabs without finishing entire arguments. Speed has practical value, but it can also narrow what reading is allowed to do.",
        "Slow reading is not simply reading at a lower pace. It is a method of attention that gives structure, tone, and implication time to emerge. A complex sentence may not be difficult because of vocabulary alone; it may require patience because it is carrying several ideas at once.",
        "To read slowly, then, is not to resist efficiency for its own sake. It is to recognize that understanding sometimes depends on delay. Certain meanings appear only when readers remain long enough for language to unfold."
      ],
      questions: [
        tfQuestion("The text says speed has no practical value.", "false"),
        tfQuestion("According to the text, slow reading is connected to attention.", "true"),
        singleQuestion("What is the central idea of the passage?", ["Slow reading can deepen understanding in ways speed cannot.", "Readers should avoid all digital texts.", "Vocabulary is the only challenge in reading.", "Efficiency is always harmful."], 0),
        singleQuestion("How is reading often treated in modern settings?", ["as a race against time", "as a form of music", "as a physical workout", "as a private ritual only"], 0),
        singleQuestion("What does slow reading allow to emerge?", ["structure, tone, and implication", "only shorter sentences", "faster decisions", "fewer ideas"], 0),
        singleQuestion("Why might a complex sentence require patience?", ["Because it is always poorly written.", "Because it may carry several ideas at once.", "Because it uses no punctuation.", "Because readers should memorize it."], 1),
        singleQuestion("What does the final paragraph suggest about understanding?", ["It sometimes depends on delay.", "It comes instantly from speed.", "It is less important than efficiency.", "It cannot be improved."], 0),
        multiQuestion("Which reading habits are mentioned as examples of speed-oriented reading?", ["skimming for keywords", "searching for bullet points", "jumping between tabs", "copying every sentence by hand"], [0, 1, 2]),
        multiQuestion("Which ideas are supported by the text?", ["Attention changes what reading can reveal.", "All slow reading is inefficient.", "Meaning can unfold over time.", "Speed may hide complexity."], [0, 2, 3]),
        multiQuestion("Which concepts are central to the passage?", ["attention", "implication", "patience", "understanding"], [0, 1, 2, 3])
      ]
    },
    {
      title: "The Shape of Public Trust",
      paragraphs: [
        "Public trust is often discussed as though it were a simple yes-or-no condition: either people trust institutions, or they do not. In reality, trust is more uneven. A person may trust a local doctor, doubt national media, rely on public transport, and question political leaders all at the same time.",
        "This complexity matters because broad statements about 'lost trust' can hide important differences. Trust depends not only on information, but also on experience, transparency, fairness, and whether institutions respond when they fail. In that sense, trust is less like a permanent possession and more like a relationship that requires maintenance.",
        "If trust is relational, then rebuilding it cannot rely on slogans alone. It demands visible competence, accountability, and the willingness to repair damage after mistakes. People rarely trust because they are told to; they trust because patterns of behavior give them reason to do so."
      ],
      questions: [
        tfQuestion("The text presents public trust as more complex than a simple yes-or-no issue.", "true"),
        tfQuestion("According to the passage, slogans alone are enough to rebuild trust.", "false"),
        singleQuestion("What is the main idea of the text?", ["Trust is complex and must be earned through behavior.", "Trust depends only on information.", "People should stop questioning institutions.", "Public transport creates trust automatically."], 0),
        singleQuestion("Why are broad claims about 'lost trust' limited?", ["They hide important differences and experiences.", "They are too optimistic.", "They only apply to schools.", "They focus too much on local doctors."], 0),
        singleQuestion("What comparison does the author use for trust?", ["a machine", "a permanent possession", "a relationship that needs maintenance", "a legal contract only"], 2),
        singleQuestion("What is needed to rebuild trust, according to the final paragraph?", ["slogans and advertising", "visible competence and accountability", "less public discussion", "perfect institutions"], 1),
        singleQuestion("What does the final sentence suggest?", ["People trust instantly.", "Trust follows consistent patterns of behavior.", "Institutions cannot regain trust.", "Mistakes do not matter."], 1),
        multiQuestion("Which factors influence trust in the text?", ["experience", "transparency", "fairness", "response to failure"], [0, 1, 2, 3]),
        multiQuestion("Which examples show trust can be uneven?", ["trusting a local doctor", "doubting national media", "relying on public transport", "questioning political leaders"], [0, 1, 2, 3]),
        multiQuestion("Which ideas are supported by the passage?", ["Trust can vary across institutions.", "Trust must be maintained.", "Language alone cannot rebuild trust.", "Trust never changes once formed."], [0, 1, 2])
      ]
    },
    {
      title: "Owning Less, Choosing More",
      paragraphs: [
        "Minimalism is sometimes misunderstood as a style defined by empty rooms and carefully arranged objects. In that version, it appears to be mainly aesthetic. Yet for many people, owning less is not about visual purity. It is about reducing distraction and making decisions more deliberately.",
        "The appeal of minimalism may come partly from fatigue. People are surrounded by advertisements, recommendations, and constant invitations to upgrade. In such an environment, choosing less can feel like recovering control over attention, money, and space.",
        "Still, minimalism is not automatically virtuous. It can become performative, expensive, or disconnected from the realities of those who cannot choose simplicity as a lifestyle. Its most useful insight may be modest: possessions shape behavior, and deciding what to keep is also a way of deciding what matters."
      ],
      questions: [
        tfQuestion("The text says minimalism is only about visual style.", "false"),
        tfQuestion("The author believes minimalism can sometimes become performative.", "true"),
        singleQuestion("What is the main idea of the passage?", ["Minimalism can be meaningful, but its value depends on how and why it is practiced.", "Owning less is always morally superior.", "Advertising should be banned completely.", "People should live in empty rooms."], 0),
        singleQuestion("What deeper purpose does the text connect to owning less?", ["reducing distraction and choosing more deliberately", "impressing other people", "avoiding all responsibility", "spending more money"], 0),
        singleQuestion("Why might minimalism appeal to people, according to paragraph 2?", ["They dislike furniture.", "They are tired of constant pressure to buy and upgrade.", "They want larger houses.", "They prefer expensive hobbies."], 1),
        singleQuestion("What criticism does the author make in paragraph 3?", ["Minimalism can ignore social realities.", "Minimalism never affects behavior.", "Minimalism should replace all design.", "Minimalism makes money meaningless."], 0),
        singleQuestion("What is the 'modest' insight of minimalism in the final line?", ["Rooms should be empty.", "Possessions shape behavior and values.", "Shopping is always harmful.", "Simplicity requires wealth."], 1),
        multiQuestion("Which things can choosing less help a person recover control over?", ["attention", "money", "space", "weather"], [0, 1, 2]),
        multiQuestion("Which critiques of minimalism appear in the text?", ["it can be performative", "it can be expensive", "it can ignore some realities", "it always increases distraction"], [0, 1, 2]),
        multiQuestion("Which ideas are supported by the passage?", ["Minimalism is not one simple idea.", "Aesthetic simplicity is its only meaning.", "Consumer pressure can shape desire.", "What we keep reflects what we value."], [0, 2, 3])
      ]
    }
  ]
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
    .replace(/isn't/gi, "is not")
    .replace(/aren't/gi, "are not")
    .replace(/\bi'm\b/gi, "i am")
    .replace(/\bhe's\b/gi, "he is")
    .replace(/\bshe's\b/gi, "she is")
    .replace(/\bit's\b/gi, "it is")
    .replace(/\byou're\b/gi, "you are")
    .replace(/\bwe're\b/gi, "we are")
    .replace(/\bthey're\b/gi, "they are")
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
    "Improve Your English - Simple Present Performance",
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
          title: "Improve Your English - Simple Present",
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

const writingPractice = document.querySelector("[data-writing-practice]");

if (writingPractice) {
  const promptText = writingPractice.querySelector("[data-random-prompt]");
  const levelLabel = writingPractice.querySelector("[data-writing-level-label]");
  const newPromptButton = writingPractice.querySelector("[data-new-prompt]");
  const shareWritingButton = writingPractice.querySelector("[data-share-writing]");
  const saveWritingPdfButton = writingPractice.querySelector("[data-save-writing-pdf]");
  const writingFeedback = writingPractice.querySelector("[data-writing-share-feedback]");
  const writingTextarea = document.querySelector("#writing-practice-text");
  const params = new URLSearchParams(window.location.search);
  const requestedLevel = params.get("level");
  const activeLevel = writingPromptBank[requestedLevel] ? requestedLevel : "beginner";
  let currentPrompt = "";

  const levelTitles = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced"
  };

  const pickPrompt = () => {
    const prompts = writingPromptBank[activeLevel];
    if (!prompts || !prompts.length) {
      return "Write about a topic that is interesting for you.";
    }

    if (prompts.length === 1) {
      return prompts[0];
    }

    let nextPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    while (nextPrompt === currentPrompt) {
      nextPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    }

    return nextPrompt;
  };

  const showPrompt = () => {
    currentPrompt = pickPrompt();

    if (promptText) {
      promptText.textContent = currentPrompt;
    }

    if (levelLabel) {
      levelLabel.textContent = `${levelTitles[activeLevel]} Level`;
    }
  };

  if (newPromptButton) {
    newPromptButton.addEventListener("click", showPrompt);
  }

  if (shareWritingButton) {
    shareWritingButton.addEventListener("click", async () => {
      const studentText = writingTextarea && writingTextarea.value.trim()
        ? writingTextarea.value.trim()
        : "No text written yet.";

      const shareText = [
        "Improve Your English - Improve Your Writing",
        `Level: ${levelTitles[activeLevel]}`,
        "",
        "Prompt:",
        currentPrompt,
        "",
        "Student text:",
        studentText
      ].join("\n");

      try {
        if (navigator.share) {
          await navigator.share({
            title: "Improve Your English - Improve Your Writing",
            text: shareText
          });

          if (writingFeedback) {
            writingFeedback.innerHTML = "<strong>Text shared successfully.</strong>";
          }
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(shareText);

          if (writingFeedback) {
            writingFeedback.innerHTML = "<strong>Text copied to the clipboard.</strong> You can now paste it into WhatsApp, email, or another app.";
          }
        } else if (writingFeedback) {
          writingFeedback.innerHTML = "<strong>Sharing is not available on this device.</strong> Try the Save as PDF button.";
        }
      } catch (error) {
        if (writingFeedback) {
          writingFeedback.innerHTML = "<strong>Sharing was canceled or not available.</strong> You can try again or use Save as PDF.";
        }
      }
    });
  }

  if (saveWritingPdfButton) {
    saveWritingPdfButton.addEventListener("click", () => {
      window.print();
    });
  }

  showPrompt();
}

const speakingPractice = document.querySelector("[data-speaking-practice]");

if (speakingPractice) {
  const promptText = speakingPractice.querySelector("[data-speaking-prompt]");
  const levelLabel = speakingPractice.querySelector("[data-speaking-level-label]");
  const newPromptButton = speakingPractice.querySelector("[data-new-speaking-prompt]");
  const startRecordingButton = speakingPractice.querySelector("[data-start-recording]");
  const stopRecordingButton = speakingPractice.querySelector("[data-stop-recording]");
  const deleteRecordingButton = speakingPractice.querySelector("[data-delete-recording]");
  const shareAudioButton = speakingPractice.querySelector("[data-share-audio]");
  const downloadAudioLink = speakingPractice.querySelector("[data-download-audio]");
  const statusText = speakingPractice.querySelector("[data-speaking-status]");
  const timerText = speakingPractice.querySelector("[data-speaking-timer]");
  const speakingAudio = speakingPractice.querySelector("[data-speaking-audio]");
  const speakingShareFeedback = speakingPractice.querySelector("[data-speaking-share-feedback]");
  const params = new URLSearchParams(window.location.search);
  const requestedLevel = params.get("level");
  const activeLevel = speakingPromptBank[requestedLevel] ? requestedLevel : "beginner";
  const levelTitles = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced"
  };
  let currentPrompt = "";
  let mediaRecorder = null;
  let mediaStream = null;
  let recordedChunks = [];
  let audioBlob = null;
  let audioUrl = "";
  let recordingStartTime = 0;
  let recordingTimerId = null;

  const formatDuration = (milliseconds) => {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const setTimerDisplay = (milliseconds) => {
    if (timerText) {
      timerText.textContent = formatDuration(milliseconds);
    }
  };

  const stopTimer = () => {
    if (recordingTimerId) {
      window.clearInterval(recordingTimerId);
      recordingTimerId = null;
    }
  };

  const startTimer = () => {
    stopTimer();
    recordingStartTime = Date.now();
    setTimerDisplay(0);
    recordingTimerId = window.setInterval(() => {
      setTimerDisplay(Date.now() - recordingStartTime);
    }, 250);
  };

  const setDownloadState = () => {
    if (!downloadAudioLink) {
      return;
    }

    if (audioUrl) {
      downloadAudioLink.href = audioUrl;
      downloadAudioLink.style.pointerEvents = "auto";
      downloadAudioLink.style.opacity = "1";
    } else {
      downloadAudioLink.href = "#";
      downloadAudioLink.style.pointerEvents = "none";
      downloadAudioLink.style.opacity = "0.55";
    }
  };

  const clearAudioResult = () => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }

    audioBlob = null;
    audioUrl = "";
    recordedChunks = [];

    if (speakingAudio) {
      speakingAudio.removeAttribute("src");
      speakingAudio.load();
    }

    setDownloadState();
    setTimerDisplay(0);
  };

  const pickPrompt = () => {
    const prompts = speakingPromptBank[activeLevel];
    if (!prompts || !prompts.length) {
      return "Talk about a topic that is interesting for you.";
    }

    if (prompts.length === 1) {
      return prompts[0];
    }

    let nextPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    while (nextPrompt === currentPrompt) {
      nextPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    }

    return nextPrompt;
  };

  const showPrompt = () => {
    currentPrompt = pickPrompt();

    if (promptText) {
      promptText.textContent = currentPrompt;
    }

    if (levelLabel) {
      levelLabel.textContent = `${levelTitles[activeLevel]} Level`;
    }
  };

  const stopMediaTracks = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      mediaStream = null;
    }
  };

  const getSupportedMimeType = () => {
    const types = [
      "audio/webm;codecs=opus",
      "audio/webm",
      "audio/mp4",
      "audio/ogg;codecs=opus"
    ];

    if (!window.MediaRecorder || !window.MediaRecorder.isTypeSupported) {
      return "";
    }

    return types.find((type) => window.MediaRecorder.isTypeSupported(type)) || "";
  };

  if (newPromptButton) {
    newPromptButton.addEventListener("click", showPrompt);
  }

  if (startRecordingButton) {
    startRecordingButton.addEventListener("click", async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
        if (statusText) {
          statusText.innerHTML = "<strong>Audio recording is not available in this browser.</strong>";
        }
        return;
      }

      try {
        clearAudioResult();

        mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recordedChunks = [];

        const mimeType = getSupportedMimeType();
        mediaRecorder = mimeType
          ? new MediaRecorder(mediaStream, { mimeType })
          : new MediaRecorder(mediaStream);

        mediaRecorder.addEventListener("dataavailable", (event) => {
          if (event.data && event.data.size > 0) {
            recordedChunks.push(event.data);
          }
        });

        mediaRecorder.addEventListener("stop", () => {
          stopTimer();

          if (!recordedChunks.length) {
            if (statusText) {
              statusText.innerHTML = "<strong>No audio was recorded.</strong> Please try again.";
            }
            stopMediaTracks();
            return;
          }

          audioBlob = new Blob(recordedChunks, { type: mediaRecorder.mimeType || "audio/webm" });
          audioUrl = URL.createObjectURL(audioBlob);

          if (speakingAudio) {
            speakingAudio.src = audioUrl;
          }

          setDownloadState();
          stopMediaTracks();
          setTimerDisplay(Date.now() - recordingStartTime);

          if (statusText) {
            statusText.innerHTML = "<strong>Recording complete.</strong> Listen to your answer or share it.";
          }
        });

        mediaRecorder.start();
        startTimer();

        if (statusText) {
          statusText.innerHTML = "<strong>Recording now...</strong> Speak clearly and click Stop Recording when you finish.";
        }

        if (speakingShareFeedback) {
          speakingShareFeedback.textContent = "Record your answer first, then share it or download it.";
        }
      } catch (error) {
        stopMediaTracks();
        if (statusText) {
          statusText.innerHTML = "<strong>Microphone access was denied or unavailable.</strong>";
        }
      }
    });
  }

  if (stopRecordingButton) {
    stopRecordingButton.addEventListener("click", () => {
      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
      }
    });
  }

  if (deleteRecordingButton) {
    deleteRecordingButton.addEventListener("click", () => {
      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
      }

      stopTimer();
      stopMediaTracks();
      clearAudioResult();

      if (statusText) {
        statusText.innerHTML = "Recording deleted. Click Start Recording when you are ready.";
      }

      if (speakingShareFeedback) {
        speakingShareFeedback.textContent = "Record your answer first, then share it or download it.";
      }
    });
  }

  if (shareAudioButton) {
    shareAudioButton.addEventListener("click", async () => {
      if (!audioBlob) {
        if (speakingShareFeedback) {
          speakingShareFeedback.innerHTML = "<strong>Record your answer first</strong>, then try sharing it.";
        }
        return;
      }

      const extension = audioBlob.type.includes("mp4") ? "m4a" : audioBlob.type.includes("ogg") ? "ogg" : "webm";
      const file = new File([audioBlob], `fix-your-english-speaking.${extension}`, { type: audioBlob.type || "audio/webm" });

      try {
        if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
          await navigator.share({
            title: "Improve Your English - Speaking Practice",
            text: `${levelTitles[activeLevel]} speaking prompt: ${currentPrompt}`,
            files: [file]
          });

          if (speakingShareFeedback) {
            speakingShareFeedback.innerHTML = "<strong>Audio shared successfully.</strong>";
          }
        } else if (navigator.share) {
          await navigator.share({
            title: "Improve Your English - Speaking Practice",
            text: [
              `Level: ${levelTitles[activeLevel]}`,
              "Prompt:",
              currentPrompt,
              "",
              "Audio recorded. Use the Download Audio button if your device cannot share the audio file directly."
            ].join("\n")
          });

          if (speakingShareFeedback) {
            speakingShareFeedback.innerHTML = "<strong>Prompt shared successfully.</strong> If needed, use Download Audio to save the recording file.";
          }
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText([
            "Improve Your English - Speaking Practice",
            `Level: ${levelTitles[activeLevel]}`,
            "Prompt:",
            currentPrompt,
            "",
            "Audio recorded. Use the download button if file sharing is not supported on this device."
          ].join("\n"));

          if (speakingShareFeedback) {
            speakingShareFeedback.innerHTML = "<strong>Prompt copied to the clipboard.</strong> Use the download button to save the audio file.";
          }
        } else if (speakingShareFeedback) {
          speakingShareFeedback.innerHTML = "<strong>Direct audio sharing is not available here.</strong> Use the download button instead.";
        }
      } catch (error) {
        if (speakingShareFeedback) {
          speakingShareFeedback.innerHTML = "<strong>Sharing was canceled or unavailable.</strong> Use the download button if needed.";
        }
      }
    });
  }

  showPrompt();
  setDownloadState();
  setTimerDisplay(0);
}

const readingPractice = document.querySelector("[data-reading-practice]");

if (readingPractice) {
  const params = new URLSearchParams(window.location.search);
  const requestedLevel = params.get("level");
  const activeLevel = readingBank[requestedLevel] ? requestedLevel : "beginner";
  const levelTitles = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced"
  };
  const readingTitle = readingPractice.querySelector("[data-reading-title]");
  const readingLevelLabel = readingPractice.querySelector("[data-reading-level-label]");
  const readingText = readingPractice.querySelector("[data-reading-text]");
  const readingQuestions = readingPractice.querySelector("[data-reading-questions]");
  const newReadingButton = readingPractice.querySelector("[data-new-reading]");
  const toggleReadingTextButton = readingPractice.querySelector("[data-toggle-reading-text]");
  const resetReadingButton = readingPractice.querySelector("[data-reset-reading]");
  const checkReadingButton = readingPractice.querySelector("[data-check-reading]");
  const shareReadingButton = readingPractice.querySelector("[data-share-reading]");
  const saveReadingPdfButton = readingPractice.querySelector("[data-save-reading-pdf]");
  const readAloudButton = readingPractice.querySelector("[data-read-aloud]");
  const pauseReadingAudioButton = readingPractice.querySelector("[data-pause-reading-audio]");
  const resumeReadingAudioButton = readingPractice.querySelector("[data-resume-reading-audio]");
  const stopReadingAudioButton = readingPractice.querySelector("[data-stop-reading-audio]");
  const readingFeedback = readingPractice.querySelector("[data-reading-feedback]");
  const readingShareFeedback = readingPractice.querySelector("[data-reading-share-feedback]");
  const readingAudioFeedback = readingPractice.querySelector("[data-reading-audio-feedback]");
  const readingTextCard = readingPractice.querySelector("[data-reading-text-card]");
  let currentReading = null;
  let currentIndex = -1;
  let latestReadingScore = null;
  let currentUtterance = null;
  let isReadingTextHidden = false;

  const getQuestionTypeLabel = (type) => {
    if (type === "tf") {
      return "True or False";
    }

    if (type === "multi") {
      return "More than one answer";
    }

    return "Choose one answer";
  };

  const updateReadingTextVisibility = () => {
    if (!readingTextCard || !toggleReadingTextButton) {
      return;
    }

    readingTextCard.classList.toggle("is-hidden", isReadingTextHidden);
    toggleReadingTextButton.classList.toggle("reading-text-toggle-active", isReadingTextHidden);
    toggleReadingTextButton.textContent = isReadingTextHidden ? "Show Text" : "Omit Text";
  };

  const renderReading = () => {
    const readings = readingBank[activeLevel];
    if (!readings || !readings.length) {
      return;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      currentUtterance = null;
    }

    let nextIndex = Math.floor(Math.random() * readings.length);
    while (readings.length > 1 && nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * readings.length);
    }

    currentIndex = nextIndex;
    currentReading = readings[nextIndex];
    latestReadingScore = null;
    isReadingTextHidden = false;

    if (readingTitle) {
      readingTitle.textContent = currentReading.title;
    }

    if (readingLevelLabel) {
      readingLevelLabel.textContent = `${levelTitles[activeLevel]} Level`;
    }

    if (readingText) {
      readingText.innerHTML = currentReading.paragraphs
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");
    }

    if (readingQuestions) {
      readingQuestions.innerHTML = currentReading.questions.map((question, index) => {
        const name = `reading-question-${index}`;
        let options = [];

        if (question.type === "tf") {
          options = [
            { label: "True", value: "true" },
            { label: "False", value: "false" }
          ];
        } else {
          options = question.options.map((option, optionIndex) => ({
            label: option,
            value: String(optionIndex)
          }));
        }

        const inputType = question.type === "multi" ? "checkbox" : "radio";

        return `
          <article class="reading-question-card" data-reading-question="${index}" data-reading-type="${question.type}">
            <span class="reading-question-type">${getQuestionTypeLabel(question.type)}</span>
            <h3>${index + 1}. ${question.prompt}</h3>
            <div class="reading-options">
              ${options.map((option, optionIndex) => `
                <label class="reading-option">
                  <input
                    type="${inputType}"
                    name="${name}${question.type === "multi" ? `-${optionIndex}` : ""}"
                    value="${option.value}"
                  >
                  <strong>${String.fromCharCode(65 + optionIndex)}.</strong>
                  <span>${option.label}</span>
                </label>
              `).join("")}
            </div>
          </article>
        `;
      }).join("");
    }

    if (readingFeedback) {
      readingFeedback.textContent = "Answer all 10 questions and then check your answers.";
    }

    if (readingShareFeedback) {
      readingShareFeedback.textContent = "Use the buttons above to share the student's result or save it as a PDF.";
    }

    if (readingAudioFeedback) {
      readingAudioFeedback.textContent = "Use the audio buttons to listen to the reading passage out loud.";
    }

    updateReadingTextVisibility();
  };

  const getQuestionCards = () => Array.from(readingPractice.querySelectorAll("[data-reading-question]"));

  const resetReadingAnswers = () => {
    getQuestionCards().forEach((card) => {
      card.querySelectorAll("input").forEach((input) => {
        input.checked = false;
      });
    });

    latestReadingScore = null;

    if (readingFeedback) {
      readingFeedback.textContent = "Answer all 10 questions and then check your answers.";
    }
  };

  const getSelectedValues = (card) => Array.from(card.querySelectorAll("input:checked"))
    .map((input) => input.value);

  if (newReadingButton) {
    newReadingButton.addEventListener("click", renderReading);
  }

  if (toggleReadingTextButton) {
    toggleReadingTextButton.addEventListener("click", () => {
      isReadingTextHidden = !isReadingTextHidden;
      updateReadingTextVisibility();

      if (readingAudioFeedback) {
        readingAudioFeedback.innerHTML = isReadingTextHidden
          ? "<strong>Text hidden.</strong> Listen and answer the questions."
          : "<strong>Text visible again.</strong> You can read or listen now.";
      }
    });
  }

  if (resetReadingButton) {
    resetReadingButton.addEventListener("click", resetReadingAnswers);
  }

  if (checkReadingButton) {
    checkReadingButton.addEventListener("click", () => {
      const cards = getQuestionCards();
      const allAnswered = cards.every((card) => getSelectedValues(card).length > 0);

      if (!allAnswered) {
        if (readingFeedback) {
          readingFeedback.innerHTML = "<strong>Answer all 10 questions first</strong>, then check your answers.";
        }
        return;
      }

      const correctCount = cards.reduce((count, card, index) => {
        const question = currentReading.questions[index];
        const selectedValues = getSelectedValues(card);

        if (question.type === "multi") {
          const expected = question.correct.map(String).sort();
          const received = [...selectedValues].sort();
          return count + Number(expected.length === received.length && expected.every((value, valueIndex) => value === received[valueIndex]));
        }

        return count + Number(selectedValues[0] === String(question.correct));
      }, 0);

      latestReadingScore = { correct: correctCount, total: cards.length };

      if (readingFeedback) {
        if (correctCount === cards.length) {
          readingFeedback.innerHTML = "Excellent work. <strong>You got 10 out of 10 correct.</strong>";
        } else {
          readingFeedback.innerHTML = `<strong>You got ${correctCount} out of 10 correct.</strong> Keep trying. You can do it.`;
        }
      }
    });
  }

  if (shareReadingButton) {
    shareReadingButton.addEventListener("click", async () => {
      const resultLine = latestReadingScore
        ? `${latestReadingScore.correct}/${latestReadingScore.total}`
        : "not checked yet";
      const shareText = [
        "Improve Your English - Improve Your Reading",
        `Level: ${levelTitles[activeLevel]}`,
        `Text: ${currentReading ? currentReading.title : "No text loaded"}`,
        `Result: ${resultLine}`
      ].join("\n");

      try {
        if (navigator.share) {
          await navigator.share({
            title: "Improve Your English - Improve Your Reading",
            text: shareText
          });

          if (readingShareFeedback) {
            readingShareFeedback.innerHTML = "<strong>Result shared successfully.</strong>";
          }
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(shareText);

          if (readingShareFeedback) {
            readingShareFeedback.innerHTML = "<strong>Result copied to the clipboard.</strong> You can now paste it into WhatsApp, email, or another app.";
          }
        } else if (readingShareFeedback) {
          readingShareFeedback.innerHTML = "<strong>Sharing is not available on this device.</strong> Try the Save as PDF button.";
        }
      } catch (error) {
        if (readingShareFeedback) {
          readingShareFeedback.innerHTML = "<strong>Sharing was canceled or not available.</strong> You can try again or use Save as PDF.";
        }
      }
    });
  }

  if (saveReadingPdfButton) {
    saveReadingPdfButton.addEventListener("click", () => {
      window.print();
    });
  }

  if (readAloudButton) {
    readAloudButton.addEventListener("click", () => {
      if (!("speechSynthesis" in window)) {
        if (readingAudioFeedback) {
          readingAudioFeedback.innerHTML = "<strong>Read aloud is not available in this browser.</strong>";
        }
        return;
      }

      if (!currentReading) {
        return;
      }

      window.speechSynthesis.cancel();

      currentUtterance = new SpeechSynthesisUtterance(currentReading.paragraphs.join(" "));
      currentUtterance.rate = 0.92;
      currentUtterance.onend = () => {
        if (readingAudioFeedback) {
          readingAudioFeedback.innerHTML = "<strong>The reading passage has finished.</strong>";
        }
      };
      currentUtterance.onerror = () => {
        if (readingAudioFeedback) {
          readingAudioFeedback.innerHTML = "<strong>The browser could not read this text aloud.</strong>";
        }
      };

      window.speechSynthesis.speak(currentUtterance);

      if (readingAudioFeedback) {
        readingAudioFeedback.innerHTML = isReadingTextHidden
          ? "<strong>Reading aloud now.</strong> The text is hidden, so listen carefully."
          : "<strong>Reading aloud now.</strong>";
      }
    });
  }

  if (pauseReadingAudioButton) {
    pauseReadingAudioButton.addEventListener("click", () => {
      if (!("speechSynthesis" in window) || !window.speechSynthesis.speaking) {
        return;
      }

      window.speechSynthesis.pause();

      if (readingAudioFeedback) {
        readingAudioFeedback.innerHTML = "<strong>Reading paused.</strong>";
      }
    });
  }

  if (resumeReadingAudioButton) {
    resumeReadingAudioButton.addEventListener("click", () => {
      if (!("speechSynthesis" in window)) {
        return;
      }

      window.speechSynthesis.resume();

      if (readingAudioFeedback) {
        readingAudioFeedback.innerHTML = "<strong>Reading resumed.</strong>";
      }
    });
  }

  if (stopReadingAudioButton) {
    stopReadingAudioButton.addEventListener("click", () => {
      if (!("speechSynthesis" in window)) {
        return;
      }

      window.speechSynthesis.cancel();
      currentUtterance = null;

      if (readingAudioFeedback) {
        readingAudioFeedback.innerHTML = "<strong>Reading stopped.</strong>";
      }
    });
  }

  renderReading();
}

const emojiActivity = document.querySelector("[data-emoji-activity='simple-present-emoji']");

if (emojiActivity) {
  const emojiBank = emojiActivity.querySelector("[data-emoji-bank]");
  const emojiSlots = Array.from(emojiActivity.querySelectorAll(".emoji-slot"));
  const emojiTokens = Array.from(emojiActivity.querySelectorAll(".emoji-token"));
  const emojiFeedback = document.querySelector("[data-emoji-activity-feedback]");
  const resetEmojiButton = document.querySelector("[data-reset-emoji-activity]");
  const checkEmojiButton = document.querySelector("[data-check-emoji-activity]");
  const emojiDragState = { token: null };

  const updateEmojiSlotStyles = () => {
    emojiSlots.forEach((slot) => {
      slot.classList.toggle("has-token", Boolean(slot.querySelector(".emoji-token")));
    });
  };

  const clearEmojiState = (slot) => {
    if (slot.classList.contains("emoji-slot")) {
      slot.classList.remove("is-active");
    }
  };

  const shuffleEmojiTokens = () => {
    const shuffled = [...emojiTokens].sort(() => Math.random() - 0.5);
    shuffled.forEach((token) => emojiBank.appendChild(token));
  };

  const placeEmojiToken = (slot, token) => {
    if (!slot || !token) {
      return;
    }

    const existingToken = slot.querySelector(".emoji-token");
    if (existingToken && existingToken !== token) {
      emojiBank.appendChild(existingToken);
    }

    slot.appendChild(token);
    token.classList.remove("is-dragging");
    updateEmojiSlotStyles();
  };

  const resetEmojiActivity = () => {
    emojiTokens.forEach((token) => {
      token.classList.remove("is-dragging");
      emojiBank.appendChild(token);
    });

    shuffleEmojiTokens();
    updateEmojiSlotStyles();

    if (emojiFeedback) {
      emojiFeedback.textContent = "Match all six sentences with emojis and then check your answers.";
    }
  };

  emojiTokens.forEach((token) => {
    token.addEventListener("dragstart", () => {
      emojiDragState.token = token;
      token.classList.add("is-dragging");
    });

    token.addEventListener("dragend", () => {
      token.classList.remove("is-dragging");
      emojiDragState.token = null;
      emojiSlots.forEach(clearEmojiState);
    });
  });

  [emojiBank, ...emojiSlots].forEach((target) => {
    target.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (target.classList.contains("emoji-slot")) {
        target.classList.add("is-active");
      }
    });

    target.addEventListener("dragleave", () => {
      clearEmojiState(target);
    });

    target.addEventListener("drop", (event) => {
      event.preventDefault();
      const token = emojiDragState.token;
      if (!token) {
        return;
      }

      if (target === emojiBank) {
        emojiBank.appendChild(token);
        token.classList.remove("is-dragging");
        updateEmojiSlotStyles();
      } else {
        placeEmojiToken(target, token);
      }

      emojiSlots.forEach(clearEmojiState);
    });
  });

  if (resetEmojiButton) {
    resetEmojiButton.addEventListener("click", resetEmojiActivity);
  }

  if (checkEmojiButton) {
    checkEmojiButton.addEventListener("click", () => {
      const allFilled = emojiSlots.every((slot) => slot.querySelector(".emoji-token"));

      if (!allFilled) {
        if (emojiFeedback) {
          emojiFeedback.innerHTML = "<strong>Match all six sentences first</strong>, then check your answers.";
        }
        return;
      }

      const correctCount = emojiSlots.reduce((count, slot) => {
        const token = slot.querySelector(".emoji-token");
        return count + Number(token && token.dataset.emoji === slot.dataset.emojiAnswer);
      }, 0);

      if (emojiFeedback) {
        if (correctCount === emojiSlots.length) {
          emojiFeedback.innerHTML = "Excellent work. <strong>You got 6 out of 6 correct.</strong>";
        } else {
          emojiFeedback.innerHTML = `<strong>You got ${correctCount} out of 6 correct.</strong> Keep trying. You can do it.`;
        }
      }
    });
  }

  resetEmojiActivity();
}

const choiceActivity = document.querySelector("[data-choice-activity='simple-past-choice']");

if (choiceActivity) {
  const choiceItems = Array.from(choiceActivity.querySelectorAll("[data-choice-item]"));
  const choiceFeedback = document.querySelector("[data-choice-activity-feedback]");
  const resetChoiceButton = document.querySelector("[data-reset-choice-activity]");
  const checkChoiceButton = document.querySelector("[data-check-choice-activity]");

  choiceItems.forEach((item) => {
    const options = Array.from(item.querySelectorAll(".choice-option"));

    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((button) => button.classList.remove("is-selected"));
        option.classList.add("is-selected");
      });
    });
  });

  if (resetChoiceButton) {
    resetChoiceButton.addEventListener("click", () => {
      choiceItems.forEach((item) => {
        item.querySelectorAll(".choice-option").forEach((option) => {
          option.classList.remove("is-selected");
        });
      });

      if (choiceFeedback) {
        choiceFeedback.textContent = "Choose one option in each sentence and then check your answers.";
      }
    });
  }

  if (checkChoiceButton) {
    checkChoiceButton.addEventListener("click", () => {
      const allAnswered = choiceItems.every((item) => item.querySelector(".choice-option.is-selected"));

      if (!allAnswered) {
        if (choiceFeedback) {
          choiceFeedback.innerHTML = "<strong>Choose one option in all six sentences first</strong>, then check your answers.";
        }
        return;
      }

      const correctCount = choiceItems.reduce((count, item) => {
        const selected = item.querySelector(".choice-option.is-selected");
        return count + Number(selected && selected.dataset.choiceValue === item.dataset.correct);
      }, 0);

      if (choiceFeedback) {
        if (correctCount === choiceItems.length) {
          choiceFeedback.innerHTML = "Excellent work. <strong>You got 6 out of 6 correct.</strong>";
        } else {
          choiceFeedback.innerHTML = `<strong>You got ${correctCount} out of 6 correct.</strong> Keep trying. You can do it.`;
        }
      }
    });
  }
}

const verbToBeReadingActivity = document.querySelector("[data-choice-activity='verb-to-be-reading']");

if (verbToBeReadingActivity) {
  const readingItems = Array.from(verbToBeReadingActivity.querySelectorAll("[data-choice-item]"));
  const readingFeedback = document.querySelector("[data-verb-to-be-reading-feedback]");
  const resetReadingButton = document.querySelector("[data-reset-verb-to-be-reading]");
  const checkReadingButton = document.querySelector("[data-check-verb-to-be-reading]");

  readingItems.forEach((item) => {
    const options = Array.from(item.querySelectorAll(".choice-option"));

    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((button) => button.classList.remove("is-selected"));
        option.classList.add("is-selected");
      });
    });
  });

  if (resetReadingButton) {
    resetReadingButton.addEventListener("click", () => {
      readingItems.forEach((item) => {
        item.querySelectorAll(".choice-option").forEach((option) => {
          option.classList.remove("is-selected");
        });
      });

      if (readingFeedback) {
        readingFeedback.textContent = "Choose True or False for all seven sentences and then check your answers.";
      }
    });
  }

  if (checkReadingButton) {
    checkReadingButton.addEventListener("click", () => {
      const allAnswered = readingItems.every((item) => item.querySelector(".choice-option.is-selected"));

      if (!allAnswered) {
        if (readingFeedback) {
          readingFeedback.innerHTML = "<strong>Choose an answer for all seven sentences first</strong>, then check your answers.";
        }
        return;
      }

      const correctCount = readingItems.reduce((count, item) => {
        const selected = item.querySelector(".choice-option.is-selected");
        return count + Number(selected && selected.dataset.choiceValue === item.dataset.correct);
      }, 0);

      if (readingFeedback) {
        if (correctCount === readingItems.length) {
          readingFeedback.innerHTML = "Excellent work. <strong>You got 7 out of 7 correct.</strong>";
        } else {
          readingFeedback.innerHTML = `<strong>You got ${correctCount} out of 7 correct.</strong> Keep trying. You can do it.`;
        }
      }
    });
  }
}

const conversationActivity = document.querySelector("[data-conversation-activity='future-conversation']");

if (conversationActivity) {
  const conversationBank = conversationActivity.querySelector("[data-conversation-bank]");
  const conversationSlots = Array.from(conversationActivity.querySelectorAll(".conversation-slot"));
  const conversationLines = Array.from(conversationActivity.querySelectorAll(".conversation-line"));
  const conversationFeedback = document.querySelector("[data-conversation-activity-feedback]");
  const resetConversationButton = document.querySelector("[data-reset-conversation-activity]");
  const checkConversationButton = document.querySelector("[data-check-conversation-activity]");
  const conversationDragState = { line: null };
  const correctConversationOrder = [
    "Emma: Hi, Leo. What are you going to do tomorrow?",
    "Leo: Hi, Emma. I will be busy tomorrow.",
    "Emma: Really? What are your plans?",
    "Leo: I am going to visit my grandmother.",
    "Emma: Will your sister go with you?",
    "Leo: No, she won't. She will study at home.",
    "Emma: That sounds nice. Will you go in the morning?",
    "Leo: No, I won't. I will go after lunch."
  ];

  const updateConversationSlotStyles = () => {
    conversationSlots.forEach((slot) => {
      slot.classList.toggle("has-line", Boolean(slot.querySelector(".conversation-line")));
    });
  };

  const clearConversationState = (slot) => {
    if (slot.classList.contains("conversation-slot")) {
      slot.classList.remove("is-active");
    }
  };

  const shuffleConversationLines = () => {
    const shuffled = [...conversationLines].sort(() => Math.random() - 0.5);
    shuffled.forEach((line) => conversationBank.appendChild(line));
  };

  const placeConversationLine = (target, line) => {
    if (!target || !line) {
      return;
    }

    const existingLine = target.querySelector(".conversation-line");
    if (existingLine && existingLine !== line) {
      conversationBank.appendChild(existingLine);
    }

    target.appendChild(line);
    line.classList.remove("is-dragging");
    updateConversationSlotStyles();
  };

  const resetConversationActivity = () => {
    conversationLines.forEach((line) => {
      line.classList.remove("is-dragging");
      conversationBank.appendChild(line);
    });

    shuffleConversationLines();
    updateConversationSlotStyles();

    if (conversationFeedback) {
      conversationFeedback.textContent = "Put all eight lines in order and then check your answers.";
    }
  };

  conversationLines.forEach((line) => {
    line.addEventListener("dragstart", () => {
      conversationDragState.line = line;
      line.classList.add("is-dragging");
    });

    line.addEventListener("dragend", () => {
      line.classList.remove("is-dragging");
      conversationDragState.line = null;
      conversationSlots.forEach(clearConversationState);
    });
  });

  [conversationBank, ...conversationSlots].forEach((target) => {
    target.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (target.classList.contains("conversation-slot")) {
        target.classList.add("is-active");
      }
    });

    target.addEventListener("dragleave", () => {
      clearConversationState(target);
    });

    target.addEventListener("drop", (event) => {
      event.preventDefault();
      const line = conversationDragState.line;
      if (!line) {
        return;
      }

      if (target === conversationBank) {
        conversationBank.appendChild(line);
        line.classList.remove("is-dragging");
        updateConversationSlotStyles();
      } else {
        placeConversationLine(target, line);
      }

      conversationSlots.forEach(clearConversationState);
    });
  });

  if (resetConversationButton) {
    resetConversationButton.addEventListener("click", resetConversationActivity);
  }

  if (checkConversationButton) {
    checkConversationButton.addEventListener("click", () => {
      const allFilled = conversationSlots.every((slot) => slot.querySelector(".conversation-line"));

      if (!allFilled) {
        if (conversationFeedback) {
          conversationFeedback.innerHTML = "<strong>Put all eight lines in order first</strong>, then check your answers.";
        }
        return;
      }

      const builtConversation = conversationSlots.map((slot) => {
        const line = slot.querySelector(".conversation-line");
        return line ? line.dataset.lineText : "";
      });

      const correctCount = builtConversation.reduce((count, line, index) => {
        return count + Number(line === correctConversationOrder[index]);
      }, 0);

      if (conversationFeedback) {
        if (correctCount === correctConversationOrder.length) {
          conversationFeedback.innerHTML = "Excellent work. <strong>You got 8 out of 8 correct.</strong>";
        } else {
          conversationFeedback.innerHTML = `<strong>You got ${correctCount} out of 8 correct.</strong> Keep trying. You can do it.`;
        }
      }
    });
  }

  resetConversationActivity();
}

const irregularActivity = document.querySelector("[data-irregular-activity='simple-past-irregulars']");

if (irregularActivity) {
  const irregularSelects = Array.from(irregularActivity.querySelectorAll(".irregular-select"));
  const irregularFeedback = document.querySelector("[data-irregular-activity-feedback]");
  const resetIrregularButton = document.querySelector("[data-reset-irregular-activity]");
  const checkIrregularButton = document.querySelector("[data-check-irregular-activity]");

  if (resetIrregularButton) {
    resetIrregularButton.addEventListener("click", () => {
      irregularSelects.forEach((select) => {
        select.value = "";
      });

      if (irregularFeedback) {
        irregularFeedback.textContent = "Match all twelve verbs and then check your answers.";
      }
    });
  }

  if (checkIrregularButton) {
    checkIrregularButton.addEventListener("click", () => {
      const allFilled = irregularSelects.every((select) => select.value !== "");

      if (!allFilled) {
        if (irregularFeedback) {
          irregularFeedback.innerHTML = "<strong>Match all twelve verbs first</strong>, then check your answers.";
        }
        return;
      }

      const correctCount = irregularSelects.reduce((count, select) => {
        return count + Number(select.value === select.dataset.irregularAnswer);
      }, 0);

      if (irregularFeedback) {
        if (correctCount === irregularSelects.length) {
          irregularFeedback.innerHTML = "Excellent work. <strong>You got 12 out of 12 correct.</strong>";
        } else {
          irregularFeedback.innerHTML = `<strong>You got ${correctCount} out of 12 correct.</strong> Keep trying. You can do it.`;
        }
      }
    });
  }
}

const unscrambleGame = document.querySelector("[data-unscramble-game]");

if (unscrambleGame) {
  const sentencePool = [
    { level: "Starter", words: ["My", "friends", "walk", "to", "school", "every", "morning"], punctuation: "." },
    { level: "Starter", words: ["The", "baby", "is", "sleeping", "in", "the", "bedroom"], punctuation: "." },
    { level: "Starter", words: ["My", "mother", "reads", "the", "news", "after", "breakfast"], punctuation: "." },
    { level: "Starter", words: ["The", "boys", "are", "playing", "in", "the", "garden"], punctuation: "." },
    { level: "Easy", words: ["Our", "teacher", "gives", "us", "homework", "on", "Fridays"], punctuation: "." },
    { level: "Easy", words: ["The", "cat", "does", "not", "drink", "cold", "milk"], punctuation: "." },
    { level: "Easy", words: ["Are", "your", "cousins", "waiting", "outside", "the", "cinema"], punctuation: "?" },
    { level: "Easy", words: ["My", "grandparents", "visit", "us", "every", "summer"], punctuation: "." },
    { level: "Easy", words: ["Is", "your", "sister", "cleaning", "her", "room", "now"], punctuation: "?" },
    { level: "Medium", words: ["Why", "does", "Marina", "study", "English", "after", "dinner"], punctuation: "?" },
    { level: "Medium", words: ["My", "uncle", "fixed", "the", "kitchen", "door", "last", "night"], punctuation: "." },
    { level: "Medium", words: ["The", "children", "do", "not", "watch", "television", "before", "homework"], punctuation: "." },
    { level: "Medium", words: ["Where", "did", "your", "neighbors", "park", "their", "car", "yesterday"], punctuation: "?" },
    { level: "Challenging", words: ["The", "students", "are", "preparing", "a", "science", "project", "this", "week"], punctuation: "." },
    { level: "Challenging", words: ["Did", "your", "brother", "bring", "his", "lunch", "to", "work", "today"], punctuation: "?" },
    { level: "Challenging", words: ["My", "best", "friend", "has", "already", "finished", "the", "book", "report"], punctuation: "." },
    { level: "Challenging", words: ["When", "are", "the", "players", "arriving", "at", "the", "sports", "center"], punctuation: "?" },
    { level: "Advanced", words: ["My", "neighbors", "are", "going", "to", "paint", "their", "house", "next", "month"], punctuation: "." },
    { level: "Advanced", words: ["The", "tourists", "took", "many", "photos", "near", "the", "old", "bridge"], punctuation: "." },
    { level: "Advanced", words: ["The", "new", "manager", "will", "introduce", "the", "full", "schedule", "tomorrow"], punctuation: "." },
    { level: "Advanced", words: ["Why", "are", "the", "workers", "carrying", "those", "heavy", "boxes", "upstairs"], punctuation: "?" },
    { level: "Expert", words: ["Will", "the", "new", "students", "join", "the", "music", "club", "next", "semester"], punctuation: "?" },
    { level: "Expert", words: ["My", "sister", "usually", "buys", "fresh", "fruit", "at", "the", "street", "market"], punctuation: "." },
    { level: "Expert", words: ["The", "children", "were", "playing", "quietly", "in", "the", "backyard", "all", "afternoon"], punctuation: "." },
    { level: "Expert", words: ["How", "will", "the", "researchers", "present", "their", "final", "results", "next", "week"], punctuation: "?" },
    { level: "Expert", words: ["The", "visitors", "had", "already", "left", "the", "museum", "before", "the", "storm", "started"], punctuation: "." }
  ];
  const totalRounds = 7;
  const countdownSeconds = 180;
  const levelOrder = ["Starter", "Easy", "Medium", "Challenging", "Advanced", "Expert"];

  const progressText = unscrambleGame.querySelector("[data-unscramble-progress]");
  const timerText = unscrambleGame.querySelector("[data-unscramble-timer]");
  const levelText = unscrambleGame.querySelector("[data-unscramble-level]");
  const bank = unscrambleGame.querySelector("[data-unscramble-bank]");
  const slots = unscrambleGame.querySelector("[data-unscramble-slots]");
  const feedback = unscrambleGame.querySelector("[data-unscramble-feedback]");
  const resetButton = unscrambleGame.querySelector("[data-unscramble-reset]");
  const checkButton = unscrambleGame.querySelector("[data-unscramble-check]");
  const startButton = unscrambleGame.querySelector("[data-unscramble-start]");
  const finishCard = unscrambleGame.querySelector("[data-unscramble-finish]");
  const finishText = unscrambleGame.querySelector("[data-unscramble-finish-text]");
  const shareButton = unscrambleGame.querySelector("[data-unscramble-share]");
  const restartButton = unscrambleGame.querySelector("[data-unscramble-restart]");
  const dragState = { token: null };
  let currentIndex = 0;
  let timerId = null;
  let remainingSeconds = countdownSeconds;
  let isGameActive = false;
  let currentSentenceSet = [];
  let roundsCompleted = 0;
  let lastGameSummary = "";

  const formatPuzzleTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const setPuzzleTime = (totalSeconds) => {
    if (timerText) {
      timerText.textContent = formatPuzzleTime(totalSeconds);
    }
  };

  const updateWaitingState = (waiting) => {
    unscrambleGame.classList.toggle("is-waiting", waiting);
  };

  const updateProgress = () => {
    if (progressText) {
      progressText.textContent = `Sentence ${Math.min(currentIndex + 1, totalRounds)} of ${totalRounds}`;
    }
  };

  const stopPuzzleTimer = () => {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
  };

  const startPuzzleTimer = () => {
    stopPuzzleTimer();
    setPuzzleTime(remainingSeconds);
    timerId = window.setInterval(() => {
      remainingSeconds -= 1;
      setPuzzleTime(remainingSeconds);

      if (remainingSeconds <= 0) {
        remainingSeconds = 0;
        setPuzzleTime(remainingSeconds);
        finishPuzzleGame(false);
      }
    }, 1000);
  };

  const shuffleArray = (items) => {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled;
  };

  const shuffleWords = (words) => {
    if (words.length <= 1) {
      return [...words];
    }

    let shuffled = [...words];
    let attempts = 0;

    do {
      shuffled = shuffleArray(words);
      attempts += 1;
    } while (shuffled.join(" ") === words.join(" ") && attempts < 12);

    return shuffled;
  };

  const buildSentenceSet = () => {
    const groupedSentences = levelOrder.map((level) => {
      return shuffleArray(sentencePool.filter((sentence) => sentence.level === level));
    }).filter((group) => group.length > 0);

    const nextSet = [];
    let groupIndex = 0;

    while (nextSet.length < totalRounds && groupedSentences.some((group) => group.length > 0)) {
      const group = groupedSentences[groupIndex % groupedSentences.length];
      if (group.length > 0) {
        nextSet.push(group.shift());
      }
      groupIndex += 1;
    }

    currentSentenceSet = nextSet
      .slice(0, totalRounds)
      .sort((first, second) => levelOrder.indexOf(first.level) - levelOrder.indexOf(second.level));
  };

  const copyTextFallback = (text) => {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.top = "-9999px";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.focus();
    helper.select();
    helper.setSelectionRange(0, helper.value.length);

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }

    document.body.removeChild(helper);
    return copied;
  };

  const clearPuzzleAreas = () => {
    bank.innerHTML = "";
    slots.innerHTML = "";
  };

  const updatePuzzleSlotStyles = () => {
    Array.from(slots.querySelectorAll(".word-slot")).forEach((slot) => {
      slot.classList.toggle("has-token", Boolean(slot.querySelector(".word-token")));
    });
  };

  const clearPuzzleHover = (element) => {
    if (element.classList.contains("word-slot")) {
      element.classList.remove("is-active");
    }
  };

  const getPuzzleSlots = () => Array.from(slots.querySelectorAll(".word-slot"));

  const getNextEmptySlot = () => {
    return getPuzzleSlots().find((slot) => !slot.querySelector(".word-token")) || null;
  };

  const moveTokenToNextSlot = (token) => {
    const nextSlot = getNextEmptySlot();
    if (!nextSlot) {
      return false;
    }

    placePuzzleToken(nextSlot, token);
    return true;
  };

  const createPuzzleToken = (word) => {
    const token = document.createElement("button");
    token.className = "word-token";
    token.type = "button";
    token.draggable = true;
    token.dataset.word = word;
    token.textContent = word;

    token.addEventListener("dragstart", () => {
      dragState.token = token;
      token.classList.add("is-dragging");
    });

    token.addEventListener("dragend", () => {
      token.classList.remove("is-dragging");
      dragState.token = null;
      getPuzzleSlots().forEach(clearPuzzleHover);
    });

    token.addEventListener("click", () => {
      if (!isGameActive) {
        if (feedback) {
          feedback.innerHTML = "<strong>Click Start Game first</strong> to begin the challenge.";
        }
        return;
      }

      const parentSlot = token.closest(".word-slot");

      if (parentSlot) {
        bank.appendChild(token);
        updatePuzzleSlotStyles();
        return;
      }

      if (!moveTokenToNextSlot(token) && feedback) {
        feedback.innerHTML = "<strong>Your sentence is full.</strong> Click a word in the sentence to send it back.";
      }
    });

    return token;
  };

  const placePuzzleToken = (target, token) => {
    if (!target || !token) {
      return;
    }

    if (target.classList.contains("word-slot")) {
      const existingToken = target.querySelector(".word-token");
      if (existingToken && existingToken !== token) {
        bank.appendChild(existingToken);
      }
      target.appendChild(token);
    } else {
      bank.appendChild(token);
    }

    token.classList.remove("is-dragging");
    updatePuzzleSlotStyles();
  };

  const bindPuzzleDropTarget = (target) => {
    if (target.dataset.dropBound === "true") {
      return;
    }

    target.dataset.dropBound = "true";

    target.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (target.classList.contains("word-slot")) {
        target.classList.add("is-active");
      }
    });

    target.addEventListener("dragleave", () => {
      clearPuzzleHover(target);
    });

    target.addEventListener("drop", (event) => {
      event.preventDefault();
      const token = dragState.token;
      if (!token) {
        return;
      }

      placePuzzleToken(target, token);
      getPuzzleSlots().forEach(clearPuzzleHover);
    });
  };

  const renderPuzzleSentence = () => {
    const sentence = currentSentenceSet[currentIndex];
    const scrambledWords = shuffleWords(sentence.words);

    clearPuzzleAreas();
    updateProgress();

    if (levelText) {
      levelText.textContent = sentence.level;
    }

    scrambledWords.forEach((word) => {
      bank.appendChild(createPuzzleToken(word));
    });

    sentence.words.forEach((_, index) => {
      const slot = document.createElement("span");
      slot.className = "word-slot";
      slot.dataset.wordSlot = String(index + 1);
      slots.appendChild(slot);
      bindPuzzleDropTarget(slot);
    });

    if (sentence.punctuation) {
      const punctuation = document.createElement("span");
      punctuation.className = "sentence-punctuation";
      punctuation.textContent = sentence.punctuation;
      slots.appendChild(punctuation);
    }

    bindPuzzleDropTarget(bank);
    updatePuzzleSlotStyles();

    if (feedback) {
      feedback.textContent = "Click or drag the words into the correct order and then check your answer.";
    }
  };

  const getBuiltSentence = () => {
    return Array.from(slots.querySelectorAll(".word-slot"))
      .map((slot) => {
        const token = slot.querySelector(".word-token");
        return token ? token.dataset.word : "";
      })
      .join(" ")
      .trim();
  };

  const allPuzzleSlotsFilled = () => {
    return Array.from(slots.querySelectorAll(".word-slot")).every((slot) => slot.querySelector(".word-token"));
  };

  const finishPuzzleGame = (completed) => {
    isGameActive = false;
    stopPuzzleTimer();
    updateWaitingState(true);

    if (finishCard) {
      finishCard.hidden = false;
    }

    roundsCompleted = currentIndex;
    lastGameSummary = completed
      ? [
        "🎉 **7 IN 3 - CHALLENGE COMPLETED!** 🎉",
        "",
        `✅ **Result:** ${totalRounds}/${totalRounds} sentences correct`,
        `⏰ **Time left:** ${timerText ? timerText.textContent : "00:00"}`,
        "🚀 I finished the 7 in 3 challenge on Improve Your English!"
      ].join("\n")
      : [
        "🔥 **7 IN 3 - TIME CHALLENGE!** 🔥",
        "",
        `✅ **Result:** ${roundsCompleted}/${totalRounds} sentences correct`,
        `⏰ **Final timer:** ${timerText ? timerText.textContent : "00:00"}`,
        "💪 I played the 7 in 3 challenge on Improve Your English!"
      ].join("\n");

    if (finishText) {
      finishText.textContent = completed
        ? `You finished all ${totalRounds} sentences with ${timerText ? timerText.textContent : "00:00"} left. Great job!`
        : `Time is up. You finished ${roundsCompleted} out of ${totalRounds} sentences.`;
    }

    if (feedback) {
      feedback.innerHTML = completed
        ? "<strong>Excellent work.</strong> You completed the whole challenge."
        : "<strong>Time is up.</strong> Share your result and try a new round.";
    }

    if (levelText && !completed) {
      levelText.textContent = "Time up";
    }
  };

  const prepareStartState = () => {
    currentIndex = 0;
    remainingSeconds = countdownSeconds;
    roundsCompleted = 0;
    lastGameSummary = "";
    isGameActive = false;
    stopPuzzleTimer();
    setPuzzleTime(remainingSeconds);
    clearPuzzleAreas();
    updateProgress();

    if (levelText) {
      levelText.textContent = "Ready";
    }

    if (feedback) {
      feedback.textContent = "Click Start Game when you are ready.";
    }

    if (finishCard) {
      finishCard.hidden = true;
    }

    updateWaitingState(true);
  };

  const startPuzzleGame = () => {
    buildSentenceSet();
    currentIndex = 0;
    remainingSeconds = countdownSeconds;
    roundsCompleted = 0;
    isGameActive = true;

    if (finishCard) {
      finishCard.hidden = true;
    }

    updateWaitingState(false);
    startPuzzleTimer();
    renderPuzzleSentence();
  };

  const restartPuzzleGame = () => {
    prepareStartState();
  };

  if (checkButton) {
    checkButton.addEventListener("click", () => {
      if (!isGameActive) {
        if (feedback) {
          feedback.innerHTML = "<strong>Click Start Game first</strong> to begin the challenge.";
        }
        return;
      }

      if (!allPuzzleSlotsFilled()) {
        if (feedback) {
          feedback.innerHTML = "<strong>Complete the full sentence first</strong>, then check your answer.";
        }
        return;
      }

      const expectedSentence = currentSentenceSet[currentIndex].words.join(" ");
      const builtSentence = getBuiltSentence();

      if (builtSentence !== expectedSentence) {
        if (feedback) {
          feedback.innerHTML = "<strong>That order is not correct yet.</strong> Keep trying before moving on.";
        }
        return;
      }

      if (feedback) {
        feedback.innerHTML = "<strong>Correct.</strong> Get ready for the next sentence.";
      }

      currentIndex += 1;

      if (currentIndex >= currentSentenceSet.length) {
        finishPuzzleGame(true);
        return;
      }

      window.setTimeout(() => {
        if (isGameActive) {
          renderPuzzleSentence();
        }
      }, 450);
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      if (!isGameActive) {
        if (feedback) {
          feedback.innerHTML = "<strong>Start the game first</strong> and then you can reset the sentence.";
        }
        return;
      }
      renderPuzzleSentence();
    });
  }

  if (startButton) {
    startButton.addEventListener("click", startPuzzleGame);
  }

  if (shareButton) {
    shareButton.addEventListener("click", async () => {
      const shareText = lastGameSummary || "I just played 7 in 3 on Improve Your English.";

      if (navigator.share) {
        try {
          await navigator.share({
            title: "7 in 3",
            text: shareText
          });
          return;
        } catch (error) {
          if (error && error.name === "AbortError") {
            return;
          }
        }
      }

      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(shareText);
        } else if (!copyTextFallback(shareText)) {
          throw new Error("copy-failed");
        }
        if (feedback) {
          feedback.innerHTML = "<strong>Result copied.</strong> You can now paste it into WhatsApp, email, or anywhere else.";
        }
      } catch (error) {
        try {
          window.location.href = `mailto:?subject=${encodeURIComponent("7 in 3 Result")}&body=${encodeURIComponent(shareText)}`;
          if (feedback) {
            feedback.innerHTML = "<strong>Your email app is opening.</strong> You can share your result from there.";
          }
        } catch (mailError) {
          if (feedback) {
            feedback.innerHTML = "<strong>Sharing is not available here.</strong> Try again on another browser or device.";
          }
        }
      }
    });
  }

  if (restartButton) {
    restartButton.addEventListener("click", restartPuzzleGame);
  }

  prepareStartState();
}

const toForGame = document.querySelector("[data-to-for-game]");

if (toForGame) {
  const paragraphBank = [
    {
      topic: "Study routine",
      parts: [
        "Julia goes ",
        " the library every Tuesday ",
        " study with two classmates. She usually stays there ",
        " three hours and uses her laptop ",
        " take notes. Her friend Mateo brings snacks ",
        " everyone, and Julia sometimes asks the librarian ",
        " help with research books."
      ],
      answers: ["to", "to", "for", "to", "for", "to"]
    },
    {
      topic: "Birthday plans",
      parts: [
        "Lena is planning a small party ",
        " her brother this weekend. She wants ",
        " decorate the living room with balloons and lights. Their parents are going ",
        " buy a chocolate cake, and Lena is saving money ",
        " order pizza ",
        " the guests. She also needs ",
        " send the invitations tonight."
      ],
      answers: ["for", "to", "to", "to", "for", "to"]
    },
    {
      topic: "Health and exercise",
      parts: [
        "Mr. Costa started going ",
        " the park early in the morning ",
        " walk before work. He says it is good ",
        " his energy and helps him prepare ",
        " long meetings at the office. On weekends, he takes his daughter there ",
        " ride her bike and ",
        " enjoy some fresh air together."
      ],
      answers: ["to", "to", "for", "for", "to", "to"]
    },
    {
      topic: "Travel day",
      parts: [
        "My cousins arrived at the station early ",
        " catch the first train ",
        " the coast. They packed light bags ",
        " the trip and brought cards ",
        " play on the way. Their aunt came with them ",
        " a few minutes and stopped ",
        " say goodbye."
      ],
      answers: ["to", "to", "for", "to", "for", "to"]
    },
    {
      topic: "Community project",
      parts: [
        "Some neighbors met after dinner ",
        " talk about a community garden. They want ",
        " use the empty lot behind the school ",
        " vegetables and flowers. One family offered tools ",
        " the project, and another volunteer agreed ",
        " teach the children how ",
        " plant seeds correctly."
      ],
      answers: ["to", "to", "for", "for", "to", "to"]
    },
    {
      topic: "Job interview",
      parts: [
        "Nina bought a new folder ",
        " organize her documents before the interview. She arrived early ",
        " avoid heavy traffic and used the extra time ",
        " a final review of her notes. The manager thanked her ",
        " being well prepared and asked her ",
        " describe a time she had ",
        " think on her feet during a difficult project."
      ],
      answers: ["to", "to", "for", "for", "to", "to"]
    },
    {
      topic: "Cooking class",
      parts: [
        "Marco signed up ",
        " take a weekend cooking class because he wants ",
        " learn a few tricks of the trade. He goes there every Saturday ",
        " practice new recipes and stays after class ",
        " extra advice. Last week, he made pasta ",
        " surprise his cousins and invited them over ",
        " dinner."
      ],
      answers: ["to", "to", "to", "for", "to", "for"]
    },
    {
      topic: "City festival",
      parts: [
        "The town square was decorated ",
        " welcome visitors during the spring festival. Local musicians came ",
        " perform on the main stage, and several families brought blankets ",
        " sit on the grass. My aunt volunteered ",
        " sell handmade bracelets, while my uncle stopped by ",
        " the parade and ",
        " catch up with old friends."
      ],
      answers: ["to", "to", "to", "to", "for", "for"]
    },
    {
      topic: "Weekend errands",
      parts: [
        "On Saturday morning, Paula went downtown ",
        " return a jacket and ",
        " pick up a birthday card. She also needed a small gift ",
        " her neighbor, so she popped into a bookshop ",
        " look around. In the end, she chose a notebook ",
        " writing ideas and stayed a few extra minutes ",
        " drink coffee before going home."
      ],
      answers: ["to", "to", "for", "to", "for", "to"]
    },
    {
      topic: "Family visit",
      parts: [
        "Daniel took a bus across town ",
        " visit his grandmother after class. He brought a scarf ",
        " her because the evenings had turned chilly. They sat by the window ",
        " talk for a while, and Daniel offered ",
        " fix her old radio. Before leaving, he wrote down a few instructions ",
        " her and promised ",
        " come back the following week."
      ],
      answers: ["to", "for", "to", "to", "for", "to"]
    },
    {
      topic: "Research seminar",
      parts: [
        "The graduate students gathered in the lab early ",
        " prepare ",
        " the research seminar. Their supervisor reminded them ",
        " keep their explanations clear ",
        " the audience and avoid going off on a tangent. One team brought extra charts ",
        " support its argument, while another stayed late ",
        " rehearse the final section and ",
        " polish a few awkward transitions."
      ],
      answers: ["to", "for", "to", "for", "to", "to"]
    },
    {
      topic: "Essay workshop",
      parts: [
        "Professor Lima scheduled an extra workshop ",
        " help students improve their essays. She encouraged everyone ",
        " cut to the chase in the introduction and ",
        " use stronger evidence in each paragraph. Several students stayed behind ",
        " individual feedback, and one classmate offered snacks ",
        " the group ",
        " keep the energy up during the session."
      ],
      answers: ["to", "to", "to", "for", "for", "to"]
    },
    {
      topic: "Science fair",
      parts: [
        "Our class met after school ",
        " finish the science fair display. We still had graphs ",
        " print, labels ",
        " the posters, and a short speech ",
        " practice. Maya volunteered ",
        " speak first, and we saved a few quiet minutes ",
        " a final review before the judges arrived."
      ],
      answers: ["to", "to", "for", "to", "to", "for"]
    },
    {
      topic: "History presentation",
      parts: [
        "Rafael went to the archive room ",
        " look for primary sources ",
        " his history presentation. He needed reliable material ",
        " back up his main points and enough detail ",
        " the conclusion. His teacher advised him ",
        " read between the lines and ",
        " compare different accounts of the same event."
      ],
      answers: ["to", "for", "to", "for", "to", "to"]
    },
    {
      topic: "Debate club",
      parts: [
        "The debate club met twice this week ",
        " get ready for the regional round. The coach asked the speakers ",
        " tighten their arguments and save a few notes ",
        " the rebuttal. He also reminded them not ",
        " beat around the bush when answering questions. Two students stayed after practice ",
        " work on rebuttals, and the librarian offered a quiet room ",
        " concentrate."
      ],
      answers: ["to", "to", "for", "to", "to", "for"]
    },
    {
      topic: "Literature class",
      parts: [
        "In literature class, we were asked ",
        " analyze the narrator's tone rather than simply summarize the plot. Our teacher gave us a checklist ",
        " guide the discussion and reminded us ",
        " pay attention to figurative language. One student stayed after class ",
        " ask whether the final paragraph was meant ",
        " create suspense or ",
        " dramatic effect."
      ],
      answers: ["to", "for", "to", "to", "to", "for"]
    },
    {
      topic: "Language exam",
      parts: [
        "Before the language exam, Sara made a detailed plan ",
        " review vocabulary and key grammar points. She met a friend at the library ",
        " practice speaking, and they used flashcards ",
        " quick revision. Her tutor told her not ",
        " panic if a question seemed unfamiliar, but rather pause ",
        " think carefully and look ",
        " clues in the sentence."
      ],
      answers: ["to", "to", "for", "to", "to", "for"]
    },
    {
      topic: "Engineering project",
      parts: [
        "The engineering team stayed on campus late ",
        " finish the prototype before the final review. They still had measurements ",
        " check and a short report ",
        " the supervisor. Their advisor stopped by ",
        " offer suggestions, and the group used the extra hour ",
        " final adjustments and ",
        " make sure nothing slipped through the cracks."
      ],
      answers: ["to", "to", "for", "to", "for", "to"]
    },
    {
      topic: "Scholarship application",
      parts: [
        "Beatriz spent the afternoon revising her scholarship letter ",
        " make it more persuasive. She asked her cousin ",
        " read the draft and point out awkward phrases. The counselor later thanked her ",
        " submitting everything on time and reminded her ",
        " keep copies of every document. Just ",
        " be on the safe side, she saved the files online and printed one extra version ",
        " her records."
      ],
      answers: ["to", "to", "for", "to", "to", "for"]
    },
    {
      topic: "Local news report",
      parts: [
        "According to a local report, residents gathered in the main square ",
        " watch the mayor open a new cultural center. Several artists were invited ",
        " perform during the ceremony, and food trucks stayed nearby ",
        " the crowd. One journalist remained on site ",
        " interview visitors and ",
        " find out whether the project had lived up ",
        " expectations."
      ],
      answers: ["to", "to", "for", "to", "to", "to"]
    },
    {
      topic: "Science news article",
      parts: [
        "A recent science article explained that researchers are developing tiny robots ",
        " deliver medicine more precisely inside the body. The team built special models ",
        " test the machines under controlled conditions and used computer simulations ",
        " predict possible problems. One expert said the technology still has a long way ",
        " go, but the early results are promising enough ",
        " justify more funding and ",
        " spark wider public interest."
      ],
      answers: ["to", "to", "to", "to", "to", "to"]
    },
    {
      topic: "Fun facts about animals",
      parts: [
        "Many people are surprised ",
        " learn that octopuses have three hearts. Two of them work mainly ",
        " move blood to the gills, while the third helps ",
        " send blood through the rest of the body. Scientists continue ",
        " study these animals closely ",
        " understand their behavior better and ",
        " explain how they solve complex problems."
      ],
      answers: ["to", "to", "to", "to", "for", "to"]
    },
    {
      topic: "Fun facts about space",
      parts: [
        "It may sound hard ",
        " believe, but a day on Venus is longer than a year there. Astronomers often use comparisons like this ",
        " help students remember unusual facts and ",
        " make space science more engaging. Some teachers even ask learners ",
        " come up with their own examples ",
        " class discussions and ",
        " connect the information to everyday ideas."
      ],
      answers: ["to", "to", "to", "to", "for", "to"]
    }
  ];

  const bank = toForGame.querySelector("[data-to-for-bank]");
  const paragraph = toForGame.querySelector("[data-to-for-paragraph]");
  const feedback = toForGame.querySelector("[data-to-for-feedback]");
  const topicText = toForGame.querySelector("[data-to-for-topic]");
  const checksText = toForGame.querySelector("[data-to-for-checks]");
  const resetButton = toForGame.querySelector("[data-to-for-reset]");
  const checkButton = toForGame.querySelector("[data-to-for-check]");
  const nextButton = toForGame.querySelector("[data-to-for-next]");
  const dragState = { token: null };
  let currentParagraphIndex = -1;
  let currentParagraph = null;
  let checksLeft = 3;
  let paragraphQueue = [];

  const shuffleArray = (items) => {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }

    return shuffled;
  };

  const getToForSlots = () => Array.from(paragraph.querySelectorAll(".to-for-inline-slot"));

  const updateChecksText = () => {
    if (checksText) {
      checksText.textContent = String(checksLeft);
    }
  };

  const updateSlotStyles = () => {
    getToForSlots().forEach((slot) => {
      slot.classList.toggle("has-token", Boolean(slot.querySelector(".word-token")));
    });
  };

  const clearSlotHover = (element) => {
    if (element.classList.contains("to-for-inline-slot")) {
      element.classList.remove("is-active");
    }
  };

  const createToForToken = (value, uniqueId) => {
    const token = document.createElement("button");
    token.className = "word-token";
    token.type = "button";
    token.draggable = true;
    token.dataset.word = value;
    token.dataset.tokenId = uniqueId;
    token.textContent = value.toUpperCase();

    token.addEventListener("dragstart", () => {
      dragState.token = token;
      token.classList.add("is-dragging");
    });

    token.addEventListener("dragend", () => {
      token.classList.remove("is-dragging");
      dragState.token = null;
      getToForSlots().forEach(clearSlotHover);
    });

    token.addEventListener("click", () => {
      const parentSlot = token.closest(".to-for-inline-slot");

      if (parentSlot) {
        bank.appendChild(token);
        updateSlotStyles();
        return;
      }

      const nextEmptySlot = getToForSlots().find((slot) => !slot.querySelector(".word-token"));
      if (!nextEmptySlot) {
        if (feedback) {
          feedback.innerHTML = "<strong>All 6 gaps are full.</strong> Click a block in the paragraph to send it back.";
        }
        return;
      }

      placeToken(nextEmptySlot, token);
    });

    return token;
  };

  const placeToken = (target, token) => {
    if (!target || !token) {
      return;
    }

    if (target.classList.contains("to-for-inline-slot")) {
      const existingToken = target.querySelector(".word-token");
      if (existingToken && existingToken !== token) {
        bank.appendChild(existingToken);
      }
      target.appendChild(token);
    } else {
      bank.appendChild(token);
    }

    token.classList.remove("is-dragging");
    updateSlotStyles();
  };

  const bindDropTarget = (target) => {
    if (target.dataset.dropBound === "true") {
      return;
    }

    target.dataset.dropBound = "true";

    target.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (target.classList.contains("to-for-inline-slot")) {
        target.classList.add("is-active");
      }
    });

    target.addEventListener("dragleave", () => {
      clearSlotHover(target);
    });

    target.addEventListener("drop", (event) => {
      event.preventDefault();
      const token = dragState.token;
      if (!token) {
        return;
      }

      placeToken(target, token);
      getToForSlots().forEach(clearSlotHover);
    });
  };

  const renderParagraph = () => {
    if (!currentParagraph) {
      return;
    }

    bank.innerHTML = "";
    paragraph.innerHTML = "";

    const blocks = shuffleArray(["to", "to", "to", "to", "for", "for"]);
    blocks.forEach((value, index) => {
      bank.appendChild(createToForToken(value, `${value}-${index}`));
    });

    currentParagraph.parts.forEach((part, index) => {
      paragraph.append(document.createTextNode(part));

      if (index < currentParagraph.answers.length) {
        const slot = document.createElement("span");
        slot.className = "to-for-inline-slot";
        slot.dataset.answer = currentParagraph.answers[index];
        slot.dataset.slot = String(index + 1);
        paragraph.appendChild(slot);
        bindDropTarget(slot);
      }
    });

    bindDropTarget(bank);
    updateSlotStyles();
    checksLeft = 3;
    updateChecksText();

    if (topicText) {
      topicText.textContent = `Topic: ${currentParagraph.topic}`;
    }

    if (feedback) {
      feedback.textContent = "Complete all 6 gaps before checking your answers.";
    }

    if (checkButton) {
      checkButton.disabled = false;
    }
  };

  const loadNextParagraph = () => {
    if (paragraphQueue.length === 0) {
      paragraphQueue = shuffleArray(paragraphBank.map((_, index) => index));
    }

    currentParagraphIndex = paragraphQueue.shift();
    currentParagraph = paragraphBank[currentParagraphIndex];
    renderParagraph();
  };

  const resetCurrentParagraph = () => {
    renderParagraph();
  };

  const getCurrentAnswers = () => {
    return getToForSlots().map((slot) => {
      const token = slot.querySelector(".word-token");
      return token ? token.dataset.word : "";
    });
  };

  const allSlotsFilled = () => {
    return getCurrentAnswers().every((answer) => answer !== "");
  };

  if (resetButton) {
    resetButton.addEventListener("click", resetCurrentParagraph);
  }

  if (nextButton) {
    nextButton.addEventListener("click", loadNextParagraph);
  }

  if (checkButton) {
    checkButton.addEventListener("click", () => {
      if (!allSlotsFilled()) {
        if (feedback) {
          feedback.innerHTML = "<strong>Complete all 6 gaps first.</strong> Then click Check.";
        }
        return;
      }

      if (checksLeft <= 0) {
        if (feedback) {
          feedback.innerHTML = "<strong>No checks left.</strong> Click New Paragraph or Reset Answers to try again.";
        }
        return;
      }

      const currentAnswers = getCurrentAnswers();
      const correctCount = currentAnswers.reduce((count, answer, index) => {
        return count + Number(answer === currentParagraph.answers[index]);
      }, 0);

      checksLeft -= 1;
      updateChecksText();

      if (feedback) {
        feedback.innerHTML = `<strong>${correctCount} out of 6 are correct.</strong> You have ${checksLeft} check${checksLeft === 1 ? "" : "s"} left.`;
      }

      if (checksLeft === 0 && checkButton) {
        checkButton.disabled = true;
      }
    });
  }

  loadNextParagraph();
}
