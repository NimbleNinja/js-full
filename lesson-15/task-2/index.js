export function createCalculator() {
  let memo = 0;

  function add(number) {
    memo += number;
  }

  function decrease(number) {
    memo -= number;
  }

  function reset() {
    memo = 0;
  }

  function getMemo() {
    return memo;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}
