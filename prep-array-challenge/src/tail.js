/* exported tail */
function tail(array) {
  let returnedArray = [];
  if (array.length) {
    for (let index = 0; index < array.length - 1; index++) {
      returnedArray[index] = array[index + 1];
    }
  } else {
    returnedArray = array;
  }
  return returnedArray;
}
