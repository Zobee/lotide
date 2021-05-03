const map = (arr, callback) => {
  const newArr = [];
  for (let val of arr) {
    newArr.push(callback(val));
  }
  return newArr;
};

module.exports = map;