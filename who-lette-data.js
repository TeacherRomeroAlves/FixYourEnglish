(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.WhoLetteData = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  const celebrities = [
    {name:"Michael Jackson",aliases:["michael jackson","jackson"],gender:"man",emoji:"&#128104;&#127998;",field:"Music",facts:["Born in Gary, Indiana, in the United States","Born in 1958","American singer, songwriter, and dancer","Known worldwide as the King of Pop","Famous for albums such as Thriller and Bad","Performed the moonwalk dance"]},
    {name:"Taylor Swift",aliases:["taylor swift","taylor"],gender:"woman",emoji:"&#128105;&#127995;",field:"Music",facts:["Born in Pennsylvania, in the United States","Born in 1989","American singer and songwriter","Known for autobiographical songwriting","Famous for albums such as 1989 and Folklore","Played guitar and wrote songs from a young age"]},
    {name:"Beyonce",aliases:["beyonce","beyoncé","beyonce knowles"],gender:"woman",emoji:"&#128105;&#127998;",field:"Music",facts:["Born in Houston, Texas, in the United States","Born in 1981","American singer, songwriter, and performer","First became famous with Destiny's Child","Known for songs such as Crazy in Love and Single Ladies","Has also acted in films"]},
    {name:"Shakira",aliases:["shakira","shakira mebarak"],gender:"woman",emoji:"&#128105;&#127996;",field:"Music",facts:["Born in Barranquilla, Colombia","Born in 1977","Colombian singer and songwriter","Performs in Spanish and English","Known for songs such as Hips Don't Lie and Waka Waka","Famous for a distinctive voice and dance style"]},
    {name:"Adele",aliases:["adele","adele adkins"],gender:"woman",emoji:"&#128105;&#127995;",field:"Music",facts:["Born in London, England","Born in 1988","British singer and songwriter","Known for a powerful voice and emotional songs","Famous for albums named 19, 21, 25, and 30","Sang Rolling in the Deep and Hello"]},
    {name:"Rihanna",aliases:["rihanna","robyn rihanna fenty"],gender:"woman",emoji:"&#128105;&#127999;",field:"Music",facts:["Born in Saint Michael, Barbados","Born in 1988","Barbadian singer and businesswoman","Became internationally famous as a teenager","Known for songs such as Umbrella and Diamonds","Created the Fenty beauty brand"]},
    {name:"Cristiano Ronaldo",aliases:["cristiano ronaldo","ronaldo","cr7"],gender:"man",emoji:"&#128104;&#127996;",field:"Sports",facts:["Born on Madeira, Portugal","Born in 1985","Portuguese football player","Has played for Manchester United, Real Madrid, Juventus, and Al-Nassr","Has won the Ballon d'Or multiple times","Often associated with the number 7"]},
    {name:"Lionel Messi",aliases:["lionel messi","messi","leo messi"],gender:"man",emoji:"&#128104;&#127996;",field:"Sports",facts:["Born in Rosario, Argentina","Born in 1987","Argentine football player","Spent most of his club career at Barcelona","Won the FIFA World Cup with Argentina in 2022","Has won the Ballon d'Or multiple times"]},
    {name:"Serena Williams",aliases:["serena williams","serena"],gender:"woman",emoji:"&#128105;&#127998;",field:"Sports",facts:["Born in Michigan, in the United States","Born in 1981","American tennis player","Won 23 Grand Slam singles titles","Played doubles with her sister Venus","Known for powerful serves and determination"]},
    {name:"Usain Bolt",aliases:["usain bolt","bolt"],gender:"man",emoji:"&#128104;&#127998;",field:"Sports",facts:["Born in Sherwood Content, Jamaica","Born in 1986","Jamaican sprinter","Won eight Olympic gold medals","Set world records in the 100 and 200 meters","Known by the nickname Lightning Bolt"]},
    {name:"Michael Jordan",aliases:["michael jordan","jordan","mj"],gender:"man",emoji:"&#128104;&#127998;",field:"Sports",facts:["Born in New York City, in the United States","Born in 1963","American basketball player","Won six NBA championships with the Chicago Bulls","Often wore the number 23","Inspired a famous line of sports shoes"]},
    {name:"Pele",aliases:["pele","pelé","edson arantes do nascimento"],gender:"man",emoji:"&#128104;&#127996;",field:"Sports",facts:["Born in Minas Gerais, Brazil","Born in 1940","Brazilian football player","Won three FIFA World Cups","Played most famously for Santos","Known around the world as the King of Football"]},
    {name:"Leonardo DiCaprio",aliases:["leonardo dicaprio","dicaprio","leo dicaprio"],gender:"man",emoji:"&#128104;&#127995;",field:"Film",facts:["Born in Los Angeles, in the United States","Born in 1974","American actor and film producer","Starred in Titanic and Inception","Won an Academy Award for The Revenant","Supports environmental causes"]},
    {name:"Jackie Chan",aliases:["jackie chan","chan"],gender:"man",emoji:"&#128104;&#127995;",field:"Film",facts:["Born in Hong Kong","Born in 1954","Actor, filmmaker, and martial artist","Known for performing dangerous stunts","Starred in films such as Rush Hour and Police Story","Combines action with comedy"]},
    {name:"Dwayne Johnson",aliases:["dwayne johnson","the rock","dwayne the rock johnson"],gender:"man",emoji:"&#128104;&#127997;",field:"Film & Sports",facts:["Born in California, in the United States","Born in 1972","American actor and former professional wrestler","Known by the nickname The Rock","Starred in action and comedy films","Played college football before wrestling"]},
    {name:"Tom Cruise",aliases:["tom cruise","cruise"],gender:"man",emoji:"&#128104;&#127995;",field:"Film",facts:["Born in New York State, in the United States","Born in 1962","American actor and film producer","Famous for the Mission: Impossible films","Played a pilot in Top Gun","Known for performing many of his own stunts"]},
    {name:"Oprah Winfrey",aliases:["oprah winfrey","oprah"],gender:"woman",emoji:"&#128105;&#127998;",field:"Television",facts:["Born in Mississippi, in the United States","Born in 1954","American television host, producer, and philanthropist","Hosted a famous talk show for 25 years","Created a media company","Known for interviews and a popular book club"]},
    {name:"MrBeast",aliases:["mrbeast","mr beast","jimmy donaldson"],gender:"man",emoji:"&#128104;&#127995;",field:"Online Media",facts:["Born in Kansas, in the United States","Born in 1998","American online video creator","His real name is Jimmy Donaldson","Known for large challenges and giveaways","Built one of the world's largest YouTube channels"]},
    {name:"Albert Einstein",aliases:["albert einstein","einstein"],gender:"man",emoji:"&#128104;&#127995;",field:"Science",facts:["Born in Ulm, Germany","Born in 1879","Theoretical physicist","Developed the theory of relativity","Won the Nobel Prize in Physics in 1921","Often connected with the equation E equals mc squared"]},
    {name:"Justin Bieber",aliases:["justin bieber","bieber","justin"],gender:"man",emoji:"&#128104;&#127995;",field:"Music",facts:["Born in London, Ontario, Canada","Born in 1994","Canadian singer and songwriter","Became famous after videos of his performances appeared online","Known for songs such as Baby, Sorry, and Love Yourself","Released his first album while he was a teenager"]},
    {name:"Stephen Hawking",aliases:["stephen hawking","hawking"],gender:"man",emoji:"&#128104;&#127995;",field:"Science",facts:["Born in Oxford, England","Born in 1942","British theoretical physicist and author","Studied black holes and the universe","Wrote A Brief History of Time","Used a computerized voice to communicate"]},
    {name:"Queen Elizabeth II",aliases:["queen elizabeth ii","queen elizabeth","elizabeth ii","elizabeth the second"],gender:"woman",emoji:"&#128105;&#127995;",field:"Royal History",facts:["Born in London, England","Born in 1926","Became Queen of the United Kingdom in 1952","Was Britain's longest-reigning monarch","Celebrated a Platinum Jubilee in 2022","Died at Balmoral Castle in Scotland in 2022"]},
    {name:"William Shakespeare",aliases:["william shakespeare","shakespeare"],gender:"man",emoji:"&#128104;&#127995;",field:"Literature",facts:["Born in Stratford-upon-Avon, England","Born in 1564","English playwright and poet","Wrote Romeo and Juliet and Hamlet","Worked as an actor in London","Often called the Bard"]},
    {name:"Frida Kahlo",aliases:["frida kahlo","kahlo","frida"],gender:"woman",emoji:"&#128105;&#127996;",field:"Art",facts:["Born in Coyoacan, Mexico","Born in 1907","Mexican painter","Known especially for self-portraits","Used vivid colors and Mexican cultural symbols","Her life and physical pain influenced her art"]}
  ];

  const sampleQuestions = [
    "Where was this person born?", "When was this person born?", "What is this person famous for?",
    "What does or did this person do?", "Which country is this person from?", "What did this person achieve?",
    "Which famous work, song, film, or team is connected to this person?", "Why do people remember this person?",
    "Was this person born in the twentieth century?", "How did this person become famous?"
  ];

  const shuffle = (items, random = Math.random) => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };

  return { celebrities, sampleQuestions, shuffle };
});
