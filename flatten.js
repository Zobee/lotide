const flatten = arr => {
  let flatArr = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      for (let nestedVal of val) {
        flatArr.push(nestedVal);
      }
    } else {
      flatArr.push(val);
    }
  }
  return flatArr;
};

module.exports = flatten;