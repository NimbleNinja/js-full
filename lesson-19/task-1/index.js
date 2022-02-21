//algo
// 1. create two objects vehicle and ship
// 2. to vehicle obj add property name and two methods: move, stop
// 3. применить наследование Object.setPrototypeOf(ship, vehicle)
// 4. add startMachine method to ship obj
// 5. method startMachine => log(text) after use move method
// 6. method stopMachine => use move method after  log(text)
// 7. export objects

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

export { vehicle, ship };
