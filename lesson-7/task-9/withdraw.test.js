import { withdraw } from './index';

const clients = ['Ann', 'John', 'User'];
const balances = [1000, 125, -6];

it('test correct amount', () => {
  expect(withdraw(clients, balances, 'Ann', 900)).toEqual(100);
  expect(balances[0]).toEqual(100);
});

it('test correct amount and balance', () => {
  expect(withdraw(clients, balances, 'John', 125)).toEqual(0);
  expect(balances[1]).toEqual(0);
});

it('test incorrect balance', () => {
  expect(withdraw(clients, balances, 'User', 100)).toEqual(-1);
  expect(balances[2]).toEqual(-6);
});
