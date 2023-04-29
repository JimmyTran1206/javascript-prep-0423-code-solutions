/* exported initial */
function initial(array) {
  let returnedArray = [];
  if (array.length) {
    for (let index = 0; index < array.length - 1; index++) {
      returnedArray[index] = array[index];
    }
  } else {
    returnedArray = array;
  }
  return returnedArray;
}
