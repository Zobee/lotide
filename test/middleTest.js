const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("Should return an empty array if input length < 3", () => {
    assert.deepEqual(middle([1]), [])
  })
  it("Should return a single element if input length is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  })
  it("Should return two elements if input length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
  it("Should work with different typed values", () => {
    assert.deepEqual(middle([1, true, "tree", 4, false, 6, "heaven"]), [4]);
  })
  it("Should work with a very large input", () => {
    let arr = []
    for(let i = 1; i < 10000; i++){
      arr.push(i);
    }
    assert.deepEqual(middle(arr), [5000])
  })
})