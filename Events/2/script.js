let Grand_parent = document.querySelector(".grand_parent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

// Grand_parent.addEventListener("click", function (event) {
//   console.log(`Grand Parent`);
//   console.log(event.target);
//   console.log(event.currentTarget);
// });


Grand_parent.addEventListener("click", function (event) {
  console.log(`Grand Parent`);
  console.log(event.target);
//  console.log(event.currentTarget);
  event.stopImmediatePropagation();
}, {capture : true});

parent.addEventListener("click", function (event) {
  console.log(`Parent`);
  console.log(event.target);
//  console.log(event.currentTarget);
});

child.addEventListener("click", function (event) {
  console.log(`Child`);
  console.log(event.target);
//  console.log(event.currentTarget);
});

// click on child, all upar wale event triggered
