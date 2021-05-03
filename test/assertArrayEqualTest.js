const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1,2,3], [1,2,3]) //Pass
assertArraysEqual([], []) //Pass
assertArraysEqual([[1]], [[1]]) //Pass
assertArraysEqual([1,"two",3,false,"five"],[1,"two",3,false,"five"]) //Pass
assertArraysEqual([1,2,[3],4,5], [1,2,3,4,5]) //Fail
assertArraysEqual([],[undefined]) //Fail