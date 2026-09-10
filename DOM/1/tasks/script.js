// For each of the following, give at least one way of how to access them:

// The <div> DOM node?
// The <ul> DOM node?
// The second <li> (with Pete)?

let div = document.querySelector('div');
let ul = document.querySelector('ul');
console.log(div);
// or
console.log(document.body.firstElementChild)


console.log(ul);
console.log(ul.childNodes[1]);

