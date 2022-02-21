// algoritm

// 1. create object
// 2. add two props firstName, lastName
// 3. add getter fullName => return firstName + lastName
// 4. add setter fullName(name) => [firstName, lastName] = name.split(' ') => this.firstName = firstName, this.lastName = lastName,

export default {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
