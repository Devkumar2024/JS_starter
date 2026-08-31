// Create a function using this.name. Call it with an object as its context.

/*
.call() – passes arguments one by one
.apply() – passes arguments as an array
.bind() – creates a new function with a fixed contex
*/

function introduce(){
    console.log(`My name is ${this.name}`);
}
function introduce2(city, pin_code){
    console.log(`My name is ${this.name}, I live is ${city} and my pin code is ${pin_code}`);
}

// An object with a 'name' property
const person = {
  name: "Rahul",
  age: 25
};

// Using .call() – passes the context and any arguments
// When we call introduce.call(person), we explicitly set this inside introduce to person, so this.name becomes person.name ("Rahul").
introduce.call(person);    // Output: Hi, I'm Rahul.

// Alternative: using .apply() (same effect here), args sent as array
introduce2.apply(person, ["Ludhiana", 141007]);   // Output: Hi, I'm Rahul.

// Alternative: using .bind() – creates a new function with bound context
const boundIntro = introduce.bind(person);
boundIntro();
