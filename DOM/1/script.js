// repr all page content as objects that can be modified
document.body.style.background = "red";
// alert( document.documentElement.parentNode ); // document
// alert( document.documentElement.parentElement ); // null
// set it back after 3 sec

setTimeout(() => {
  document.body.style.background = "";
}, 1000);

// Bom
// setTimeout(
// ()=>{alert(location.href);
// if(confirm("Go to MDN DOCS?")){
//     location.href = "https://developer.mozilla.org/en-US/docs/"
// }}, 5000)
 
let ul = document.querySelector('ul')
console.log(document); // full dcoument
console.log(document.documentElement);
console.log(document.body.children); // htmlCollection
console.log(ul.childNodes);
// elem.hasChildNodes() to check whether there are any child nodes.
console.log(ul.hasChildNodes());

// Array methods not applicable here as nodelist is not and array we have to covert it 
console.log((ul.childNodes).filter);  // undefined
console.log(Array.from(ul.childNodes).filter);


// console.log(document.documentElement.parentNode); // document
// console.log(document.parentNode);
