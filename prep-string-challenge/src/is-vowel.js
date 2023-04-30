/* exported isVowel */
function isVowel(char) {
  let returnedLogic = false;
  switch (char.toLowerCase()) {
    case 'i':
    case 'e':
    case 'a':
    case 'u':
    case 'o':
      returnedLogic = true;
      break;
  }
  return returnedLogic;
}
