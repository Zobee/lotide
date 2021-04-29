const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let valA = arr1[i];
    let valB = arr2[i];
    if (valA !== valB) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  console.log(eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const middle = arr => {
  if (arr.length < 2) {
    return [];
  }
  let midInd = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? arr.slice(midInd - 1, midInd + 1) : arr.slice(midInd, midInd + 1);
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(["a", "b", "c", 'd']), ['b', 'c']);
assertArraysEqual(middle([1, true, "tree", 4, false, 6, "heaven"]), [4]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10,11,12]), [6, 7]);