const github_API = "https://api.github.com/users/Devkumar2024";

// fetch() : an API given by the browser
// useer promise
const user = fetch(github_API);

// abhi promise object : user is in pending state
console.log(user);

// data from promiseresult comes here
user.then(function (data) {
  console.log(data);
});