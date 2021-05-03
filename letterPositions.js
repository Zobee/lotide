const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let currChar = sentence[i];
    if (currChar !== " ") {
      if (results[currChar]) {
        results[currChar].push(i);
      } else {
        results[currChar] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;