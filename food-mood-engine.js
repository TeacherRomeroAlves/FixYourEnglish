(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.FoodMoodEngine = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  const words = [
    {word:"apple",category:"Fruit",definition:"A crisp, round fruit that may be red, green, or yellow.",example:"She packed an ___ in her lunchbox.",context:"She packed an apple in her lunchbox.",countability:"countable"},
    {word:"banana",category:"Fruit",definition:"A long, curved fruit with a thick yellow skin.",example:"He ate a ___ before the race.",context:"He ate a banana before the race.",countability:"countable"},
    {word:"orange",category:"Fruit",definition:"A round citrus fruit with a bright-colored peel.",example:"I peeled an ___ for breakfast.",context:"I peeled an orange for breakfast.",countability:"countable"},
    {word:"pear",category:"Fruit",definition:"A sweet fruit with a rounded bottom and narrow top.",example:"There is a ripe ___ in the bowl.",context:"There is a ripe pear in the bowl.",countability:"countable"},
    {word:"peach",category:"Fruit",definition:"A soft, juicy fruit with fuzzy skin and a stone inside.",example:"She sliced a ___ for dessert.",context:"She sliced a peach for dessert.",countability:"countable"},
    {word:"lemon",category:"Fruit",definition:"A sour yellow citrus fruit often used in drinks and cooking.",example:"Add a ___ to the shopping basket.",context:"Add a lemon to the shopping basket.",countability:"countable"},
    {word:"pineapple",category:"Fruit",definition:"A large tropical fruit with rough skin and sweet yellow flesh.",example:"They cut a ___ into small pieces.",context:"They cut a pineapple into small pieces.",countability:"countable"},
    {word:"watermelon",category:"Fruit",definition:"A large fruit with green skin and juicy red flesh.",example:"We shared a ___ at the picnic.",context:"We shared a watermelon at the picnic.",countability:"countable"},
    {word:"strawberry",category:"Fruit",definition:"A small red fruit with tiny seeds on its surface.",example:"A ___ decorated the top of the dessert.",context:"A strawberry decorated the top of the dessert.",countability:"countable"},
    {word:"avocado",category:"Fruit",definition:"A green fruit with creamy flesh and one large stone.",example:"I added an ___ to the salad.",context:"I added an avocado to the salad.",countability:"countable"},
    {word:"carrot",category:"Vegetable",definition:"A crunchy orange root vegetable.",example:"The rabbit ate a ___ from the garden.",context:"The rabbit ate a carrot from the garden.",countability:"countable"},
    {word:"potato",category:"Vegetable",definition:"A round root vegetable commonly baked, boiled, or fried.",example:"We baked a ___ with herbs.",context:"We baked a potato with herbs.",countability:"countable"},
    {word:"tomato",category:"Vegetable",definition:"A soft red food commonly used in salads and sauces.",example:"He sliced a ___ for the sandwich.",context:"He sliced a tomato for the sandwich.",countability:"countable"},
    {word:"onion",category:"Vegetable",definition:"A round vegetable with layers and a strong smell or flavor.",example:"The recipe needs an ___, finely chopped.",context:"The recipe needs an onion, finely chopped.",countability:"countable"},
    {word:"cucumber",category:"Vegetable",definition:"A long green vegetable with cool, watery flesh.",example:"She put a ___ in the refrigerator.",context:"She put a cucumber in the refrigerator.",countability:"countable"},
    {word:"pepper",category:"Vegetable",definition:"A hollow vegetable that may be green, red, yellow, or orange.",example:"Dice a red ___ for the salad.",context:"Dice a red pepper for the salad.",countability:"countable"},
    {word:"egg",category:"Breakfast",definition:"An oval food laid by a bird and commonly eaten cooked.",example:"I fried an ___ for breakfast.",context:"I fried an egg for breakfast.",countability:"countable"},
    {word:"pancake",category:"Breakfast",definition:"A thin, flat cake cooked in a pan.",example:"He poured syrup over a ___ on his plate.",context:"He poured syrup over a pancake on his plate.",countability:"countable"},
    {word:"sandwich",category:"Meal",definition:"Food placed between two slices of bread.",example:"She made a ___ for the train journey.",context:"She made a sandwich for the train journey.",countability:"countable"},
    {word:"burger",category:"Meal",definition:"A cooked patty served inside a round bread roll.",example:"He ordered a ___ without onions.",context:"He ordered a burger without onions.",countability:"countable"},
    {word:"taco",category:"Meal",definition:"A folded or rolled tortilla filled with meat, beans, or vegetables.",example:"I tried a spicy ___ at the market.",context:"I tried a spicy taco at the market.",countability:"countable"},
    {word:"sausage",category:"Meat",definition:"Seasoned meat shaped inside a long tube-like casing.",example:"They grilled a ___ for each guest.",context:"They grilled a sausage for each guest.",countability:"countable"},
    {word:"muffin",category:"Baked food",definition:"A small individual cake or bread baked in a cup-shaped container.",example:"She bought a blueberry ___ at the cafe.",context:"She bought a blueberry muffin at the cafe.",countability:"countable"},
    {word:"cookie",category:"Dessert",definition:"A small, flat, sweet baked food.",example:"The child chose a chocolate ___ after lunch.",context:"The child chose a chocolate cookie after lunch.",countability:"countable"},
    {word:"rice",category:"Grain",definition:"Small white or brown grains cooked as a staple food.",example:"We usually serve ___ with beans.",context:"We usually serve rice with beans.",countability:"uncountable"},
    {word:"bread",category:"Baked food",definition:"Food made from flour, water, and yeast, then baked.",example:"Could you buy some ___ for breakfast?",context:"Could you buy some bread for breakfast?",countability:"uncountable"},
    {word:"cheese",category:"Dairy",definition:"A food made from milk that may be soft or firm.",example:"She added some ___ to the pasta.",context:"She added some cheese to the pasta.",countability:"uncountable"},
    {word:"milk",category:"Dairy",definition:"A white liquid used as a drink and in cooking.",example:"There is some ___ in the refrigerator.",context:"There is some milk in the refrigerator.",countability:"uncountable"},
    {word:"butter",category:"Dairy",definition:"A soft yellow dairy product used for spreading or cooking.",example:"Spread a little ___ on the toast.",context:"Spread a little butter on the toast.",countability:"uncountable"},
    {word:"yogurt",category:"Dairy",definition:"A thick, slightly sour food made by fermenting milk.",example:"I eat ___ with fruit in the morning.",context:"I eat yogurt with fruit in the morning.",countability:"uncountable"},
    {word:"coffee",category:"Beverage",definition:"A dark drink made from roasted and ground beans.",example:"I do not drink ___ after dinner.",context:"I do not drink coffee after dinner.",countability:"uncountable"},
    {word:"tea",category:"Beverage",definition:"A hot drink made by placing dried leaves in water.",example:"Would you like some ___ with breakfast?",context:"Would you like some tea with breakfast?",countability:"uncountable"},
    {word:"juice",category:"Beverage",definition:"A drink made from the liquid of fruit or vegetables.",example:"The children drank some ___ at lunch.",context:"The children drank some juice at lunch.",countability:"uncountable"},
    {word:"water",category:"Beverage",definition:"A clear liquid essential for life and commonly served as a drink.",example:"Please drink plenty of ___ today.",context:"Please drink plenty of water today.",countability:"uncountable"},
    {word:"sugar",category:"Ingredient",definition:"Sweet crystals added to food and drinks.",example:"I take my coffee without ___.",context:"I take my coffee without sugar.",countability:"uncountable"},
    {word:"salt",category:"Ingredient",definition:"White crystals used to season and preserve food.",example:"This soup needs less ___.",context:"This soup needs less salt.",countability:"uncountable"},
    {word:"flour",category:"Ingredient",definition:"A fine powder made from grain and used in baking.",example:"We need more ___ to make the dough.",context:"We need more flour to make the dough.",countability:"uncountable"},
    {word:"honey",category:"Ingredient",definition:"A thick, sweet substance made by bees.",example:"She puts a little ___ in her tea.",context:"She puts a little honey in her tea.",countability:"uncountable"},
    {word:"pasta",category:"Meal",definition:"An Italian food made from dough and formed into many shapes.",example:"We cooked ___ with tomato sauce.",context:"We cooked pasta with tomato sauce.",countability:"uncountable"},
    {word:"soup",category:"Meal",definition:"A liquid dish made by cooking vegetables, meat, or other ingredients.",example:"There is some hot ___ on the stove.",context:"There is some hot soup on the stove.",countability:"uncountable"},
    {word:"chicken",category:"Meat",definition:"Meat from a common farm bird.",example:"We ate ___ with rice for dinner.",context:"We ate chicken with rice for dinner.",countability:"uncountable"},
    {word:"beef",category:"Meat",definition:"Meat that comes from cattle.",example:"The restaurant does not serve ___.",context:"The restaurant does not serve beef.",countability:"uncountable"},
    {word:"fish",category:"Seafood",definition:"The flesh of an animal that lives in water, eaten as food.",example:"We had grilled ___ for lunch.",context:"We had grilled fish for lunch.",countability:"uncountable"},
    {word:"cereal",category:"Breakfast",definition:"Processed grains commonly eaten with milk in the morning.",example:"He eats ___ before going to school.",context:"He eats cereal before going to school.",countability:"uncountable"},
    {word:"chocolate",category:"Dessert",definition:"A sweet brown food made from cocoa beans.",example:"She does not eat much ___.",context:"She does not eat much chocolate.",countability:"uncountable"},
    {word:"cake",category:"Dessert",definition:"A sweet baked food often served for celebrations.",example:"Would you like some ___ after dinner?",context:"Would you like some cake after dinner?",countability:"uncountable"},
    {word:"ice cream",category:"Dessert",definition:"A sweet frozen dairy food available in many flavors.",example:"We had some ___ at the beach.",context:"We had some ice cream at the beach.",countability:"uncountable"},
    {word:"olive oil",category:"Ingredient",definition:"A cooking liquid pressed from a small Mediterranean fruit.",example:"Add a little ___ to the salad.",context:"Add a little olive oil to the salad.",countability:"uncountable"}
  ];

  const lettersIn = (word) => new Set(word.toUpperCase().match(/[A-Z]/g) || []);
  const maskWord = (word, revealed) => [...word.toUpperCase()].map((character) => {
    if (!/[A-Z]/.test(character)) return character === " " ? " " : character;
    return revealed.has(character) ? character : "_";
  });
  const isSolved = (word, revealed) => [...lettersIn(word)].every((letter) => revealed.has(letter));
  const unrevealedLetters = (word, revealed) => [...lettersIn(word)].filter((letter) => !revealed.has(letter));
  const pickWord = (previousWord, random = Math.random) => {
    const choices = words.filter((item) => item.word !== previousWord);
    return choices[Math.floor(random() * choices.length)];
  };

  return {words, maskWord, isSolved, unrevealedLetters, pickWord};
});
