import { renderTasks } from './renderer.js';
import { tasks } from './storage.js';

// input: none
// return: undefined
export const updateTask = event => {
  if (event.target.type !== 'checkbox') {
    return;
  }

  const checkboxId = Number(event.target.dataset.id);

  // find
  // input: callback (inp: el; ret: true || false)
  // return: element of array || undefined
  const currentTask = tasks.find(task => task.id === checkboxId);
  currentTask.done = !currentTask.done;
  renderTasks();
};
