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

const elementDivSolving = () => handleClick('grey', 'DIV');
const elementPSolving = () => handleClick('grey', 'P');
const elementSpanSolving = () => handleClick('grey', 'SPAN');

const elementDivBubling = () => handleClick('green', 'DIV');
const elementPBubling = () => handleClick('green', 'P');
const elementSpanBubling = () => handleClick('green', 'SPAN');

function attachHandlers() {
  elementDiv.addEventListener('click', elementDivSolving, true);
  elementDiv.addEventListener('click', elementDivBubling);

  elementP.addEventListener('click', elementPSolving, true);
  elementP.addEventListener('click', elementPBubling);

  elementSpan.addEventListener('click', elementSpanSolving, true);
  elementSpan.addEventListener('click', elementSpanBubling);
}

function removeHandlers() {
  elementDiv.removeEventListener('click', elementDivSolving, true);
  elementDiv.removeEventListener('click', elementDivBubling);

  elementP.removeEventListener('click', elementPSolving, true);
  elementP.removeEventListener('click', elementPBubling);

  elementSpan.removeEventListener('click', elementSpanSolving, true);
  elementSpan.removeEventListener('click', elementSpanBubling);
}

function clearElementsList() {
  elementsList.innerHTML = '';
}

attachHandlersButton.addEventListener('click', () => attachHandlers());
removeHandlersButton.addEventListener('click', () => removeHandlers());

clearButton.addEventListener('click', clearElementsList);
