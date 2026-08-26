// Object method
let calculator = {
  name: "Dev kumar",
  age: 23,

  introduce() {
    console.log("My age is " + this.age + ", My name is " + this.name);
  },
  add(a, b) {
    return a + b;
  },
};

let result = calculator.add(10, 20);
console.log(result);

// object method() vs object method
//calls the function
calculator.introduce();
// gets the function itself
console.log(calculator.introduce);
