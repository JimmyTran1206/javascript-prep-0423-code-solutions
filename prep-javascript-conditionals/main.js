/* Your JS goes in this file */
const age = 35;
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log(isAdult(age));
console.log(`A person of age ${age} is an adult? ${isAdult(age)}`);

const student1Score = Math.floor(Math.random() * 100) + 1;
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
console.log(didStudentPass(student1Score));
console.log(
  `A student with a score of ${student1Score} is passing with 70 or higher? ${didStudentPass(
    student1Score
  )}`
);

const student2Score = Math.floor(Math.random() * 105) + 1;
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));
console.log(
  `A student with a score of ${student2Score} is rewarded with grade ${gradeCalculator(
    student2Score
  )}`
);

const season = ['summer', 'spring', 'autumn', 'winter', null];
const indexS = Math.floor(Math.random() * 5);
function seasonManager(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return "it's cold today";
  } else {
    return 'please enter a valid season';
  }
}
console.log(seasonManager(season[indexS]));
console.log(
  `the season is ${season[indexS]} and ${seasonManager(season[indexS])}`
);

const dayOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const indexD = Math.floor(Math.random() * 8);
function dayDetector(day) {
  if (day === 'Sunday' || day === 'Saturday') {
    return 'have a good weekend! Yippiii!';
  } else {
    return 'its a weekday! Ohhh!';
  }
}
console.log(dayDetector(dayOfTheWeek[indexD]));
console.log(
  `it is ${dayOfTheWeek[indexD]} and ${dayDetector(dayOfTheWeek[indexD])}`
);
