// Global scope

let n = "dev";
function greet() {
  console.log(n);
  // seraches n in block --> not found, find in global.
}

console.log(n);
greet();

for (let i = 0; i <= 3; i++) {
  // let has block scope that is why for every iteration new i variable initialization is made
  setTimeout(function () {
    console.log(i);
  }, 100);
}

for (var j = 0; j <= 3; j++) {
  // var has functional scope that is why var is initialized only once
  setTimeout(function () {
    console.log(j);
  }, 100);
}

// best example
function block() {
  
  {
    // var accessible 
    var v = 78;
    console.log(v);
    {
      console.log(v);
    }
  }
  console.log(v);
}
function bla() {
  
  {
    // let not accessible outside block
    let v = 78;
    console.log(v);
    {
      console.log(v);
    }
  }
  console.log(v);
}
block();
bla();