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


const without = (source, itemsToRemove) => {
  let filteredArray = [];
  for(let val of source){
    if(!itemsToRemove.includes(val)){
      filteredArray.push(val)
    }
  }
  return filteredArray
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without([1], []), [1])
assertArraysEqual(without([1], [1]), [])
assertArraysEqual(without([], [1]), [])

let arr = [1,2,3,4,5]
without(arr, [2,3])
assertArraysEqual(arr, [1,2,3,4,5])