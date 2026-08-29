// inheritance

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} car is running !!!`);
  }
}

class ElectricCar extends Car {
  constructor(brand, battery) {
    // super keyword is used in calling parent constructors
    super(brand);
    this.battery = battery;
  }

  drive() {
    console.log(
      `${this.brand} car is running silently with ${this.battery}!!!`,
    );
  }

  charge() {
    console.log(`${this.brand} us charging. `);
  }
}

let Tesla = new ElectricCar("Tesla", 85);
Tesla.drive();
