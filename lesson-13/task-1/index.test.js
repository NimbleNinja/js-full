it('17 равно 17', () => {
  expect(17).toEqual(17);
});

it('18 не равно 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = arr => arr.filter(num => num % 2 === 0);

it('should return even numbers', () => {
  expect([2, 4, 6]).toEqual(getEvenNumbers([1, 2, 3, 4, 5, 6]));
});
