const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(["a", "b", "c", 'd']), ['b', 'c']);
assertArraysEqual(middle([1, true, "tree", 4, false, 6, "heaven"]), [4]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10,11,12]), [6, 7]);