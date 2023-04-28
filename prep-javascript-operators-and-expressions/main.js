// i
const num1 = 6;
const num2 = 5;
const product = num1 * num2;
console.log('value of product: ', product);
console.log('type of product', typeof product);
// ii
const charge = 100;
const payment = 80;
const amountRemaining = charge - payment;
console.log('value of amountRemaining: ', amountRemaining);
console.log('type of amountRemaining', typeof amountRemaining);
// iii
const test = 96;
const assignment = 86;
const final = 98;
const grade = (test + assignment + final) / 3;
console.log('value of grade: ', grade);
console.log('type of grade', typeof grade);
// iv
const firstName = 'Nhu Quan';
const lastName = 'Tran';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName: ', fullName);
console.log('type of fullName', typeof fullName);
// v
const pH = 8;
const isAcidic = pH < 7;
console.log('value of isAcidic: ', isAcidic);
console.log('type of isAcidic', typeof isAcidic);
// vi
const numberOfSoldiers = 1000;
const isSparta = numberOfSoldiers === 300;
console.log('value of isSparta: ', isSparta);
console.log('type of isSparta', typeof isSparta);
console.log(
  'Okie this is not Sparta. At least we do not kick people to the pit'
);
// vii
let nickName = fullName;
// eslint-disable-next-line no-unused-vars
nickName += ' is numero uno!!!';
console.log('value of nickName: ', nickName);
console.log('type of nickName', typeof nickName);
