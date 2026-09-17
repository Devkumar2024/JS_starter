// Promise.any()

const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject(`p1 promise reject`);
  }, 3000);
//   setTimeout(function () {
//     resolve(`p1 promise fulfilled`);
//   }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject(`p2 promise reject`);
  }, 2500);
//   setTimeout(function () {
//     resolve(`p2 promise fulfilled`);
//   }, 2500);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject(`p3 promise rejected`);
  }, 1000);
//   setTimeout(function () {
//     resolve(`p3 promise fulfilled`);
//   }, 1000);
});

// took 3 sec to get the result
Promise.any([p1, p2, p3])
.then((result) => console.log(result))
.catch((error)=>{ console.error(error);
    console.log(error.errors);
});

// p1,p2,p3 can be api calls also
