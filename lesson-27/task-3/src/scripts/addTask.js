import { renderTasks } from './renderer.js';
import { tasks } from './storage.js';

// input: none
// return: undefined
export const addTask = () => {
  const input = document.querySelector('.task-input');
  const taskText = input.value;

  if (!taskText) {
    return;
  }

  const newTask = { text: taskText, done: false, id: tasks.length + 1 };
  tasks.push(newTask);
  input.value = '';
  renderTasks();
};
