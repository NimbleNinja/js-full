import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const renderTasks = () => {
  listElem.innerHTML = '';

  // 1. get taskList from local storage getItem('taskList')
  // 2. if !taskList => return

  const taskList = getItem('tasksList');

  if (!taskList) {
    return;
  }

  const tasksElems = taskList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      // add data-id to checkbox
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

export { renderTasks };
