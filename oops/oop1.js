let obj = {
  n: "dev",
  class: "ITA1",
  roll_no: 2021024, //property
  greet: function () {
    // method
    // console.log("Hi this is " + this.n);
    console.log(this);
    // this represents object
  },

  G: () => {
    // fat arrow function this points to window, interit from window
    console.log(this);
  },
};

let obj2 = {
  n: "aditya",
  class: "ITA1",
  roll_no: 2021003, //property
  greet: function () {
    // method
    // console.log("Hi this is " + this.n);
    console.log(this);
    // this represents object
  },

};

// problem is bad syntax when we have to create multiple functions in object literal method


console.log(obj);
console.log(obj2);
obj.G();
