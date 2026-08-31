// Initial Object
let user = {
  name: "Dev",
  age: 23,
  address: {
    city: "Ludhiana",
    country: "India"
  }
};

// 1. Access name (Dot notation)
console.log(user.name); // Output: Dev

// 2. Access city (Nested dot notation)
console.log(user.address.city); // Output: Ludhiana

// 3. Access using bracket notation
console.log(user["name"]); // Output: Dev
console.log(user["address"]["country"]); // Output: India

// 4. Add a new property
user.role = "Developer";
console.log(user.role); // Output: Developer

// 5. Modify a property
user.age = 24;
console.log(user.age); // Output: 24

// 6. Delete a property
delete user.role;
console.log(user.role); // Output: undefined

// 7. Check whether a property exists
console.log("age" in user); // Output: true
console.log("role" in user); // Output: false

// 8. Loop through object properties (for...in)
for (let key in user) {
  console.log(`${key}:`, user[key]);
}

// 9. Destructure name and age
const { name, age } = user;
console.log(name, age); // Output: Dev 24

// 10. Destructure nested city
const { address: { city } } = user;
console.log(city); // Output: Ludhiana

// 11 & 12. Create a greet() method using this.name
user.greet = function() {
  console.log(`Hello, my name is ${this.name}!`);
};
user.greet(); // Output: Hello, my name is Dev!


