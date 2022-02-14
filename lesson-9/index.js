// task_1

//const getAdults = obj =>
//  Object.entries(obj)
//    .filter(user => user[1] >= 18)
//    .map(user => user[0]);

//const users = { 'John Doe': 19, Tom: 17, Bob: 18 };

//console.log(getAdults(users));

// task_2

//const copyObj = obj => Object.assign({}, obj);

//const users = {
//  tom: 20,
//  skoth: 24,
//  jery: 49,
//  bobby: 19,
//};

//const usersCopy = copyObj(users);

//usersCopy.jery = 100;

//console.log(users);
//console.log(usersCopy);

// task_3

//const getKeys = obj => Object.keys(obj).forEach(key => console.log(key));

//const users = {
//  tom: 20,
//  skoth: 24,
//  jery: 49,
//  bobby: 19,
//};

//getKeys(users);

// task_4
/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

//function addPropertyV1(userData, userId) {
//  userData.id = userId;
//  return userData;
//}

//function addPropertyV2(userData, userId) {
//  return Object.assign(userData, { id: userId });
//}

//function addPropertyV3(userData, userId) {
//  return Object.assign({ id: userId }, userData);
//}

//function addPropertyV4(userData, userId) {
//  return { ...userData, id: userId };
//}

// examples
//const user = {
//  name: 'Sam',
//};

//console.log(user);
//addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
//addPropertyV2(user, '12345678'); // ==> { name: 'Sam', id: '1234567' }
//addPropertyV3(user, '123456789'); // ==> { name: 'Sam', id: '1234567' }
//console.log('new obj:', addPropertyV3(user, '123456789'));
//console.log('new obj4:', addPropertyV4(user, '12345678912'));
//console.log(user);

// task_5 --------------------------------------------------

/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

//function mergeObjectsV1(obj1, obj2) {
//  return Object.assign({}, obj1, obj2);
//}

//function mergeObjectsV2(obj1, obj2) {
//  return Object.assign({}, obj2, obj1);
//}

//function mergeObjectsV3(obj1, obj2) {
//  return { ...obj1, ...obj2 };
//}

//function mergeObjectsV4(obj1, obj2) {
//  return { ...obj2, ...obj1 };
//}

// examples
//const obj1 = {
//  name: 'Tom',
//  age: 17,
//};

//const obj2 = {
//  name: 'Bob',
//  student: false,
//};

// console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
// console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
//console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }

// task_6 ----------------------------------------------------

//const getPeople = obj =>
//  Object.entries(obj)
//    .map(arr => arr[1])
//    .flat()
//    .reduce((acc, el) => [...acc, el.name], []);

//const getPeople = obj => {
//  return Object.entries(obj)
//    .reduce((acc, ell) => [...acc, ...ell[1]], [])
//    .map(user => user.name);
//};

//rooms = {
//  room1: [
//    { name: 'Jack' },
//    { name: 'Andrey' },
//    { name: 'Ann' },
//    { name: 'Vasyl' },
//  ],
//  room2: [{ name: 'Dan' }],
//  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
//};

//console.log(getPeople(rooms));
//console.log(rooms);

// task_7

//const getTotalRevenue = transactions =>
//  [...transactions].reduce((sum, transaction) => sum + transaction.amount, 0);

// examples
//const dayTransactions = [
//  { userId: 22, amount: 60, operation: 'sell' },
//  { userId: 22, amount: 160, operation: 'buy' },
//  { userId: 44, amount: 90, operation: 'sell' },
//];

//console.log(getTotalRevenue(dayTransactions)); // ==> 310
//console.log(dayTransactions);

// дополнительные задания -------------------------------------
// task_1 -----------------------------------------------------

/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

//function addPropertyV1(obj, key, value) {
//  obj[key] = value;
//  return obj;
//}

//function addPropertyV2(obj, key, value) {
//  return Object.assign(obj, { [key]: value });
//}

//function addPropertyV3(obj, key, value) {
//  return Object.assign({ [key]: value }, obj);
//}

//function addPropertyV4(obj, key, value) {
//  return { ...obj, [key]: value };
//}

// put your code here

// put your code here

// put your code here

// examples
//const transaction = {
//  value: 170,
//};
//console.log(transaction); // ==> { value: 170, currency: 'USD' }
//console.log(addPropertyV4(transaction, 'currency', 'USD'));

// task_2

//'use strict';

//function buildObject(keysList, valuesList) {
//  return keysList.reduce((obj, key, index) => {
//    return { ...obj, [key]: valuesList[index] };
//  }, {});
//}

//// examples
//const keys = ['name', 'address', 'age'];
//const values = ['Bob', 'Ukraine', 34];
//const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
//console.log(result);

// task_3

//function compareObjects(obj1, obj2) {
//  const keys1 = Object.keys(obj1);
//  const keys2 = Object.keys(obj2);

//  if (keys1.length !== keys2.length) {
//    return false;
//  } else {
//    return keys1.reduce(
//      (result, key) => result && obj1[key] === obj2[key],
//      true
//    );
//  }
//}

//// examples
//const obj1 = {
//  name: 'Tom',
//  age: 17,
//};

//const obj2 = {
//  age: 17,
//  name: 'Bob',
//};

//const obj3 = {
//  name: 'Bob',
//  age: 17,
//  student: false,
//};

//const obj4 = {
//  age: 17,
//  name: 'Tom',
//};

//console.log(compareObjects(obj1, obj4));

//console.log(compareObjects(obj1, obj2)); // ==> false
//console.log(compareObjects(obj2, obj3)); // ==> false
//console.log(compareObjects(obj1, obj4)); // ==> true

// task_4

const getCustomersList = obj =>
  Object.keys(obj)
    .map(user => ({ ...obj[user], id: user }))
    .sort((a, b) => a.age - b.age);

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Tom',
    age: 10,
  },
};

console.log(getCustomersList(customers));
console.log(customers);
