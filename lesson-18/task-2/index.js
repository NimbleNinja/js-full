'use strict';

//algoritm
// 1. create wallet object
// 2. add obj property transaktions
// 3. add method getMax, getMin
// 4. реализация методов двумя способами: через заимствование методов или спред оператор

const wallet = {
  transactions: [3, 33, 255, -1],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};

export { wallet };
