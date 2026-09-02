class CreateUser {
  // constructor will create object for us
  constructor(firstname, lastName, email, age, address) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  // functions in class are called methods

  about() {
    console.log(
      `My name is ${this.firstname} ${this.lastName} and my age is ${this.age}`,
    );
  }
  is18() {
    return this.age >= 18;
  }
}

class NewUser extends CreateUser {
  constructor(firstname, lastName, email, age, speed) {
    super(firstname, lastName, email, age);
    this.speed = speed;
  }
  // adding new function
  run() {
    return `${this.firstname} is running at ${this.speed}`;
  }

  // modifying inherited function
  about() {
    console.log(`Hi ${this.firstname} ${this.lastName} here ....`);
  }
}

const u1 = new CreateUser("Dev", "Kumar", "abc@hotmail.com", 12, "my xyz");
const u2 = new CreateUser(
  "dhruyv",
  "Kumar",
  "abdhruyvc@hotmail.com",
  22,
  "my xyz",
);
const u3 = new CreateUser(
  "aarushi",
  "jurel",
  "jurel@hotmail.com",
  17,
  "my xyz",
);

const n1 = new NewUser("Jasmin", "bhasin", "rosie@hotmail.com", 23, 50);
console.log(n1.run());
console.log(n1.about());
