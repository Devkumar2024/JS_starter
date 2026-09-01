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

// Given a user object containing name, email, age, and city, extract only name and email using destructuring.

const user = {
    name: "Dev kumar",
    email: "xyz@gmail.com",
    city: "ludhiana",
}

let { name:n, email:e } = user;

console.log(n)
console.log(typeof n) 
console.log(e)
console.log(typeof e)

// Given an object containing firstName and lastName, destructure them and create a fullName.

const Naam = {
    firstName: "Dev",
    lastName: "Kumar"
}

let { firstName, lastName } = Naam
const fullName = firstName + " " + lastName;
console.log(fullName);

// Given a nested object containing user → address → city, extract the city using nested destructuring.

const user1 = {
    name: "Dev kumar",
    address: {
        // country and state are extra
        country: "India",
        state: "Punjab",
        city: "Ludhiana"
    }
}

let { name, address: {country, state, city}} = user1;

console.log(name);
console.log(state);
console.log(country);
console.log(city);
