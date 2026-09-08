let container = document.querySelector("#container");
let p = document.createElement("p");
let p2 = document.createElement("p");
let h3 = document.createElement("h3");
let h1 = document.createElement("h1");
let newDIV = document.createElement("div");
newDIV.setAttribute("id", "newman");
newDIV.setAttribute("style", "background-color:pink; border: 5px solid black; padding : 20px;");

p.textContent = "Hey I'm red!";
p2.textContent = "ME TOO!";
h3.textContent = "I'm a blue h3!";
h1.textContent = "I'm in div";
p.setAttribute("style", "color:red;");
h3.setAttribute("style", "color:blue;");

container.appendChild(p);
container.appendChild(h3);
container.appendChild(newDIV);
newDIV.appendChild(h1)
newDIV.appendChild(p2)

let content = document.querySelector(".content")
container.removeChild(content)

