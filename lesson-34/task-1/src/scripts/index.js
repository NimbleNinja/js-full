import { initTodoListHandlers } from './initTodoListHandlers.js';
import { renderTasks } from './renderer.js';
import { getTasksListFromServer } from './serverData.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksListFromServer().then(data => {
    renderTasks(data);
    initTodoListHandlers();
  });
});

// get tasks from server => render => init handlers
