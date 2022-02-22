'use strict';

// algoritm
// btn.addListener => showValue of input

const btn = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');

const showInputValue = () => console.log(input.value);

btn.addEventListener('click', showInputValue);
