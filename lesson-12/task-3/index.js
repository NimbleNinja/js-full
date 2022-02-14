'use strict';

const cleanTransactionsList = transactions =>
  transactions
    .filter(ell => !Number.isNaN(+ell))
    .map(ell => `$${Number(ell).toFixed(2)}`);

const arr1 = ['  1.9 ', '16.4', 17, ' 1 dollar ', NaN, undefined, 'rest', 1];

console.log(cleanTransactionsList(arr1));
console.log(arr1);
