(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.QuestionQueueData = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  const levels = {
    beginner: {name:"Lucas", age:"20", label:"Beginner", icon:"&#128102;", description:"Clear questions for short, confident answers."},
    elementary: {name:"Leo", age:"30", label:"Elementary / Pre-Intermediate", icon:"&#129489;", description:"Everyday questions with reasons and details."},
    intermediate: {name:"Daniel", age:"45", label:"Intermediate+", icon:"&#128104;", description:"Deeper situations, comparisons, and explanations."}
  };

  const topics = {
    "verb-to-be": {name:"Verb to be", symbol:"BE", description:"Identity, feelings, descriptions, professions, and places.", themes:[
      {id:"about-you",icon:"&#128100;",name:"About You",questions:{
        beginner:["What is your name?","How old are you?","Are you tired today?","Where are you now?"],
        elementary:["What are you usually excited about?","Which personal quality are you proud of?","Are you different when you are with close friends? How?","Tell me about something that is not easy for you."],
        intermediate:["Which parts of your personality are most useful in difficult situations?","Are first impressions usually accurate? Explain your opinion.","How are you different from the person you were five years ago?","What is something people are often wrong about when they first meet you?"]}},
      {id:"family-home",icon:"&#127968;",name:"Family & Home",questions:{
        beginner:["Who is your best friend?","Is your home big or small?","Are your neighbors friendly?","Tell me one room that is not quiet in your home."],
        elementary:["Who is usually the busiest person in your family?","What is your favorite room, and why is it special?","Are family meals important in your home?","Describe something that is not comfortable in your home."],
        intermediate:["How are responsibilities different for each person in your household?","What characteristics are essential for a home to feel welcoming?","Are relatives necessarily similar just because they are family? Why or why not?","Which part of your home is not as practical as it could be?"]}},
      {id:"school-work",icon:"&#128188;",name:"School & Work",questions:{
        beginner:["Are you a student or a worker?","Who is your favorite teacher or coworker?","Is your school or workplace near your home?","Tell me something that is not difficult at school or work."],
        elementary:["What is the most interesting part of your work or studies?","Are your classmates or coworkers helpful?","Which tasks are usually difficult for you?","What is not fair about some schools or workplaces?"],
        intermediate:["Which personal qualities are most valuable in your field?","Are qualifications or practical experience more important for success?","How is your current school or workplace different from your ideal one?","What is one professional expectation that is not realistic today?"]}},
      {id:"places",icon:"&#127758;",name:"Places",questions:{
        beginner:["Where is your hometown?","Is there a park near your home?","What is your favorite place in your city?","Name a place that is not crowded on weekdays."],
        elementary:["Which place in your city is best for relaxing?","Is your hometown a good place for young people? Why?","What places are popular with tourists where you live?","Which area is not safe to visit alone at night?"],
        intermediate:["What makes a public place feel safe and welcoming?","Which places in your city are different from how they were in the past?","Is your hometown an accurate representation of your country?","What important service is not easily available in your neighborhood?"]}}
    ]},

    "simple-present": {name:"Simple Present", symbol:"DO", description:"Routines, habits, preferences, and general truths.", themes:[
      {id:"home-routine",icon:"&#127968;",name:"Home Routine",questions:{
        beginner:["What time do you wake up?","What do you eat for breakfast?","Do you make your bed every day?","Tell me something you do not do in the morning."],
        elementary:["What do you normally do immediately after waking up?","Who usually prepares meals in your home?","Which household chore do you dislike doing?","What changes in your routine when you have a busy day?"],
        intermediate:["How does your morning routine affect the rest of your day?","Which household responsibilities do you normally share with other people?","What do you do whenever an unexpected problem interrupts your routine?","Which daily habit would you like to change, and why?"]}},
      {id:"work-school",icon:"&#128188;",name:"Work & School",questions:{
        beginner:["Where do you work or study?","What time do your classes or work start?","Do you use English at work or school?","Tell me one thing you do not enjoy doing there."],
        elementary:["How do you normally prepare for an important class or meeting?","What does a typical busy day look like for you?","Who do you ask for help when you have a problem?","Which task do you avoid until the last minute?"],
        intermediate:["How do you prioritize tasks when everything feels urgent?","What habits distinguish effective students or professionals from others?","How does technology influence the way you work or study?","What do institutions often fail to understand about students or employees?"]}},
      {id:"free-time",icon:"&#127918;",name:"Free Time",questions:{
        beginner:["What do you do in your free time?","Do you play any sports?","What kind of music do you like?","Tell me an activity you do not enjoy."],
        elementary:["How often do you spend time on your favorite hobby?","What do you usually do when the weather is bad?","Do you prefer activities alone or with friends? Why?","Which popular form of entertainment does not interest you?"],
        intermediate:["How do your leisure activities reflect your personality?","What prevents adults from having enough meaningful free time?","How does the way you relax differ from the way your parents relax?","Which hobby requires more discipline than people generally imagine?"]}},
      {id:"healthy-habits",icon:"&#10084;",name:"Healthy Habits",questions:{
        beginner:["How much water do you drink every day?","Do you eat vegetables often?","What time do you go to bed?","Tell me one unhealthy food you do not eat often."],
        elementary:["What do you do to stay physically active?","How does your routine change when you feel tired?","Which healthy habit is difficult for you to maintain?","What do you avoid doing before bedtime?"],
        intermediate:["How do stress and a busy schedule influence your health choices?","Which small daily habit produces the greatest long-term benefit?","Why do people continue habits they know are unhealthy?","What health advice do people frequently give but rarely follow themselves?"]}}
    ]},

    "present-continuous": {name:"Present Continuous", symbol:"ING", description:"Actions happening now, temporary situations, and current plans.", themes:[
      {id:"home-now",icon:"&#127968;",name:"At Home Now",questions:{
        beginner:["What are you doing right now?","Who is using the kitchen now?","Are you wearing comfortable clothes?","Tell me something you are not doing at the moment."],
        elementary:["What is happening in your home right now?","Is anyone in your family working or studying at the moment?","What are you doing differently this week?","Which household task are you not doing today?"],
        intermediate:["How is your household routine changing this month?","What temporary situation is affecting life at home right now?","Are people spending more time at home nowadays? What is causing this?","What responsibility are you currently postponing, and why?"]}},
      {id:"school-work-now",icon:"&#127979;",name:"School & Work",questions:{
        beginner:["What are you studying these days?","Are you working on a project now?","Who is sitting near you?","Tell me something your teacher or manager is not doing now."],
        elementary:["What task are you concentrating on this week?","Are you learning anything new at work or school?","How are your classmates or coworkers helping you currently?","What project is not progressing as expected?"],
        intermediate:["How is your field changing at the moment?","What new skill are you developing, and how are you practicing it?","Which current trend is influencing your workplace or school most strongly?","What important issue are leaders not addressing right now?"]}},
      {id:"around-town",icon:"&#127961;",name:"Around Town",questions:{
        beginner:["What are people doing outside right now?","Is anyone waiting for a bus?","Are cars moving quickly today?","Tell me something that is not happening in your street."],
        elementary:["What is changing in your neighborhood these days?","Are people building anything near your home?","Why are people gathering in busy areas today?","Which local service is not operating normally this week?"],
        intermediate:["How is construction currently affecting movement around your city?","What are local authorities doing to improve public spaces?","Which social changes are becoming visible in your neighborhood?","What problem is your city currently failing to solve effectively?"]}},
      {id:"current-plans",icon:"&#128197;",name:"Current Plans",questions:{
        beginner:["What are you doing after class?","Are you meeting anyone tonight?","Where are you going this weekend?","Tell me one thing you are not doing tomorrow."],
        elementary:["What are you preparing for at the moment?","Are you visiting anyone in the next few days?","What arrangements are you making for the weekend?","Which plan are you changing or canceling?"],
        intermediate:["What long-term plan are you actively working toward?","How are you adapting your plans because of a recent change?","Which commitment is taking more time than you expected?","What are you deliberately not prioritizing at this stage of your life?"]}}
    ]},

    "simple-past": {name:"Simple Past", symbol:"ED", description:"Finished actions, past routines, and memorable experiences.", themes:[
      {id:"last-weekend",icon:"&#128197;",name:"Last Weekend",questions:{
        beginner:["What did you do last weekend?","Where did you go on Saturday?","Did you watch a movie?","Tell me something you did not do last weekend."],
        elementary:["How did you spend your free time last weekend?","Who did you talk to, and what did you discuss?","Did anything unexpected happen?","Which plan did you make but not complete?"],
        intermediate:["What made last weekend different from an ordinary one?","How did your mood change from Saturday morning to Sunday evening?","Which decision did you make that affected the rest of your weekend?","What opportunity did you miss, and what prevented you from taking it?"]}},
      {id:"past-travel",icon:"&#9992;",name:"Travel",questions:{
        beginner:["Where did you go on your last trip?","Who traveled with you?","Did you take many pictures?","Tell me one food you did not try."],
        elementary:["How did you choose your last travel destination?","What was the most interesting place you visited?","Did you have any transportation problems?","What did you expect to do but could not do?"],
        intermediate:["How did your last journey change your understanding of the destination?","Which travel problem required you to change your plans quickly?","What cultural difference surprised you most, and how did you react?","What did the destination not offer that you had expected to find?"]}},
      {id:"past-work-school",icon:"&#128188;",name:"Work & School",questions:{
        beginner:["What did you study yesterday?","Did you have a busy day?","Who helped you with your work?","Tell me one task you did not finish."],
        elementary:["What was the most useful thing you learned last week?","How did you solve your last difficult task?","Did you receive any helpful feedback recently?","Why did you not complete one of your plans?"],
        intermediate:["Which past academic or professional experience taught you the most?","How did you respond when a project did not go according to plan?","What mistake changed the way you now approach your responsibilities?","Which opportunity did you initially reject but later reconsider?"]}},
      {id:"memorable-moments",icon:"&#11088;",name:"Memorable Moments",questions:{
        beginner:["What was your last birthday like?","Who gave you a memorable gift?","Did you feel happy on your first school day?","Tell me about a day you did not enjoy."],
        elementary:["What childhood event do you remember clearly?","When did you last feel proud of yourself?","Did someone ever surprise you in a positive way?","What important moment did you not appreciate at the time?"],
        intermediate:["Which ordinary moment later became an important memory for you?","How did one conversation influence a major decision in your life?","What event seemed negative at first but eventually produced a good result?","Which meaningful experience did you fail to document, and why do you still remember it?"]}}
    ]},

    "present-perfect": {name:"Present Perfect", symbol:"HAVE", description:"Experiences, achievements, changes, and unfinished time.", themes:[
      {id:"experiences",icon:"&#127758;",name:"Life Experiences",questions:{
        beginner:["Have you ever traveled by plane?","Have you tried food from another country?","What cities have you visited?","Tell me something you have never done."],
        elementary:["What is the most unusual food you have ever eaten?","Have you ever met someone famous or well known?","Which new activity have you tried recently?","What experience have you wanted to have but have not had yet?"],
        intermediate:["Which experience has challenged your assumptions about another culture?","How have your travel experiences influenced your priorities?","What risk have you taken that produced an unexpected lesson?","Which important experience have you deliberately avoided, and why?"]}},
      {id:"achievements",icon:"&#127942;",name:"Achievements",questions:{
        beginner:["What have you learned this year?","Have you finished an important project?","What goal have you achieved?","Tell me something you have not completed yet."],
        elementary:["Which personal achievement have you been most proud of?","Have you improved any skill recently? How?","What difficult problem have you successfully solved?","Which goal have you started but not reached yet?"],
        intermediate:["Which achievement has required the most persistence from you?","How have your definitions of success changed over time?","What accomplishment have other people underestimated?","Which ambition have you not pursued because its cost has seemed too high?"]}},
      {id:"life-changes",icon:"&#128260;",name:"Life Changes",questions:{
        beginner:["How has your city changed?","Have you changed your daily routine recently?","Has your family moved to a new home?","Tell me something that has not changed in your life."],
        elementary:["How has technology changed the way you communicate?","What habit have you developed in the last few years?","Has your neighborhood become better or worse?","Which part of your personality has not changed much?"],
        intermediate:["How has adulthood changed your understanding of responsibility?","Which social change has affected your community most directly?","How have your expectations for the future evolved?","What institution has not adapted quickly enough to recent changes?"]}},
      {id:"recently",icon:"&#9203;",name:"Recently",questions:{
        beginner:["What have you eaten today?","Who have you talked to this week?","Have you watched a good movie recently?","Tell me something you have not done today."],
        elementary:["What useful information have you learned this week?","Have you made any plans for the next few months?","What has made you feel optimistic recently?","Which responsibility have you not dealt with yet?"],
        intermediate:["Which recent event has occupied your thoughts more than expected?","How has your routine been affected by something that happened this month?","What opinion have you reconsidered recently?","Which current issue have people not discussed seriously enough?"]}}
    ]},

    future: {name:"Future", symbol:"WILL", description:"Plans, intentions, predictions, offers, and spontaneous decisions.", themes:[
      {id:"weekend-plans",icon:"&#128197;",name:"Weekend Plans",questions:{
        beginner:["What will you do this weekend?","Are you going to stay home?","Who will you see?","Tell me something you will not do."],
        elementary:["How are you going to spend your next free weekend?","Will you make any time for friends or family?","What will you do if the weather is bad?","Which responsibility are you not going to postpone?"],
        intermediate:["How will you balance rest and responsibility next weekend?","What are you going to do differently from your usual routine?","Which plan will you change if an unexpected opportunity appears?","What will you deliberately avoid doing, and what benefit will that bring?"]}},
      {id:"travel-plans",icon:"&#9992;",name:"Travel Plans",questions:{
        beginner:["Where are you going to travel next?","How will you get there?","Who will travel with you?","Tell me something you will not pack."],
        elementary:["How are you going to prepare for your next trip?","What places will you visit first?","What will you do if your flight is delayed?","Which tourist activity are you not going to do?"],
        intermediate:["How will you adapt if your travel budget changes unexpectedly?","What are you going to prioritize when choosing your next destination?","Which local customs will you research before traveling?","What will you refuse to sacrifice even if the trip becomes more expensive?"]}},
      {id:"personal-goals",icon:"&#127919;",name:"Personal Goals",questions:{
        beginner:["What are you going to learn next?","Will you exercise more this year?","What book will you read?","Tell me one habit you will not continue."],
        elementary:["Which skill are you going to improve over the next year?","How will you measure your progress?","Who will support you when motivation is low?","What are you not going to let distract you?"],
        intermediate:["Which long-term goal will require you to change your identity or habits?","How are you going to maintain progress when results are slow?","What trade-off will you probably need to accept to reach your goal?","Which conventional definition of success will you not follow?"]}},
      {id:"predictions",icon:"&#128302;",name:"Predictions",questions:{
        beginner:["Will the weather be hot tomorrow?","Will people use more technology in the future?","What will your city look like in ten years?","Tell me something that will not disappear soon."],
        elementary:["How will education change in the next decade?","Are people going to work from home more often?","Which jobs will become more important?","What technology will not be common in the near future?"],
        intermediate:["How will artificial intelligence reshape ordinary professional decisions?","Which environmental change is going to affect cities most directly?","What current prediction will probably seem ridiculous in twenty years?","Which human ability will technology not be able to replace convincingly?"]}}
    ]},

    can: {name:"Can", symbol:"CAN", description:"Abilities, permission, requests, and possibilities.", themes:[
      {id:"abilities",icon:"&#127928;",name:"Abilities",questions:{
        beginner:["Can you cook?","What sports can you play?","Can you speak another language?","Tell me something you cannot do yet."],
        elementary:["What can you do better than most people you know?","Which practical skill can you teach another person?","How can you improve an ability you already have?","What can you understand but not do confidently?"],
        intermediate:["Which ability can create opportunities regardless of someone’s profession?","How can natural talent become a disadvantage without discipline?","What can experienced people do that beginners often overlook?","Which supposedly essential skill can you succeed without having?"]}},
      {id:"permission",icon:"&#128587;",name:"Permission",questions:{
        beginner:["Can students use phones in your class?","Can you eat at your workplace or school?","Where can visitors park near your home?","Tell me something people cannot do in a library."],
        elementary:["What can employees or students do during breaks?","Can visitors enter your building without permission?","When can young people make their own decisions?","What can people not bring onto an airplane?"],
        intermediate:["When can rules be broken for a legitimate reason?","How can institutions balance personal freedom and public safety?","Which decisions can teenagers reasonably make without parental permission?","What information can companies not collect without clear consent?"]}},
      {id:"requests",icon:"&#129309;",name:"Requests",questions:{
        beginner:["Can you open the window, please?","Can I borrow a pen?","How can I ask for the bill?","Make one polite request your teacher cannot accept today."],
        elementary:["How can you politely ask someone to speak more slowly?","What can you say when you need help carrying something?","Can you ask a hotel receptionist for a quieter room?","Which request can you not make at the last minute?"],
        intermediate:["How can you make a difficult request without sounding demanding?","When can refusing a request be more responsible than accepting it?","What can a customer reasonably request after receiving poor service?","Which favor can you not ask of someone you have just met?"]}},
      {id:"possibilities",icon:"&#128161;",name:"Possibilities",questions:{
        beginner:["Where can you buy fresh food near your home?","What can people do on a rainy day?","Can it snow in your country?","Tell me something that cannot happen at night."],
        elementary:["How can tourists save money in your city?","What problems can happen during a long trip?","Can online classes replace classroom learning completely?","Which everyday problem cannot be solved with an app?"],
        intermediate:["How can a small decision produce an unexpectedly large consequence?","What opportunities can arise from making a serious mistake?","Can convenience reduce people’s ability to solve problems independently?","Which global challenge cannot be addressed by individual action alone?"]}}
    ]},

    should: {name:"Should", symbol:"SHOULD", description:"Advice, recommendations, expectations, and everyday dilemmas.", themes:[
      {id:"health-advice",icon:"&#10084;",name:"Health",questions:{
        beginner:["What should you do when you have a cold?","How many hours should people sleep?","Should children eat vegetables every day?","Tell me something people should not do before bed."],
        elementary:["What should someone do when they feel stressed?","Should people exercise when they are very tired? Why?","What should travelers carry in case they become sick?","Which health advice should people not follow without professional guidance?"],
        intermediate:["How should workplaces support employees experiencing chronic stress?","Should governments regulate products that seriously damage public health?","What should someone consider before accepting health advice online?","Which popular wellness recommendation should not be treated as universally appropriate?"]}},
      {id:"travel-problems",icon:"&#9992;",name:"Travel Problems",questions:{
        beginner:["What should you do if you lose your passport?","Should you arrive early at the airport?","Where should a lost tourist ask for help?","Tell me something you should not leave in a taxi."],
        elementary:["What should you do when your flight is canceled?","Should tourists always buy travel insurance? Why?","How should someone respond after taking the wrong train?","What should travelers not do with their documents?"],
        intermediate:["How should airlines compensate passengers after preventable cancellations?","What should travelers prioritize when an emergency disrupts every plan?","Should tourists adapt completely to local customs even when they disagree with them?","Which travel problem should not be solved without contacting local authorities?"]}},
      {id:"study-work-advice",icon:"&#128218;",name:"Study & Work",questions:{
        beginner:["What should students do before a test?","Should people take breaks while working?","Who should you ask when you need help?","Tell me something students should not do in class."],
        elementary:["How should someone prepare for a job interview?","Should students study alone or in groups? Why?","What should a manager do when a team misses a deadline?","Which task should people not postpone until the final day?"],
        intermediate:["How should organizations respond when high performance causes employee burnout?","Should universities prioritize professional skills or broad intellectual development?","What should a leader do when the most popular decision is not the most responsible one?","Which workplace tradition should no longer be considered necessary?"]}},
      {id:"everyday-problems",icon:"&#129513;",name:"Everyday Problems",questions:{
        beginner:["What should you do if you miss the bus?","Should you return money you find?","Who should you call when something breaks at home?","Tell me something neighbors should not do late at night."],
        elementary:["What should someone do after forgetting an important appointment?","Should friends always tell each other the complete truth?","How should you deal with a noisy neighbor?","What should people not post publicly on social media?"],
        intermediate:["How should someone respond when loyalty conflicts with honesty?","Should people confront minor problems immediately or wait for the right moment?","What should communities do when individual convenience harms everyone else?","Which personal disagreement should not be discussed through text messages?"]}}
    ]},

    "there-to-be": {name:"There to be", symbol:"THERE", description:"Describing what exists in places, situations, the past, and the present.", themes:[
      {id:"home",icon:"&#127968;",name:"Home",questions:{
        beginner:["Is there a television in your bedroom?","How many rooms are there in your home?","Are there any plants in your kitchen?","Tell me something there is not in your living room."],
        elementary:["Is there a place in your home where you can work quietly?","What useful objects are there near your front door?","Were there any changes in your home last year?","What is missing because there is not enough space?"],
        intermediate:["What features should there be in a home designed for remote work?","How has your home changed now that there are more connected devices?","Were there spaces in your childhood home that felt especially meaningful?","Why are there household objects people keep even when there is no practical use for them?"]}},
      {id:"neighborhood",icon:"&#127961;",name:"Neighborhood",questions:{
        beginner:["Is there a supermarket near your home?","Are there any parks in your neighborhood?","Was there heavy traffic yesterday?","Tell me one place there is not near your home."],
        elementary:["What public services are there in your neighborhood?","Is there enough public transportation where you live?","Were there more local stores in the past?","What problems are there that local authorities do not solve?"],
        intermediate:["Why are there neighborhoods that develop much faster than others?","Should there be limits on new construction in historic areas?","Were there community spaces that disappeared as your city expanded?","What would improve if there were more safe areas for pedestrians?"]}},
      {id:"school-work",icon:"&#128188;",name:"School & Work",questions:{
        beginner:["Is there a cafeteria at your school or workplace?","How many people are there in your class or team?","Were there any meetings yesterday?","Tell me something there is not enough of at school or work."],
        elementary:["What facilities are there for students or employees?","Is there enough time to complete your usual tasks?","Were there any important problems last week?","Why are there people who work better under pressure?"],
        intermediate:["What support should there be for people beginning a new role?","Why are there organizations with excellent resources but poor results?","Were there professional expectations in the past that are no longer reasonable?","How would performance change if there were fewer unnecessary meetings?"]}},
      {id:"places-events",icon:"&#127881;",name:"Places & Events",questions:{
        beginner:["Is there a festival in your city this year?","Are there many people at popular events?","Was there music at the last party you attended?","Tell me something there was not at that event."],
        elementary:["What activities are there at a typical festival in your city?","Is there usually enough information for visitors?","Were there any surprising moments at the last event you attended?","Why are there events you prefer not to attend?"],
        intermediate:["What should there be at every large event to make it accessible?","Why are there public celebrations that become symbols of a city?","Were there moments when an event changed because of something unexpected?","Would there be fewer problems if organizers limited attendance at extremely popular events?"]}}
    ]}
  };

  const getQuestions = (topicId, themeId, levelId) => {
    const topic = topics[topicId];
    const theme = topic?.themes.find((item) => item.id === themeId);
    return theme?.questions[levelId] ? [...theme.questions[levelId]] : [];
  };

  const shuffle = (items, random = Math.random) => {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  };

  return {levels, topics, getQuestions, shuffle};
});
