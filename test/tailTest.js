const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("Should not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"])
  });

  it("Should return every value in the array minus the first element", () => {
    const nums = [1,2,3,4,5];
    let numTail = tail(nums);

    assert.deepEqual(numTail, [2,3,4,5])
  });

  it("Should return an empty array if input array's length is <= 1", () => {
    const one = [1];
    assert.deepEqual(tail(one), [])
  })
})