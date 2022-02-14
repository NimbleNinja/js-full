import { getAdults } from './index';

it('test correct object', () => {
  expect(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })).toEqual({
    'John Doe': 19,
    Bob: 18,
  });
  expect(getAdults({ Ann: 56, Andrey: 7 })).toEqual({ Ann: 56 });
});

it('empty object', () => {
  expect(getAdults({})).toEqual({});
});
