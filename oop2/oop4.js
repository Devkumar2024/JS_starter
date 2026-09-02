// in function wala method problem arieses when we have to create a lot of methods

const obj1 = {
    key1: "value1",
    key2:"value2"
}

// new way
const obj2 = Object.create(obj1);
obj2.key3 = "value3";
// key2 first find in obj2 not in obj2, but it is taking that ppt from obj1
console.log(obj2.key2);
obj2.key2 = "unique2";
console.log(obj2.key2);


console.log(obj2.__proto__); // outputs obj1
