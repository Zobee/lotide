const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  const countObj = {};

  for (let char of str) {
    if (char !== " ") {
      if (countObj[char]) {
        countObj[char]++;
      } else {
        countObj[char] = 1;
      }
    }
  }
  return countObj;
};

console.log(countLetters("lighthouse in the house"));