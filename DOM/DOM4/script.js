// inserting elements

let div = document.querySelector('div');
let alpha = document.querySelector('#alpha');
let ele = document.createElement('p')
ele.innerText = "Appended paragraph"

// div.append(ele)
// div.prepend(ele)
// div.before(ele)

div.after(ele)
// ele.remove()
// console.log(alpha);
alpha.style.backgroundColor = 'blue'

let parentNode = alpha.parentNode;
parentNode.append(ele)  // text, comment, element

let newele = document.createElement('div');
newele.innerText = 'hello';

parentNode.replaceChild(newele, alpha);