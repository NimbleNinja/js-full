// algoritm

// create class User
// constructor(name, age)
// add sayHi method => log(text + this.name)
// add requestNewPhoto method = log(text(New photo request was sent for John) + this.name)
// add method setAge(age) => this.age = age && if(age >= 25) log(text + this.name)
//                           if(age < 0) return false
//                           if(age > 0) return age
// add method static createEmpty() => name = '', age = null

export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    if (age < 0) {
      return false;
    }

    this.age = age;

    if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }

    return age;
  }
}
