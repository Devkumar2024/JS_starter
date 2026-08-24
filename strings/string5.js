let name = prompt("Enter the full name :: ");
// let username = "@" + name + "_" + name.length;
let username = `@${name.trim().replaceAll(" ", "")}_${name.length}`;
console.log(username);

// name.trim().replaceAll(" ", "") = method chaining