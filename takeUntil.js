const takeUntil = function(array, callback) {
  const newArr = [];
  for (let val of array) {
    if (callback(val)) {
      return newArr;
    } else {
      newArr.push(val);
    }
  }
  return newArr;
};

//Alternate solution with arr.slice()
// const takeUntil = function(array, callback) {
//   let end = 0;
//   for (let val of array) {
//     if(callback(val)){
//       return array.slice(0, end)
//     } else {
//       end++;
//     }
//   }
//   return array.slice(0, end)
// };

module.exports = takeUntil;
