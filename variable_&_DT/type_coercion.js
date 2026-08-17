let result = 42 + "1";
console.log(result); // Outputs: "421" (String!)
console.log(typeof result); // Outputs: "string"
// Internally: Engine calls ToString(42) -> "42", then glues "42" + "1" = "421"

let result = "100" - 25;
console.log(result); // Outputs: 75 (Number!)
console.log(typeof result); // Outputs: "number"
// Internally: Engine calls ToNumber("100") -> 100, then does 100 - 25 = 7
