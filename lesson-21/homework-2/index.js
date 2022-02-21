'use strict';

// algoritm
// create getItemsList func => querySelectorAll => console.dir => return nodeList
// create getItemsArray func => querySelectorAll => Array.from() => console.dir => return list

// input: none
// return: NodeList
export function getItemsList() {
  const items = document.querySelectorAll('.technology');

  console.dir(items);

  return items;
}

// input: none
// return: Array
export function getItemsArray() {
  const itemsArr = Array.from(document.querySelectorAll('.tool'));

  console.dir(itemsArr);

  return itemsArr;
}
