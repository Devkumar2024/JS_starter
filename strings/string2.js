// 1. The Function (Primitive)
const primitiveStr = String("Hello"); 
console.log(primitiveStr);        // Output: "Hello"
console.log(typeof primitiveStr + "\n"); // Output: "string"  

// 2. The Constructor (Object)
const objectStr = new String("Hello");
console.log(objectStr);           // Output: [String: "Hello"] , string object wrapper
console.log(typeof objectStr);    // Output: "object" 

if (new String("abc") === "abc") {
  console.log("This will NEVER run.");
}
else{
    console.log("This will run");
}
// They are strictly not equal because one is an Object, the other is a Primitive!