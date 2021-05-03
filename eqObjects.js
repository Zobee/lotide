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

module.exports = eqObjects;