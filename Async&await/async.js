const p = new Promise((resolve, reject) => {
  resolve("promise p resolved");
});

async function getdata(params) {
  return p;
}

// always return a promise
const data = getdata();
console.log(data);

// to get data inside promise
data.then((response) => console.log(response));
