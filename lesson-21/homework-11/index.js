'use strict';

// algoritm
// func squaredNumbers =>
// Array.from(doc.querySelectorAll(.number))
// use forEach to add new dataAttribute

// input: none
// return: undefined
export function squaredNumbers() {
  const elements = Array.from(document.querySelectorAll('.number'));

  // inp: callback
  // return: undefined
  elements.forEach(ell => {
    const dataNumber = ell.dataset.number;
    ell.dataset.squaredNumber = dataNumber * dataNumber;
  });
}
