import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';

// input: none
// return: undefined
export const addTask = () => {
  const inputElem = document.querySelector('.task-input');
  const taskText = inputElem.value;

  if (!taskText) {
    return;
  }

  const newTask = { text: taskText, done: false, id: Math.random().toString() };

  const taskList = getItem('taskList');

  if (!taskList) {
    setItem('taskList', [newTask]);
  } else {
    setItem('taskList', [...taskList, newTask]);
  }

  inputElem.value = '';
  renderTasks();
};
