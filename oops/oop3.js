// constructor function
// std way to create blueprint 
function user(name, work, dept, salary) {
  this.name = name;
  this.work = work;
  this.dept = dept;
  // non static defn.
  this.pay = salary;
}

// we need new keyword, warna same new banta rahega

// let e1 = user("Dev", "Jr. SE", "Full stack", 5000)
// let e2 = user("vilan", "Jr. SE", "Full stack", 5600)

let e1 = new user("Dev", "Jr. SE", "Full stack", 5000);
let e2 = new user("vilan", "Jr. SE", "Full stack", 5600);
console.log(e1);
console.log(e2);
console.log(typeof e1.pay); 
console.log(typeof user.pay); // undefined as pay property exists on an object not function, and this is not staicaly defined
