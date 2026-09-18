const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("promise p1 resolved");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("promise p2 resolved");
  }, 5000);
});

async function handlePromise() {
  // use await in front of promise, promise will be resolved and stored in constant val given

  console.log(`Hello sir`); // immediately

  const val2 = await p2;
  console.log(val2);
  console.log("Hello 2");


  const val1 = await p1;
  console.log(val1);
  console.log("Hello 1");
}

handlePromise();

// function getData() {
//   // js engine will not wait for promise to resolve
//   p.then((response) => console.log(response));

//   // this is printed then promise is resolved after 10 sec.
//   console.log(`this will execute 1st the promise`);
// }

// getData();
