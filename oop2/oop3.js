// const user = {
//   firstname: "Dev",
//   lastName: "Kumar",
//   email: "xyz@gmail.com",
//   age: 21,
//   address: "New xyz nagar, sundar vihar, delhi",
//   about() {
//     console.log(
//       `My name is ${this.firstname} ${this.lastName} and my age is ${this.age}`,
//     );
//   },
//   is18() {
//     return this.age >= 18;
//   },
// };
/*
function creates an object, take key value pairs and return result === factory function.
*/

const userMethods = {
  about: function () {
    console.log(
      `My name is ${this.firstname} ${this.lastName} and my age is ${this.age}`,
    );
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstname, lastName, email, age, address) {
  const obj = {};
  obj.firstname = firstname;
  obj.lastName = lastName;
  obj.email = email;
  obj.age = age;
  obj.address = address;
  // accessing methods via reference
  obj.about = userMethods.about;
  obj.is18 = userMethods.is18;

  // for every created objects these methids will be created diffrently so use new method method sharing among objects.
  return obj;
}

const u1 = createUser("Dev", "Kumar", "abc@hotmail.com",  12, "my xyz");
const u2 = createUser("dhruyv", "Kumar", "abdhruyvc@hotmail.com",  22, "my xyz");
const u3 = createUser("aarushi", "jurel", "jurel@hotmail.com",  17, "my xyz");

console.log(u1);
console.log(u2);
console.log(u3);