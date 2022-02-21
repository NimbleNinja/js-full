// algoritm

// create two classes Vehicle and Ship
// Vehicle should have
// two props name and wheels
// two methods move and stop => log(this.name + text)
//
// Ship extends Vehicle
// constructor(name, numberOfWheels, maxSpeed)
// method move() expands parental move() => log(this.name + text); super.move()
// method stop() expands parental move() => super.stop(); log(this.name + text)

export class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, numbersOfWheels, maxSpeed) {
    super(name, numbersOfWheels);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}
