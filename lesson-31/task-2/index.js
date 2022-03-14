'use strict';

// algoritm
// create func asyncCalculator(num) => promise
// .then(log())

export const asyncCalculator = num =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);
  })
    .then(
      num =>
        new Promise(resolve => {
          const result = num * num;
          setTimeout(() => {
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(num => {
      const result = num * 2;
      console.log(`Doubled value: ${result}`);
      return result;
    });
