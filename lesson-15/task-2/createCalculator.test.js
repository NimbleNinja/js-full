import { createCalculator } from '.';

const calculator1 = createCalculator();
const calculator2 = createCalculator();

it('test all operators', () => {
  calculator1.add(10);
  expect(calculator1.getMemo()).toEqual(10);
  expect(calculator2.getMemo()).toEqual(0);
  calculator1.decrease(15);
  expect(calculator1.getMemo()).toEqual(-5);
  calculator1.reset();
  expect(calculator1.getMemo()).toEqual(0);
});
