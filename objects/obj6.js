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

/*
{
  name: "Dev",
  address: {
    city: "Ludhiana",
    state: "Punjab"
  }
}

transform it into a flat object containing name, city, and state.
*/
let obj = {
    name: "Dev",
    address: {
        city: "Ludhiana",
        state: "Punjab"
    }
}

let { name, address: { city, state } } = obj
let new_obj = { name, city, state }
console.log(new_obj)

/*
Given:
{
  name: "Dev",
  age: 23,
  city: "Ludhiana"
}

transform it into:

{
  personal: {
    name: "Dev",
    age: 23
  },
  location: {
    city: "Ludhiana"
  }
}*/

// let obj = {
//     name: "Dev",
//     age: 23,
//     city: "Ludhiana"
// }

// let { name, age, city } = obj;
// const new_obj = { personal: { name, age }, location: { city } };
// console.log(new_obj)
