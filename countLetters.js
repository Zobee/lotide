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

module.exports = countLetters;