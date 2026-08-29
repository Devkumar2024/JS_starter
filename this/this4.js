const person = {
  name: "Rohan",
  greet: function(greeting) {
    console.log(`${greeting}, mera naam ${this.name} hai.`);
  }
};

const anotherPerson = {
  name: "Pooja"
};

// bind() ne function chalaya nahi, bas ek naya bound function banaya
const greetPooja = person.greet.bind(anotherPerson, "Namaste");

// Ab aap is function ko baad me kabhi bhi call kar sakte hain:
greetPooja(); 
// Output: Namaste, mera naam Pooja hai.