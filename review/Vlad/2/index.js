// https://gromcode.com/courses/javascript-full/tasks/3280?video_id=1

//function squaredNumbers() {
//  let itemList1 = document.querySelector('.number');
//  let dataNumber1 = itemList1.dataset.number;
//  itemList1.setAttribute('data-squared-number', dataNumber1 * dataNumber1);

//  let itemList2 = itemList1.nextElementSibling;
//  let dataNumber2 = itemList2.dataset.number;
//  itemList2.setAttribute('data-squared-number', dataNumber2 * dataNumber2);

//  let itemList3 = itemList2.nextElementSibling;
//  let dataNumber3 = itemList3.dataset.number;
//  itemList3.setAttribute('data-squared-number', dataNumber3 * dataNumber3);
//}
function squaredNumbers() {
  const numbersElements = document.querySelectorAll('.number');
  [...numbersElements].map(elem => {
    elem.dataset.squaredNumber = Math.pow(elem.dataset.number, 2);
  });
}

const numbersElems = document.querySelectorAll('[data-number]');
console.log(numbersElems);
