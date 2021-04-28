const eqArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length){
    return false
  }
  for(let i = 0; i < arr1.length; i++){
    let valA = arr1[i]
    let valB = arr2[i]
    if (valA !== valB){
      return false
    }
  }
  return true
}

const assertArraysEqual = (actual, expected) => {
  console.log(eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const letterPositions = function(sentence) {
  const results = {};

  for(let i = 0; i < sentence.length; i++){
    let currChar = sentence[i]
    if(currChar !== " "){
      if(results[currChar]){
        results[currChar].push(i)
      } else {
        results[currChar] = [i]
      }
    }
  }
  return results;
};

const res = letterPositions("hello")

assertArraysEqual(res["h"], [0])
assertArraysEqual(res["e"], [1])
assertArraysEqual(res["l"], [2,3])
assertArraysEqual(res["o"], [4])
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("gimme my indexes").m, [2,3,6]);