let div = document.createElement("div"); // create element
let p = document.createElement("p"); // create element
let master = document.querySelector(".master");
div.className = "baseClass"; // set clasnmame
div.innerHTML = "<strong>Hi !</strong> how are you"; // content
p.innerText = "Hi, I am p tag";

// We’ve created the element. But as of now it’s only in a variable named div, not in the page yet. So we can’t see it.

master.prepend(div, document.createElement("hr"));
master.append(p);

// insertAdjacentHTML/Text/Element
let ordList = document.querySelector("ol");
ordList.insertAdjacentHTML(
  "beforebegin",
  "<p><strong>beforebegin</strong></p>",
);
ordList.insertAdjacentHTML("afterbegin", "<p><strong>afterbegin</strong></p>");
ordList.insertAdjacentHTML("beforeend", "<p><strong>beforend</strong></p>");
ordList.insertAdjacentHTML(
  "afterend",
  `<div class="alert">
    <strong>Hi there!</strong> You've read an important message.
  </div>`,
);

// Select and remove
let gyaan = document.getElementById('gyaan');
gyaan.remove();

let substack = document.querySelector('.substack')
let deepClone = substack.cloneNode(true);

document.body.append(deepClone);

