const person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing',
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("the person's name is ", fullName);
person.job = 'Contractor';
console.log("the person's current job is ", person.job);
person['previousJob'] = 'builder';
console.log("the person's previous job is ", person['previousJob']);
console.log('the complete person object: \n', person);
