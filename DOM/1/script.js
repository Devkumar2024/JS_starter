// repr all page content as objects that can be modified
document.body.style.background = "red";

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
  
console.log(document);
console.log(document.documentElement);
console.log(document.documentElement.parentNode);
