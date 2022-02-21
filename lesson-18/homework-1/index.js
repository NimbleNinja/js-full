'use strict';

// algoritm
// 1. create function saveCalls(func) {}
// 2. вернуть функцию withMemory со свойством calls
// 4. реализация масива calls функции withMemory
// ! в функции обертке создаем условие
// if Array.isArray(withMemory.calls) => push([...arguments])
// else withMemory.calls = [[...arguments]]
// export saveCalls

export function saveCalls(func) {
  return function withMemory() {
    if (Array.isArray(withMemory.calls)) {
      withMemory.calls.push([...arguments]);
    } else {
      withMemory.calls = [[...arguments]];
    }

    return func.apply(this, arguments);
  };
}
