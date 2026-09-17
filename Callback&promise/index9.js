const p1 = new Promise((resolve, reject) => {
  resolve({
    name: "jhon doe",
    age: 36,
    profession: "dot net programmer",
    company: "Tower capital LLC",
    profile: {
      Exp: 14,
      languages: 8,
      No_of_EOMs: 45,
    },
  });
  // reject("NOT Hello");
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
