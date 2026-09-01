// deep copy

let gen_info = {
  name: "jhon doe",
  age: 36,
  profession: "dot net programmer",
  company: "Tower capital LLC",
  profile: {
    Exp: 14,
    languages: 8,
    No_of_EOMs: 45,
  },
};

let basic_info = structuredClone(gen_info);

basic_info.profession = "PHP laravel developer";
console.log(gen_info.profession);

// change in nested object
basic_info.profile.Exp = 15;
console.log(gen_info.profile.Exp); //14


// Create a person object with name and age and a method introduce() that uses this to return a sentence about the person.

const person = {
    name: "Dev kumar",
    age: 15,
    introduce: function (){
        return `My name is ${this.name} and my age is ${this.age}`
    }
}

console.log(person.introduce());