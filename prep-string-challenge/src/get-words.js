/* exported getWords */
function getWords(string) {
  // well, there is string.split method fit perfectly for this test
  let returnedArray = [];
  if (string.length > 0) {
    returnedArray = string.split(' ');
  }
  return returnedArray;
}
