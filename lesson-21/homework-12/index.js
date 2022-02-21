'use strict';

// algoritm
// func getSection(num) => find span => return element.closest.dataset.dataSection

// input: number
// return: string
export function getSection(number) {
  const span = document.querySelector(`span[data-number="${number}"]`);
  return span.closest('.box').dataset.section;
}
