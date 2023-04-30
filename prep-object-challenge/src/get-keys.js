/* exported getKeys */
function getKeys(object) {
  const returnedArray = [];
  let returnedArrayIndex = 0;
  for (const x in object) {
    returnedArray[returnedArrayIndex] = x;
    returnedArrayIndex += 1;
  }
  return returnedArray;
}
