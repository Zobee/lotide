const middle = arr => {
  if (arr.length < 2) {
    return [];
  }
  let midInd = Math.floor(arr.length / 2);
  return arr.length % 2 === 0 ? arr.slice(midInd - 1, midInd + 1) : arr.slice(midInd, midInd + 1);
};

module.exports = middle