// method : function inside object
function personInfo() {
  console.log(`
Person name : ${this.firstName}
person's age : ${this.age}
        `);
}
let person1 = {
  firstName: "Dev",
  age: 29,
  about: personInfo,
};
let person2 = {
  firstName: "Daksh",
  age: 30,
  about: personInfo,
};
let person3 = {
  firstName: "Dhruv",
  age: 45,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();
