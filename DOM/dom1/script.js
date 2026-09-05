// let h1 = document.querySelector('h1');
// h1.innerHTML = "Hi this is new heading"

// let p = document.querySelector('p');
// p.innerHTML = "Hi this is new paragraph"

// let a = document.querySelector('h1');
// a.style.backgroundColor = 'rgb(0,255,0)';
// a.style.color = 'black';

// let b = document.querySelector('p');
// b.style.backgroundColor = 'rgb(0,255,0)';
// b.style.color = 'black';

let h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
  // console.log("Supp homie! you clicked me")
  h1.style.backgroundColor = "rgb(105, 10, 75)";
  h1.style.color = "rgb(181, 178, 203)";
  h1.innerHTML = "Supp homie! you clicked me";
});

let box = document.querySelector("p");
box.addEventListener;

let button = document.querySelector("button");
let offBtn = document.querySelector(".offBtn");
button.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
  box.style.scale = "1";
  box.innerHTML = "Hi"
  box.color = "purple";
  box.style.fontFamily = 'Courier New';
  box.style.fontSize = '28px';
});

offBtn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
  box.style.color = "black";
  box.style.scale = "0.7";
  box.innerHTML = "❤️ Dev"
  box.style.fontSize = '32px';
});
