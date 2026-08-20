/* Optional chaining allows you to safely access nested properties of an object without throwing an error if an intermediate property is null or undefined.

If any part of the chain is null or undefined, the whole expression returns undefined instead of throwing a TypeError. */

const user = {
  name: "Alice",
  address: {
    city: "Wonderland"
  }
};

// Safely access nested properties
console.log(user.address?.city);        // "Wonderland"
console.log(user.address?.zipCode);     // undefined (no error)
console.log(user.contact?.phone);       // undefined (user.contact is undefined)

// Without optional chaining, this would crash:
// console.log(user.contact.phone);     // TypeError: Cannot read property 'phone' of undefined

// Optional chaining with function calls
const obj = {
  greet: () => "Hello"
};
console.log(obj?.greet());   // "Hello"
console.log(obj?.bye());     // undefined (no error)