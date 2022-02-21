// algoritm

// 1. create function constructio User(name, age)
// 2. add two props to constructor name, age
// 2. add two methods on constructor prototype
// 2.1 requestNewPhoto => log(text + this.name)
// 2.2 setAge(age) => if (age >= 25) => log(text + this.name)
//                    if (age < 0) => return false
//                    if (age > 0) => return age

export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }

  this.age = age;

  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }

  return age;
};
