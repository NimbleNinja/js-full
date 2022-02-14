import getMinSquaredNumber from './getMinSquaredNumber';

it('should return null if array is empty', () => {
  expect(getMinSquaredNumber([])).toEqual(null);
});

it('should return null if not an array passed', () => {
  expect(getMinSquaredNumber('text')).toEqual(null);
});

it('should return 4 if given an array of numbers', () => {
  expect(getMinSquaredNumber([-777, 2.5, 3, -2, 6, 45, -20])).toEqual(4);
});
