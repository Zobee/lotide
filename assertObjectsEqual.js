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

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1)

  if(obj1Keys.length !== Object.keys(object2).length){
    return false
  }
  
  for(let key of obj1Keys){
    if(Array.isArray(object1[key])){
      if(!eqArrays(object1[key], object2[key])){
        return false
      }
    } else if(object1[key] !== object2[key]) {
      return false
    }
  }
  return true
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(eqObjects(actual, expected) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
}

const obj1 = {day: "Wednesday", date: "April 28th", isWeekday: true}
const obj2 = {day: "Wednesday", date: "April 28th", isWeekday: true}
const obj3 = {day: "Saturday", date: "April 28th", isWeekday: false}

assertObjectsEqual(obj1, obj2) // should pass
assertObjectsEqual(obj1, obj3) // should fail