function addTwoNumber(num1, num2) {
  return num1 + num2;
}
console.log('result of addTwoNumber(2,2): ', addTwoNumber(2, 2));

function convertHoursToMinutes(hours) {
  return hours * 60;
}
console.log('result of convertHoursToMinutes(5): ', convertHoursToMinutes(5));

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
console.log('result of getGreeting(World): ', getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log('result of addAndMultiplyBy5(10,5): ', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log(
  'result of multiplyAndDivideBy5(35,10): ',
  multiplyAndDivideBy5(35, 10)
);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log('result of subtractTwoNumbers(22,7): ', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}
console.log('result of getCircleCircumference(5): ', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(
  'result of getFullName("Juan", "Ramirez"): ',
  getFullName('Juan', 'Ramirez')
);

function cube(number) {
  return number ** 3;
}
console.log('result of cube(5): ', cube(5));
