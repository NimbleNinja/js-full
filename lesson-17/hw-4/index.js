const user = {
  firstName: 'John',
  lastName: 'Doe',

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  setFullName(fullName) {
    const words = fullName.split(' ');
    this.firstName = words[0];
    this.lastName = words[1];
  },
};

export { user };
