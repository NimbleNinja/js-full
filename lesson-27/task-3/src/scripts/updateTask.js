import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

// input: none
// return: undefined
export const updateTask = event => {
  if (event.target.type !== 'checkbox') {
    return;
  }

  const checkboxId = Number(event.target.dataset.id);

  const tasks = getItem('tasksList');

  // find
  // input: callback (inp: el; ret: true || false)
  // return: element of array || undefined
  const updatedTasks = tasks.map(task => {
    if (+task.id === checkboxId) {
      task.done = !task.done;
      return task;
    }

    return task;
  });

  setItem('tasksList', updatedTasks);

  renderTasks();
};
