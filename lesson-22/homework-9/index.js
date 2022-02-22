'use strict';

// algoritm
// buttons.addListener => log event.target.pageNumber

const buttons = document.querySelectorAll('.pagination__page');

const showData = event => console.log(event.target.dataset.pageNumber);

Array.from(buttons).map(btn => btn.addEventListener('click', showData));
