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
      {title:"Finding the restroom in the shopping center", bank:["How do I get to", "Go straight ahead", "information desk", "Turn right", "across from"], lines:[
        ["Shopper","Excuse me. {{How do I get to}} the restroom?"],["Employee","{{Go straight ahead}} and walk past the {{information desk}}."],
        ["Shopper","What should I do after that?"],["Employee","{{Turn right}} at the shoe store. The restrooms are {{across from}} the elevators."],["Shopper","Thank you for your help!"]]},
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
  },
  restaurant: {
    eyebrow:"Table service", title:"EATING AT A RESTAURANT", intro:"Reserve a table, understand a full-service menu, order different courses, and ask for the bill politely.",
    vocabulary:[
      ["I have a reservation.", "Say this when you booked a table before arriving."], ["A table for two, please.", "Ask the host for a table and state the number of guests."],
      ["The menu", "The list of dishes and beverages available."], ["An appetizer", "A small dish served before the main course."],
      ["The main course", "The largest or most important dish in a meal."], ["A side dish", "A smaller food item served with the main course."],
      ["What do you recommend?", "Ask the server to suggest a dish."], ["How would you like it cooked?", "A question about how meat should be prepared."],
      ["I am allergic to...", "Warn the server that an ingredient may cause a reaction."], ["Still or sparkling water?", "A choice between water without or with bubbles."],
      ["Could we see the dessert menu?", "Ask to look at the available desserts."], ["Could we have the bill, please?", "Politely ask for the final amount to pay."]
    ],
    dialogues:[
      {title:"Arriving for dinner", bank:["a reservation", "table for two", "menu", "still or sparkling", "recommend"], lines:[
        ["Host","Good evening. Do you have {{a reservation}}?"],["Guest","No, but we would like a {{table for two}}, please."],["Host","Certainly. Here is your {{menu}}."],
        ["Server","Would you like {{still or sparkling}} water?"],["Guest","Still water, please. What do you {{recommend}} for an appetizer?"]]},
      {title:"Ordering and paying", bank:["main course", "cooked", "allergic to", "dessert menu", "bill"], lines:[
        ["Server","Are you ready to order your {{main course}}?"],["Guest","Yes, I would like the steak."],["Server","How would you like it {{cooked}}?"],
        ["Guest","Medium, please. I am {{allergic to}} nuts."],["Server","Thank you for telling me."],["Guest","After dinner, could we see the {{dessert menu}}? And later, could we have the {{bill}}, please?"]]}
    ],
    missions:[
      ["Reserve and arrive","You are having dinner with a friend at a popular restaurant.",["Say you have a reservation under your name","Ask for a quiet table","Request the menu"],"I have a reservation..., Could we have...?, May we see the menu?"],
      ["Order a complete meal","You want an appetizer, a main course, and a beverage.",["Ask what the server recommends","Order one appetizer to share","Explain one ingredient you do not eat"],"What do you recommend?, We'd like..., I don't eat..."],
      ["Solve a problem politely","Your main course is cold and you still need to pay.",["Explain that the food is cold","Ask whether it can be reheated","Request the bill after the problem is solved"],"Excuse me..., Could you...?, Could we have the bill?" ]]
  },
  "rental-car": {
    eyebrow:"At the rental desk", title:"RENTING A CAR", intro:"Pick up an online reservation or compare options and rent a vehicle directly at the counter.",
    vocabulary:[
      ["I have a reservation.", "Say this when the vehicle was booked online or through an app."], ["A booking reference", "The code used to find an existing reservation."],
      ["A driver's license", "The official document that permits someone to drive."], ["The rental agreement", "The contract containing the rental rules and charges."],
      ["Insurance coverage", "Financial protection for certain accidents or damage."], ["A security deposit", "Money temporarily held by the company during the rental."],
      ["Automatic or manual?", "A choice between two types of transmission."], ["The fuel policy", "The rule explaining how much fuel must be in the car when returned."],
      ["Unlimited mileage", "Permission to drive without paying for each additional mile or kilometer."], ["An additional driver", "Another person authorized to drive the rental car."],
      ["Could I inspect the car?", "Ask to check and record existing damage before leaving."], ["Where should I return it?", "Ask for the vehicle return location."]
    ],
    dialogues:[
      {title:"Picking up an app reservation", bank:["a reservation", "booking reference", "driver's license", "fuel policy", "inspect the car"], lines:[
        ["Agent","Welcome. How can I help you?"],["Customer","I have {{a reservation}} through your app."],["Agent","May I have your {{booking reference}} and {{driver's license}}?"],
        ["Customer","Of course. What is the {{fuel policy}}?"],["Agent","Please return it with a full tank."],["Customer","Before I leave, could I {{inspect the car}} for existing damage?"]]}
      ,{title:"Renting at the counter", bank:["automatic", "insurance coverage", "security deposit", "unlimited mileage", "return it"], lines:[
        ["Customer","I need a car for three days. Do you have an {{automatic}} compact car?"],["Agent","Yes. Would you like basic or full {{insurance coverage}}?"],
        ["Customer","Full coverage, please. Is there a {{security deposit}}?"],["Agent","Yes, two hundred dollars. The rental includes {{unlimited mileage}}."],["Customer","Great. Where should I {{return it}} on Monday?"]]}
    ],
    missions:[
      ["Pick up your online rental","You reserved a compact car through an app yesterday.",["Give your booking reference","Present your driver's license","Ask about the fuel policy"],"I have a reservation, My booking reference is..., What is the fuel policy?"],
      ["Rent a car now","You did not book ahead and need a car for four days.",["Ask whether an automatic car is available","Ask about insurance coverage","Ask how much the security deposit is"],"Do you have...?, What insurance...?, How much is...?"],
      ["Check before driving","The employee gives you the keys, but you notice a scratch.",["Point out the existing scratch","Ask the employee to record it","Confirm where and when to return the car"],"There is a scratch..., Could you record it?, Where should I return...?" ]]
  },
  taxi: {
    eyebrow:"On the road", title:"GETTING AN UBER OR TAXI", intro:"Confirm the correct ride, communicate your destination, discuss the route, and talk naturally with the driver.",
    vocabulary:[
      ["I booked a ride through the app.", "Say that you requested the car using a rideshare application."], ["The pickup point", "The place where the driver meets the passenger."],
      ["Is this car for...?", "Confirm that the vehicle is the correct ride for a passenger."], ["The license plate", "The letters and numbers identifying a vehicle."],
      ["Could you open the trunk?", "Ask the driver to open the luggage compartment."], ["Please take me to...", "Tell a taxi driver your destination."],
      ["Which route do you prefer?", "The driver is asking which way you want to travel."], ["Please use the meter.", "Ask a taxi driver to calculate the fare using the official device."],
      ["How long will it take?", "Ask for the estimated journey time."], ["Is traffic usually this heavy?", "Ask whether the road is normally very busy."],
      ["Could you drop me off here?", "Ask the driver to stop and let you leave at the current location."], ["Can I pay by card?", "Ask whether card payment is accepted."]
    ],
    dialogues:[
      {title:"Meeting an app driver", bank:["through the app", "pickup point", "for Camila", "license plate", "open the trunk"], lines:[
        ["Passenger","Hi. I booked a ride {{through the app}}."],["Driver","Great. Were you waiting at the main {{pickup point}}?"],["Passenger","Yes. Is this car {{for Camila}}?"],
        ["Driver","Yes. You can check the {{license plate}} in the app."],["Passenger","Perfect. Could you {{open the trunk}} for my suitcase?"]]}
      ,{title:"Taking a city taxi", bank:["take me to", "route", "meter", "take", "pay by card"], lines:[
        ["Passenger","Please {{take me to}} the Riverside Hotel."],["Driver","Of course. Which {{route}} do you prefer, the highway or downtown?"],
        ["Passenger","Whichever is faster. Please use the {{meter}}."],["Driver","No problem. It should {{take}} about twenty minutes."],["Passenger","Thanks. Can I {{pay by card}} at the end?"]]}
    ],
    missions:[
      ["Start a conversation","You are taking a thirty-minute ride and want to speak with the driver.",["Greet the driver and ask how their day is going","Ask whether they are from this city","Ask for one local restaurant recommendation"],"How is your day going?, Are you from...?, What restaurant do you recommend?"],
      ["Confirm an app ride","Several similar cars are waiting outside your hotel.",["Ask whether the ride is for you","Confirm the driver's name and license plate","Ask the driver to open the trunk"],"Is this car for...?, Is your name...?, Could you open the trunk?"],
      ["Direct a taxi ride","You need to reach the airport but traffic is heavy.",["Tell the driver your destination","Ask how long the journey will take","Confirm that you can pay by card"],"Please take me to..., How long will it take?, Can I pay by card?" ]]
  },
  electronics: {
    eyebrow:"Comparing technology", title:"AT AN ELECTRONICS STORE", intro:"Compare devices, ask about specifications, understand warranties, and choose the right product for your needs.",
    vocabulary:[
      ["I am looking for...", "Say which kind of device you want to buy."], ["A laptop", "A portable computer with a screen and keyboard."],
      ["A smartphone", "A cellphone that runs apps and connects to the internet."], ["How much storage does it have?", "Ask how much digital space is available for files and apps."],
      ["The battery life", "How long a device works before it needs charging."], ["The screen size", "The diagonal measurement of a display."],
      ["Is it unlocked?", "Ask whether a phone can be used with different mobile carriers."], ["Does it come with a charger?", "Ask whether a charging device is included."],
      ["A warranty", "A promise to repair or replace a product under certain conditions."], ["Is it compatible with...?", "Ask whether a device works with another product or system."],
      ["Is there a cheaper model?", "Ask whether a less expensive version is available."], ["Can I return or exchange it?", "Ask about returning the product or replacing it with another one."]
    ],
    dialogues:[
      {title:"Choosing a laptop", bank:["looking for", "laptop", "storage", "battery life", "cheaper model"], lines:[
        ["Customer","Hi. I am {{looking for}} a lightweight {{laptop}} for university."],["Assistant","This model is popular with students."],
        ["Customer","How much {{storage}} does it have?"],["Assistant","Five hundred and twelve gigabytes, and the {{battery life}} is about twelve hours."],["Customer","That sounds good. Is there a {{cheaper model}} with similar features?"]]}
      ,{title:"Buying a cellphone", bank:["unlocked", "charger", "warranty", "compatible with", "exchange it"], lines:[
        ["Customer","Is this phone {{unlocked}}?"],["Assistant","Yes, it works with all major carriers."],["Customer","Does it come with a {{charger}}?"],
        ["Assistant","Yes, and it has a two-year {{warranty}}."],["Customer","Is it {{compatible with}} my smartwatch? And can I {{exchange it}} if there is a problem?"]]}
    ],
    missions:[
      ["Choose a study laptop","You need a lightweight computer for classes and video calls.",["Explain what you will use it for","Ask about storage and battery life","Ask whether a student discount is available"],"I am looking for..., How much storage...?, Is there a student discount?"],
      ["Replace your cellphone","Your phone stopped working during your trip.",["Ask for an unlocked smartphone","Ask whether a charger is included","Ask about the warranty and return policy"],"Is it unlocked?, Does it come with...?, What is the warranty?"],
      ["Compare two devices","Two tablets have different prices and specifications.",["Ask about both screen sizes","Compare their battery life","Ask which model the assistant recommends"],"What is the screen size?, How long...?, Which do you recommend?" ]]
  },
  "phone-food": {
    eyebrow:"Calling for delivery", title:"ORDERING FOOD BY PHONE", intro:"Place a delivery order clearly, customize food, give your address, and confirm the total and estimated arrival time.",
    vocabulary:[
      ["I would like to place an order.", "Begin a telephone order politely."], ["For delivery or pickup?", "A question asking how you want to receive the food."],
      ["The delivery address", "The location where the restaurant should bring the order."], ["A phone number", "The number the restaurant can call about the delivery."],
      ["What sizes do you have?", "Ask about the available portion or pizza sizes."], ["The crust", "The baked outer edge and base of a pizza."],
      ["A topping", "An ingredient placed on top of a pizza."], ["Could you leave off...?", "Ask the restaurant not to include an ingredient."],
      ["Special instructions", "Extra information about preparing or delivering the order."], ["How long will delivery take?", "Ask for the estimated arrival time."],
      ["What is the total?", "Ask for the complete price including fees."], ["I will pay by card / in cash.", "Tell the restaurant how you intend to pay."]
    ],
    dialogues:[
      {title:"Ordering a pizza", bank:["place an order", "delivery", "sizes", "thin crust", "leave off"], lines:[
        ["Employee","Good evening, Bella Pizza. How can I help?"],["Customer","I would like to {{place an order}}, please."],["Employee","Is that for pickup or {{delivery}}?"],
        ["Customer","Delivery. What {{sizes}} do you have?"],["Employee","Medium, large, and family size."],["Customer","I would like a large pizza with {{thin crust}}. Could you {{leave off}} the onions?"]]}
      ,{title:"Confirming the delivery", bank:["delivery address", "phone number", "special instructions", "delivery take", "total"], lines:[
        ["Employee","What is the {{delivery address}}?"],["Customer","Twenty Oak Street, Apartment 4B."],["Employee","May I have your {{phone number}} and any {{special instructions}}?"],
        ["Customer","Please call when the driver arrives. How long will {{delivery take}}?"],["Employee","About forty minutes."],["Customer","Great. What is the {{total}}? I will pay by card."]]}
    ],
    missions:[
      ["Order a customized pizza","You want a large pizza delivered to your hotel.",["Choose two toppings and thin crust","Ask them to leave off onions","Give your room number as a delivery instruction"],"I'd like..., Could you leave off...?, Please call..."],
      ["Give complete delivery details","The restaurant needs information before confirming the order.",["Give your full delivery address","Provide a phone number","Ask how long delivery will take"],"The address is..., My number is..., How long...?"],
      ["Correct a telephone order","The employee repeats your order with the wrong drink and size.",["Politely correct the pizza size","Replace the drink with sparkling water","Confirm the total and payment method"],"Sorry, I ordered..., Could I change...?, What is the total?" ]]
  },
  doctor: {
    eyebrow:"At a clinic or hospital", title:"GOING TO THE DOCTOR", intro:"Make an appointment, describe symptoms clearly, answer common questions, and provide international health-insurance information abroad.",
    vocabulary:[
      ["I would like to make an appointment.", "Ask to schedule a time to see a doctor."], ["What symptoms do you have?", "A question asking what health problems you are experiencing."],
      ["I have been feeling...", "Describe how you have felt over a period of time."], ["How long have you had this?", "A question about when a symptom started."],
      ["A medical history", "Information about previous health conditions and treatment."], ["I am allergic to...", "Tell medical staff about a known allergy."],
      ["A prescription", "A doctor's written authorization for medicine."], ["A follow-up appointment", "A later visit to review your condition or progress."],
      ["An international health-insurance card", "Proof that you have travel or international medical coverage."], ["A policy number", "The identification number for an insurance plan."],
      ["Is this covered by my insurance?", "Ask whether your insurance will pay for a service."], ["The emergency room", "The hospital department for urgent or serious medical problems."]
    ],
    dialogues:[
      {title:"Making a clinic appointment", bank:["make an appointment", "symptoms", "feeling dizzy", "How long", "medical history"], lines:[
        ["Receptionist","How may I help you?"],["Patient","I would like to {{make an appointment}} with a doctor."],["Receptionist","What {{symptoms}} do you have?"],
        ["Patient","I have been {{feeling dizzy}} since yesterday."],["Receptionist","{{How long}} has each episode lasted?"],["Patient","A few minutes. I can provide my {{medical history}} at the appointment."]]}
      ,{title:"Registering at a hospital abroad", bank:["health-insurance card", "policy number", "covered", "allergic to", "emergency room"], lines:[
        ["Hospital clerk","Before registration, we need your passport and international {{health-insurance card}}."],["Patient","Here they are. My {{policy number}} is on the back."],
        ["Hospital clerk","Thank you. You should contact the insurer to confirm what is {{covered}}."],["Nurse","Are you {{allergic to}} any medicine?"],["Patient","No known allergies. Do I need to go to the {{emergency room}} or wait for the clinic doctor?"]]}
    ],
    missions:[
      ["Describe your symptoms","You have felt unwell since yesterday and need a clinic appointment.",["Say when the symptoms began","Describe two symptoms clearly","Mention any known allergies"],"I have been feeling..., It started..., I am allergic to..."],
      ["Register at an international hospital","The hospital requires proof of coverage before a non-emergency consultation.",["Present your passport and international insurance card","Give your policy number","Ask whether the consultation is covered"],"Here is my insurance card, My policy number is..., Is this covered...?"],
      ["Ask follow-up questions","The doctor finishes the examination and explains the next steps.",["Ask whether you need a prescription","Ask when to return for a follow-up","Ask who to contact if symptoms become urgent"],"Do I need...?, When should I...?, Who should I contact...?" ]]
  },
  visa: {
    eyebrow:"At an embassy or consulate", title:"GETTING A VISA", intro:"Prepare documents, explain your plans, and answer common visa-interview questions clearly and honestly.",
    vocabulary:[
      ["A visa application", "The official request for permission to enter a country."], ["An application form", "The document where you provide personal and travel information."],
      ["The embassy / consulate", "The official government office that processes many visa applications abroad."], ["A visa interview", "A meeting where an officer asks about your application and plans."],
      ["The purpose of my trip is...", "Explain the main reason you want to travel."], ["Supporting documents", "Evidence submitted with an application, such as statements or letters."],
      ["Proof of funds", "Documents showing that you can pay for the trip."], ["A sponsor", "A person or organization helping pay for or support your visit."],
      ["An itinerary", "A plan listing travel dates, destinations, and activities."], ["Ties to my home country", "Work, study, family, or property that connects you to where you live."],
      ["I intend to return...", "Clearly state when or why you plan to go back home."], ["Previous travel history", "Information about countries you visited before."],
      ["Has my visa been approved?", "Ask whether the application was accepted."], ["How long will processing take?", "Ask when a decision or passport may be ready."]
    ],
    dialogues:[
      {title:"Presenting a tourist application", bank:["visa application", "purpose", "itinerary", "proof of funds", "supporting documents", "intend to return"], lines:[
        ["Officer","May I see your {{visa application}} and passport?"],["Applicant","Certainly. I also brought the requested {{supporting documents}}."],
        ["Officer","What is the {{purpose}} of your visit?"],["Applicant","Tourism. Here is my two-week {{itinerary}} and my {{proof of funds}}."],
        ["Officer","What will you do after the trip?"],["Applicant","I {{intend to return}} to my job in Brazil."]]}
      ,{title:"Explaining study plans", bank:["visa interview", "sponsor", "proof", "ties", "processing take", "approved"], lines:[
        ["Officer","Welcome to your {{visa interview}}. Who will pay for your course?"],["Applicant","My parents are my {{sponsor}}. I have {{proof}} of their financial support."],
        ["Officer","What {{ties}} do you have to your home country?"],["Applicant","My family and current university program are there."],
        ["Applicant","How long will {{processing take}}?"],["Officer","Usually ten business days. You will receive a message if the visa is {{approved}}."]]}
    ],
    missions:[
      ["Explain a tourist application","You are applying for a two-week vacation visa.",["State the purpose of your trip","Describe your itinerary and accommodation","Explain why you will return home"],"The purpose of my trip is..., My itinerary includes..., I intend to return..."],
      ["Describe financial support","An officer asks how you will pay for your visit.",["Say who is paying for the trip","Mention your proof of funds","Explain your estimated travel budget"],"My sponsor is..., I have proof of..., My budget is..."],
      ["Discuss a study visa","You have been accepted for a short international course.",["Name the course and institution","Explain how it supports your goals","Mention your ties to your home country"],"I was accepted by..., This course will..., My ties include..." ]]
  },
  exchange: {
    eyebrow:"At a currency-exchange desk", title:"EXCHANGING MONEY", intro:"Compare rates, ask about fees, and clearly explain which currency you want to buy or sell.",
    vocabulary:[
      ["The exchange rate", "The value of one currency compared with another."], ["Foreign currency", "Money used in a country different from your own."],
      ["I would like to buy...", "Say which foreign currency you want to receive."], ["I would like to sell...", "Say which foreign currency you want to exchange."],
      ["The buy rate", "The rate the exchange office pays when buying currency from you."], ["The sell rate", "The rate you pay when the exchange office sells currency to you."],
      ["Is there a service fee?", "Ask whether the office charges an additional amount."], ["How much will I receive?", "Ask for the final amount after the conversion."],
      ["A commission", "A fee charged for completing an exchange."], ["Cash", "Money in physical notes and coins."],
      ["Small denominations", "Banknotes with lower values."], ["Large denominations", "Banknotes with higher values."],
      ["May I see your passport?", "A request for identification before the transaction."], ["Could I have a receipt?", "Ask for written proof of the exchange."]
    ],
    dialogues:[
      {title:"Buying euros", bank:["buy", "exchange rate", "service fee", "receive", "small denominations", "receipt"], lines:[
        ["Customer","I would like to {{buy}} euros, please."],["Clerk","Today's {{exchange rate}} is displayed on the board."],
        ["Customer","Is there a {{service fee}}?"],["Clerk","Yes, four dollars. How many euros would you like to {{receive}}?"],
        ["Customer","Two hundred, preferably in {{small denominations}}. Could I have a {{receipt}}?"]]}
      ,{title:"Selling foreign currency", bank:["sell", "buy rate", "commission", "passport", "How much", "cash"], lines:[
        ["Customer","I would like to {{sell}} these British pounds."],["Clerk","We will use today's {{buy rate}}, and there is no percentage {{commission}}."],
        ["Clerk","May I see your {{passport}}?"],["Customer","Of course. {{How much}} will I receive?"],
        ["Clerk","One hundred eighty-four dollars after the fee."],["Customer","That is fine. I would like the payment in {{cash}}."]]}
    ],
    missions:[
      ["Buy currency for a trip","You need euros before traveling tomorrow.",["Ask for the current sell rate","Say how many euros you want","Ask for small denominations and a receipt"],"What is today's sell rate?, I'd like to buy..., Could I have...?"],
      ["Sell leftover money","You returned with unused British pounds.",["Say how much you want to sell","Ask about the buy rate and fees","Confirm how much you will receive"],"I'd like to sell..., What is the buy rate?, How much will I receive?"],
      ["Compare before exchanging","You want to understand the complete cost first.",["Ask the clerk to explain the displayed rates","Ask whether there is a commission","Politely decide whether to continue"],"Could you explain...?, Is there a commission?, I'd like to proceed / think about it." ]]
  },
  airbnb: {
    eyebrow:"At a vacation rental", title:"AIRBNB SITUATIONS", intro:"Communicate with a host during check-in, solve apartment problems, ask for local tips, and check out correctly.",
    vocabulary:[
      ["The host", "The person who manages or rents the accommodation to guests."], ["The guest", "The person staying in the apartment or house."],
      ["Self check-in", "Entering the property without meeting the host in person."], ["A lockbox", "A secure box containing the property key."],
      ["The access code", "The numbers used to open a door, gate, or lockbox."], ["House rules", "Instructions guests are expected to follow during the stay."],
      ["What is the Wi-Fi password?", "Ask for the information needed to connect to the internet."], ["Could you recommend...?", "Ask the host to suggest a place, service, or activity."],
      ["There seems to be a problem with...", "Politely introduce an issue in the accommodation."], ["It is not working.", "Explain that an appliance or service does not function."],
      ["Could someone take a look?", "Ask the host to arrange an inspection or repair."], ["Check-out instructions", "The host's directions for leaving the property."],
      ["Where should I leave the keys?", "Ask what to do with the keys at departure."], ["A cleaning fee", "An amount charged for cleaning after a stay."]
    ],
    dialogues:[
      {title:"Completing self check-in", bank:["self check-in", "access code", "lockbox", "house rules", "Wi-Fi password", "recommend"], lines:[
        ["Guest","Hello. I am ready for {{self check-in}}."],["Host","Great. The gate {{access code}} is 4281, and the key is in the {{lockbox}}."],
        ["Guest","Thank you. Where can I read the {{house rules}}?"],["Host","They are inside the welcome guide."],
        ["Guest","What is the {{Wi-Fi password}}? Also, could you {{recommend}} a nearby grocery store?"]]}
      ,{title:"Reporting an apartment problem", bank:["problem with", "not working", "take a look", "hot water", "check-out instructions", "leave the keys"], lines:[
        ["Guest","There seems to be a {{problem with}} the shower."],["Host","What is happening?"],["Guest","The {{hot water}} is {{not working}}."],
        ["Host","I am sorry. I will ask someone to {{take a look}} this afternoon."],["Guest","Thank you. Could you also send the {{check-out instructions}} and tell me where to {{leave the keys}} tomorrow?"]]}
    ],
    missions:[
      ["Check in independently","The host sent instructions, but you need a few details.",["Confirm that you found the lockbox","Ask for the access code and Wi-Fi password","Check one important house rule"],"I found the lockbox, What is the access code?, Could you confirm...?"],
      ["Report apartment problems","The apartment is not as expected when you arrive.",["Explain that the hot water is not working","Say the bedroom has not been cleaned properly","Ask when someone can come to help"],"There seems to be..., It has not been..., Could someone take a look?"],
      ["Prepare to check out","You are leaving early tomorrow morning.",["Ask for the check-out time and instructions","Ask where to leave the keys","Thank the host and mention one thing you enjoyed"],"What time is check-out?, Where should I leave...?, Thank you for..." ]]
  },
  bar: {
    eyebrow:"An evening out", title:"GOING TO A BAR", intro:"Order drinks and snacks, ask about ingredients and specials, and close your tab politely.",
    vocabulary:[
      ["The drinks menu", "The list of alcoholic and non-alcoholic drinks available."], ["What do you have on tap?", "Ask which draft beers are available."],
      ["A mocktail", "A mixed drink made without alcohol."], ["A round of drinks", "One drink for each person in a group."],
      ["I'll have...", "A natural way to order your choice."], ["Could I see the snack menu?", "Ask to look at the food choices."],
      ["What is tonight's special?", "Ask about a discounted or featured item."], ["No ice, please.", "Ask for a drink without ice."],
      ["Could we start a tab?", "Ask to pay for several orders together at the end."], ["I'll pay as I go.", "Say that you want to pay after each order."],
      ["Could we have the check?", "Ask for the final bill."], ["Is service included?", "Ask whether the service charge is already in the total."]
    ],
    dialogues:[
      {title:"Ordering the first round", bank:["drinks menu", "on tap", "I'll have", "mocktail", "No ice"], lines:[
        ["Bartender","Good evening. Here is the {{drinks menu}}."],["Guest","Thanks. What do you have {{on tap}}?"],["Bartender","We have a local lager and a pale ale."],
        ["Guest","{{I'll have}} the lager, please."],["Friend","And I would like a fruit {{mocktail}}. {{No ice}}, please."]]},
      {title:"Snacks and the bill", bank:["snack menu", "tonight's special", "start a tab", "check", "service included"], lines:[
        ["Guest","Could I see the {{snack menu}}?"],["Bartender","Certainly. Our nachos are {{tonight's special}}."],["Guest","Great. Could we {{start a tab}}?"],
        ["Bartender","Of course."],["Guest","We are ready to leave now. Could we have the {{check}}? Is {{service included}}?"]]}
    ],
    missions:[
      ["Order for two","You and a friend want drinks and something small to eat.",["Ask what is available on tap","Order one mocktail without ice","Ask for the snack menu"],"What do you have on tap?, I'll have..., Could I see...?"],
      ["Ask about your drink","You need more information before ordering.",["Ask what is in the house mocktail","Explain that you do not drink alcohol","Ask about tonight's special"],"What is in...?, I don't drink..., What is tonight's special?"],
      ["Close the tab","Your group is ready to leave the bar.",["Ask for the check","Ask whether service is included","Say how you would like to pay"],"Could we have the check?, Is service included?, I'll pay by..." ]]
  },
  "city-tour": {
    eyebrow:"A day in New York", title:"TOURING THE CITY CENTER", intro:"Ask about landmarks, understand tour instructions, and plan a five-stop visit through Manhattan.",
    vocabulary:[
      ["A sightseeing tour", "A trip to visit the most interesting places in a city."], ["A landmark", "A famous or easily recognized building or place."],
      ["A guided tour", "A visit led by someone who explains the places you see."], ["The meeting point", "The place where a tour group gathers."],
      ["How long is the tour?", "Ask about the total duration of a tour."], ["Is admission included?", "Ask whether entrance tickets are part of the price."],
      ["Where is our next stop?", "Ask which place the group will visit next."], ["How much free time do we have?", "Ask how long you may explore independently."],
      ["Could you take a picture of us?", "Politely ask someone to photograph your group."], ["The observation deck", "A high place designed for viewing the city."],
      ["It is a short walk from here.", "Say that a place is nearby on foot."], ["We need to be back by...", "State the time when everyone must return."]
    ],
    dialogues:[
      {title:"Meeting the tour guide", bank:["sightseeing tour", "meeting point", "How long", "admission included", "guided tour"], lines:[
        ["Traveler","Is this the {{meeting point}} for the Manhattan {{sightseeing tour}}?"],["Guide","Yes. Welcome to our {{guided tour}}."],
        ["Traveler","{{How long}} is the tour?"],["Guide","About five hours."],["Traveler","Is museum {{admission included}}?"]]},
      {title:"Exploring a stop", bank:["next stop", "free time", "short walk", "take a picture", "back by"], lines:[
        ["Traveler","Where is our {{next stop}}?"],["Guide","Bryant Park. It is a {{short walk}} from here."],["Traveler","How much {{free time}} do we have?"],
        ["Guide","Thirty minutes. We need to be {{back by}} 2:15."],["Traveler","Before we go, could you {{take a picture}} of us?"]]}
    ],
    missions:[
      ["Join the tour","You are meeting a guide near Times Square.",["Confirm the meeting point","Ask how long the tour lasts","Ask whether admission is included"],"Is this the meeting point?, How long...?, Is admission included?"],
      ["Explore independently","The group has stopped near Central Park.",["Ask how much free time you have","Ask where the next stop is","Confirm when you must return"],"How much free time...?, Where is...?, We need to be back by...?"],
      ["Ask for local advice","You want a memorable view of New York.",["Ask which observation deck the guide recommends","Ask how to get there","Ask someone to take your picture"],"Which... do you recommend?, How do I get to...?, Could you take...?" ]]
  },
  "public-transit": {
    eyebrow:"Moving around town", title:"TAKING PUBLIC TRANSPORTATION", intro:"Use buses and subways, understand schedules, recover from mistakes, and ask where to get off.",
    vocabulary:[
      ["A bus stop", "A marked place where passengers wait for a bus."], ["A subway station", "A place where passengers enter and leave an underground train system."],
      ["Which line should I take?", "Ask which bus or subway route reaches your destination."], ["Does this bus go to...?", "Check whether a bus serves a particular place."],
      ["Where should I get off?", "Ask at which stop you must leave."], ["I took the wrong bus.", "Explain that you boarded an incorrect route."],
      ["Do I need to transfer?", "Ask whether you must change to another bus or train."], ["The next stop", "The station or bus stop immediately ahead."],
      ["A timetable", "A list showing scheduled departure and arrival times."], ["A subway map", "A diagram showing train lines and stations."],
      ["A transit card", "A reusable card used to pay public-transport fares."], ["Is this seat available?", "Politely ask whether anyone is using a seat."]
    ],
    dialogues:[
      {title:"Catching the right bus", bank:["bus stop", "go to", "get off", "wrong bus", "transfer"], lines:[
        ["Traveler","Is this the {{bus stop}} for route 24?"],["Local","Yes, but where are you going?"],["Traveler","Does this bus {{go to}} City Hall?"],
        ["Local","No. If you board it, you will take the {{wrong bus}}."],["Traveler","Which route should I take, and where should I {{get off}}? Do I need to {{transfer}}?"]]},
      {title:"Navigating the subway", bank:["subway station", "line", "timetable", "next stop", "transit card"], lines:[
        ["Traveler","Is there a {{subway station}} near here?"],["Agent","Yes, across the street."],["Traveler","Which {{line}} should I take to the museum?"],
        ["Agent","Take the blue line. Check the {{timetable}} on the screen."],["Traveler","Can I use this {{transit card}}?"],["Agent","Yes. The museum is the third stop, not the {{next stop}}."]]}
    ],
    missions:[
      ["Ask for bus help","You are unsure whether the approaching bus goes downtown.",["Confirm the bus number","Ask whether it goes downtown","Ask where you should get off"],"Is this bus...?, Does this bus go to...?, Where should I get off?"],
      ["Correct a mistake","You realize that you took the wrong bus.",["Explain what happened","Tell the driver your destination","Ask where you can transfer"],"I took the wrong bus, I need to go to..., Where can I transfer?"],
      ["Plan a subway journey","You need to reach the airport using the subway.",["Ask which line to take","Ask whether you need to transfer","Ask how to buy or reload a transit card"],"Which line...?, Do I need to transfer?, How can I...?" ]]
  }
};

const supplementalVocabulary = {
  "fast-food": [
    ["A menu", "The list of food and drinks available to order."], ["The cashier", "The employee who takes your order and payment."],
    ["A tray", "A flat object used to carry food and drinks."], ["A receipt", "The paper showing what you bought and paid."]
  ],
  hotel: [
    ["The lobby", "The main entrance and waiting area of a hotel."], ["The receptionist", "The employee who welcomes guests at the front desk."],
    ["A suitcase", "A travel case used for clothes and personal items."], ["The elevator", "The machine that carries guests between floors."]
  ],
  clothes: [
    ["A size", "The measurement category of a piece of clothing."], ["A price tag", "The label showing an item's price."],
    ["A cashier", "The employee who receives your payment."], ["A receipt", "Proof of purchase that may be needed for a return."]
  ],
  immigration: [
    ["A passport", "An official document used to identify you when traveling internationally."], ["A visa", "Official permission to enter or stay in a country."],
    ["A border officer", "The official who checks travelers entering a country."], ["Customs", "The area where goods entering a country may be inspected."]
  ],
  directions: [
    ["A map", "A visual guide showing streets, places, or rooms."], ["A platform", "The area where passengers wait for a train."],
    ["A ticket", "A document or digital pass that allows you to travel."], ["An escalator", "Moving stairs used inside stations, stores, and shopping centers."],
    ["The restroom", "A public toilet inside a store, station, or shopping center."], ["The information desk", "A counter where visitors can ask for directions and assistance."]
  ],
  pharmacy: [
    ["A pharmacist", "A healthcare professional who prepares and advises about medicine."], ["A prescription", "A doctor's written authorization for medicine."],
    ["Medicine", "A substance used to treat or prevent illness."], ["The dosage", "The amount of medicine to take at one time."]
  ],
  supermarket: [
    ["A shopping basket", "A small container carried while collecting groceries."], ["The checkout", "The area where customers pay for their shopping."],
    ["A barcode", "The printed lines scanned to identify a product and its price."], ["A receipt", "The paper listing the products and prices after payment."]
  ],
  "airport-check-in": [
    ["A ticket", "A document confirming that you purchased a flight."], ["A suitcase", "A travel case that may be checked or carried on board."],
    ["The check-in counter", "The airline desk where passengers check in and leave bags."], ["A baggage tag", "A label attached to checked luggage so it reaches the right destination."]
  ],
  souvenir: [
    ["A souvenir", "An object bought to remember a place or trip."], ["A market stall", "A small open shop or stand at a market."],
    ["Cash", "Money in the form of notes and coins."], ["A local craft", "An object traditionally made by people in the area."]
  ]
};

Object.entries(supplementalVocabulary).forEach(([key, additions]) => {
  situationTopics[key].vocabulary.push(...additions);
});

const challengeWords = {
  "fast-food": ["menu", "cashier", "tray", "receipt", "mustard"],
  hotel: ["lobby", "receptionist", "suitcase", "elevator", "passport"],
  clothes: ["size", "price tag", "cashier", "receipt", "fitting room"],
  immigration: ["passport", "visa", "border officer", "customs", "ticket"],
  directions: ["food court", "escalator", "map", "platform", "ticket"],
  pharmacy: ["pharmacist", "prescription", "medicine", "dosage", "receipt"],
  supermarket: ["shopping basket", "checkout", "barcode", "receipt", "aisle"],
  "airport-check-in": ["ticket", "suitcase", "check-in counter", "baggage tag", "passport"],
  souvenir: ["souvenir", "market stall", "cash", "local craft", "receipt"],
  restaurant: ["server", "wine list", "napkin", "service charge", "reservation"],
  "rental-car": ["car keys", "rental desk", "parking lot", "upgrade", "receipt"],
  taxi: ["driver", "destination", "traffic", "fare", "tip"],
  electronics: ["receipt", "price tag", "headphones", "charger", "cashier"],
  "phone-food": ["menu", "topping", "crust", "delivery fee", "receipt"],
  doctor: ["appointment", "insurance", "passport", "prescription", "clinic"],
  visa: ["passport", "application form", "embassy", "appointment", "decision"],
  exchange: ["currency", "rate board", "banknotes", "identification", "transaction"],
  airbnb: ["host", "guest", "apartment", "booking", "cleaning fee"]
  ,bar: ["bartender", "glass", "snacks", "receipt", "table"]
  ,"city-tour": ["tour guide", "camera", "ticket", "map", "souvenir"]
  ,"public-transit": ["platform", "fare", "driver", "route", "ticket machine"]
};

Object.entries(situationTopics).forEach(([key, topicData]) => {
  topicData.dialogues.forEach((dialogue, index) => {
    const extras = challengeWords[key].filter((word) => !dialogue.bank.includes(word));
    dialogue.bank.push(...extras.slice(index, index + 3));
    while (dialogue.bank.length < 8) {
      const next = extras.find((word) => !dialogue.bank.includes(word));
      if (!next) break;
      dialogue.bank.push(next);
    }
  });
});

const specialActivities = {
  "fast-food": {
    type: "menu", title: "Build an order from the overhead menu", note: "Interactive menu", intro: "Choose items from the fictional menu. Your order and total will appear on the customer display.",
    categories: [
      {name:"Burgers", items:[["Classic Burger",7.5],["Cheese Burger",8.5],["Chicken Burger",8],["Veggie Burger",7]]},
      {name:"Sides", items:[["Small Fries",3],["Large Fries",4.5],["Onion Rings",4],["Side Salad",4.5]]},
      {name:"Drinks & extras", items:[["Soft Drink",2.5],["Orange Juice",3],["Extra Ketchup",0.5],["Extra Cheese",1.5]]}
    ]
  },
  hotel: {
    type:"kiosk", title:"Use the hotel self-check-in kiosk", note:"Hotel kiosk", intro:"Complete the touchscreen check-in and collect the information you need for your stay.", finish:"Check-in complete. Your room is 508. Breakfast is on the second floor from 6:30 to 10:00.",
    steps:[
      {prompt:"How would you like to begin?", options:["Find my reservation","Make a new reservation"]},
      {prompt:"Select the document you will scan.", options:["Passport","National ID"]},
      {prompt:"Choose one room preference.", options:["Quiet room","High floor","Near the elevator"]},
      {prompt:"Would you like two room keys?", options:["Yes, two keys","No, one key"]}
    ]
  },
  clothes: {
    type:"products", title:"Explore the clothing collection", note:"6 store products", intro:"Select a product to reveal its price, available colors and sizes, stock information, and special offers.",
    products:[
      {icon:"&#128085;", name:"Classic T-shirt", price:"$18.00", facts:[["Colors","White, teal, black"],["Sizes","XS to XL"],["Stock","Available"]], offer:"Buy 3 and get 1 free"},
      {icon:"&#128086;", name:"Straight-leg jeans", price:"$46.00", facts:[["Colors","Light blue, dark blue"],["Sizes","28 to 38"],["Stock","Size 32 in dark blue is out of stock"]], offer:"Second pair 30% off"},
      {icon:"&#129509;", name:"Rain jacket", price:"$72.00", facts:[["Colors","Yellow, navy, green"],["Sizes","S to XXL"],["Stock","Only 2 yellow jackets left"]], offer:"Free reusable bag"},
      {icon:"&#128087;", name:"Summer dress", price:"$54.00", facts:[["Colors","Red, floral, black"],["Sizes","XS to L"],["Stock","Floral size M is out of stock"]], offer:"20% off today"},
      {icon:"&#128095;", name:"Walking shoes", price:"$68.00", facts:[["Colors","White, gray, burgundy"],["Sizes","US 5 to 11"],["Stock","Available"]], offer:"Buy shoes and get socks for $5"},
      {icon:"&#129506;", name:"Wool cap", price:"$24.00", facts:[["Colors","Cream, teal, burgundy"],["Size","One size"],["Stock","Cream is out of stock"]], offer:"Two caps for $40"}
    ]
  },
  immigration: {
    type:"roulette", title:"Immigration interview roulette", note:"12 interview questions", intro:"Click the button to receive a random border-control question. Answer aloud immediately, as in a real interview.",
    questions:["May I see your passport?","What is the purpose of your visit?","How long are you planning to stay?","Where will you be staying?","Are you traveling alone?","Who are you traveling with?","Do you have a return ticket?","What places are you planning to visit?","What do you do for a living?","How much money are you bringing for this trip?","Have you visited this country before?","Do you have anything to declare?"]
  },
  directions: {
    type:"ticket", title:"Buy a subway ticket", note:"Interactive ticket totem", intro:"Read your destination, select the correct fare area, choose a ticket, apply any citizen-card discount, and pay at the touchscreen.",
    areas:[
      {name:"Downtown", price:2.5, destinations:["Central Museum","Harbor Square","City Hall"]},
      {name:"Outer Suburbs", price:4, destinations:["International Airport","Lakeview Park","North Terminal"]},
      {name:"Neighboring Cities", price:7.5, destinations:["Greenfield","Oakridge","Seaside City"]}
    ],
    ticketTypes:[
      {name:"One-way", multiplier:1, description:"One journey"},
      {name:"Round-trip", multiplier:1.8, description:"Travel there and back"},
      {name:"Daily", multiplier:3, description:"Unlimited travel today"},
      {name:"Weekly", multiplier:12, description:"Unlimited travel for 7 days"}
    ],
    discount:0.15,
    payments:["Credit card","Cash","Cellphone payment"]
  },
  pharmacy: {
    type:"products", title:"Explore the pharmacy shelves", note:"6 pharmacy products", intro:"Select a product to read its price, format, stock status, and offer. This is language practice only; ask a pharmacist for medical guidance.",
    products:[
      {icon:"&#128138;", name:"Pain relief tablets", price:"$8.50", facts:[["Package","20 tablets"],["Options","Regular or extra strength"],["Stock","Regular strength available"]], offer:"Ask the pharmacist before choosing"},
      {icon:"&#129656;", name:"Adhesive bandages", price:"$5.20", facts:[["Package","30 assorted sizes"],["Colors","Skin tone or colorful"],["Stock","Available"]], offer:"Buy 2 boxes for $9"},
      {icon:"&#129514;", name:"Cough syrup", price:"$11.90", facts:[["Size","120 ml"],["Options","Adult or children's formula"],["Stock","Children's formula is out of stock"]], offer:"Ask the pharmacist which product is appropriate"},
      {icon:"&#127852;", name:"Throat lozenges", price:"$6.40", facts:[["Flavors","Honey, lemon, mint"],["Package","24 lozenges"],["Stock","Mint is out of stock"]], offer:"Second package 25% off"},
      {icon:"&#129524;", name:"Sunscreen", price:"$16.00", facts:[["Sizes","100 ml or 200 ml"],["Options","SPF 30 or SPF 50"],["Stock","Available"]], offer:"Travel-size bottle included"},
      {icon:"&#128203;", name:"Prescription medicine", price:"Price at the counter", facts:[["Requirement","A valid prescription"],["Pickup","Pharmacy counter only"],["Stock","Ask the pharmacist"]], offer:"Generic option may be available"}
    ]
  },
  supermarket: {
    type:"kiosk", title:"Use the supermarket self-checkout", note:"Self-checkout totem", intro:"Follow the English touchscreen instructions to scan groceries, choose a bag, and pay.", finish:"Payment approved. Please take your groceries and receipt. Thank you for shopping with us!",
    steps:[
      {prompt:"Welcome. What would you like to do?", options:["Start scanning items","Enter a loyalty card"]},
      {prompt:"Scan the barcode. Which item appears on the screen?", options:["A loaf of bread - $3.20","A carton of milk - $2.80","Apples - $4.10"]},
      {prompt:"Would you like a bag?", options:["No, I brought my own","Yes, add one bag - $0.20"]},
      {prompt:"Select a payment method.", options:["Credit or debit card","Cash","Mobile payment"]}
    ]
  },
  "airport-check-in": {
    type:"kiosk", title:"Use the airline check-in totem", note:"Airport kiosk", intro:"Complete an English self-check-in sequence and generate a fictional boarding pass.", finish:"Check-in successful. Flight IYE 482 departs from Gate 16. Boarding begins at 8:20.",
    steps:[
      {prompt:"How would you like to find your booking?", options:["Scan my passport","Enter my booking reference"]},
      {prompt:"Are you checking any bags?", options:["No, carry-on only","Yes, one suitcase","Yes, two suitcases"]},
      {prompt:"Select your seat preference.", options:["Window seat","Aisle seat","No preference"]},
      {prompt:"How would you like your boarding pass?", options:["Print boarding pass","Send to my phone"]}
    ]
  },
  souvenir: {
    type:"products", title:"Explore the souvenir market", note:"6 market products", intro:"Select a souvenir to reveal its asking price, available styles, stock information, and possible bundle offer before bargaining.",
    products:[
      {icon:"&#127994;", name:"Handmade bowl", price:"$42.00", facts:[["Material","Painted ceramic"],["Colors","Blue, green, terracotta"],["Stock","Green is out of stock"]], offer:"Two bowls for $75"},
      {icon:"&#129506;", name:"Woven cap", price:"$24.00", facts:[["Material","Local cotton"],["Colors","Six patterns available"],["Stock","Available"]], offer:"Buy 2 caps for $40"},
      {icon:"&#128444;", name:"Small painting", price:"$55.00", facts:[["Style","Street or landscape"],["Size","20 x 25 cm"],["Stock","Three originals left"]], offer:"Frame included"},
      {icon:"&#128273;", name:"City key ring", price:"$6.00", facts:[["Material","Metal or wood"],["Styles","Landmark, flag, map"],["Stock","Available"]], offer:"Buy 3 and get 1 free"},
      {icon:"&#128214;", name:"Travel notebook", price:"$14.00", facts:[["Cover","Leather-look or fabric"],["Colors","Brown, teal, burgundy"],["Stock","Teal is out of stock"]], offer:"Free name engraving"},
      {icon:"&#128508;", name:"Wooden figurine", price:"$38.00", facts:[["Material","Hand-carved local wood"],["Sizes","Small or medium"],["Stock","Only 2 medium figures left"]], offer:"Cash price: $34"}
    ]
  },
  restaurant: {
    type:"menu", title:"Explore the restaurant menu", note:"Full-service menu", intro:"Read the description of each dish or beverage, build a complete table-service order, and review the total.",
    categories:[
      {name:"Starters", items:[["Tomato Bruschetta",9,"Toasted bread topped with tomato, basil, garlic, and olive oil."],["Pumpkin Soup",8,"Creamy roasted pumpkin soup served with herb croutons."],["Garden Salad",10,"Mixed greens, cucumber, tomato, carrots, and lemon dressing."]]},
      {name:"Main courses", items:[["Grilled Salmon",26,"Salmon fillet with roasted vegetables and lemon butter."],["Mushroom Risotto",22,"Creamy Italian rice with mushrooms, parmesan, and fresh herbs."],["Roast Chicken",24,"Herb-roasted chicken with mashed potatoes and seasonal vegetables."],["Sirloin Steak",29,"Grilled beef served with fries and peppercorn sauce."]]},
      {name:"Desserts & beverages", items:[["Chocolate Mousse",9,"Light chocolate dessert topped with fresh berries."],["Apple Tart",10,"Warm apple pastry served with vanilla ice cream."],["Sparkling Water",5,"Chilled mineral water with bubbles, 750 ml."],["Fresh Lemonade",6,"Homemade lemonade with mint, served over ice."]]}
    ]
  },
  "rental-car": {
    type:"kiosk", title:"Pick up your app reservation", note:"Rental-car pickup totem", intro:"Use the self-service screen to retrieve a booking made online, verify the driver, confirm rental details, and receive pickup instructions.", finish:"Pickup confirmed. Your blue automatic compact car is in Space B24. Inspect it in the app before leaving. The keys are in the center console.",
    steps:[
      {prompt:"How would you like to find your reservation?", options:["Scan the QR code from the app","Enter my booking reference"]},
      {prompt:"Verify the main driver's document.", options:["Scan driver's license","Use saved verified license"]},
      {prompt:"Review your protection choice.", options:["Keep full insurance coverage","Change to basic coverage"]},
      {prompt:"Confirm the fuel policy shown in your booking.", options:["Full-to-full fuel policy","Prepaid fuel option"]},
      {prompt:"Would you like to add another authorized driver?", options:["No additional driver","Add a driver at the counter"]}
    ]
  },
  taxi: {
    type:"roulette", title:"Questions from your driver", note:"12 real ride questions", intro:"Click for a random question you might hear during an Uber or taxi ride. Answer promptly and naturally.",
    questions:["Is this ride for you?","Where are you headed today?","Is this pickup point convenient for you?","Would you like me to put your luggage in the trunk?","Do you prefer the highway or the downtown route?","Are you in a hurry?","Is the air conditioning comfortable?","Would you like the window open or closed?","Is this your first time visiting the city?","Are you here for work or on vacation?","Would you like me to drop you off at the main entrance?","Will you be paying by card or cash?"]
  },
  electronics: {
    type:"products", title:"Explore the electronics department", note:"6 technology products", intro:"Select a product to compare its price, colors, specifications, stock status, warranty, and special offer.",
    products:[
      {icon:"&#128187;", name:"Everyday laptop", price:"$749.00", facts:[["Specifications","16 GB RAM • 512 GB storage"],["Colors","Silver or dark blue"],["Stock","Silver is available"]], offer:"Two-year warranty included"},
      {icon:"&#128241;", name:"5G smartphone", price:"$599.00", facts:[["Storage","128 GB or 256 GB"],["Colors","Black, white, green"],["Stock","Green 256 GB is out of stock"]], offer:"Free protective case"},
      {icon:"&#128190;", name:"Student tablet", price:"$389.00", facts:[["Screen","11-inch display"],["Storage","128 GB"],["Stock","Available"]], offer:"Keyboard cover 30% off"},
      {icon:"&#127911;", name:"Wireless headphones", price:"$129.00", facts:[["Battery","Up to 30 hours"],["Colors","Black, cream, teal"],["Stock","Only 3 teal units left"]], offer:"Second pair 25% off"},
      {icon:"&#8986;", name:"Smartwatch", price:"$219.00", facts:[["Sizes","40 mm or 44 mm"],["Colors","Black, silver, rose"],["Stock","44 mm silver is out of stock"]], offer:"Extra watch band included"},
      {icon:"&#128268;", name:"Universal charger", price:"$39.00", facts:[["Ports","Two USB-C ports"],["Compatibility","Phones, tablets, laptops"],["Stock","Available"]], offer:"Travel adapter included"}
    ]
  },
  "phone-food": {
    type:"menu", title:"Choose from the pizza delivery menu", note:"Pizza phone menu", intro:"Read each description, build the order you want to request by phone, and use the total to confirm the call.", brand:"BELLA PIZZA", menuTitle:"DELIVERY MENU",
    categories:[
      {name:"Pizzas", items:[["Margherita",15,"Tomato sauce, mozzarella, basil, and olive oil."],["Pepperoni",18,"Tomato sauce, mozzarella, and sliced pepperoni."],["Garden Vegetable",17,"Mozzarella, peppers, mushrooms, onions, olives, and tomato."],["Chicken Barbecue",20,"Chicken, mozzarella, red onion, and barbecue sauce."]]},
      {name:"Sides", items:[["Garlic Bread",6,"Oven-baked bread with garlic butter and herbs."],["Caesar Salad",9,"Lettuce, parmesan, croutons, and Caesar dressing."],["Mozzarella Sticks",8,"Six breaded mozzarella sticks with tomato sauce."]]},
      {name:"Drinks & desserts", items:[["Sparkling Water",4,"Chilled 750 ml bottle of sparkling mineral water."],["Soft Drink",4,"Choose cola, lemon-lime, or orange, 1 liter."],["Chocolate Brownie",7,"Warm chocolate brownie cut into four pieces."],["Vanilla Cheesecake",8,"Creamy vanilla cheesecake with berry sauce."]]}
    ]
  },
  doctor: {
    type:"roulette", title:"Questions from the doctor", note:"12 appointment questions", intro:"Click for a random question you may hear during an appointment abroad. Practice clear answers; this activity does not provide medical advice.",
    questions:["What brings you in today?","What symptoms are you experiencing?","When did the symptoms begin?","Have the symptoms become better or worse?","Do you have a fever?","On a scale from one to ten, how severe is the pain?","Are you allergic to any medicine?","Are you currently taking any medicine?","Have you had this problem before?","Do you have any relevant medical conditions?","May I see your international health-insurance card?","Do you know your insurance policy number?"]
  },
  visa: {
    type:"roulette", title:"Visa interview practice", note:"12 interview questions", intro:"Receive a random question commonly asked during a visa interview. Answer truthfully, clearly, and with details that match your own application.",
    screenLabel:"Your visa interview question", buttonLabel:"Get a Visa Question",
    questions:["Why do you want to visit this country?","What is the purpose of your trip?","How long do you intend to stay?","Where will you stay during your visit?","Who will pay for your trip?","What do you do for work or study?","How does this trip relate to your work or education?","Do you have relatives or friends in this country?","What ties do you have to your home country?","Have you traveled internationally before?","What will you do when you return home?","Which supporting documents did you bring today?"]
  },
  exchange: {
    type:"exchange", title:"Use the currency-exchange calculator", note:"Interactive exchange desk", intro:"Choose whether to buy or sell foreign currency, compare the fictional USD counter rates, enter an amount, and review the transaction before continuing.",
    fee:4,
    currencies:[
      {code:"EUR", name:"Euro", unit:1, buy:1.12, sell:1.18},
      {code:"GBP", name:"British pound", unit:1, buy:1.29, sell:1.36},
      {code:"CAD", name:"Canadian dollar", unit:1, buy:0.69, sell:0.75},
      {code:"BRL", name:"Brazilian real", unit:1, buy:0.17, sell:0.20},
      {code:"JPY", name:"Japanese yen", unit:100, buy:0.64, sell:0.70}
    ]
  },
  airbnb: {
    type:"roulette", title:"Messages from your Airbnb host", note:"12 host questions and comments", intro:"Receive a random message you might hear during check-in, a problem, local recommendations, or check-out. Respond naturally as the guest.",
    screenLabel:"Your host says", buttonLabel:"Get a Host Message", responsePrompt:"Respond naturally as the guest in complete sentences.",
    questions:["Did you find the apartment easily?","The key is inside the lockbox beside the entrance.","Please let me know when you have completed self check-in.","Would you like recommendations for restaurants nearby?","The quiet hours begin at ten in the evening.","Is everything in the apartment working correctly?","Can you describe the problem with the shower?","I can send someone to inspect the air conditioner this afternoon.","Would tomorrow morning be a convenient time for the repair?","Please take the garbage to the bins behind the building.","Check-out is at eleven. Will you need extra time?","Please leave the keys in the lockbox when you depart."]
  },
  bar: {
    type:"menu", title:"Explore the bar menu", note:"Interactive bar menu", intro:"Read the descriptions, select drinks and bar snacks, and review your fictional tab.", brand:"THE TRAVELER'S BAR", menuTitle:"DRINKS & BITES",
    categories:[
      {name:"Non-alcoholic", items:[["Citrus Cooler",7,"Orange, lime, mint, and sparkling water."],["Berry Mocktail",8,"Mixed berries, lemon, and soda."],["Ginger Lemonade",6,"Fresh lemon, ginger syrup, and still water."]] },
      {name:"Drinks", items:[["Local Lager",8,"A light draft beer with a crisp finish."],["Pale Ale",9,"A hoppy draft beer with citrus notes."],["House Red Wine",11,"A medium-bodied red wine served by the glass."]] },
      {name:"Bar snacks", items:[["Loaded Nachos",13,"Corn chips, cheese, beans, salsa, and sour cream."],["Crispy Onion Rings",9,"Battered onion rings with barbecue sauce."],["Olives & Flatbread",10,"Marinated olives with warm herb flatbread."]] }
    ]
  },
  "city-tour": {
    type:"itinerary", title:"Build a New York City itinerary", note:"5 interactive stops", intro:"Open each stop in order and follow a realistic one-day route through central Manhattan.",
    stops:[
      {time:"9:00", name:"Times Square", icon:"&#127917;", area:"Midtown", detail:"Meet beside the red steps, notice the famous billboards, and practice asking where the tour begins.", travel:"Start here"},
      {time:"10:00", name:"Bryant Park & Library", icon:"&#128218;", area:"Midtown", detail:"Walk through Bryant Park and see the New York Public Library's main building.", travel:"10-minute walk"},
      {time:"11:15", name:"Grand Central Terminal", icon:"&#128646;", area:"East Midtown", detail:"Explore the Main Concourse, find the information booth, and look at the ceiling mural.", travel:"10-minute walk"},
      {time:"1:30", name:"Rockefeller Center", icon:"&#127963;", area:"Midtown", detail:"Stop for lunch nearby, see the plaza, and ask about observation-deck tickets.", travel:"15-minute walk"},
      {time:"3:30", name:"Central Park South", icon:"&#127795;", area:"Uptown edge", detail:"Finish with a walk near the Pond and ask a local to take a group photo.", travel:"15 minutes by subway"}
    ]
  },
  "public-transit": {
    type:"transit-board", title:"Choose the right Vienna train", note:"Station timetable challenge", intro:"Choose where you are, read your destination, and select the departure with the correct line, direction, and time. Open the authentic Vienna map when you need a closer look.",
    stations:[
      {name:"Stephansplatz", goal:"You want to go to Praterstern.", services:[
        {time:"10:04",line:"U1",direction:"Leopoldau",platform:"1",correct:true},{time:"10:06",line:"U1",direction:"Reumannplatz",platform:"2"},
        {time:"10:08",line:"U3",direction:"Ottakring",platform:"3"},{time:"10:10",line:"U3",direction:"Simmering",platform:"4"}
      ]},
      {name:"Karlsplatz", goal:"You want to go to Schönbrunn.", services:[
        {time:"10:03",line:"U1",direction:"Leopoldau",platform:"1"},{time:"10:05",line:"U1",direction:"Reumannplatz",platform:"2"},
        {time:"10:07",line:"U2",direction:"Aspernstraße",platform:"3"},{time:"10:09",line:"U4",direction:"Hütteldorf",platform:"4",correct:true},{time:"10:11",line:"U4",direction:"Heiligenstadt",platform:"5"}
      ]},
      {name:"Praterstern", goal:"You want to go to Donauinsel.", services:[
        {time:"10:02",line:"U1",direction:"Leopoldau",platform:"1",correct:true},{time:"10:04",line:"U1",direction:"Reumannplatz",platform:"2"},
        {time:"10:06",line:"U2",direction:"Aspernstraße",platform:"3"},{time:"10:08",line:"U2",direction:"Karlsplatz",platform:"4"}
      ]},
      {name:"Schottenring", goal:"You want to go to Schwedenplatz.", services:[
        {time:"10:01",line:"U2",direction:"Aspernstraße",platform:"1"},{time:"10:04",line:"U2",direction:"Karlsplatz",platform:"2"},
        {time:"10:06",line:"U4",direction:"Hütteldorf",platform:"3",correct:true},{time:"10:09",line:"U4",direction:"Heiligenstadt",platform:"4"}
      ]},
      {name:"Landstraße", goal:"You want to go to Simmering.", services:[
        {time:"10:03",line:"U3",direction:"Ottakring",platform:"1"},{time:"10:05",line:"U3",direction:"Simmering",platform:"2",correct:true},
        {time:"10:07",line:"U4",direction:"Hütteldorf",platform:"3"},{time:"10:10",line:"U4",direction:"Heiligenstadt",platform:"4"}
      ]},
      {name:"Westbahnhof", goal:"You want to go to Ottakring.", services:[
        {time:"10:02",line:"U3",direction:"Ottakring",platform:"1",correct:true},{time:"10:05",line:"U3",direction:"Simmering",platform:"2"},
        {time:"10:07",line:"U6",direction:"Floridsdorf",platform:"3"},{time:"10:09",line:"U6",direction:"Siebenhirten",platform:"4"}
      ]}
    ]
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

  const special = specialActivities[topicKey];
  const specialTitle = practiceRoot.querySelector("[data-special-title]");
  const specialNote = practiceRoot.querySelector("[data-special-note]");
  const specialIntro = practiceRoot.querySelector("[data-special-intro]");
  const specialStage = practiceRoot.querySelector("[data-special-stage]");
  const specialFeedback = practiceRoot.querySelector("[data-special-feedback]");
  specialTitle.textContent = special.title;
  specialNote.textContent = special.note;
  specialIntro.textContent = special.intro;

  const renderRoulette = () => {
    let previousQuestion = -1;
    specialStage.innerHTML = `<div class="roulette-machine"><div class="roulette-dial" aria-hidden="true"><span>?</span></div><div class="roulette-content"><p class="special-screen-label">${special.screenLabel || "Your interview question"}</p><p class="roulette-question" data-roulette-question>Click the button when the student is ready.</p><button class="activity-button special-primary-button" type="button" data-spin-question>${special.buttonLabel || "Get a Random Question"}</button></div></div>`;
    const questionText = specialStage.querySelector("[data-roulette-question]");
    specialStage.querySelector("[data-spin-question]").addEventListener("click", () => {
      let index = Math.floor(Math.random() * special.questions.length);
      while (special.questions.length > 1 && index === previousQuestion) index = Math.floor(Math.random() * special.questions.length);
      previousQuestion = index;
      questionText.classList.remove("is-revealing");
      void questionText.offsetWidth;
      questionText.textContent = special.questions[index];
      questionText.classList.add("is-revealing");
      specialFeedback.innerHTML = `<strong>Prompt ${index + 1} of ${special.questions.length} selected.</strong> ${special.responsePrompt || "Answer naturally in complete sentences."}`;
    });
  };

  const renderExchange = () => {
    let mode = "buy";
    let selectedCurrency = special.currencies[0];
    const money = (amount) => `$${amount.toFixed(2)}`;
    const rateUnit = (currency) => currency.unit === 1 ? `1 ${currency.code}` : `${currency.unit} ${currency.code}`;
    specialStage.innerHTML = `<div class="exchange-desk"><div class="exchange-rate-board"><div class="exchange-board-heading"><div><span>TRAVEL MONEY</span><strong>Today's counter rates</strong></div><small>Practice rates • USD base</small></div><div class="exchange-rate-head"><span>Currency</span><span>We buy</span><span>We sell</span></div><div class="exchange-rate-list">${special.currencies.map((currency, index) => `<button type="button" class="${index === 0 ? "is-selected" : ""}" data-exchange-currency="${currency.code}"><span><strong>${currency.code}</strong><small>${currency.name}<br>per ${rateUnit(currency)}</small></span><b>${money(currency.buy)}</b><b>${money(currency.sell)}</b></button>`).join("")}</div></div><div class="exchange-calculator"><p class="special-screen-label">Currency calculator</p><div class="exchange-mode" role="group" aria-label="Transaction type"><button type="button" class="is-selected" data-exchange-mode="buy">Buy foreign currency</button><button type="button" data-exchange-mode="sell">Sell foreign currency</button></div><label class="exchange-amount-label"><span data-exchange-amount-label>How many EUR would you like to buy?</span><input type="number" min="1" step="1" value="100" data-exchange-amount></label><div class="exchange-selection"><span>Selected currency</span><strong data-exchange-selected>EUR • Euro</strong><small data-exchange-rate>Desk sells at $1.18 per 1 EUR</small></div><button class="activity-button special-primary-button" type="button" data-calculate-exchange>Calculate Exchange</button><div class="exchange-result" data-exchange-result><p>Choose a transaction and enter an amount.</p></div></div></div>`;
    const amountInput = specialStage.querySelector("[data-exchange-amount]");
    const amountLabel = specialStage.querySelector("[data-exchange-amount-label]");
    const selectedLabel = specialStage.querySelector("[data-exchange-selected]");
    const rateLabel = specialStage.querySelector("[data-exchange-rate]");
    const result = specialStage.querySelector("[data-exchange-result]");
    const updateSelection = () => {
      amountLabel.textContent = `How many ${selectedCurrency.code} would you like to ${mode}?`;
      selectedLabel.textContent = `${selectedCurrency.code} • ${selectedCurrency.name}`;
      rateLabel.textContent = mode === "buy"
        ? `Desk sells at ${money(selectedCurrency.sell)} per ${rateUnit(selectedCurrency)}`
        : `Desk buys at ${money(selectedCurrency.buy)} per ${rateUnit(selectedCurrency)}`;
      result.innerHTML = "<p>Enter an amount, then calculate the exchange.</p>";
    };
    specialStage.querySelectorAll("[data-exchange-currency]").forEach((button) => button.addEventListener("click", () => {
      selectedCurrency = special.currencies.find((currency) => currency.code === button.dataset.exchangeCurrency);
      specialStage.querySelectorAll("[data-exchange-currency]").forEach((item) => item.classList.toggle("is-selected", item === button));
      updateSelection();
    }));
    specialStage.querySelectorAll("[data-exchange-mode]").forEach((button) => button.addEventListener("click", () => {
      mode = button.dataset.exchangeMode;
      specialStage.querySelectorAll("[data-exchange-mode]").forEach((item) => item.classList.toggle("is-selected", item === button));
      updateSelection();
    }));
    specialStage.querySelector("[data-calculate-exchange]").addEventListener("click", () => {
      const amount = Number(amountInput.value);
      if (!Number.isFinite(amount) || amount <= 0) {
        result.innerHTML = "<p class=\"exchange-error\">Enter an amount greater than zero.</p>";
        specialFeedback.innerHTML = "<strong>Enter a valid amount.</strong> Then calculate the exchange again.";
        return;
      }
      const converted = (amount / selectedCurrency.unit) * (mode === "buy" ? selectedCurrency.sell : selectedCurrency.buy);
      const finalAmount = mode === "buy" ? converted + special.fee : Math.max(0, converted - special.fee);
      result.innerHTML = mode === "buy"
        ? `<p class="special-screen-label">You buy</p><h3>${amount.toLocaleString()} ${selectedCurrency.code}</h3><dl><div><dt>Currency cost</dt><dd>${money(converted)}</dd></div><div><dt>Service fee</dt><dd>${money(special.fee)}</dd></div><div><dt>You pay</dt><dd>${money(finalAmount)} USD</dd></div></dl>`
        : `<p class="special-screen-label">You sell</p><h3>${amount.toLocaleString()} ${selectedCurrency.code}</h3><dl><div><dt>Exchange value</dt><dd>${money(converted)}</dd></div><div><dt>Service fee</dt><dd>-${money(special.fee)}</dd></div><div><dt>You receive</dt><dd>${money(finalAmount)} USD</dd></div></dl>`;
      specialFeedback.innerHTML = `<strong>Calculation complete.</strong> Practice asking: “How much will I ${mode === "buy" ? "pay" : "receive"} after the fee?”`;
    });
  };

  const renderKiosk = () => {
    let stepIndex = 0;
    const selections = [];
    specialStage.innerHTML = `<div class="practice-kiosk"><div class="kiosk-topbar"><span>Improve Your English</span><span>EN</span></div><div class="kiosk-screen" data-kiosk-screen></div></div>`;
    const screen = specialStage.querySelector("[data-kiosk-screen]");
    const showStep = () => {
      if (stepIndex >= special.steps.length) {
        screen.innerHTML = `<div class="kiosk-success-icon">&#10003;</div><p class="special-screen-label">Transaction complete</p><h3>${special.finish}</h3><div class="kiosk-summary">${selections.map((selection, index) => `<p><span>${index + 1}</span>${selection}</p>`).join("")}</div><button class="activity-button secondary-button" type="button" data-restart-kiosk>Start Again</button>`;
        specialFeedback.innerHTML = "<strong>Simulation complete!</strong> Read the final information aloud and explain your choices.";
        screen.querySelector("[data-restart-kiosk]").addEventListener("click", () => { stepIndex = 0; selections.length = 0; showStep(); });
        return;
      }
      const step = special.steps[stepIndex];
      screen.innerHTML = `<div class="kiosk-progress"><span style="width:${((stepIndex + 1) / special.steps.length) * 100}%"></span></div><p class="special-screen-label">Step ${stepIndex + 1} of ${special.steps.length}</p><h3>${step.prompt}</h3><div class="kiosk-options">${step.options.map((option) => `<button type="button">${option}</button>`).join("")}</div>`;
      screen.querySelectorAll(".kiosk-options button").forEach((button) => button.addEventListener("click", () => {
        selections.push(button.textContent);
        stepIndex += 1;
        showStep();
      }));
      specialFeedback.textContent = "Read the screen and select the option that matches your situation.";
    };
    showStep();
  };

  const renderMenu = () => {
    const order = [];
    specialStage.innerHTML = `<div class="overhead-menu"><div class="menu-brand"><span>${special.brand || (topicKey === "restaurant" ? "THE TRAVELER'S TABLE" : "ROUTE 66")}</span><strong>${special.menuTitle || (topicKey === "restaurant" ? "DINNER MENU" : "BURGERS &amp; MORE")}</strong></div><div class="menu-category-grid">${special.categories.map((category) => `<section><h3>${category.name}</h3>${category.items.map(([name, price, description]) => `<button type="button" data-item="${name}" data-price="${price}"><span><strong>${name}</strong>${description ? `<small>${description}</small>` : ""}</span><b>$${price.toFixed(2)}</b></button>`).join("")}</section>`).join("")}</div></div><aside class="order-display"><p class="special-screen-label">Your order</p><div data-order-lines><p class="empty-order">Choose an item from the menu.</p></div><div class="order-total"><span>Total</span><strong data-order-total>$0.00</strong></div><button class="activity-button secondary-button" type="button" data-clear-order>Clear Order</button></aside>`;
    const lines = specialStage.querySelector("[data-order-lines]");
    const total = specialStage.querySelector("[data-order-total]");
    const updateOrder = () => {
      lines.innerHTML = order.length ? order.map((item, index) => `<button type="button" data-remove-item="${index}"><span>${item.name}</span><b>$${item.price.toFixed(2)}</b><small>remove</small></button>`).join("") : `<p class="empty-order">Choose an item from the menu.</p>`;
      total.textContent = `$${order.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`;
      lines.querySelectorAll("[data-remove-item]").forEach((button) => button.addEventListener("click", () => { order.splice(Number(button.dataset.removeItem), 1); updateOrder(); }));
      specialFeedback.innerHTML = order.length ? `<strong>${order.length} item${order.length === 1 ? "" : "s"} selected.</strong> Practice ordering everything in one natural sentence.` : "Build an order by selecting items from the overhead menu.";
    };
    specialStage.querySelectorAll("[data-item]").forEach((button) => button.addEventListener("click", () => { order.push({name:button.dataset.item, price:Number(button.dataset.price)}); updateOrder(); }));
    specialStage.querySelector("[data-clear-order]").addEventListener("click", () => { order.length = 0; updateOrder(); });
  };

  const renderTicket = () => {
    const allDestinations = special.areas.flatMap((area) => area.destinations.map((destination) => ({destination, area})));
    let journey = allDestinations[Math.floor(Math.random() * allDestinations.length)];
    let selectedType = null;
    let hasCitizenCard = false;
    let selectedPayment = "";
    let phase = "area";
    const money = (amount) => `$${amount.toFixed(2)}`;
    const getTotal = () => {
      const subtotal = journey.area.price * selectedType.multiplier;
      return {subtotal, discount:hasCitizenCard ? subtotal * special.discount : 0, total:subtotal - (hasCitizenCard ? subtotal * special.discount : 0)};
    };
    specialStage.innerHTML = `<div class="ticket-machine"><div class="ticket-machine-top"><span class="ticket-network-mark">M</span><div><strong>METRO TICKETS</strong><small>English / EN</small></div><span data-ticket-clock>OPEN</span></div><div class="ticket-machine-screen" data-ticket-screen></div></div>`;
    const screen = specialStage.querySelector("[data-ticket-screen]");
    const progress = (active) => `<div class="ticket-progress">${["Area","Ticket","Discount","Payment","Review"].map((label, index) => `<span class="${index <= active ? "is-active" : ""}"><b>${index + 1}</b>${label}</span>`).join("")}</div>`;
    const showArea = () => {
      screen.innerHTML = `${progress(0)}<div class="ticket-destination"><p class="special-screen-label">Your destination</p><h3>${journey.destination}</h3><p>Which fare area is this destination in?</p></div><div class="fare-area-grid">${special.areas.map((area) => `<button type="button" data-area="${area.name}"><strong>${area.name}</strong><span>One-way from ${money(area.price)}</span><small>${area.destinations.join(" • ")}</small></button>`).join("")}</div><button class="ticket-new-destination" type="button" data-new-destination>Choose another destination</button>`;
      screen.querySelectorAll("[data-area]").forEach((button) => button.addEventListener("click", () => {
        if (button.dataset.area !== journey.area.name) {
          button.classList.add("is-wrong");
          specialFeedback.innerHTML = `<strong>That is not the correct area.</strong> Look for ${journey.destination} in the destination lists and try again.`;
          return;
        }
        button.classList.add("is-correct");
        specialFeedback.innerHTML = `<strong>Correct!</strong> ${journey.destination} is in the ${journey.area.name} area.`;
        window.setTimeout(showTicketType, 350);
      }));
      screen.querySelector("[data-new-destination]").addEventListener("click", () => {
        const previous = journey.destination;
        do { journey = allDestinations[Math.floor(Math.random() * allDestinations.length)]; } while (journey.destination === previous);
        showArea();
      });
    };
    const showTicketType = () => {
      screen.innerHTML = `${progress(1)}<p class="special-screen-label">Destination: ${journey.destination} • ${journey.area.name}</p><h3 class="ticket-screen-title">Select a ticket type</h3><div class="ticket-type-grid">${special.ticketTypes.map((type, index) => `<button type="button" data-ticket-type="${index}"><strong>${type.name}</strong><span>${type.description}</span><b>${money(journey.area.price * type.multiplier)}</b></button>`).join("")}</div><button class="ticket-back-button" type="button" data-ticket-back>Back to areas</button>`;
      screen.querySelectorAll("[data-ticket-type]").forEach((button) => button.addEventListener("click", () => { selectedType = special.ticketTypes[Number(button.dataset.ticketType)]; showDiscount(); }));
      screen.querySelector("[data-ticket-back]").addEventListener("click", showArea);
    };
    const showDiscount = () => {
      screen.innerHTML = `${progress(2)}<div class="citizen-card-screen"><span class="citizen-card-icon" aria-hidden="true">&#128179;</span><p class="special-screen-label">Discount card</p><h3>Do you have a City Citizen Card?</h3><p>Cardholders receive 15% off this ticket.</p><div class="ticket-choice-row"><button type="button" data-card="yes">Yes, I have a card</button><button type="button" data-card="no">No, continue without it</button></div></div>`;
      screen.querySelectorAll("[data-card]").forEach((button) => button.addEventListener("click", () => { hasCitizenCard = button.dataset.card === "yes"; showPayment(); }));
    };
    const showPayment = () => {
      const amounts = getTotal();
      screen.innerHTML = `${progress(3)}<p class="special-screen-label">Amount due: ${money(amounts.total)}</p><h3 class="ticket-screen-title">How would you like to pay?</h3><div class="payment-method-grid">${special.payments.map((payment) => `<button type="button" data-payment="${payment}"><span aria-hidden="true">${payment === "Cash" ? "&#128181;" : payment === "Cellphone payment" ? "&#128241;" : "&#128179;"}</span><strong>${payment}</strong></button>`).join("")}</div>`;
      screen.querySelectorAll("[data-payment]").forEach((button) => button.addEventListener("click", () => { selectedPayment = button.dataset.payment; showReview(); }));
    };
    const showReview = () => {
      const amounts = getTotal();
      screen.innerHTML = `${progress(4)}<div class="ticket-review"><p class="special-screen-label">Review your purchase</p><h3>${selectedType.name} ticket to ${journey.destination}</h3><dl><div><dt>Fare area</dt><dd>${journey.area.name}</dd></div><div><dt>Ticket price</dt><dd>${money(amounts.subtotal)}</dd></div><div><dt>Citizen Card discount</dt><dd>${hasCitizenCard ? `-${money(amounts.discount)}` : "Not applied"}</dd></div><div><dt>Payment</dt><dd>${selectedPayment}</dd></div><div class="ticket-review-total"><dt>Total</dt><dd>${money(amounts.total)}</dd></div></dl><button class="activity-button special-primary-button" type="button" data-confirm-ticket>Confirm and Pay</button></div>`;
      screen.querySelector("[data-confirm-ticket]").addEventListener("click", showReceipt);
    };
    const showReceipt = () => {
      const amounts = getTotal();
      screen.innerHTML = `<div class="ticket-complete"><div class="kiosk-success-icon">&#10003;</div><p class="special-screen-label">Payment approved</p><h3>Your ${selectedType.name.toLowerCase()} ticket is ready.</h3><div class="printed-ticket"><span>METRO</span><strong>${journey.destination}</strong><small>${journey.area.name} • ${selectedType.name}</small><b>${money(amounts.total)}</b></div><button class="activity-button secondary-button" type="button" data-new-ticket>Buy Another Ticket</button></div>`;
      specialFeedback.innerHTML = "<strong>Purchase complete!</strong> Read the ticket information aloud and explain how you paid.";
      screen.querySelector("[data-new-ticket]").addEventListener("click", () => {
        selectedType = null; hasCitizenCard = false; selectedPayment = ""; phase = "area";
        journey = allDestinations[Math.floor(Math.random() * allDestinations.length)];
        showArea();
      });
    };
    showArea();
  };

  const renderRoutes = () => {
    const groups = [...new Set(special.routes.map((route) => route.group))];
    specialStage.innerHTML = `<div class="route-totem"><div class="route-sidebar"><p class="special-screen-label">Choose an area</p>${groups.map((group, index) => `<button type="button" class="${index === 0 ? "is-active" : ""}" data-route-group="${group}">${group}</button>`).join("")}</div><div class="route-main"><p class="special-screen-label">Select a destination</p><div class="route-destinations" data-route-destinations></div><article class="route-result" data-route-result><span aria-hidden="true">&#128205;</span><p>Your directions will appear here.</p></article></div></div>`;
    const destinations = specialStage.querySelector("[data-route-destinations]");
    const result = specialStage.querySelector("[data-route-result]");
    const showGroup = (group) => {
      destinations.innerHTML = special.routes.filter((route) => route.group === group).map((route) => `<button type="button" data-route-label="${route.label}">${route.label}</button>`).join("");
      destinations.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
        const route = special.routes.find((item) => item.label === button.dataset.routeLabel);
        result.innerHTML = `<span aria-hidden="true">&#128205;</span><div><h3>${route.label}</h3><p>${route.directions}</p><button class="listen-expression-button" type="button" data-listen-route>&#128266; Listen</button></div>`;
        result.querySelector("[data-listen-route]").addEventListener("click", (event) => speakExpression(route.directions, event.currentTarget));
        specialFeedback.innerHTML = `<strong>Route selected.</strong> Read or listen to the directions, then repeat them without looking.`;
      }));
    };
    specialStage.querySelectorAll("[data-route-group]").forEach((button) => button.addEventListener("click", () => {
      specialStage.querySelectorAll("[data-route-group]").forEach((item) => item.classList.toggle("is-active", item === button));
      showGroup(button.dataset.routeGroup);
      result.innerHTML = `<span aria-hidden="true">&#128205;</span><p>Your directions will appear here.</p>`;
    }));
    showGroup(groups[0]);
  };

  const renderItinerary = () => {
    let activeStop = 0;
    specialStage.innerHTML = `<div class="city-itinerary"><div class="itinerary-route" data-itinerary-route></div><article class="itinerary-detail" data-itinerary-detail></article></div>`;
    const route = specialStage.querySelector("[data-itinerary-route]");
    const detail = specialStage.querySelector("[data-itinerary-detail]");
    const showStop = (index) => {
      activeStop = index;
      const stop = special.stops[index];
      route.innerHTML = special.stops.map((item, itemIndex) => `<button type="button" class="${itemIndex === activeStop ? "is-active" : ""} ${itemIndex < activeStop ? "is-visited" : ""}" data-itinerary-stop="${itemIndex}"><span>${itemIndex + 1}</span><b>${item.time}</b><strong>${item.name}</strong></button>`).join("");
      detail.innerHTML = `<span class="itinerary-stop-icon" aria-hidden="true">${stop.icon}</span><div><p class="special-screen-label">Stop ${index + 1} of ${special.stops.length} &bull; ${stop.area}</p><h3>${stop.name}</h3><p>${stop.detail}</p><div class="itinerary-travel"><span aria-hidden="true">&#10140;</span><strong>${stop.travel}</strong></div>${index < special.stops.length - 1 ? `<div class="activity-actions"><button class="activity-button" type="button" data-next-stop>Next Stop</button></div>` : ""}</div>`;
      route.querySelectorAll("[data-itinerary-stop]").forEach((button) => button.addEventListener("click", () => showStop(Number(button.dataset.itineraryStop))));
      detail.querySelector("[data-next-stop]")?.addEventListener("click", () => showStop(index + 1));
      specialFeedback.innerHTML = index === special.stops.length - 1 ? "<strong>Tour complete!</strong> Explain which stop you would most like to visit and why." : `<strong>${stop.name} selected.</strong> Read the plan aloud, then continue to the next stop.`;
    };
    showStop(0);
  };

  const renderTransitBoard = () => {
    specialStage.innerHTML = `<div class="transit-station"><div class="transit-board"><div class="transit-board-heading"><span>WHERE ARE YOU?</span><b>WIEN</b></div><div class="transit-destinations">${special.stations.map((station, index) => `<button type="button" class="${index === 0 ? "is-active" : ""}" data-transit-station="${index}"><strong>${station.name}</strong><span>View departures</span></button>`).join("")}</div><div class="departure-display" data-departure-display></div></div><a class="vienna-map-preview" href="assets/vienna-subway-map.pdf" target="_blank" rel="noreferrer" aria-label="Open the full Vienna subway map in a new tab"><span class="map-zoom-badge">&#128269; Click to zoom</span><img src="assets/vienna-subway-map-preview.png" alt="Vienna subway and regional transit map"><strong>Open the authentic Vienna transit map</strong><small>PDF opens in a new tab so you can zoom in.</small></a></div>`;
    const departureDisplay = specialStage.querySelector("[data-departure-display]");
    const showStation = (index) => {
      const station = special.stations[index];
      specialStage.querySelectorAll("[data-transit-station]").forEach((button) => button.classList.toggle("is-active", Number(button.dataset.transitStation) === index));
      departureDisplay.innerHTML = `<p class="special-screen-label">You are at ${station.name}</p><div class="vienna-travel-goal"><span aria-hidden="true">&#128205;</span><strong>${station.goal}</strong><small>Select the correct departure.</small></div><div class="vienna-board-columns"><span>TIME</span><span>LINE</span><span>DIRECTION</span><span>PLATFORM</span></div><div class="departure-times vienna-departure-times">${station.services.map((service, serviceIndex) => `<button type="button" data-service="${serviceIndex}"><span>${service.time}</span><strong class="vienna-line vienna-line-${service.line.toLowerCase()}">${service.line}</strong><span>${service.direction}</span><b>${service.platform}</b></button>`).join("")}</div>`;
      departureDisplay.querySelectorAll("[data-service]").forEach((button) => button.addEventListener("click", () => {
        const service = station.services[Number(button.dataset.service)];
        departureDisplay.querySelectorAll("[data-service]").forEach((item) => item.classList.remove("is-correct", "is-wrong"));
        button.classList.add(service.correct ? "is-correct" : "is-wrong");
        specialFeedback.innerHTML = service.correct ? `<strong>Correct!</strong> Take the ${service.line} toward ${service.direction} at ${service.time} from platform ${service.platform}.` : `<strong>Not this train.</strong> The ${service.line} is going toward ${service.direction}. Check the map and try again.`;
      }));
      specialFeedback.innerHTML = `<strong>${station.name} selected.</strong> Read the destination, then choose the correct line, direction, and departure time.`;
    };
    specialStage.querySelectorAll("[data-transit-station]").forEach((button) => button.addEventListener("click", () => showStation(Number(button.dataset.transitStation))));
    showStation(0);
  };

  const renderProducts = () => {
    specialStage.innerHTML = `<div class="product-showcase-grid">${special.products.map((product, index) => `<button type="button" data-product-index="${index}"><span class="product-showcase-icon" aria-hidden="true">${product.icon}</span><strong>${product.name}</strong><small>View details</small></button>`).join("")}</div><article class="product-detail-panel" data-product-detail><div class="product-detail-placeholder"><span aria-hidden="true">&#128070;</span><p>Select one of the six products to see its information.</p></div></article>`;
    const detailPanel = specialStage.querySelector("[data-product-detail]");
    specialStage.querySelectorAll("[data-product-index]").forEach((button) => button.addEventListener("click", () => {
      const product = special.products[Number(button.dataset.productIndex)];
      specialStage.querySelectorAll("[data-product-index]").forEach((item) => item.classList.toggle("is-selected", item === button));
      detailPanel.innerHTML = `<div class="product-detail-heading"><span class="product-detail-icon" aria-hidden="true">${product.icon}</span><div><p class="special-screen-label">Product information</p><h3>${product.name}</h3></div><strong class="product-detail-price">${product.price}</strong></div><div class="product-fact-grid">${product.facts.map(([label, value]) => `<p><span>${label}</span><strong>${value}</strong></p>`).join("")}</div><div class="product-offer"><span aria-hidden="true">&#9733;</span><div><small>Special information</small><strong>${product.offer}</strong></div></div>`;
      specialFeedback.innerHTML = `<strong>${product.name} selected.</strong> Read the information aloud, then ask a partner one question about the product.`;
    }));
  };

  const renderDecision = () => {
    let scenarioIndex = 0;
    let score = 0;
    const showScenario = () => {
      if (scenarioIndex >= special.scenarios.length) {
        specialStage.innerHTML = `<div class="decision-finish"><span>&#9733;</span><p class="special-screen-label">Challenge complete</p><h3>${score} of ${special.scenarios.length} best responses selected</h3><button class="activity-button secondary-button" type="button" data-restart-decision>Try Again</button></div>`;
        specialFeedback.innerHTML = score === special.scenarios.length ? "<strong>Excellent!</strong> Every response was natural and polite." : "<strong>Good practice.</strong> Try again and look for the clearest, most polite response.";
        specialStage.querySelector("[data-restart-decision]").addEventListener("click", () => { scenarioIndex = 0; score = 0; showScenario(); });
        return;
      }
      const scenario = special.scenarios[scenarioIndex];
      specialStage.innerHTML = `<div class="decision-card"><p class="special-screen-label">Situation ${scenarioIndex + 1} of ${special.scenarios.length}</p><h3>${scenario.prompt}</h3><div class="decision-options">${scenario.options.map((option, index) => `<button type="button" data-option-index="${index}">${option}</button>`).join("")}</div></div>`;
      specialStage.querySelectorAll("[data-option-index]").forEach((button) => button.addEventListener("click", () => {
        const isBest = Number(button.dataset.optionIndex) === scenario.best;
        if (isBest) score += 1;
        specialFeedback.innerHTML = isBest ? "<strong>Natural choice!</strong> That response is clear and polite." : `<strong>Not the best choice.</strong> A more natural response is: ${scenario.options[scenario.best]}`;
        specialStage.querySelectorAll("[data-option-index]").forEach((item) => { item.disabled = true; item.classList.toggle("is-best", Number(item.dataset.optionIndex) === scenario.best); });
        const next = document.createElement("button");
        next.className = "activity-button special-next-button";
        next.type = "button";
        next.textContent = scenarioIndex === special.scenarios.length - 1 ? "See Result" : "Next Situation";
        next.addEventListener("click", () => { scenarioIndex += 1; showScenario(); });
        specialStage.querySelector(".decision-card").append(next);
      }));
    };
    showScenario();
  };

  if (special.type === "roulette") renderRoulette();
  if (special.type === "kiosk") renderKiosk();
  if (special.type === "menu") renderMenu();
  if (special.type === "ticket") renderTicket();
  if (special.type === "routes") renderRoutes();
  if (special.type === "itinerary") renderItinerary();
  if (special.type === "transit-board") renderTransitBoard();
  if (special.type === "products") renderProducts();
  if (special.type === "decision") renderDecision();
  if (special.type === "exchange") renderExchange();

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
