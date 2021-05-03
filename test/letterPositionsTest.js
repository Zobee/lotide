const res = letterPositions("hello");

assertArraysEqual(res["h"], [0]);
assertArraysEqual(res["e"], [1]);
assertArraysEqual(res["l"], [2,3]);
assertArraysEqual(res["o"], [4]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("gimme my indexes").m, [2,3,6]);