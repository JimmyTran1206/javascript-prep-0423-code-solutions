/* exported toObject */
function toObject(array) {
  const object = {};
  object[array[0]] = array[1];
  return object;
}
