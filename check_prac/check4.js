// Object with a method defined as an ARROW function

// Node.js ya Strict Mode / ES Module
var name = "GlobalAmit"; // Yeh global object pe nahi jaata, module scope mein rehta hai!
var age = 30;

const user = {
  introduce: () => {
    // 'this' = {} (empty) ya undefined (strict/module)
    console.log(this.name); // ❌ Output: undefined
  },
};

user.introduce(); // undefined
// Output: Hi, I'm undefined. I'm undefined years old.

// Object with a method defined as a REGULAR function
const user2 = {
  name: "Amit",
  age: 25,

  // ✅ Regular function (method syntax)
  introduce: function () {
    console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old.`);
  },
};

user2.introduce();
// Output: Hi, I'm Amit. I'm 25 years old.
// ✅ 'this' correctly refers to 'user'!
