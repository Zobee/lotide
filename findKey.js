const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

let res = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(res, 'noma');

const favFoods = {
  fruit: "banana",
  main: "steak",
  side: "sweet potato fries",
  drink: "moscow mule"
};

assertEqual(findKey(favFoods, val => val === "sweet potato fries"), "side");

const emptyObj = {};

assertEqual(findKey(emptyObj, val => val === "someVal"), undefined);

const students = {
  Alice: {grades: [90, 55, 70, 100], age: 27},
  Bob: {grades: [100, 80, 60, 40], age: 19},
  Camila: {grades: [47, 68, 25, 12], age: 46},
  Den: {grades: [60, 55, 75, 83], age: 33},
  Enrique: {grades: [80, 72, 90, 88], age: 50},
};

assertEqual(findKey(students, val => val.age === 33), "Den");
assertEqual(findKey(students, val => val.grades.includes(100)), "Alice");