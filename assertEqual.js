const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("What's up?", "What's up?");
assertEqual(10, 20);