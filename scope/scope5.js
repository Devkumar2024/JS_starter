
function greet(){
    console.log("Hello girl.");
}

sayHello(); // ❌ ERROR: sayHello is not a function (ya Cannot access before initialization)

var sayHello = function() {
    console.log("Hi!");
};