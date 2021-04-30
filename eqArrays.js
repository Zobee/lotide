const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let valA = arr1[i];
    let valB = arr2[i];
    if(Array.isArray(valA)){
      if(!eqArrays(valA, valB)){
        return false
      }
    } else if (valA !== valB) {
      return false;
    }
  }
  return true;
};


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false);
// assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
// assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false);
// assertEqual(eqArrays([], []), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

//Recursive
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)
assertEqual(eqArrays([[[[2]], 3], [4]], [[[[2]], 3], [4]]), true)
assertEqual(eqArrays([[[[[[1]]]]]],[[[[[1]]]]]), false)
assertEqual(eqArrays([[[[[[[[[[1]]]]]]]]]],[[[[[[[[[[1]]]]]]]]]]), true)
assertEqual(eqArrays([1,[2,[3,[4]]]], [1,2,3,4]), false)