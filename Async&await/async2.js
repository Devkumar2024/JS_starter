

// async function handlePromise() {
//   // fetch returns us a promise
//   try {
//     const data = await fetch(API_URL);
//     // once promise is resolved then only function execution will resume

//     // data.JSON() is also a promise
//     const jsonVal = await data.json();
//     console.log(jsonVal);
//   } catch (error) {
//     console.log(error);
//   }
// }

const API_URL = "https://api.github.com/users/Devkumar2024";
async function handlePromise() {
  const data = await fetch(API_URL);
  const jsonVal = await data.json();
  console.log(jsonVal);
}
handlePromise().catch((error) => console.log(error));
