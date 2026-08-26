// copy of values

// copy in primitive data types
let b = 100;
let a = b;

b=200;
console.log("a value is : " + a);
// b changes but a value is unchanges as a conatiner has 100 value in it, b has 200, both saperate

// copy in terms of object
let gen_info = {
  name: "jhon doe",
  age: 36,
  profession: "dot net programmer",
  status: "married",
};

let basic_info = gen_info;
// here refernce is passed, which means both objects points point to same data field

basic_info.profession = "PHP laravel developer";
console.log(gen_info.profession);