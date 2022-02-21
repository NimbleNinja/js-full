'use strict';

// algoritm

// create Order class
// add constructor(price, city, type)
// this.ID = random number
// isConfirmed = false
// method checkPrice() return this.price > 1000
// method confirmOrder() => if(!isConfirmed) isConfirmed = true, dateConfirmed = new Date()
// method isValidType() => return type === 'Buy' || 'Sell'
// export class

export class Order {
  constructor(price, city, type) {
    this.id = '12345';
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return ['Sell', 'Buy'].includes(this.type);
  }
}
