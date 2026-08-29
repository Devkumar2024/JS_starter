// Abstraction

class Car {
  #fuel = 100;
  // #is used for encapsulation
  #burn_fuel() {
    this.#fuel -= 0.7;
  }

  // abstraction
  Car_start() {
    this.#burn_fuel();
    console.log(`Car is started!!! , fuel =  ${this.#fuel}`);
  }
}

let Bugatti = new Car();
Bugatti.Car_start();
