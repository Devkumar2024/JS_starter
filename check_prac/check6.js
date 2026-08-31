// person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Prototype par method add karna
Person.prototype.greet = function () {
  console.log(
    `Namaste! Mera naam ${this.name} hai aur meri umar ${this.age} saal hai.`,
  );
};
// Class Method (automatically goes to Person.prototype)
const person1 = new Person("Rahul", 25);
const person2 = new Person("Priya", 22);

person1.greet(); 
person2.greet(); 