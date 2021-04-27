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