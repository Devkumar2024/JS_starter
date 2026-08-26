// this keyword
"use strict";
// uage in global window space
console.log(this); // window value

// uage inside a function
function x() {
  console.log(this); // window value
}
x();
window.x(); // runs in browser only

// Object method
let calculator = {
  a: 10,
  introduce() {
    console.log(this);
    console.log(this.a);
  },

};

// object method() vs object method
//calls the function
calculator.introduce();

// call, apply and bind methods


