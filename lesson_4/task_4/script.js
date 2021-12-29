// task 1 =====================================

// const n = 150;
// let sum = 0;

// for (let i = 1; i <= 150; i += 1) {
//  sum += i;
// }

// console.log('Result: ' + sum);

// task 2 ======================================

// const m = 2;
// const n = 22;
// let result = 1;

// for (let i = m; i <= n; i += 1) {
//  if (i % 2 !== 0) {
//    result *= i;
//  }
// }

// console.log(result);

// task 3 =======================================

// for (let i = 1; i <= 5; i += 1) {
//  console.log(`=> ${i} <=`);
//  for (let j = 1; j <= 10; j += 1) {
//    console.log(`${i} x ${j} = ${i * j}`);
//  }
// }

// task 4 ========================================
// index.js file

// task 5 ========================================

// const n = 33;
// let sum = '';

// for (let i = 1; i <= 33; i += 1) {
//  sum += i;
// }

// console.log(sum);

// task 6 =========================================

// const start = 1;
// const end = 15;
// let result = 0;

// for (let i = start; i <= end; i += 1) {
//  if (i % 5 === 0) {
//    console.log(i);
//  } else if (i % 2 === 0 && i % 4 !== 0) {
//    result += i;
//  } else if (i % 3 === 0) {
//    result -= i;
//  } else if (i % 4 === 0) {
//    result *= i;
//  } else {
//    console.log(i);
//    continue;
//  }
// }

// task 7 ===================================
// let sum = 0;

// for (let i = 1; i <= 1000; i += 2) {
//  console.log('Found');
//  sum += i;
// }

// if (sum * 5 >= 5000) {
//  console.log('Bigger');
// } else {
//  console.log('Smaller or equal');
// }

// task 8 =====================================

// let sum = 0;

// for (let i = 1; i <= 10000000; i += 1) {
//  sum += i;
// }

// console.log(sum);

// task 9 =====================================
let sum = 0;

for (let i = 1; i <= 1000; i += 1) {
  sum += i;
}

console.log(Math.trunc(sum / 1234) > sum % 1234);
