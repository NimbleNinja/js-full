// task_1

//const transformToObject = arr => {
//  const obj = {};

//  arr.forEach(el => (obj[el] = el));

//  return obj;
//};

// task_2
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

//const concatProps = obj => {
//  const arr = [];

//  for (let key in obj) {
//    arr.push(obj[key]);
//  }

//  return arr;
//};

//console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));

// task_3

//const transaction = {
//  currency: 'USD',
//  value: 170,
//  operation: 'sale',
//  agent: {
//    country: 'Ukraine',
//    company: 'NYSE',
//  },
//  'operation time': 1584029990001,
//};

/* выведи в консоль значение свойства 'currency' с помощью точки */
//console.log(transaction.currency);

///* выведи в консоль значение свойства 'value' с помощью квадратных скобок */
//console.log(transaction['value']);

//const key = 'operation';
///* выведи в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */
//console.log(transaction[key]);

///* выведи в консоль значение свойства 'company' используя квадратные скобки */
//console.log(transaction['agent']['company']);

///* выведи в консоль значение свойства 'country' используя точку */
//console.log(transaction.agent.country);

///* выведи в консоль значение свойства 'operation time' используя квадратные скобки */
//console.log(transaction['operation time']);

// task_4

//const user = {
//  name: 'Tom',
//  age: 17,
//};

///* присвой объекту свойство hobby со значением 'football' с помощью точки */
//user.hobby = 'football';

//const anotherKey = 'married';
///* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
//user[anotherKey] = false;

///* присвой объекту свойство 'favorite music' со значением 'rock' */
//user['favorite music'] = 'rock';

///* присвой объекту свойство 'address', которое будет пустым объкетом */
//user.address = {};

///* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
//user.address.country = 'Ukraine';

///* присвой объекту в 'address' свойство 'building', со значением 17 */
//user.address.building = 17;

///* выведи в консоль итоговый объект user */
//console.log(user);

// task_5

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

//function getKeys(obj) {
//  for (let key in obj) {
//    console.log(key);
//  }
//}

// task_6

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

//const pickProps = (obj, props) => {
//  const resultObj = {};

//  for (let key in obj) {
//    if (props.includes(key)) {
//      resultObj[key] = obj[key];
//    }
//  }

//  return resultObj;
//};

// examples
//console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
//console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
//console.log(pickProps({ a: 1, b: 2, c: 3 }, ['as', 'ca', 'ds', 'hex'])); // ==> { a: 1, c: 3 }

// task_7

/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

//const getAdults = obj => {
//  const resultObj = {};

//  for (let key in obj) {
//    if (obj[key] >= 18) {
//      resultObj[key] = obj[key];
//    }
//  }

//  return resultObj;
//};

// examples
//console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
//console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
