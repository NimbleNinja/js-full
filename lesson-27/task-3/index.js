import { initTodoListHandlers } from './src/scripts/initTodoListHandlers.js';
import { renderTasks } from './src/scripts/renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});
