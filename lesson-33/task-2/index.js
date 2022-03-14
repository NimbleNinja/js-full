'use strict';

// algoritm

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

function getTasksList() {
  return fetch(baseUrl).then(data => data.json());
}

function getTaskById(taskId) {
  return fetch(baseUrl)
    .then(data => data.json())
    .then(tasks => tasks.find(task => task.id === taskId));
}

//examples;
getTasksList().then(tasksList => {
  console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
});

getTaskById('3').then(taskData => {
  console.log(taskData); // {'id':'2', 'done':true ... }
});

//export { getTaskById, getTasksList };