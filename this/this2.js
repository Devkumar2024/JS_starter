const person1 = {
  name: "Rahul",
  greet: function(city) {
    console.log(`Hello, mera naam ${this.name} hai aur main ${city} se hoon.`);
  }
};

const person2 = {
  name: "Priya"
};

// Normal Call (this = person1)
person1.greet("Delhi"); 


// Using call() (this = person2)
person1.greet.call(person2, "Mumbai"); 
