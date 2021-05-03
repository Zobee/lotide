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