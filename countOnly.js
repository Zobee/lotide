// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const countObj = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (countObj[item]) {
        countObj[item]++;
      } else {
        countObj[item] = 1;
      }
    }
  }

  return countObj;
};

module.exports = countOnly;