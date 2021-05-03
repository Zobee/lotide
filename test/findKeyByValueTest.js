const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const favFoods = {
  fruit: "banana",
  main: "steak",
  side: "sweet potato fries",
  drink: "moscow mule"
};

assertEqual(findKeyByValue(favFoods, "sweet potato fries"), "side");
assertEqual(findKeyByValue(favFoods, "moscow mule"), "drink");
assertEqual(findKeyByValue(favFoods, "cheesecake"), undefined);

const emptyObj = {};

assertEqual(findKeyByValue(emptyObj, "someVal"), undefined);