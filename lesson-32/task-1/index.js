'use strict';

// algoritm
// for test create promise.resolve(num)
// create func asyncSum([promises]) => Promise.all(promises.filter.reduce)
//
// asyncSum().resolve.reject

const getAsyncNum = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });

const firstNum = getAsyncNum(10, 1000);
const secondNum = getAsyncNum(new Error('sss'), 2000);
const thirdNum = getAsyncNum(110, 3000);

export const asyncSum = (...promises) =>
  Promise.all(promises)
    .then(promises =>
      promises
        .filter(promise => !isNaN(promise))
        .reduce((acc, promise) => {
          return acc + promise;
        }, 0),
    )
    .catch(() => new Error("Can't calculate\\"));

asyncSum(firstNum, secondNum, thirdNum).then(val => console.log(val));
