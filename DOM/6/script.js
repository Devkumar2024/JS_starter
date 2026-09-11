let div = document.querySelector('.main_class')
div.className = 'hello'
console.log(div.className);
div.classList.add('newName');
div.classList.toggle('xyz');
console.log(div.className);
console.log(div.classList);
document.body.style.background = 'green'

setTimeout(()=>{document.body.style.removeProperty('background')}, 2000)
// full css rewrite

 div.style.cssText=`color: red !important;
    background-color: yellow;
    width: auto;
    text-align: center;
    padding:20px;
  `;
alert(getComputedStyle(div).backgroundColor)
