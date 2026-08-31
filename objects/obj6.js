// copy of values
// copy in primitive data types
let b = 100;
let a = b;

b = 200;
console.log("a value is : " + a);
//Primitives (numbers, strings, booleans) → Stored by value. The variable is the value.


// copy in terms of object, here changes happen
let gen_info = {
  name: "jhon doe",
  age: 36,
  profession: "dot net programmer",
  status: "married",
};

let basic_info = gen_info;
// Objects (including arrays, functions, dates, {}) → Stored by reference (pointer). The variable holds a memory address pointing to where the object lives.

basic_info.profession = "PHP laravel developer";
console.log(gen_info.profession);
