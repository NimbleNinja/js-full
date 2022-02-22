'use strict';

// algoritm
// add listener on input => change => log event.target.value

const input = document.querySelector('.text-input');

const logInputValue = event => console.log(event.target.value);

input.addEventListener('change', logInputValue);
