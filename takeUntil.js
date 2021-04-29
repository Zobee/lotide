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

const takeUntil = function(array, callback) {
  const newArr = [];
  for (let val of array) {
    if (callback(val)) {
      return newArr;
    } else {
      newArr.push(val);
    }
  }
  return newArr;
};

//Alternate solution with arr.slice()
// const takeUntil = function(array, callback) {
//   let end = 0;
//   for (let val of array) {
//     if(callback(val)){
//       return array.slice(0, end)
//     } else {
//       end++;
//     }
//   }
//   return array.slice(0, end)
// };

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
