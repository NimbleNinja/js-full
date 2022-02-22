'use strict';

// algoritm
// create handler event => handleClick(color, text) =>
// .events-list.innerHTML += span(color, text)
//
// attachHandlers => addEventListener => p, div, span
// removeHandlers => removeEventListener => p, div, span
// clear bnt => addListener => .events-list.innerHTML = ''

const elementsList = document.querySelector('.events-list');
const elementDiv = document.querySelector('.rect_div');
const elementP = document.querySelector('.rect_p');
const elementSpan = document.querySelector('.rect_span');
const clearButton = document.querySelector('.clear-btn');
const removeHandlersButton = document.querySelector('.remove-handlers-btn');
const attachHandlersButton = document.querySelector('.attach-handlers-btn');

const handleClick = (color, text) => {
  elementsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const elementDivSolving = handleClick.bind(null, 'grey', 'DIV');
const elementPSolving = handleClick.bind(null, 'grey', 'P');
const elementSpanSolving = handleClick.bind(null, 'grey', 'SPAN');

const elementDivBubling = handleClick.bind(null, 'green', 'DIV');
const elementPBubling = handleClick.bind(null, 'green', 'P');
const elementSpanBubling = handleClick.bind(null, 'green', 'SPAN');

function attachHandlers() {
  elementDiv.addEventListener('click', elementDivSolving, true);
  elementP.addEventListener('click', elementPSolving, true);
  elementSpan.addEventListener('click', elementSpanSolving, true);

  elementDiv.addEventListener('click', elementDivBubling);
  elementP.addEventListener('click', elementPBubling);
  elementSpan.addEventListener('click', elementSpanBubling);
}

function removeHandlers() {
  elementDiv.removeEventListener('click', elementDivSolving, true);
  elementP.removeEventListener('click', elementPSolving, true);
  elementSpan.removeEventListener('click', elementSpanSolving, true);

  elementDiv.removeEventListener('click', elementDivBubling);
  elementP.removeEventListener('click', elementPBubling);
  elementSpan.removeEventListener('click', elementSpanBubling);
}

function clearElementsList() {
  elementsList.innerHTML = '';
}

attachHandlersButton.addEventListener('click', attachHandlers);
removeHandlersButton.addEventListener('click', removeHandlers);

clearButton.addEventListener('click', clearElementsList);
