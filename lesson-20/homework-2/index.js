// algoritm

// create class User => constructor(id, name, sessionId)
// add three getters for props above
// понять как создать правильно getter без setter
// method getUserNames => ...users.map(({name}) => {return name})
// method getUserIds => ...users.map(({id}) => {return id})
// method getUserNameById(id) => ...users.find(({id, name}) => {return не придумал еще})

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return [...this.users].map(({ name }) => name);
  }

  getUserIds() {
    return [...this.users].map(({ id }) => id);
  }

  getUserNameById(id) {
    const index = this.getUserIds().indexOf(id);
    return this.getUserNames()[index];
  }
}

//const user1 = new User('1', 'Vova', '222');
//const user2 = new User('2', 'Sasha', '223');
//const user3 = new User('3', 'Ivan', '224');
//const user4 = new User('4', 'Kilia', '225');

//const rep1 = new UserRepository([user1, user2, user3, user4]);
//console.log(rep1.getUserNames());
//console.log(rep1.getUserIds());
//console.log(rep1.getUserNameById('2'));
