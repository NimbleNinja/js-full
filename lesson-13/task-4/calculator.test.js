import { calc } from './calculator';

it('addition operator', () => {
  expect(calc('2 + 3')).toEqual('2 + 3 = 5');
});

it('subtraction operator', () => {
  expect(calc('7 - 2')).toEqual('7 - 2 = 5');
});

it('multiplication operator', () => {
  expect(calc('2.5 * 2')).toEqual('2.5 * 2 = 5');
});

it('division operator', () => {
  expect(calc('25 / 5')).toEqual('25 / 5 = 5');
});
