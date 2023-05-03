/* exported reverseWord */
function reverseWord(word) {
  let returnedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    returnedWord += word[i];
  }
  return returnedWord;
}
