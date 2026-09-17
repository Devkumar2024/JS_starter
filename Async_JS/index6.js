// creation phase
// using new k/w on promise class, p1 is promise object, it has two things promise state and some methdods jinka use karke you can access promise value and async work success or fail via callback function

// we can not get promise state, it is a protected ppt.
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(`done`);
    reject(`promise not done`);
  }, 3000);
  // resolve(`promise done`)
});

// consumption phase

p1.then(function (data) {
  console.log(`from then, ${data} `);
}).catch((e) => {
  console.log(`Error occured ${e}`);
}).finally(()=>{
    // always runs when promise is rejected or resolved
    console.log(`Finally block`);
});
