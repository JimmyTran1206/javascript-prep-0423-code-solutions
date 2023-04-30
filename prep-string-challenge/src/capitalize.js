/* exported capitalize */
function capitalize(word) {
  let retrunedString = '';
  retrunedString = word[0].toUpperCase();
  for (let i = 1; i <= word.length - 1; i++) {
    retrunedString += word[i].toLowerCase();
  }
  return retrunedString;
}
