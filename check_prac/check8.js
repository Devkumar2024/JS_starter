class Calculator {
  // Static method
  static add(a, b) {
    return a + b;
  }

  // Normal instance method
  multiply(a, b) {
    return a * b;
  }
}
// static call : hamesha class name se hogi
console.log(Calculator.add(5, 3)); // Output: 8

// Instance creating
const calc = new Calculator();
console.log(calc.multiply(5, 3)); // Output: 15

// Trying to call static method from an instance
try {
  calc.add(5, 3);
} catch (error) {
  console.log("Error:", error.message); 
  // Output: Error: calc.add is not a function
}