//The ?? operator returns the right-hand side only if the left-hand side is null or undefined. Otherwise, it returns the left-hand side. checks only null and undefined, no other falsy values, that makes it different from or operator.uhghjfdhjk.
// In JavaScript, every value is either truthy or falsy when evaluated in a Boolean context (like inside an if condition).

let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // "Guest"

let score = 0;
let finalScore = score ?? 100;
console.log(finalScore); // 0 (because 0 is not null/undefined)

let nickname = undefined;
let result = nickname ?? "Anonymous";
console.log(result); // "Anonymous"