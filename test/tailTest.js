const tail = require('../tail');
const assertEqual = require("../assertEqual");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check each value in the array
const nums = [1,2,3,4,5];
let numTail = tail(nums);

for (let i = 0; i < numTail.length; i++) {
  assertEqual(numTail[i], nums[i + 1]);
}