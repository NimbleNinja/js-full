'use strict';

// algoritm
// + create html div.counter
// + - add data-type="increase" to left btn
// + - add data-type="decrease" to right btn
// add event listener on btns onCounterChange(e)
// get dataset.type of button
// realised counter value ++ or -- textContent
// add counter value to local storage
// add storage event window.addEventListener('storage' onStorageChange)

const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  if (!e.target.classList.contains('counter__btn')) {
    return;
  }

  const action = e.target.dataset.type;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'increase' ? oldValue + 1 : oldValue - 1;

  counterValueElem.textContent = newValue;

  localStorage.setItem('counterValue', newValue);
};

counterElem.addEventListener('click', onCounterChange);

const onPageLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue');
};

window.addEventListener('DOMContentLoaded', onPageLoaded);

const onStorageChange = e => {
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);
