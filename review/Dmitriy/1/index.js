'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  dateCreated = Date();
  isConfirmed = false;
  id = Math.random();
  constructor(price, city, type) {
    this.price = Number(price);
    this.city = String(city);
    this.type = String(type);
  }

  // input: number
  // output: boolean
  checkPrice() {
    return this.price > 1000;
  }

  // input: undefinded
  // output: status - true; date - now
  //confirmOrder() {
  //  if (this.isConfirmed === false) {
  //    this.dateConfirmed = Date();
  //    return (this.isConfirmed = true);
  //  }
  //  return (this.isConfirmed = false);
  //}
  confirmOrder() {
    this.dateConfirmed = new Date();
    this.isConfirmed = true;
  }

  // input: undefined
  // output: boolean
  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

// test data
const order1 = new Order(2200, 'Tula', 'Buy');
console.log(order1);
setTimeout(() => {
  order1.confirmOrder();
  console.log(order1);
}, 5000);
