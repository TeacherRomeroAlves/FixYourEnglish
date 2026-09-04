(function (host) {
  "use strict";

  const words = [
    { word: "ballet", flag: "🇫🇷", destination: "France", language: "French", meaning: "A theatrical style of dance with carefully controlled movements.", context: "She has practiced _____ since she was six years old.", original: "It developed from a term meaning a little dance." },
    { word: "piano", flag: "🇮🇹", destination: "Italy", language: "Italian", meaning: "A large musical instrument played by pressing black and white keys.", context: "He plays the _____ beautifully at school concerts.", original: "Its longer early name described an instrument that could play both softly and loudly." },
    { word: "kindergarten", flag: "🇩🇪", destination: "Germany", language: "German", meaning: "A class or school for young children before primary school.", context: "Their youngest child starts _____ this year.", original: "Literally children's garden." },
    { word: "robot", flag: "🇨🇿", destination: "Czechia", language: "Czech", meaning: "A machine programmed to perform tasks automatically.", context: "The factory uses a _____ to assemble small parts.", original: "The source term meant forced labor or compulsory work." },
    { word: "karaoke", flag: "🇯🇵", destination: "Japan", language: "Japanese", meaning: "Entertainment in which people sing along to recorded music.", context: "We sang our favorite songs at a _____ bar.", original: "Literally empty orchestra." },
    { word: "shampoo", flag: "🇮🇳", destination: "India", language: "Hindi", meaning: "A liquid product used for washing hair.", context: "This _____ is made especially for dry hair.", original: "It began as an instruction meaning press or massage." },
    { word: "sauna", flag: "🇫🇮", destination: "Finland", language: "Finnish", meaning: "A small hot room used for relaxation and sweating.", context: "After swimming, they relaxed in the hotel _____.", original: "The Finnish name for the traditional heated room itself." },
    { word: "fjord", flag: "🇳🇴", destination: "Norway", language: "Norwegian", meaning: "A long, narrow sea inlet between steep cliffs.", context: "The boat traveled through a spectacular _____.", original: "Related to words meaning a place used for crossing or traveling." },
    { word: "paprika", flag: "🇭🇺", destination: "Hungary", language: "Hungarian", meaning: "A red spice made from dried and ground peppers.", context: "Add a teaspoon of _____ to give the soup color.", original: "A Hungarian word for pepper, connected to South Slavic forms." },
    { word: "marmalade", flag: "🇵🇹", destination: "Portugal", language: "Portuguese", meaning: "A sweet fruit preserve, especially one made from citrus fruit.", context: "She spread orange _____ on her toast.", original: "It originally referred to a preserve made from quince." },
    { word: "cookie", flag: "🇳🇱", destination: "The Netherlands", language: "Dutch", meaning: "A small, flat, sweet baked food.", context: "Would you like a chocolate-chip _____?", original: "The source word meant little cake." },
    { word: "chocolate", flag: "🇲🇽", destination: "Mexico", language: "Nahuatl", meaning: "A sweet food made from roasted and ground cacao seeds.", context: "She ordered a slice of _____ cake.", original: "Its deeper history is debated, but English received it through Spanish from an Indigenous Mesoamerican word." },
    { word: "boomerang", flag: "🇦🇺", destination: "Australia", language: "Dharug", meaning: "A curved throwing object, some forms of which return to the thrower.", context: "He learned how to throw a _____ safely.", original: "Borrowed from an Aboriginal language of the Sydney region." },
    { word: "yogurt", flag: "🇹🇷", destination: "Türkiye", language: "Turkish", meaning: "A thick, slightly sour food made by fermenting milk.", context: "I usually eat _____ with fruit for breakfast.", original: "It is connected with a verb meaning to knead, curdle, or thicken." },
    { word: "democracy", flag: "🇬🇷", destination: "Greece", language: "Ancient Greek", meaning: "A system of government in which people choose their representatives by voting.", context: "Free elections are an important part of a _____.", original: "From demos, people, and kratos, rule or power." },
    { word: "kiwi", flag: "🇳🇿", destination: "New Zealand", language: "Maori", meaning: "A small flightless New Zealand bird, or informally a New Zealander.", context: "The nocturnal _____ is a national symbol of New Zealand.", original: "The Maori name for the native bird." },
    { word: "tapioca", flag: "🇧🇷", destination: "Brazil", language: "Tupi", meaning: "A starch made from cassava, often used in puddings or chewy pearls.", context: "The dessert contains sweet _____ pearls.", original: "The source term referred to cassava starch or the process of preparing it." },
    { word: "kayak", flag: "🇨🇦", destination: "Canada", language: "Inuktitut", meaning: "A narrow, lightweight boat moved with a double-ended paddle.", context: "We crossed the calm lake in a _____.", original: "From an Inuit-language word for a hunter's small skin-covered boat." },
    { word: "tea", flag: "🇨🇳", destination: "China", language: "Chinese (Min Nan)", meaning: "A hot drink made by placing dried leaves in water.", context: "Would you like milk in your _____?", original: "Its source name referred to the leaves and the drink made from them." },
    { word: "patio", flag: "🇪🇸", destination: "Spain", language: "Spanish", meaning: "A paved outdoor area beside a house where people can sit.", context: "We had lunch outside on the _____.", original: "It referred to an inner courtyard or open area in a building." },
    { word: "llama", flag: "🇵🇪", destination: "Peru", language: "Quechua", meaning: "A South American animal related to the camel and often used to carry loads.", context: "The _____ carried supplies along the mountain trail.", original: "The Indigenous source word was the name of the animal." },
    { word: "coffee", flag: "🇾🇪", destination: "Yemen", language: "Arabic", meaning: "A dark drink made from roasted and ground beans.", context: "I drink a cup of _____ every morning.", original: "The source term named the drink and was associated with appetite or stimulation." },
    { word: "caravan", flag: "🇮🇷", destination: "Iran", language: "Persian", meaning: "A group of travelers or vehicles journeying together, or a vehicle used as a mobile home.", context: "The _____ crossed the desert together for safety.", original: "It referred to a company of people traveling together." },
    { word: "whisky", aliases: ["whiskey"], flag: "🇬🇧", destination: "Scotland", language: "Scottish Gaelic", meaning: "A strong alcoholic drink made from fermented grain.", context: "The Scottish distillery produces single-malt _____.", original: "The older expression meant water of life." },
    { word: "banana", flag: "🇸🇳", destination: "Senegal", language: "Wolof", meaning: "A long, curved fruit with yellow skin and soft flesh.", context: "She sliced a _____ onto her cereal.", original: "The African source word was also the name of the fruit." },
    { word: "barbecue", flag: "🇩🇴", destination: "Dominican Republic", language: "Taino", meaning: "A meal or social event where food is cooked outdoors over a fire.", context: "We are having a _____ in the backyard on Sunday.", original: "It described a wooden framework used for cooking or sleeping." },
    { word: "safari", flag: "🇹🇿", destination: "Tanzania", language: "Swahili", meaning: "A journey, especially one made to observe wild animals.", context: "They saw elephants and lions during their _____.", original: "The source word simply meant journey." },
    { word: "pizza", flag: "🇮🇹", destination: "Italy", language: "Italian", meaning: "A flat, round baked dish usually topped with tomato sauce, cheese, and other ingredients.", context: "We ordered a large cheese _____ for dinner.", original: "Its earliest history is uncertain; the source name referred to a type of flat baked food." },
    { word: "zombie", flag: "🇭🇹", destination: "Haiti", language: "Haitian Creole", meaning: "In stories, a dead person brought back to life without independent thought.", context: "The horror film is about a _____ walking through the city.", original: "Earlier related terms referred to a spirit, ghost, or reanimated person." },
    { word: "bagel", flag: "🇵🇱", destination: "Poland", language: "Yiddish", meaning: "A firm, ring-shaped bread roll that is boiled before it is baked.", context: "He ordered a _____ with cream cheese for breakfast.", original: "The source name is related to a word meaning ring or bracelet." }
  ];

  const normalize = value => String(value || "").trim().toLowerCase().replace(/[^a-z]/g, "");
  const shuffle = (items, random = Math.random) => {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const target = Math.floor(random() * (index + 1));
      [copy[index], copy[target]] = [copy[target], copy[index]];
    }
    return copy;
  };

  const selectStops = (items, count, random = Math.random) => {
    const selected = [];
    const destinations = new Set();
    shuffle(items, random).forEach(item => {
      if (selected.length < count && !destinations.has(item.destination)) {
        selected.push(item);
        destinations.add(item.destination);
      }
    });
    return selected;
  };

  class VoyageGame {
    constructor(random = Math.random) {
      this.stops = selectStops(words, 10, random);
      this.total = 1000;
      this.stopIndex = 0;
      this.revealed = new Set();
      this.clues = new Set();
      this.completed = [];
      this.over = false;
      this.endedEarly = false;
    }

    get current() { return this.stops[this.stopIndex]; }
    get finished() { return this.stopIndex >= this.stops.length; }

    mask() {
      return [...this.current.word].map((letter, index) => this.revealed.has(index) ? letter.toUpperCase() : "_");
    }

    clue(type, random = Math.random) {
      const costs = { meaning: 10, context: 10, original: 15, letter: 10 };
      if (!costs[type]) return null;
      if (type !== "letter" && this.clues.has(type)) return null;
      if (type === "letter") {
        const hidden = [...this.current.word].map((_, index) => index).filter(index => !this.revealed.has(index));
        if (hidden.length <= 2) return null;
        this.revealed.add(hidden[Math.floor(random() * hidden.length)]);
      } else this.clues.add(type);
      this.total = Math.max(0, this.total - costs[type]);
      if (this.total === 0) this.over = true;
      return type;
    }

    guess(value) {
      const accepted = [this.current.word, ...(this.current.aliases || [])].map(normalize);
      if (accepted.includes(normalize(value))) {
        const result = { ...this.current };
        this.completed.push(result);
        return { correct: true, result };
      }
      this.total = Math.max(0, this.total - 5);
      if (this.total === 0) this.over = true;
      return { correct: false, gameOver: this.over };
    }

    next() {
      if (this.completed.length <= this.stopIndex) return false;
      this.stopIndex += 1;
      this.revealed = new Set();
      this.clues = new Set();
      return true;
    }

    stop() {
      this.endedEarly = true;
      this.over = true;
    }
  }

  const api = { words, normalize, shuffle, selectStops, VoyageGame };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else host.VocabularyVoyage = api;
})(typeof window !== "undefined" ? window : {});
