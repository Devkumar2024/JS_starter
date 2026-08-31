// 1. Hoisting phase:
function greet() {
  // Function Declaration is fully hoisted (stored in memory)
  console.log("Hello girl.");
}

var sayHello; // 'var' declaration is hoisted, but initialized as 'undefined'

// 2. Execution phase:
sayHello(); // ❌ ERROR! sayHello is currently 'undefined', not a function.

sayHello = function () {
  // This assignment NEVER runs because the error stops execution
  console.log("Hi!");
};
