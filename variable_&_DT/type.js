let name = "Alex";
console.log(typeof name); // Outputs: "string"
// Let is used when we have to change value in future.

let age = 25;
console.log(typeof age); // Outputs: "number"

let isLoggedIn = true;
console.log(typeof isLoggedIn); // Outputs: "boolean"

let variable = 65;
console.log(Object.prototype.toString.call(variable));

/* Main drawback of typeof */
console.log(typeof {});          // "object"  (Plain object)
console.log(typeof []);          // "object"  (Array)
console.log(typeof new Date());  // "object"  (Date)
console.log(typeof null);        // "object"  (Null bug)