'use strict';

// algoritm
// create four functions that gets content of elements in different ways
// document.querySelector => return textContent

// input: none
// return: string
export function getTitle() {
  return document.querySelector('.title').textContent;
}

// input: none
// return: string
export function getDescription() {
  return document.querySelector('.about').innerText;
}

// input: none
// return: string
export function getPlans() {
  return document.querySelector('.plans').innerHTML;
}

// input: none
// return: string
export function getGoal() {
  return document.querySelector('.goal').outerHTML;
}
