'use strict';

// algoritm
// create func delay()
// input: delay(num), callback(fn), context, ...args
// use setTimeout to create delay
// use aply to add context

export function delay(delay, callback, context, ...args) {
  setTimeout(() => {
    callback.apply(context, args);
  }, delay);
}

//const numbers = {
//  first: 1,
//  second: 2,
//  third: 3,
//};

//function test() {
//  console.log([...arguments].reduce((acc, item) => acc + item, this.second));
//}

//delay(2000, test, numbers, 1, 2, 3);
