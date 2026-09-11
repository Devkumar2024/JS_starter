let container = document.querySelector(".container");
// console.log(container.childNodes);

// on click on child hello aayega console pe
// PROBLEM :: performance wise problematic

// container.childNodes.forEach((ele) => {
//   ele.addEventListener("click", () => {
//     console.log(ele.innerText);
//   });
// });

container.addEventListener("click", function (event) {
  //  console.log(event.target);
  let TargetELE = event.target;
  if ((TargetELE.className === "box")) {
    console.log(`Click on`, TargetELE.textContent);
  }
});
