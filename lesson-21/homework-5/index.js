'use strict';

// algoritm
// func setButton => body.innerHTML = button + text

// inp: string
// return: undefined
export function setButton(text) {
  document.querySelector('body').innerHTML = `<button>${text}</button>`;
  //document.querySelector('body').textContent = `<button>${text}</button>`;
}
