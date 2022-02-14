import { reverseArray } from './index';

it('should return null if not an array passed', () => {
  expect(reverseArray('test')).toEqual(null);
});

it('reverse array simple numbers', () => {
  expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});

it('reverse array other values', () => {
  expect(reverseArray([null, -1, undefined, true])).toEqual([
    true,
    undefined,
    -1,
    null,
  ]);
});
