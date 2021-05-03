const without = (source, itemsToRemove) => {
  return source.filter(val => !itemsToRemove.includes(val));
};

module.exports = without