'use strict';

//algoritm
//1. создать обьект event
//2. заполнить обьект свойствами message, guests {name, email, age}
//3. add object method getInvitations that returns filtered Array(age:18+) of invitations
//4. реализация метода getInvitations
//4.1 фильтруем массив guests guests.filter(({age}) => age >= 18)
//4.2 отфильтрованный масив проганяем через .map() что бы получить приглашения в виде {mail, message} и возвращаем его. В методах масивов используем callback у которого нету своего this
//5. export event object

const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 17, email: 'j@gmail.com' },
    { name: 'Tom', age: 18, email: 't@gmail.com' },
    { name: 'Ron', age: 22, email: 'r@gmail.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

export { event };
