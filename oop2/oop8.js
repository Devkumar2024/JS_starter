// new keyword
function CreateUser(firstname, lastName, email, age, address) {
  this.firstname = firstname;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

// createuser is a function, it will have prototype
CreateUser.prototype.about = function () {
  console.log(
    `My name is ${this.firstname} ${this.lastName} and my age is ${this.age}`,
  );
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

const u1 = new CreateUser("Dev", "Kumar", "abc@hotmail.com", 12, "my xyz");
const u2 = new CreateUser("dhruyv", "Kumar", "abdhruyvc@hotmail.com", 22, "my xyz");
const u3 = new CreateUser("aarushi", "jurel", "jurel@hotmail.com", 17, "my xyz");

console.log(u1.about());
console.log(u2.is18());
