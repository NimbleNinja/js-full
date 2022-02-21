'use strict';

// algoritm
// realize renderTask function
//
// input tasksList(array)
// return undefined
//
// find dom element => document.querySelector
// tasksList => elements array .map()
// create dom elements => document.createElement
// add elemements => parentElement.append

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const ellList = document.querySelector('.list');

  // .sort()
  // input: callback
  // return: sorted array
  //
  // .map()
  // input: callback
  // return: new array
  const elements = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const ellListItem = document.createElement('li');
      const checkbox = document.createElement('input');

      ellListItem.classList.add('list__item');
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        ellListItem.classList.add('list__item_done');
      }
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;

      ellListItem.append(checkbox, text);

      return ellListItem;
    });

  ellList.append(...elements);
};

renderTasks(tasks);
