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
    if (valA !== valB) {
      return false;
    }
  }
  return true;
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);

  if (obj1Keys.length !== Object.keys(object2).length) {
    return false;
  }
  
  for (let key of obj1Keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object') {
      if(!eqObjects(object1[key], object2[key])){
        return false
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true
// assertEqual(ab["a"], ab["a"])
// assertEqual(ab["b"], ab["b"])

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false
// assertEqual(ab["a"], abc["a"])
// assertEqual(ab["b"], abc["b"])
// assertEqual(ab["c"], abc["c"])

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// const cd3 = { c: "1", d: 2};
// console.log(eqObjects(cd, cd3)); // => false

//console.log(eqObjects({}, {})) //true
// console.log(eqObjects({ a: 1, b: 2 }, { a: 1, b: 2 })) // => true
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false

console.log(eqObjects({ a: 1, b: {c: {d : { e : 1}}}}, { a: 1, b: {c: {d : { e : 1}}}})) //true
console.log(eqObjects({ a: 1, b: {c: {d : { f : 2}}}}, { a: 1, b: {c: {d : { e : 1}}}})) //false
console.log(eqObjects({ a: {1 : {2 : {3 : "a"}}}, b: {c: {d : { e : 1}}}}, { a: {1 : {2 : {3 : "a"}}}, b: {c: {d : { e : 1}}}})) // true
console.log(eqObjects({ a: {1 : {2 : {a : "a"}}}, b: {c: {d : { e : 1}}}}, { a: {1 : {2 : {3 : "a"}}}, b: {c: {d : { 3 : "a"}}}})) // false
console.log(eqObjects({a: {1 : "hello"}, b: {2: "bonjour"}, c: {3: "Buenos Dias"}, d: {4: "konichiwa"}}, {a: {1 : "hello"}, b: {2: "bonjour"}, c: {3: "Buenos Dias"}, d: {4: "konichiwa"}})) //true

const frankObj = {
  name: "Frank",
  skills: {hiking: 4, swimming: 3, biking: 5, running: 0}
}

const otherFrankObj = {
  name: "Frank",
  skills: {hiking: 4, swimming: 3, biking: 5, running: 0}
}

const emmaObj = {
  name: "Emma",
  skills: {hiking: 4, swimming: 3, biking: 5, running: 0}
}

console.log(eqObjects(frankObj, otherFrankObj)) //true
console.log(eqObjects(frankObj, emmaObj)) //false
console.log(eqObjects(frankObj.skills, emmaObj.skills)) //true