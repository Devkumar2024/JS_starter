let result = 42 + "1";
console.log(result); // Outputs: "421" (String!)
console.log(typeof result); // Outputs: "string"
// Internally: Engine calls ToString(42) -> "42", then glues "42" + "1" = "421"

let result1 = "100" - 25;
console.log(result1); // Outputs: 75 (Number!)
console.log(typeof result1); // Outputs: "number"
// Internally: Engine calls ToNumber("100") -> 100, then does 100 - 25 =

if ("hello") {
    console.log("This runs!");
}
// Internally: Engine calls ToBoolean("hello"). Non-empty strings are true.

console.log(Number.isNaN("hello")); // false (It's a string, so it's not NaN)
console.log(Number.isNaN("42"));    // false (It's a string, not NaN)
console.log(Number.isNaN(NaN));     // true  (It is literally NaN!)
console.log(Number.isNaN(0/0));     // true  (0/0 produces NaN)
console.log(Number.isNaN(undefined)); // false (undefined is not NaN)

