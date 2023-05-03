/* exported reverse */
function reverse(array) {
  let returnedArray = [];
  if (array.length) {
    for (let index = 0; index < array.length; index++) {
      returnedArray[index] = array[array.length - 1 - index];
    }
  } else {
    returnedArray = array;
  }
  return returnedArray;
}
