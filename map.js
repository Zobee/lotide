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

const map = (arr, callback) => {
  const newArr = [];
  for (let val of arr) {
    newArr.push(callback(val));
  }
  return newArr;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

//Test Case #1: Performing a math operation on each array elem
const nums = [2,4,6,8,10];
const results2 = map(nums, num => num * 10);
assertArraysEqual(results2, [20, 40, 60, 80, 100]);

//Test Case #2: Performing a string operation
const pets = ["dog", "cat", "bird", "ocelot"];
const myPets = map(pets, pet => "This is my " + pet);
assertArraysEqual(myPets, [ 'This is my dog', 'This is my cat', 'This is my bird','This is my ocelot' ]);

//Test Case #3: Finding an index
const numList = [[1,3,5], [1,2,3],[8,6,7,5,3,0,9]];
const numInds = map(numList, num => num.indexOf(3));
assertArraysEqual(numInds, [1,2,4]);