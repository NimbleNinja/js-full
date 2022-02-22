'use strict';

// algoritm
// get inputEll => add listener(change)
// logValue() => log(input.value)

const input = document.querySelector('.text-input');

const logValue = () => console.log(input.value);

input.addEventListener('change', logValue);
