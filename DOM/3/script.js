let ele = document.body;
// alert("document.nodeType :: " + document.nodeType);
// alert("element nodetype :: " + ele.nodeType);

console.log(document.body.firstChild);
console.log(document.body.firstChild.tagName); // undefined (not an element)
console.log(document.body.firstChild.nodeName);

console.log(document.firstChild); // <!doctype html>
console.log(document.firstChild.tagName);
console.log(document.firstChild.nodeName);

// console.log(document.innerHTML);

let div = document.querySelector(".booo");
div.innerHTML = "<p>Meri lanka lag chuki hai</p>";
div.innerHTML += "<p> += ka usage hua hai yaha </p>";
// innerHTML
console.log(div.innerHTML);

// outerHTML
// div.outerHTML = "<p>BHOW BHOW</p>";
console.log(div.outerHTML);

// textContent : text content in div - all nodes
console.log(div.textContent);


