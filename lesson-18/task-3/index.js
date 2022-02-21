'use strict';

// algoritm
// 1. create function sumOfSquares
// 2. заимствуя метод массивов .reduce()
// 3. вызываем его с помощю call, передаем arguments как контекст вызова и callback для метода
// 4. export function

export function sumOfSquares() {
  return [].reduce.call(
    arguments,
    (sum, num) => {
      return sum + num * num;
    },
    0
  );
}
