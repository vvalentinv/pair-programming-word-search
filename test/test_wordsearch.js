const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'LARRY')

    assert.isTrue(result);
  });
  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')


    assert.isTrue(result);
  });
  it("should return false if there is no spoon", function() {
    const result = wordSearch([
    ], 'SEINFELD')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally when letteres reversed", function() {
    const result = wordSearch([
      ['L', 'A', 'U', 'Q', 'F', 'C', 'W', 'A'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['L', 'A', 'U', 'Q', 'F', 'C', 'F', 'Y'],
      ['G', 'R', 'V', 'E', 'T', 'J', 'M', 'H'],
      ['L', 'R', 'E', 'Y', 'S', 'C', 'H', 'W'],
      ['B', 'Y', 'E', 'N', 'E', 'R', 'F', 'B'],
      ['I', 'A', 'P', 'A', 'W', 'T', 'B', 'U'],
      ['S', 'A', 'U', 'K', 'A', 'C', 'D', 'O'],
      ['L', 'A', 'U', 'Q', 'F', 'K', 'Z', 'E']
    ], 'DLEFNIES')

    assert.isTrue(result);
  });
  it("should return true if the word is present vertically when letteres reversed", function() {
    const result = wordSearch([
      ['L', 'A', 'U', 'Q', 'F', 'C', 'W', 'A'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['L', 'A', 'U', 'Q', 'F', 'C', 'F', 'Y'],
      ['G', 'R', 'V', 'E', 'T', 'J', 'M', 'H'],
      ['L', 'R', 'E', 'Y', 'S', 'C', 'H', 'W'],
      ['B', 'Y', 'E', 'N', 'E', 'R', 'F', 'B'],
      ['I', 'A', 'P', 'A', 'W', 'T', 'B', 'U'],
      ['S', 'A', 'U', 'K', 'A', 'C', 'D', 'O'],
      ['L', 'A', 'U', 'Q', 'F', 'K', 'Z', 'E']
    ], 'LARRY')

    assert.isTrue(result);
  });
});
