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
let stu1 = {
  name: "Dev kumar",
  introduce(){
    console.log(this.name);
  },



// In case of arrow function it does not provide its own this binding, they retain value of thier own Lexical Context

  x:() => {
    console.log(this);
  },
};

let stu2 = {
  name: "Depikia",
};
// reusing stu1 method
// .call will take value of this keyword inside it

// deepika is using stu1 function. OVERRIDE VALUE
stu1.introduce.call(stu2);
stu1.x(); // prints window, parent lexical context. 





