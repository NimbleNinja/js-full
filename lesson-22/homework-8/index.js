'use strict';

// algoritm
// .task-status add change listener on checkbox => log event.target.checked

const input = document.querySelector('.task-status');

const showStatus = event => console.log(event.target.checked);

input.addEventListener('change', showStatus);
