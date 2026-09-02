// const userMethods = {
//   about: function () {
//     console.log(
//       `My name is ${this.firstname} ${this.lastName} and my age is ${this.age}`,
//     );
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

function createUser(firstname, lastName, email, age, address) {
  // const obj = Object.create(userMethods); // this method creates an empty object {} and creating a chain with usermethods

  const obj = Object.create(createUser.prototype);
  obj.firstname = firstname;
  obj.lastName = lastName;
  obj.email = email;
  obj.age = age;
  obj.address = address;
  return obj;
}

// createuser is a function, it will have prototype
createUser.prototype.about = function () {
  console.log(
    `My name is ${this.firstname} ${this.lastName} and my age is ${this.age}`,
  );
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};

const u1 = createUser("Dev", "Kumar", "abc@hotmail.com", 12, "my xyz");
const u2 = createUser("dhruyv", "Kumar", "abdhruyvc@hotmail.com", 22, "my xyz");
const u3 = createUser("aarushi", "jurel", "jurel@hotmail.com", 17, "my xyz");

console.log(u1.about());
console.log(u2.is18());
