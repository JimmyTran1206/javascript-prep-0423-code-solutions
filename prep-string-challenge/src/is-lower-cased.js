/* exported isLowerCased */
function isLowerCased(word) {
  let returnedLogic = true;
  for (let i = 0; i <= word.length - 1; i++) {
    if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
      // check UTF-code (ASCII code) of each character in the parameter word
      returnedLogic = false;
      break;
    }
  }
  return returnedLogic;
}
