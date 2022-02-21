'use strict';

// algoritm
// create function getTitleElement
// search with querySelector => console.dir => return
//
// create function getInputElement(type)
// search with querySelector('input[type="text"]') => console.dir => return
// export functions

// inp: none
// return: element
export function getTitleElement() {
  const element = document.querySelector('.title');
  console.dir(element);

  return element;
}

// inp: type (string)
// return: element
export function getInputElement(type) {
  const element = document.querySelector(`input[type=${type}]`);
  console.dir(element);

  return element;
}
