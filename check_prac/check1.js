// Create a method that modifies object data using this

let user = {
  name: "dev",
  class: "btech IT",
  CRN: 2021024,
  URN: 2004902,

  change() {
    this.URN = 2004903
    console.log(`URN now is ${this.URN}`);
  }
};
user.change();


