console.log(a); // Output: undefined (Error nahi aayega!)
var a = 10;
console.log(a);

// Function ko declaration se pehle call kar rahe hain
greet(); // Output: Hello from hoisted function!

// Function Declaration
function greet() {
  console.log("Hello from hoisted function!");
}