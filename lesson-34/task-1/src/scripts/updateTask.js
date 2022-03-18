import { renderTasks } from './renderer.js';
import { getTaskFromServerById, updateTaskOnServer } from './serverData.js';

// input: none
// return: undefined
export const updateTask = event => {
  if (event.target.type !== 'checkbox') {
    return;
  }

  const taskId = Number(event.target.dataset.id);

  //get task from server by Id
  //const tasks = getItem('tasksList');
  getTaskFromServerById(taskId)
    .then(task => {
      const { done } = task;
      const updatedTask = {
        ...task,
        done: !done,
      };
      return updatedTask;
    })
    .then(updatedTask => updateTaskOnServer(updatedTask))
    .then(() => renderTasks());
};

// get task from server by id
// update task => PUT
// rerender
