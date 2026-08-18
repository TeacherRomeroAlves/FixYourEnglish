const situationTopics = {
  "fast-food": {
    eyebrow: "At the counter",
    title: "ORDERING FAST FOOD",
    intro: "Order a meal, request changes, and understand the choices a server offers you.",
    vocabulary: [
      ["I'd like...", "A polite way to say what you want."],
      ["I'll have...", "A natural way to choose food or a drink."],
      ["For here or to go?", "A question asking where you will eat."],
      ["To go, please.", "Use this when you want takeaway food."],
      ["Could I get...?", "A polite, conversational way to request something."],
      ["A combo meal", "A meal that usually includes a main item, fries, and a drink."],
      ["No onions, please.", "Use no + item to remove an ingredient."],
      ["Extra ketchup", "More ketchup than the usual amount."]
    ],
    dialogues: [
      { title: "A quick lunch", bank: ["I'd like", "a combo meal", "No onions, please", "For here or to go?", "To go, please"], lines: [
        ["Clerk", "Hello! What can I get for you?"], ["Customer", "{{I'd like}} the chicken sandwich, please."],
        ["Clerk", "Would you like just the sandwich or {{a combo meal}}?"], ["Customer", "The combo, please. {{No onions, please}}."],
        ["Clerk", "Of course. {{For here or to go?}}"], ["Customer", "{{To go, please}}."]
      ]},
      { title: "One more request", bank: ["I'll have", "Could I get", "extra ketchup", "to go", "please"], lines: [
        ["Clerk", "Are you ready to order?"], ["Customer", "Yes. {{I'll have}} the cheeseburger."],
        ["Clerk", "Certainly. Anything else?"], ["Customer", "{{Could I get}} fries and {{extra ketchup}}, {{please}}?"],
        ["Clerk", "Sure. Is everything for here?"], ["Customer", "No, it is {{to go}}."]
      ]}
    ],
    missions: [
      ["A customized order", "You are ordering dinner at a busy fast-food restaurant.", ["Order French fries without salt", "Ask for extra ketchup", "Say that the order is to go"], "I'd like..., no..., extra..., to go, please."],
      ["A complete meal", "You want a meal before catching a train.", ["Order a chicken sandwich combo", "Choose orange juice as your drink", "Ask how much it costs"], "I'll have..., Could I get...?, How much is it?"],
      ["Fix the order", "The clerk gives you a burger with onions, but you cannot eat onions.", ["Explain the problem politely", "Ask for a burger without onions", "Thank the clerk for helping"], "Excuse me..., no onions, please, Thank you." ]
    ]
  },
  hotel: {
    eyebrow: "At reception", title: "CHECKING IN AT A HOTEL", intro: "Confirm a reservation, ask about hotel services, and solve common room problems.",
    vocabulary: [
      ["I have a reservation.", "Say this when a room has already been booked for you."], ["Under the name...", "Use this to tell the receptionist the name on a booking."],
      ["Could I see your ID?", "A polite request for identification."], ["What time is check-out?", "Ask when you must leave the room."],
      ["Is breakfast included?", "Ask whether breakfast is part of the room price."], ["The room key", "The card or key used to enter your room."],
      ["Could you help me with...?", "A polite way to request help with a problem."], ["A wake-up call", "A phone call from reception that wakes a guest at a requested time."]
    ],
    dialogues: [
      {title:"Arriving at the hotel", bank:["I have a reservation", "Under the name", "Could I see your ID?", "Is breakfast included?", "room key"], lines:[
        ["Receptionist","Good evening. How may I help you?"],["Guest","{{I have a reservation}} for two nights."],["Receptionist","{{Under the name}}?"],["Guest","Marina Souza."],
        ["Receptionist","Thank you. {{Could I see your ID?}}"],["Guest","Of course. {{Is breakfast included?}}"],["Receptionist","Yes, it is. Here is your {{room key}}."]]},
      {title:"Planning the morning", bank:["Could you help me with", "a wake-up call", "What time is check-out?", "under the name", "included"], lines:[
        ["Guest","Hello. {{Could you help me with}} something?"],["Receptionist","Certainly."],["Guest","I need {{a wake-up call}} at 6:30 tomorrow."],
        ["Receptionist","No problem. Which room?"],["Guest","Room 408, {{under the name}} Daniel Lima. Also, {{What time is check-out?}}"],["Receptionist","At noon. Late check-out is not {{included}}."]]}
    ],
    missions:[
      ["Check in smoothly","You have just arrived after a long flight.",["Say you have a reservation under your name","Ask whether breakfast is included","Ask what time check-out is"],"I have a reservation..., under the name..., Is... included?"],
      ["Ask for a quieter room","Your room faces a noisy street and you need to sleep.",["Explain the noise problem","Politely request a quieter room","Ask whether changing rooms costs extra"],"Could you help me...?, Could I change...?, Is there an extra charge?"],
      ["Prepare for an early tour","Your tour bus leaves at 6:15 tomorrow morning.",["Request a wake-up call for 5:30","Ask where breakfast is served","Ask the receptionist to call a taxi"],"I'd like a wake-up call..., Where is...?, Could you call...?" ]]
  },
  clothes: {
    eyebrow:"At a clothing store", title:"BUYING CLOTHES", intro:"Find the right size, use the fitting room, and ask about prices and returns.",
    vocabulary:[
      ["Do you have this in...?", "Ask whether an item is available in another size or color."], ["I'm looking for...", "Say what kind of item you want to find."],
      ["Can I try it on?", "Ask for permission to wear an item before buying it."], ["The fitting room", "The private room where customers try on clothes."],
      ["It fits well.", "The size and shape are right for you."], ["It's too tight.", "The item is uncomfortably small."],
      ["Is it on sale?", "Ask whether an item has a reduced price."], ["What is your return policy?", "Ask about the rules for returning a purchase."]
    ],
    dialogues:[
      {title:"Finding the right jacket", bank:["I'm looking for", "Do you have this in", "try it on", "fitting room", "fits well"], lines:[
        ["Assistant","Can I help you?"],["Customer","{{I'm looking for}} a light jacket."],["Assistant","How about this one?"],["Customer","I like it. {{Do you have this in}} medium?"],
        ["Assistant","Yes. Would you like to {{try it on}}? The {{fitting room}} is over there."],["Customer","Thanks. This one {{fits well}}."]]},
      {title:"A discounted shirt", bank:["too tight", "on sale", "return policy", "try it on", "looking for"], lines:[
        ["Customer","This shirt is {{too tight}}. Do you have a larger one?"],["Assistant","Yes. Are you {{looking for}} a large?"],["Customer","Yes. Can I {{try it on}}?"],
        ["Assistant","Certainly. It is also {{on sale}} today."],["Customer","Great. What is your {{return policy}}?"]]}
    ],
    missions:[
      ["Find a holiday outfit","You need something comfortable for a warm evening.",["Say you are looking for a blue shirt","Ask for it in size medium","Ask to try it on"],"I'm looking for..., Do you have this in...?, Can I try it on?"],
      ["Change the size","You like a pair of pants, but they are too tight.",["Explain that they are too tight","Ask for the next size","Ask where the fitting room is"],"They're too tight, Do you have...?, Where is...?"],
      ["Buy with confidence","You found a jacket you like, but you may need to return it.",["Ask whether it is on sale","Ask about the return policy","Say you will take it"],"Is it on sale?, What is your return policy?, I'll take it." ]]
  },
  immigration: {
    eyebrow:"At border control", title:"GOING THROUGH IMMIGRATION", intro:"Understand common border questions and explain your travel plans clearly.",
    vocabulary:[
      ["What is the purpose of your visit?", "The officer is asking why you came to the country."], ["I'm here on vacation.", "Say this when your trip is for tourism."],
      ["How long are you staying?", "The officer wants to know the length of your visit."], ["I'm staying for...", "Use this before a period of time."],
      ["Where are you staying?", "The officer is asking for your accommodation."], ["A return ticket", "A ticket for traveling back home."],
      ["Do you have anything to declare?", "A customs question about goods that must be reported."], ["I'm traveling with...", "Use this to identify your travel companion."]
    ],
    dialogues:[
      {title:"A vacation abroad", bank:["purpose of your visit", "on vacation", "How long", "staying for", "return ticket"], lines:[
        ["Officer","What is the {{purpose of your visit}}?"],["Traveler","I'm here {{on vacation}}."],["Officer","{{How long}} are you staying?"],["Traveler","I'm {{staying for}} twelve days."],
        ["Officer","May I see your {{return ticket}}?"],["Traveler","Certainly. Here it is."]]},
      {title:"Traveling with family", bank:["Where are you staying", "traveling with", "anything to declare", "purpose", "staying"], lines:[
        ["Officer","What is the {{purpose}} of your trip?"],["Traveler","Tourism. I'm {{traveling with}} my sister."],["Officer","{{Where are you staying}}?"],["Traveler","We're {{staying}} at the Central Hotel."],
        ["Officer","Do you have {{anything to declare}}?"],["Traveler","No, I don't."]]}
    ],
    missions:[
      ["Explain your vacation","An immigration officer asks about your trip.",["Say you are visiting on vacation","Say you will stay for ten days","Give the name of your hotel"],"I'm here on vacation, I'm staying for..., I'm staying at..."],
      ["Show your travel plans","The officer needs more information before admitting you.",["Say you are traveling with a friend","Mention your return ticket","Explain that you will visit two cities"],"I'm traveling with..., Here is my return ticket, We plan to..."],
      ["Answer customs questions","You are entering the country with normal personal luggage.",["Say you have nothing to declare","Explain that the gifts in your bag are for family","Answer politely and confidently"],"I have nothing to declare, These are gifts for..., Certainly." ]]
  },
  directions: {
    eyebrow:"Around the city", title:"DIRECTIONS & TRANSPORTATION", intro:"Ask where places are, understand basic directions, and choose the right ticket.",
    vocabulary:[
      ["How do I get to...?", "Ask for directions to a place."], ["Is it within walking distance?", "Ask whether a place is close enough to walk to."],
      ["Go straight ahead.", "Continue forward without turning."], ["Turn left / right.", "Change direction to the left or right."],
      ["It's across from...", "It is on the opposite side of the street from another place."], ["Which line should I take?", "Ask which subway or bus route you need."],
      ["A one-way ticket", "A ticket for traveling to a destination without returning."], ["Where do I get off?", "Ask at which stop you should leave the bus or train."]
    ],
    dialogues:[
      {title:"Finding the museum", bank:["How do I get to", "straight ahead", "Turn left", "across from", "walking distance"], lines:[
        ["Traveler","Excuse me. {{How do I get to}} the city museum?"],["Local","Go {{straight ahead}} for two blocks. {{Turn left}} at the bank."],
        ["Traveler","What is it {{across from}}?"],["Local","The public library."],["Traveler","Is it within {{walking distance}}?"],["Local","Yes, about ten minutes."]]},
      {title:"Taking the subway", bank:["Which line", "one-way ticket", "get off", "Take", "right"], lines:[
        ["Traveler","{{Which line}} should I take to Central Station?"],["Agent","{{Take}} the green line."],["Traveler","Where do I {{get off}}?"],["Agent","At Park Street, then turn {{right}}."],
        ["Traveler","Thanks. I'd like a {{one-way ticket}}, please."]]}
    ],
    missions:[
      ["Find a landmark","You are lost and need to reach the history museum.",["Ask how to get to the museum","Ask whether it is within walking distance","Repeat the directions to confirm them"],"How do I get to...?, Is it within walking distance?, So I...?"],
      ["Use the subway","You need to travel from the airport to Central Station.",["Ask which line to take","Ask where to get off","Buy a one-way ticket"],"Which line should I take?, Where do I get off?, I'd like..."],
      ["Help another traveler","Someone asks you where the pharmacy is.",["Tell them to go straight for one block","Tell them to turn right at the cafe","Say the pharmacy is across from the hotel"],"Go straight ahead, turn right, It's across from..." ]]
  },
  pharmacy: {
    eyebrow:"Getting health essentials", title:"AT THE PHARMACY", intro:"Describe simple symptoms, understand basic advice, and ask how to use medicine.",
    vocabulary:[
      ["I have a headache.", "Say that you feel pain in your head."], ["I've had it for...", "Explain how long a symptom has continued."],
      ["Do you have anything for...?", "Ask whether medicine is available for a symptom."], ["A sore throat", "Pain or irritation in your throat."],
      ["How often should I take it?", "Ask how frequently to use medicine."], ["Are there any side effects?", "Ask about unwanted effects a medicine may cause."],
      ["I'm allergic to...", "Warn someone that a substance can cause you a reaction."], ["You should see a doctor.", "Advice to get professional medical care."]
    ],
    dialogues:[
      {title:"A painful headache", bank:["a headache", "for", "anything for", "How often", "side effects"], lines:[
        ["Pharmacist","How can I help?"],["Traveler","I have {{a headache}}. I've had it {{for}} two days."],["Pharmacist","Do you have a fever?"],["Traveler","No. Do you have {{anything for}} the pain?"],
        ["Pharmacist","Yes. This may help."],["Traveler","{{How often}} should I take it? Are there any {{side effects}}?"]]},
      {title:"A sore throat", bank:["sore throat", "allergic to", "see a doctor", "anything for", "take them"], lines:[
        ["Traveler","Do you have {{anything for}} a {{sore throat}}?"],["Pharmacist","Yes, but are you {{allergic to}} any medicine?"],["Traveler","I'm allergic to aspirin."],
        ["Pharmacist","Try these lozenges. You can {{take them}} every four hours. If you have trouble breathing, you should {{see a doctor}}."]]}
    ],
    missions:[
      ["Ask about a headache","You have had a headache since yesterday.",["Describe your headache","Ask for something for the pain","Ask how often you should take it"],"I have..., Do you have anything for...?, How often...?"],
      ["Explain an allergy","You need medicine for a sore throat, but you are allergic to aspirin.",["Describe your sore throat","Tell the pharmacist about your allergy","Ask whether the medicine has side effects"],"I have a sore throat, I'm allergic to..., Are there any side effects?"],
      ["Help a travel companion","Your friend has a fever and feels much worse today.",["Explain how long your friend has been sick","Ask whether they should see a doctor","Ask where the nearest clinic is"],"They've had it for..., Should they...?, Where is...?" ]]
  },
  supermarket: {
    eyebrow:"Shopping for essentials", title:"AT THE SUPERMARKET", intro:"Find everyday products, choose the right quantity, and understand common checkout questions.",
    vocabulary:[
      ["Where can I find...?", "Ask which part of the store has a product."], ["Which aisle is it in?", "Ask for the numbered store section containing an item."],
      ["Do you sell...?", "Ask whether the supermarket has a particular product."], ["How much is this?", "Ask for the price of an item."],
      ["A carton of milk", "Milk sold in a cardboard or plastic container."], ["A loaf of bread", "One complete shaped and baked piece of bread."],
      ["A pound / kilo of...", "A unit used when buying fruit, vegetables, or meat by weight."], ["Is there a cheaper option?", "Ask whether a less expensive alternative is available."],
      ["Would you like a bag?", "A checkout question asking whether you need a shopping bag."], ["Can I pay by card?", "Ask whether the store accepts card payment."]
    ],
    dialogues:[
      {title:"Finding breakfast items", bank:["Where can I find", "aisle", "sell", "carton of milk", "loaf of bread"], lines:[
        ["Customer","Excuse me. {{Where can I find}} the cereal?"],["Employee","It is in {{aisle}} six."],["Customer","Do you also {{sell}} lactose-free products?"],
        ["Employee","Yes, beside the dairy section."],["Customer","Great. I need a {{carton of milk}} and a {{loaf of bread}} too."]]},
      {title:"At the checkout", bank:["How much", "cheaper option", "a bag", "pay by card", "kilo of"], lines:[
        ["Customer","{{How much}} are these grapes?"],["Cashier","They are six dollars per kilo."],["Customer","Is there a {{cheaper option}}?"],
        ["Cashier","The green grapes are on sale."],["Customer","Great. I'd like a {{kilo of}} green grapes."],["Cashier","Would you like {{a bag}}?"],["Customer","No, thank you. Can I {{pay by card}}?"]]}
    ],
    missions:[
      ["Shop for breakfast","You are buying food for breakfast at your vacation apartment.",["Ask where you can find bread","Request a carton of milk","Ask whether the store sells fresh fruit"],"Where can I find...?, I'd like..., Do you sell...?"],
      ["Buy ingredients for dinner","You need pasta, tomatoes, and cheese for four people.",["Ask which aisle has pasta","Request one kilo of tomatoes","Ask whether there is a cheaper cheese"],"Which aisle...?, a kilo of..., Is there a cheaper option?"],
      ["Finish at the checkout","You are ready to pay and have your own reusable bag.",["Say you do not need a bag","Ask whether you can pay by card","Ask for the receipt"],"I don't need a bag, Can I pay by card?, Could I have the receipt?" ]]
  },
  "airport-check-in": {
    eyebrow:"Before your flight", title:"CHECKING IN AT THE AIRPORT", intro:"Present your documents, check your luggage, choose a seat, and locate your departure gate.",
    vocabulary:[
      ["I'd like to check in.", "Tell the airline agent you are ready to register for your flight."], ["May I see your passport?", "A polite request for your travel document."],
      ["Are you checking any bags?", "The agent is asking whether luggage will go in the aircraft hold."], ["I only have carry-on luggage.", "Say that your bags will stay with you in the cabin."],
      ["Is my bag overweight?", "Ask whether your luggage is heavier than the airline permits."], ["A window / aisle seat", "A seat beside the window or beside the walkway."],
      ["Could I have a window seat?", "Politely request a seat beside the window."], ["Here is your boarding pass.", "The document that allows a passenger to board the aircraft."],
      ["What time does boarding start?", "Ask when passengers may begin entering the aircraft."], ["Where is the departure gate?", "Ask where to go to board your flight."]
    ],
    dialogues:[
      {title:"Checking a suitcase", bank:["check in", "passport", "checking any bags", "overweight", "window seat"], lines:[
        ["Passenger","Hello. I'd like to {{check in}} for flight 482."],["Agent","May I see your {{passport}}?"],["Passenger","Certainly. Here it is."],
        ["Agent","Are you {{checking any bags}}?"],["Passenger","Yes, one suitcase. Is it {{overweight}}?"],["Agent","No, it is fine. Would you like a {{window seat}}?"]]},
      {title:"Ready for boarding", bank:["carry-on luggage", "boarding pass", "boarding start", "departure gate", "aisle seat"], lines:[
        ["Agent","Are you checking a suitcase?"],["Passenger","No, I only have {{carry-on luggage}}. Could I have an {{aisle seat}}?"],["Agent","Certainly. Here is your {{boarding pass}}."],
        ["Passenger","What time does {{boarding start}}?"],["Agent","At 8:20."],["Passenger","And where is the {{departure gate}}?"]]}
    ],
    missions:[
      ["Check in for your flight","You are flying internationally with one suitcase.",["Say which flight you are checking in for","Present your passport","Say that you are checking one bag"],"I'd like to check in..., Here is my passport, I'm checking..."],
      ["Choose your seat","You prefer sitting by the window, away from the restroom.",["Request a window seat","Ask whether your suitcase is overweight","Ask when boarding starts"],"Could I have...?, Is my bag...?, What time...?"],
      ["Travel with carry-on only","You have no checked bags and need to find your gate.",["Say you only have carry-on luggage","Ask for your boarding pass","Ask where the departure gate is"],"I only have..., Could I have...?, Where is...?" ]]
  },
  souvenir: {
    eyebrow:"At a local market", title:"BARGAINING FOR A SOUVENIR", intro:"Ask about handmade items, compare prices, and negotiate respectfully at markets where bargaining is appropriate.",
    vocabulary:[
      ["How much is this?", "Ask for the price of an item."], ["Is this handmade?", "Ask whether someone made the item by hand rather than in a factory."],
      ["That's a little expensive.", "A polite way to say the price is higher than expected."], ["Could you lower the price?", "Politely ask the seller to reduce the price."],
      ["What is your best price?", "Ask for the lowest price the seller is willing to accept."], ["Could you do ... for it?", "Offer a specific amount for an item."],
      ["I'll take two.", "Say that you want to buy two items."], ["Can you give me a discount?", "Ask whether the seller can reduce the price."],
      ["That's a deal.", "Say that you accept the agreed price."], ["I'll think about it.", "Politely leave without deciding to buy immediately."]
    ],
    dialogues:[
      {title:"A handmade bowl", bank:["How much", "handmade", "a little expensive", "lower the price", "best price"], lines:[
        ["Traveler","{{How much}} is this bowl?"],["Seller","It is forty dollars."],["Traveler","Is it {{handmade}}?"],["Seller","Yes, a local artist made it."],
        ["Traveler","It is beautiful, but that's {{a little expensive}}. Could you {{lower the price}}?"],["Seller","I can sell it for thirty-five."],["Traveler","Is that your {{best price}}?"]]},
      {title:"Buying two scarves", bank:["I'll take two", "discount", "do thirty", "a deal", "think about it"], lines:[
        ["Traveler","These scarves are lovely. {{I'll take two}}. Can you give me a {{discount}}?"],["Seller","I can make them thirty-six dollars together."],
        ["Traveler","Could you {{do thirty}} for them?"],["Seller","I can do thirty-two."],["Traveler","That's {{a deal}}."],["Seller","Wonderful. I thought you might {{think about it}}."]]}
    ],
    missions:[
      ["Buy a handmade souvenir","You found a handmade wooden box that costs fifty dollars.",["Ask whether it is handmade","Say the price is a little expensive","Ask for the seller's best price"],"Is this handmade?, That's a little expensive, What is your best price?"],
      ["Negotiate for two items","You want two scarves, but together they cost forty dollars.",["Say you will take two","Ask for a discount","Offer thirty-two dollars politely"],"I'll take two, Can you give me a discount?, Could you do...?"],
      ["Decide not to buy yet","You like a painting, but the seller cannot meet your budget.",["Thank the seller for explaining the price","Say you need to think about it","Leave the conversation politely"],"Thank you, I'll think about it, Maybe I'll come back later." ]]
  }
};

const practiceRoot = document.querySelector("[data-situation-practice]");

if (practiceRoot) {
  const requestedTopic = new URLSearchParams(window.location.search).get("topic");
  const topicKey = situationTopics[requestedTopic] ? requestedTopic : "fast-food";
  const topic = situationTopics[topicKey];
  const title = practiceRoot.querySelector("[data-topic-title]");
  const eyebrow = practiceRoot.querySelector("[data-topic-eyebrow]");
  const intro = practiceRoot.querySelector("[data-topic-intro]");
  const vocabularyList = practiceRoot.querySelector("[data-vocabulary-list]");
  const pronunciationFeedback = practiceRoot.querySelector("[data-pronunciation-feedback]");
  const dialogueList = practiceRoot.querySelector("[data-dialogue-list]");
  const missionTabs = practiceRoot.querySelector("[data-mission-tabs]");
  let draggedToken = null;

  document.title = `${topic.title.replaceAll("&", "and")} | Improve Your English`;
  title.textContent = topic.title;
  eyebrow.textContent = topic.eyebrow;
  intro.textContent = topic.intro;

  const speakExpression = (expression, button) => {
    if (!("speechSynthesis" in window)) {
      pronunciationFeedback.innerHTML = "<strong>Pronunciation is not available in this browser.</strong>";
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(expression);
    utterance.lang = "en-US";
    utterance.rate = 0.82;
    button.classList.add("is-speaking");
    utterance.onend = () => button.classList.remove("is-speaking");
    utterance.onerror = () => button.classList.remove("is-speaking");
    window.speechSynthesis.speak(utterance);
    pronunciationFeedback.innerHTML = `<strong>Listen and repeat:</strong> ${expression}`;
  };

  topic.vocabulary.forEach(([expression, definition], index) => {
    const item = document.createElement("article");
    item.className = "vocabulary-item";
    item.innerHTML = `<span class="vocabulary-number">${String(index + 1).padStart(2, "0")}</span><div><h3>${expression}</h3><p>${definition}</p></div><button class="listen-expression-button" type="button" aria-label="Listen to ${expression}"><span aria-hidden="true">&#128266;</span> Listen</button>`;
    item.querySelector("button").addEventListener("click", (event) => speakExpression(expression, event.currentTarget));
    vocabularyList.append(item);
  });

  const fillNextGap = (dialogue, token) => {
    const nextGap = dialogue.querySelector(".dialogue-gap:not(.is-filled)");
    if (!nextGap) return;
    nextGap.textContent = token.dataset.value;
    nextGap.dataset.value = token.dataset.value;
    nextGap.classList.add("is-filled");
    token.hidden = true;
  };

  const returnGapToken = (dialogue, gap) => {
    if (!gap.dataset.value) return;
    const token = [...dialogue.querySelectorAll(".dialogue-token")].find((item) => item.dataset.value === gap.dataset.value && item.hidden);
    if (token) token.hidden = false;
    gap.textContent = "Click an expression";
    gap.dataset.value = "";
    gap.classList.remove("is-filled", "is-correct", "is-incorrect");
  };

  topic.dialogues.forEach((dialogueData, dialogueIndex) => {
    const dialogue = document.createElement("article");
    dialogue.className = "conversation-activity";
    dialogue.dataset.dialogueIndex = dialogueIndex;
    const lines = dialogueData.lines.map(([speaker, text]) => {
      const rendered = text.replace(/\{\{(.+?)\}\}/g, (_, answer) => `<button class="dialogue-gap" type="button" data-answer="${answer}" data-value="">Click an expression</button>`);
      return `<p class="conversation-line"><strong>${speaker}:</strong> <span>${rendered}</span></p>`;
    }).join("");
    dialogue.innerHTML = `<div class="conversation-heading"><span>Conversation ${dialogueIndex + 1}</span><h3>${dialogueData.title}</h3></div><div class="conversation-workspace"><div class="dialogue-bank-column"><p class="dialogue-bank-label">Expression bank</p><div class="dialogue-bank" aria-label="Expression bank"></div></div><div class="conversation-script">${lines}</div></div><div class="activity-actions"><button class="activity-button dialogue-check" type="button">Check Conversation</button><button class="activity-button secondary-button dialogue-reset" type="button">Reset</button></div><p class="activity-feedback dialogue-feedback" aria-live="polite">Complete every gap, then check your conversation.</p>`;
    const bank = dialogue.querySelector(".dialogue-bank");
    [...dialogueData.bank].sort(() => Math.random() - 0.5).forEach((value) => {
      const token = document.createElement("button");
      token.className = "dialogue-token";
      token.type = "button";
      token.draggable = true;
      token.dataset.value = value;
      token.textContent = value;
      token.addEventListener("click", () => fillNextGap(dialogue, token));
      token.addEventListener("dragstart", () => { draggedToken = token; });
      token.addEventListener("dragend", () => { draggedToken = null; });
      bank.append(token);
    });
    dialogue.querySelectorAll(".dialogue-gap").forEach((gap) => {
      gap.addEventListener("click", () => returnGapToken(dialogue, gap));
      gap.addEventListener("dragover", (event) => event.preventDefault());
      gap.addEventListener("drop", (event) => {
        event.preventDefault();
        if (!draggedToken || draggedToken.closest(".conversation-activity") !== dialogue) return;
        if (gap.dataset.value) returnGapToken(dialogue, gap);
        gap.textContent = draggedToken.dataset.value;
        gap.dataset.value = draggedToken.dataset.value;
        gap.classList.add("is-filled");
        draggedToken.hidden = true;
      });
    });
    dialogue.querySelector(".dialogue-check").addEventListener("click", () => {
      const gaps = [...dialogue.querySelectorAll(".dialogue-gap")];
      const filled = gaps.filter((gap) => gap.dataset.value);
      const feedback = dialogue.querySelector(".dialogue-feedback");
      if (filled.length < gaps.length) {
        feedback.innerHTML = `<strong>Keep going!</strong> Complete all ${gaps.length} gaps before checking.`;
        return;
      }
      let correct = 0;
      gaps.forEach((gap) => {
        const matches = gap.dataset.value === gap.dataset.answer;
        gap.classList.toggle("is-correct", matches);
        gap.classList.toggle("is-incorrect", !matches);
        if (matches) correct += 1;
      });
      feedback.innerHTML = correct === gaps.length
        ? `<strong>Excellent! All ${correct} answers are correct.</strong> You completed the conversation naturally.`
        : `<strong>${correct} of ${gaps.length} answers are correct.</strong> Review the highlighted gaps and try again.`;
    });
    dialogue.querySelector(".dialogue-reset").addEventListener("click", () => {
      dialogue.querySelectorAll(".dialogue-gap").forEach((gap) => returnGapToken(dialogue, gap));
      dialogue.querySelector(".dialogue-feedback").textContent = "Complete every gap, then check your conversation.";
    });
    dialogueList.append(dialogue);
  });

  const missionLabel = practiceRoot.querySelector("[data-mission-label]");
  const missionTitle = practiceRoot.querySelector("[data-mission-title]");
  const missionScenario = practiceRoot.querySelector("[data-mission-scenario]");
  const missionPoints = practiceRoot.querySelector("[data-mission-points]");
  const missionLanguage = practiceRoot.querySelector("[data-mission-language]");
  const startButton = practiceRoot.querySelector("[data-situation-start]");
  const stopButton = practiceRoot.querySelector("[data-situation-stop]");
  const deleteButton = practiceRoot.querySelector("[data-situation-delete]");
  const recordingStatus = practiceRoot.querySelector("[data-situation-recording-status]");
  const recordingTimer = practiceRoot.querySelector("[data-situation-recording-timer]");
  const audioPlayer = practiceRoot.querySelector("[data-situation-audio]");
  const downloadLink = practiceRoot.querySelector("[data-situation-download]");
  let mediaRecorder = null;
  let mediaStream = null;
  let recordedChunks = [];
  let audioUrl = "";
  let timerId = null;
  let recordingStarted = 0;

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  };
  const stopTracks = () => {
    if (mediaStream) mediaStream.getTracks().forEach((track) => track.stop());
    mediaStream = null;
  };
  const clearRecording = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    audioUrl = "";
    audioPlayer.removeAttribute("src");
    audioPlayer.load();
    downloadLink.href = "#";
    downloadLink.classList.add("is-disabled");
    downloadLink.setAttribute("aria-disabled", "true");
    recordingTimer.textContent = "00:00";
  };
  const showMission = (index) => {
    const [heading, scenario, points, language] = topic.missions[index];
    missionTabs.querySelectorAll("button").forEach((button, buttonIndex) => button.classList.toggle("is-active", buttonIndex === index));
    missionLabel.textContent = `Mission ${index + 1}`;
    missionTitle.textContent = heading;
    missionScenario.textContent = scenario;
    missionPoints.innerHTML = points.map((point) => `<li>${point}</li>`).join("");
    missionLanguage.textContent = language;
    if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
    clearRecording();
    recordingStatus.textContent = "Click Start Recording when you are ready.";
  };
  topic.missions.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `Situation ${index + 1}`;
    button.addEventListener("click", () => showMission(index));
    missionTabs.append(button);
  });
  showMission(0);

  const supportedMimeType = () => {
    if (!window.MediaRecorder?.isTypeSupported) return "";
    return ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"].find((type) => MediaRecorder.isTypeSupported(type)) || "";
  };
  startButton.addEventListener("click", async () => {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      recordingStatus.innerHTML = "<strong>Audio recording is not available in this browser.</strong>";
      return;
    }
    try {
      clearRecording();
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordedChunks = [];
      const mimeType = supportedMimeType();
      mediaRecorder = mimeType ? new MediaRecorder(mediaStream, { mimeType }) : new MediaRecorder(mediaStream);
      mediaRecorder.addEventListener("dataavailable", (event) => { if (event.data?.size) recordedChunks.push(event.data); });
      mediaRecorder.addEventListener("stop", () => {
        window.clearInterval(timerId);
        timerId = null;
        stopTracks();
        startButton.disabled = false;
        stopButton.disabled = true;
        if (!recordedChunks.length) {
          recordingStatus.innerHTML = "<strong>No audio was recorded.</strong> Please try again.";
          return;
        }
        const type = mediaRecorder.mimeType || "audio/webm";
        const blob = new Blob(recordedChunks, { type });
        audioUrl = URL.createObjectURL(blob);
        audioPlayer.src = audioUrl;
        const extension = type.includes("mp4") ? "m4a" : type.includes("ogg") ? "ogg" : "webm";
        downloadLink.href = audioUrl;
        downloadLink.download = `${topicKey}-speaking-mission.${extension}`;
        downloadLink.classList.remove("is-disabled");
        downloadLink.removeAttribute("aria-disabled");
        recordingStatus.innerHTML = "<strong>Recording complete.</strong> Listen to it, then download it when you are happy.";
      });
      mediaRecorder.start();
      recordingStarted = Date.now();
      timerId = window.setInterval(() => recordingTimer.textContent = formatTime(Date.now() - recordingStarted), 250);
      startButton.disabled = true;
      stopButton.disabled = false;
      recordingStatus.innerHTML = "<strong>Recording now...</strong> Include every point in your mission.";
    } catch (error) {
      stopTracks();
      recordingStatus.innerHTML = "<strong>Microphone access was denied or unavailable.</strong> Check your browser permission and try again.";
    }
  });
  stopButton.addEventListener("click", () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
  });
  deleteButton.addEventListener("click", () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
    if (timerId) window.clearInterval(timerId);
    stopTracks();
    clearRecording();
    startButton.disabled = false;
    stopButton.disabled = true;
    recordingStatus.textContent = "Recording deleted. Click Start Recording when you are ready.";
  });
  downloadLink.addEventListener("click", (event) => { if (!audioUrl) event.preventDefault(); });
  window.addEventListener("beforeunload", () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (timerId) window.clearInterval(timerId);
    stopTracks();
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  });
}
