// prototype
function Student(name, age) {
  this.name = name;
  this.age = age;
}

// this is required to access current object variables and methods
Student.prototype.Introduce = function(){
    console.log(`My name is ${this.name} and age is ${this.age}`);
}

let s1 = new Student("Dev", 23);
let s2 = new Student("Muskaan", 22);

console.log(s1);
console.log(s2);
s1.Introduce();


