//Function takes in an array of letts and searches for the word.
const wordSearch = (letters, word) => {
  if (!letters.length) return false;

  const horizontalJoin = joinToString(letters);
  const horizontalJoinReversed = joinToString(reverseLettersInStrings(letters));

  if (isWordInSplitArray(horizontalJoin, word) || isWordInSplitArray(horizontalJoinReversed))
    return true;

  const verticalJoin = joinToString(transposeMatrix(letters));
  const verticalJoinReversed = joinToString(reverseLettersInStrings(transposeMatrix(letters)));

  if (isWordInSplitArray(verticalJoin, word) || isWordInSplitArray(verticalJoinReversed))
    return true;

  return false;
}
//Reverse letters in an array of strings.
const reverseLettersInStrings = (arrayOfArraysOfLetters) => {
  const reversedString = []
  for (array of arrayOfArraysOfLetters) {
    reversedString.push(array.reverse());
  }
  return reversedString;
}
//Search for word in array of letters.
const isWordInSplitArray = (arrayOfLetters, word) => {
  for (letter of arrayOfLetters) {
    if (letter.includes(word))
      return true;
  }
}
//Join letters to strings.
const joinToString = (array) => array.map(ls => ls.join(''));
//Transpose matrix.
const transposeMatrix = (matrix) => {
  const resultMatrix = [];
  for (const ind in matrix[0]) {
    const newRow = [];
    for (const arr of matrix) {
      newRow.push(arr[ind]);
    }
    resultMatrix.push(newRow);
  }
  return resultMatrix;
}

module.exports = wordSearch
