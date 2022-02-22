'use strict';

// algoritm
// add listener to checkbox
// log(checkbox.checked)
// ? check value (always: 'on')

const checkbox = document.querySelector('.task-status');

const logStatus = () => console.log(checkbox.checked);

checkbox.addEventListener('change', logStatus);
