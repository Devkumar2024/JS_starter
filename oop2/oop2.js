function about(hobby, fav_singer) {
  console.log(
    `My name is ${this.firstname} and age is ${this.age}, my hobby is ${hobby} and I listen to ${fav_singer}`,
  );
}

const user1 = {
  firstname: "Dev",
  age: 25,
  //   about: function (hobby, fav_singer) {
  //     console.log(`My name is ${this.firstname} and age is ${this.age}, my hobby is ${hobby} and I listen to ${fav_singer}`);
  //   },
};
const user2 = {
  firstname: "Jahnvi",
  age: 24,
};

// object is passed in call method
// user1.about.call(); // My name is undefined and age is undefined

//about.apply(user1, ["gardening", "yyhs"])
const fun = about.bind(user1, "gardening", "yyhs");
fun();
// user1.about.call(user2);
