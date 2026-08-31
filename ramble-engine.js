/* A small grammar for this game's word banks, not a general English evaluator. */
(function (host) {
  "use strict";

  const makeLevels = (sets) => sets.map((seeds, i) => ({
    name: ["Start Small", "Add a Little Detail", "Bring It Together"][i],
    focus: ["Short sentences to build your confidence", "Names, nouns, and a little more information", "Longer sentences with familiar words"][i], seeds
  }));
  const topics = {
    be: { label: "Verb to Be", detail: "Names, feelings & places", levels: makeLevels([
      ["I am Mary", "He isn't tired", "Are you happy"],
      ["Lucas is a student", "We aren't at home", "Is your sister ready"],
      ["My parents are in the kitchen", "Emma is not afraid of dogs", "Are the children late for school"]
    ]) },
    present: { label: "Simple Present (Routine)", detail: "Habits & everyday activities", levels: makeLevels([
      ["I like music", "She doesn't swim", "Do you cook"],
      ["Daniel plays soccer", "We don't eat meat", "Where does your brother work"],
      ["My sister reads books every night", "The boys do not drink coffee", "Does Anna walk to school"]
    ]) },
    past: { label: "Simple Past (Past Activities)", detail: "Things that already happened", levels: makeLevels([
      ["I watched TV", "He didn't cook", "Did you dance"],
      ["Sofia visited London", "We didn't play tennis", "Did your father call"],
      ["My friends traveled by train yesterday", "Lucas did not finish his homework", "Did the children visit their grandparents"]
    ]) },
    continuous: { label: "Present Continuous", detail: "Actions happening now", levels: makeLevels([
      ["I am reading", "She isn't sleeping", "Are you cooking"],
      ["Tom is washing dishes", "We aren't watching TV", "Is your mother working"],
      ["The children are playing in the garden", "My brother is not studying now", "Are Emma and Lucas making dinner"]
    ]) },
    perfect: { label: "Present Perfect", detail: "Experiences & completed actions", levels: makeLevels([
      ["I have finished my homework", "She hasn't cooked", "Have you eaten"],
      ["Emma has visited London", "We haven't finished lunch", "Has your brother called"],
      ["My parents have already visited Brazil", "Anna has not finished her homework yet", "Have the children ever eaten sushi"]
    ]) },
    future: { label: "Future (Will & Going To)", detail: "Plans & future activities", levels: makeLevels([
      ["I will travel", "She won't cook", "Will you help"],
      ["Anna is going to study", "We won't swim", "Are your friends going to travel"],
      ["My parents will visit us tomorrow", "Tom is not going to drive", "Will the children play soccer after lunch"]
    ]) }
  };
  const levels = topics.be.levels;
  const kinds = ["affirmative", "negative", "question"];
  const normalize = (words) => words.map(word => word.toLowerCase().replace(/\u2019/g, "'"));
  const contractions = {
    "hasn't": ["has", "not"], "haven't": ["have", "not"],
    "i've": ["i", "have"], "you've": ["you", "have"], "we've": ["we", "have"], "they've": ["they", "have"],
    "isn't": ["is", "not"], "aren't": ["are", "not"], "don't": ["do", "not"],
    "doesn't": ["does", "not"], "didn't": ["did", "not"], "won't": ["will", "not"],
    "i'm": ["i", "am"], "he's": ["he", "is"], "she's": ["she", "is"], "it's": ["it", "is"],
    "you're": ["you", "are"], "we're": ["we", "are"], "they're": ["they", "are"],
    "i'll": ["i", "will"], "you'll": ["you", "will"], "she'll": ["she", "will"], "he'll": ["he", "will"],
    "we'll": ["we", "will"], "they'll": ["they", "will"]
  };
  const names = ["mary", "lucas", "emma", "daniel", "anna", "sofia", "tom"];
  const displayWord = word => word === "tv" ? "TV" : word === "i" ? "I" :
    names.includes(word) || ["london", "brazil", "friday"].includes(word) ? word[0].toUpperCase() + word.slice(1) :
    word.startsWith("i'") ? "I" + word.slice(1) : word;
  const nouns = {
    coffee: "mass", morning: "singular", school: "mass", country: "singular",
    students: "plural", teacher: "singular", project: "singular", homework: "mass", lunch: "mass",
    report: "singular", meeting: "singular", manager: "singular", signature: "singular", work: "mass",
    student: "singular", sister: "singular", parents: "plural", kitchen: "singular", dogs: "plural",
    children: "plural", sushi: "mass", music: "mass", soccer: "mass", meat: "mass", brother: "singular", books: "plural",
    night: "singular", boys: "plural", tv: "mass", tennis: "mass", father: "singular", friends: "plural",
    grandparents: "plural", dishes: "plural", mother: "singular", garden: "singular", dinner: "mass"
  };
  const verbs = [
    { base: "like", third: "likes", past: "liked", ing: "liking", object: "required" },
    { base: "swim", third: "swims", past: "swam", ing: "swimming", object: "none" },
    { base: "cook", third: "cooks", past: "cooked", participle: "cooked", ing: "cooking", object: "optional" },
    { base: "play", third: "plays", past: "played", ing: "playing", object: "optional" },
    { base: "eat", third: "eats", past: "ate", participle: "eaten", ing: "eating", object: "optional" },
    { base: "work", third: "works", past: "worked", ing: "working", object: "none" },
    { base: "read", third: "reads", past: "read", ing: "reading", object: "optional" },
    { base: "walk", third: "walks", past: "walked", ing: "walking", object: "go" },
    { base: "watch", third: "watches", past: "watched", ing: "watching", object: "required" },
    { base: "dance", third: "dances", past: "danced", ing: "dancing", object: "none" },
    { base: "call", third: "calls", past: "called", participle: "called", ing: "calling", object: "optional" },
    { base: "travel", third: "travels", past: "traveled", ing: "traveling", object: "go" },
    { base: "sleep", third: "sleeps", past: "slept", ing: "sleeping", object: "none" },
    { base: "wash", third: "washes", past: "washed", ing: "washing", object: "optional" },
    { base: "study", third: "studies", past: "studied", ing: "studying", object: "optional" },
    { base: "make", third: "makes", past: "made", ing: "making", object: "required" },
    { base: "drive", third: "drives", past: "drove", ing: "driving", object: "optional" },
    { base: "drink", third: "drinks", past: "drank", participle: "drunk", ing: "drinking", object: "required" },
    { base: "go", third: "goes", past: "went", participle: "gone", ing: "going", object: "go" },
    { base: "visit", third: "visits", past: "visited", participle: "visited", ing: "visiting", object: "optional" },
    { base: "prepare", third: "prepares", past: "prepared", participle: "prepared", ing: "preparing", object: "optional" },
    { base: "check", third: "checks", past: "checked", participle: "checked", ing: "checking", object: "optional" },
    { base: "help", third: "helps", past: "helped", participle: "helped", ing: "helping", object: "optional" },
    { base: "review", third: "reviews", past: "reviewed", participle: "reviewed", ing: "reviewing", object: "required" },
    { base: "approve", third: "approves", past: "approved", participle: "approved", ing: "approving", object: "optional" },
    { base: "finish", third: "finishes", past: "finished", participle: "finished", ing: "finishing", object: "optional" }
  ];

  function nounPhrase(words, role = "object") {
    if (!words.length) return null;
    const and = words.indexOf("and");
    if (and > 0 && nounPhrase(words.slice(0, and), role) && nounPhrase(words.slice(and + 1), role)) return { third: false };
    if (words.length === 1) {
      if (names.includes(words[0]) || ["london", "brazil"].includes(words[0])) return { third: true };
      if (["you", "it"].includes(words[0])) return { third: words[0] === "it" };
      if (role === "subject" && ["i", "he", "she", "we", "they"].includes(words[0])) return { third: ["he", "she"].includes(words[0]), first: words[0] === "i" };
      if (role === "object" && ["them", "us", "me", "him", "her"].includes(words[0])) return { third: false };
      if (["mass", "plural"].includes(nouns[words[0]])) return { third: nouns[words[0]] !== "plural" };
      return null;
    }
    const [determiner, ...rest] = words;
    if (!["the", "my", "his", "her", "their", "our", "your", "a", "another", "every"].includes(determiner)) return null;
    const noun = rest.length === 2 && rest[0] === "science" && rest[1] === "project" ? "project" : rest.length === 1 ? rest[0] : null;
    const type = nouns[noun];
    if (!type || (["a", "another", "every"].includes(determiner) && type !== "singular")) return null;
    return { third: type !== "plural" };
  }

  function complement(verb, words, passive = false) {
    if (passive) return words.length === 0;
    if (verb.object === "none") return words.length === 0;
    if (verb.object === "go") {
      return !words.length || (words[0] === "to" && Boolean(nounPhrase(words.slice(1))));
    }
    return (!words.length && verb.object === "optional") || Boolean(nounPhrase(words));
  }

  function mainVerb(words, form, passive = false) {
    return verbs.some(verb => verb[form] === words[0] &&
      (!passive || verb.object !== "go") && complement(verb, words.slice(1), passive));
  }

  function auxiliaryPhrase(aux, words, subject, topic) {
    const negative = words[0] === "not";
    let rest = negative ? words.slice(1) : words;
    const ever = rest[0] === "ever";
    if (ever || rest[0] === "already") rest = rest.slice(1);
    const perfect = aux === "has" || aux === "have";
    if (topic && ((perfect && topic !== "perfect") || ["should", "could", "would"].includes(aux))) return null;
    if (topic && ["am", "is", "are"].includes(aux) && !["be", "continuous", "future"].includes(topic)) return null;
    if (topic && ["do", "does"].includes(aux) && topic !== "present") return null;
    if (topic && aux === "did" && topic !== "past") return null;
    if (topic && aux === "will" && topic !== "future") return null;
    if (perfect) {
      if ((aux === "has") !== subject.third) return null;
      if (!topic && !ever && nounPhrase(rest)) return { negative };
      const valid = rest[0] === "been"
        ? mainVerb(rest.slice(1), "participle", true) || mainVerb(rest.slice(1), "ing")
        : mainVerb(rest, "participle");
      return valid ? { negative, perfect: true, ever } : null;
    }
    if (["am", "is", "are"].includes(aux)) {
      if (aux !== (subject.first ? "am" : subject.third ? "is" : "are") || ever) return null;
      const goingTo = rest[0] === "going" && rest[1] === "to" && mainVerb(rest.slice(2), "base");
      const predicate = ["tired", "happy", "ready"].includes(rest.join(" ")) || nounPhrase(rest) ||
        (rest[0] === "afraid" && rest[1] === "of" && nounPhrase(rest.slice(2))) ||
        (rest[0] === "late" && rest[1] === "for" && nounPhrase(rest.slice(2))) ||
        rest.join(" ") === "at home" || (["in", "at"].includes(rest[0]) && nounPhrase(rest.slice(1)));
      const valid = topic === "be" ? predicate : topic === "continuous" ? mainVerb(rest, "ing") :
        topic === "future" ? goingTo : predicate || goingTo || mainVerb(rest, "ing");
      return valid ? { negative } : null;
    }
    if (["do", "does"].includes(aux)) return (aux === "does") === subject.third && mainVerb(rest, "base") ? { negative } : null;
    if (aux === "did") return mainVerb(rest, "base") ? { negative } : null;
    if (["will", "should", "could", "would"].includes(aux)) {
      if (rest[0] === "have") {
        rest = rest.slice(1);
        if (rest[0] === "ever") rest = rest.slice(1);
        const valid = rest[0] === "been"
          ? mainVerb(rest.slice(1), "participle", true) || mainVerb(rest.slice(1), "ing")
          : mainVerb(rest, "participle");
        return valid ? { negative, perfect: true } : null;
      }
      return mainVerb(rest, "base") ? { negative } : null;
    }
    return null;
  }

  function clause(words, kind, topic) {
    const question = kind === "question";
    if (question && words[0] === "where") words = words.slice(1);
    const frontNegative = question && words[1] === "not";
    const start = question ? (frontNegative ? 2 : 1) : 0;
    for (let end = start + 1; end < words.length; end++) {
      const subject = nounPhrase(words.slice(start, end), "subject");
      if (!subject) continue;
      const rest = words.slice(end);
      if (frontNegative) rest.unshift("not");
      const result = question
        ? auxiliaryPhrase(words[0], rest, subject, topic)
        : auxiliaryPhrase(rest[0], rest.slice(1), subject, topic);
      if (result && (question || result.negative === (kind === "negative"))) return result;
      if (!question && kind === "affirmative" &&
          ((!topic || topic === "present") && mainVerb(rest, subject.third ? "third" : "base") ||
          (!topic || topic === "past") && mainVerb(rest, "past"))) return { negative: false };
    }
    return null;
  }

  function adjunct(words) {
    if (["now", "tomorrow", "yesterday", "every morning", "every night", "after lunch", "by train", "by friday"].includes(words.join(" "))) return true;
    return ["in", "at", "before", "after", "without"].includes(words[0]) && Boolean(nounPhrase(words.slice(1)));
  }

  function accepts(words, kind, topic) {
    // Remove only whole edge adjuncts; never reorder the student's sentence.
    const direct = clause(words, kind, topic);
    if (direct) return true;
    if (words.at(-1) === "yet") {
      const inner = clause(words.slice(0, -1), kind, topic);
      if (inner && (inner.perfect || inner.negative || kind === "question")) return true;
    }
    for (let i = 1; i < words.length; i++) {
      if (adjunct(words.slice(0, i)) && accepts(words.slice(i), kind, topic)) return true;
      if (adjunct(words.slice(i)) && accepts(words.slice(0, i), kind, topic)) return true;
    }
    return false;
  }

  const inventory = words => words.reduce((counts, word) => {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, Object.create(null));
  function sameInventory(first, second) {
    const a = inventory(first), b = inventory(second);
    return first.length === second.length && Object.keys(a).every(word => a[word] === b[word]);
  }
  const levelWords = (level, topic = "be") => normalize(topics[topic].levels[level].seeds.flatMap(sentence => sentence.split(" ")));
  function checkSentence(words, kind, topic) {
    return kinds.includes(kind) && accepts(normalize(words).flatMap(word =>
      topic === "perfect" && ["he's", "she's", "it's"].includes(word) ? [word.split("'")[0], "has"] : contractions[word] || [word]
    ), kind, topic);
  }
  function checkLevel(level, rows, topic = "be") {
    const complete = rows.length === 3 && rows.every(row => row.length > 0) &&
      sameInventory(levelWords(level, topic), normalize(rows.flat()));
    return { complete, results: complete ? rows.map((row, i) => checkSentence(row, kinds[i], topic)) : null };
  }

  class Game {
    constructor(topic = "be") {
      if (!Object.hasOwn(topics, topic)) throw new Error("Unknown practice topic");
      this.topic = topic; this.level = 0; this.load();
    }
    load() {
      this.words = levelWords(this.level, this.topic);
      this.bank = this.words.map((_, i) => i);
      for (let i = this.bank.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.bank[i], this.bank[j]] = [this.bank[j], this.bank[i]];
      }
      this.rows = [[], [], []];
      this.checks = 0;
      this.status = "playing";
      this.results = null;
    }
    move(id, destination, beforeId = null) {
      if (this.status !== "playing" || !Number.isInteger(id) || id < 0 || id >= this.words.length ||
          !["bank", 0, 1, 2].includes(destination) || id === beforeId) return false;
      const lists = [this.bank, ...this.rows];
      const source = lists.find(list => list.includes(id));
      const target = destination === "bank" ? this.bank : this.rows[destination];
      if (!source || (beforeId !== null && !target.includes(beforeId))) return false;
      source.splice(source.indexOf(id), 1);
      target.splice(beforeId === null ? target.length : target.indexOf(beforeId), 0, id);
      this.results = null;
      return true;
    }
    clear() {
      if (this.status !== "playing") return;
      this.bank.push(...this.rows.flat());
      this.rows = [[], [], []];
      this.results = null;
    }
    check() {
      if (this.status !== "playing") return { locked: true };
      const checked = checkLevel(this.level, this.rows.map(row => row.map(id => this.words[id])), this.topic);
      if (this.bank.length || !checked.complete) return { complete: false };
      this.checks++;
      this.results = checked.results;
      if (this.results.every(Boolean)) this.status = this.level === levels.length - 1 ? "complete" : "passed";
      else if (this.checks === 3) this.status = "failed";
      return checked;
    }
    next() {
      if (this.status !== "passed") return false;
      this.level++;
      this.load();
      return true;
    }
  }

  const api = { topics, levels, kinds, displayWord, levelWords, checkSentence, checkLevel, Game };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else host.Ramble = api;
})(typeof window !== "undefined" ? window : {});
