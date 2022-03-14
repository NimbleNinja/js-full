'use strict';

// algoritm
// const delay(ms) => promise
// use setTimeout(callback, delay)

export const delay = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Done');
    }, ms);
  });
