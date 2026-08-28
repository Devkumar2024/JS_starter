// hoisting

// var as undefined
// // let and const on temporal dead zone
// both function name and body are fully hoisted means we can run function before its decalartion if it does not have let or const in it

greet();

function greet(){
    console.log("Hello girl.");
}

// console.log(fog);
// let fog = 34; // can not be accessed

// sayHello(); ❌ ERROR: sayHello is not a function (ya Cannot access before initialization)

// var sayHello = function() {
//     console.log("Hi!");
// };