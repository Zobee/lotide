const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let valA = arr1[i];
    let valB = arr2[i];
    if(Array.isArray(valA)){
      if(!eqArrays(valA, valB)){
        return false
      }
    } else if (valA !== valB) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;