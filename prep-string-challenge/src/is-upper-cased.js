/* exported isUpperCased */
function isUpperCased(word) {
  let returnedLogic = true;
  for (let i = 0; i <= word.length - 1; i++) {
    if (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122) {
      // check UTF-code (ASCII code) of each character in the parameter word
      returnedLogic = false;
      break;
    }
  }
  return returnedLogic;
}
