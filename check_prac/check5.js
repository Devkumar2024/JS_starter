// base class
class Person {
  // Accept parameters and assign to this, this keeps sure that feeded value gets inside object
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // base method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }

  // Added method
  haveBirthday() {
    this.age += 1;
    console.log(`Happy Birthday, ${this.name}! You are now ${this.age}.`);
  }
}

class Student extends Person {
  constructor(name, age, major) {
    // Call parent constructor using super()
    super(name, age);
    // Student-specific property
    this.major = major;
  }

  // Overridden method from Person
  greet() {
    console.log(
      `Hi! I'm ${this.name}, a ${this.age}-year-old studying ${this.major}.`,
    );
  }

  // Student-specific method
  study() {
    console.log(`${this.name} is studying for their ${this.major} exam.`);
  }
}

const Person1 = new Person("Jhon M", 45);
const Student1 = new Student("Dev", 25, "IT");

// child class can use parent class methods
Student1.haveBirthday();
