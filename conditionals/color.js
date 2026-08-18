let color = "white"; // default color

let theme = prompt("Enter your theme color : (light, dark, cyan, puruple)");

if (theme == "light") {
  console.log("Theme :: white");
  color = 'white';
} else if (theme == "dark") {
  console.log("Theme :: black");
  color = 'black';
} else if (theme == "cyan") {
  console.log("Theme :: cyan");
  color = 'cyan';
} else {
  console.log("Theme :: purple");
  color = 'purple';
}

console.log(`Your selected theme is ${theme} and color is ${color} respectively!`);