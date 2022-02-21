'use strict';

// algoritm
// func finishList() => querySelector(.list)
// create li element with 1,4,6,8 numbers
// .list.append,prepend(li(num))
// .special => before, after (li(num))

// input: none
// return: undefined
export function finishList() {
  const elementsList = document.querySelector('.list');
  const special = document.querySelector('.special');

  const element1 = document.createElement('li');
  element1.textContent = '1';
  elementsList.prepend(element1);

  const element4 = document.createElement('li');
  element4.textContent = '4';
  special.before(element4);

  const element6 = document.createElement('li');
  element6.textContent = '6';
  special.after(element6);

  const element8 = document.createElement('li');
  element8.textContent = '8';
  elementsList.append(element8);
}
