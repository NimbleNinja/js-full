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

  const newTask = { text: taskText, done: false, id: Math.floor(Math.random() * 1000).toString() };

  const taskList = getItem('tasksList');

  if (!taskList) {
    setItem('tasksList', [newTask]);
  } else {
    setItem('tasksList', [...taskList, newTask]);
  }

  inputElem.value = '';
  renderTasks();
};
