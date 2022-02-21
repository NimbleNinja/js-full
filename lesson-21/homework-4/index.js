'use strict';

// algoritm
// create func settitle(text) => querySelector => textContent = text

// inp: string
// return: undefined
export function setTitle(text) {
  document.querySelector('.title').textContent = text;
}
