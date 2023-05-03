/* exported getWords */
// function getWords(string) {
//   let returnedArray = [];
//   if (string.length > 0) {
//     returnedArray = string.split(' ');
//   }
//   return returnedArray;
// }

// Upon reading the instruction, I see that in step 8, implementing reverseWord(), string.split() method is banned. I think the intention was to ban the string.split() method in getWord(). I try to implement a function without using string.spit() method here.

function getWords(string) {
  const returnedArray = [];
  if (string.length > 0) {
    if (string.indexOf(' ') === -1) {
      returnedArray[0] = string;
    } else {
      let modifiedString = string + ' ';
      let returnedArrayIndex = 0;
      let sliceStartPosition = 0;
      do {
        returnedArray[returnedArrayIndex] = modifiedString.slice(
          0,
          modifiedString.indexOf(' ')
        );

        returnedArrayIndex += 1;

        sliceStartPosition = modifiedString.indexOf(' ') + 1;

        modifiedString = modifiedString.slice(sliceStartPosition);
      } while (modifiedString.indexOf(' ') !== -1);
    }
  }
  return returnedArray;
}
