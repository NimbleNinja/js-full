import { getTasksListFromServer } from './serverData.js';

// get tasks from server
// render tasks

const listElem = document.querySelector('.list');

export const renderTasks = () => {
  listElem.innerHTML = '';

  getTasksListFromServer().then(taskList => {
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
        checkbox.dataset.id = id;
        checkbox.classList.add('list__item-checkbox');
        if (done) {
          listItemElem.classList.add('list__item_done');
        }
        listItemElem.append(checkbox, text);

        return listItemElem;
      });

    listElem.append(...tasksElems);
  });
};
