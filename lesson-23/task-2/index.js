'use strict';

// algoritm
// .sector
// .sector__line
// .sector__seat
// func getNumbersArr(from, to)
// func getSeats()
// func getLines()
// func getSectors()
// func createArena()
// func arenaHandler() => event.target.dataset.
//  *get parent elements =>
//  *board__selected-seat.textContent
// .arena.addEventListener('click', arenaHandler)

const arenaElem = document.querySelector('.arena');
const boardElem = document.querySelector('.board__selected-seat');

const getNumbersArr = (from, to) => {
  const result = [];

  for (let num = from; num <= to; num++) {
    result.push(num);
  }

  return result;
};

const getSeats = () =>
  getNumbersArr(1, 10)
    .map(num => `<div class="sector__seat" data-seat-number="${num}"></div>`)
    .join('');

const getLines = () => {
  const seats = getSeats();
  return getNumbersArr(1, 10)
    .map(num => {
      return `<div class="sector__line" data-line-number="${num}">${seats}</div>`;
    })
    .join('');
};

const getSector = () => {
  const lines = getLines();
  return getNumbersArr(1, 3)
    .map(num => {
      return `<div class="sector" data-sector-number="${num}">${lines}</div>`;
    })
    .join('');
};

arenaElem.innerHTML = getSector();

const arenaHandler = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  boardElem.textContent = `S ${seatNumber} - L ${lineNumber} - S ${sectorNumber}`;
};

arenaElem.addEventListener('click', arenaHandler);
