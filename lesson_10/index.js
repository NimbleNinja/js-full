// task_1

const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));
const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));
const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

// task 2

const getParsedIntegers = arr => [...arr].map(el => Number.parseInt(el));
const getParsedIntegersV2 = arr => [...arr].map(el => parseInt(el));

const getParsedFloats = arr => [...arr].map(el => Number.parseFloat(el));
const getParsedFloatsV2 = arr => [...arr].map(el => parseFloat(el));

// task 3
//'use strict';

//const multiRound = num => [
//  Math.floor(num * 100) / 100,
//  Math.trunc(num * 100) / 100,
//  Math.ceil(num * 100) / 100,
//  Math.round(num * 100) / 100,
//  +num.toFixed(2),
//];

// examples
//console.log(multiRound(11.12556));
//multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
//multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]

// task 4

//'use strict';

//const getMaxAbsoluteNumber = arr => {
//  if (!Array.isArray(arr) || !arr.length) {
//    return null;
//  }

//  const numbers = arr.map(num => Math.abs(num));
//  return Math.max(...numbers);
//};

// examples
//console.log(getMaxAbsoluteNumber([-10, 10, -10]));
//console.log(getMaxAbsoluteNumber([2.1, 0, 1.6]));
//console.log(getMaxAbsoluteNumber([-6, 3, 5, -1]));
//console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));
//console.log(getMaxAbsoluteNumber([]));
//console.log(getMaxAbsoluteNumber(null));
//console.log(getMaxAbsoluteNumber('ddd'));
//getMaxAbsoluteNumber([-10, 10, -10]); // ===> 10
//getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
//getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
//getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777

// task 5

//const getTotalPrice = numbers => {
//  const sum = numbers.reduce((a, b) => a + b);
//  return `$${(Math.floor(sum * 100) / 100).toFixed(2)}`;
//};

//console.log(getTotalPrice([1, 3, 5.343, 7.1, 7.542]));

// task 6

//function getRandomIntInclusive(min, max) {
//  min = Math.ceil(min);
//  max = Math.floor(max);
//  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//}

//const getRandomNumbers = (lenght, from, to) => {
//  from = Math.ceil(from);
//  to = Math.floor(to);
//  const result = Array(lenght);

//  return from >= to
//    ? null
//    : result.fill(Math.floor(Math.random() * (to - from + 1) + from));
//};
//const getRandomNumbers = (lenght, from, to) => {
//  from = Math.ceil(from);
//  to = Math.floor(to);

//  if (from >= to) {
//    return null;
//  }

//  const result = [];

//  for (let i = 0; i < lenght; i++) {
//    result.push(Math.floor(Math.random() * (to - from + 1) + from));
//  }

//  return result;
//};

//console.log(getRandomNumbers(5, 1.4, 3.22));
//console.log(getRandomNumbers(5, 1.4, 3.22));
//console.log(getRandomNumbers(5, 1.4, 3.22));
//console.log(getRandomNumbers(10, 2.4, 3.4));
//getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
//getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
//getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]

// task 7

//const superRound = (num, prec) => {
//  const pow = Math.pow(10, prec);

//  return [
//    Math.floor(num * pow) / pow,
//    Math.trunc(num * pow) / pow,
//    Math.ceil(num * pow) / pow,
//    Math.round(num * pow) / pow,
//    +num.toFixed(prec),
//  ];
//};

// examples
//console.log(superRound(11.12556, 2));
//console.log(superRound(6.11, 3));
//console.log(superRound(6.11135236236, 5));
//superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
//superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
