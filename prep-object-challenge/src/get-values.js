/* exported getValues */
function getValues(object) {
  const returnedArray = [];
  let returnedArrayIndex = 0;
  for (const x in object) {
    returnedArray[returnedArrayIndex] = object[x];
    returnedArrayIndex += 1;
  }
  return returnedArray;
}
