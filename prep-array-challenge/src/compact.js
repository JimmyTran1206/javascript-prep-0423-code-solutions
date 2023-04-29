/* exported compact */
function compact(array) {
  let returnedArray = [];
  let returnedArrayIndex = 0;
  if (array.length) {
    for (let index = 0; index <= array.length - 1; index++) {
      if (array[index]) {
        returnedArray[returnedArrayIndex] = array[index];
        returnedArrayIndex += 1;
      }
    }
  } else {
    returnedArray = array;
  }
  return returnedArray;
}
