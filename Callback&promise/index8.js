// async task, pending state, fulfilled state, rejected state,
const p1 = fetch("http://api.github.com/users");

// currently pending, print karane ke fayda nhi
// console.log(p1);
// reject : internet down, server down, dns down
// whenever server will respond usko fulfilled, ki catagory mei daala jayega

p1
.then((response) => {
  console.log(response);
  if(!response.ok){
    throw new Error(`Data is not present in the server`);
  }
  return response.json();
})
.then((response) => {
  const parent = document.getElementById("first");

  for (let i = 0; i < response.length; i++) {
    const image = document.createElement("img");
    image.src = response[i].avatar_url;
    image.style.height = "200px";
    image.style.width = "200px";
     parent.appendChild(image);
  }
})
.catch((error)=>{
 const parent = document.getElementById("first");
 parent.textContent = error.message;
});
