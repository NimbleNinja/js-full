'use strict';

// algoritm
// add listener on btn => alert('done)

const btn = document.querySelector('.create-btn');

// input: none
// return: undefined
const showAlert = () => alert('done');

btn.addEventListener('click', showAlert);
