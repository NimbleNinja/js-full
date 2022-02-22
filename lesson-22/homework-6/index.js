'use strict';

// algoritm
// add listener for all btns
// func handleClick(event) => log event.target.value

const buttons = document.querySelectorAll('.btn');

const handleClick = event => console.log(event.target.textContent);

[...buttons].map(btn => btn.addEventListener('click', handleClick));
