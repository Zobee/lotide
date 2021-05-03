assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1], []), [1]);
assertArraysEqual(without([1], [1]), []);
assertArraysEqual(without([], [1]), []);

let arr = [1,2,3,4,5];
without(arr, [2,3]);
assertArraysEqual(arr, [1,2,3,4,5]);