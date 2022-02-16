'use strict';

export function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

//const user = {
//  name: 'Ivan',
//  sayName(message) {
//    console.log(`${this.name}, your message: ${message}`);
//  },
//};

//const deferrerSayName = defer(user.sayName, 3000);

//deferrerSayName.call(user, 'Hi');
