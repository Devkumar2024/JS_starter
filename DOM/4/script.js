let div = document.querySelector('div')
console.log(div.getAttribute("class"))

div.setAttribute("Tankman", 123)
for(let attr of div.attributes){
    console.log(`${attr.name} = ${attr.value}`);
}