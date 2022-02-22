'use strict';

// algoritm
// btn add listener => log('clicked) => remove listener

const btn = document.querySelector('.single-use-btn');

const btnHandler = () => {
  console.log('clicked');
  btn.removeEventListener('click', btnHandler);
};

btn.addEventListener('click', btnHandler);
