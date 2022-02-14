import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('Should return squared array', () => {
  expect(getSquaredArray([1, 2, 3])).toEqual([1, 4, 9]);
});

it('Should return odd numbers array', () => {
  expect(getOddNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
});

it('Should return sum of numbers', () => {
  expect(getSum(2, 3)).toEqual(5);
});
