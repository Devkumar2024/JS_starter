// let h1 = document.querySelector('h1');
// console.log(h1.tagName); // tagname
// console.log(h1.nodeName); // tagName, text node, comment node
// console.log(h1.firstChild.nodeName);

// h1.innerText = 'this is new heading'
// console.log(h1.innerText); // only how it is shown in UI
// console.log(h1.textContent); // shown in UI + formatting


// h1.innerHTML = '<p>inner html changed</p>'
// console.log(h1.innerHTML);
// console.log(h1.firstChild);

// console.log(h1.tagName);
// console.log(h1.innerText); // does not show hidden items
// console.log(h1.nodeName);
// console.log(h1.textContent);
// console.log(h1.innerHTML);

let div = document.querySelector('div');
let p = document.createElement('p');

p.innerText = 'New Paragraph';
// one method at a time

// div.prepend(p);
// div.after(p)
div.before(p)
console.log(div);

