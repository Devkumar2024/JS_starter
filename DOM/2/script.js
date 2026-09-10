let doc = document.querySelectorAll("ul");
console.log(doc);
let doc2 = document.querySelectorAll("li");
console.log(doc2);

for (let elem of doc2) {
  console.log(elem.innerHTML);
}
