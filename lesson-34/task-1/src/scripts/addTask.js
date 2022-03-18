import { renderTasks } from './renderer.js';
import { addTaskToServer } from './serverData.js';

// input: none
// return: undefined
export const addTask = () => {
  const inputElem = document.querySelector('.task-input');
  const taskText = inputElem.value;

  if (!taskText) {
    return;
  }

  const newTask = { text: taskText, done: false };

  addTaskToServer(newTask).then(() => {
    inputElem.value = '';
    renderTasks();
  });
};

// ? create task then use fetch
// ? create task in fetch
