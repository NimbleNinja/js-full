import { makeCounter } from '.';

const counter = makeCounter();

it('counter correctly icrementing', () => {
  expect(counter()).toEqual(0);
  expect(counter()).toEqual(1);
  expect(counter()).toEqual(2);
  expect(counter()).toEqual(3);
});
