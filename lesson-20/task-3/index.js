// algoritm

// create class Wallet
// balance = 0
// method getBalance => return this.balance
// method deposit(amount) => this.balance += amount
// add method withdraw(amount) => if (balance < amount ) log(message) else balance += amount
// export class

export class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance < amount) {
      console.log('No enough funds');
      return;
    }

    this.#balance -= amount;
  }
}
