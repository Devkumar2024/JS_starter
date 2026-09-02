const users = [
  { id: 101, name: "Dev", age: 23, city: "Ludhiana" },
  { id: 102, name: "Aman", age: 24, city: "Delhi" },
  { id: 103, name: "Rahul", age: 22, city: "Mumbai" },
  { id: 104, name: "Karan", age: 25, city: "Delhi" }
];

// Convert the array into an object where each user's id becomes the key and their name becomes the value.

let obj = users.reduce((acc, curr) => {
  acc[curr.id] = curr.name;
  return acc;
}, {})

console.log(obj)

// Agar aapko kisi key par nayi value set karni hai (purani value ko badhana nahi hai), toh aapko simple assignment = operator use karna hoga.

// Convert it into an object where each user's id becomes the key and the complete user object becomes the value.

let obj2 = users.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {})

console.log(obj2)

// Create an object where each city is a key and its value is the number of users living there.

let obj4 = users.reduce((acc, curr, index) => {
  if (acc[curr.city]) {
    acc[curr.city].push(curr);
  }
  else {
    acc[curr.city] = [curr];
  }
  return acc;
}, {})

console.log(obj4);

let obj5 = users.reduce((acc, curr, index) => {
  if (curr.age > 23) {
    acc[curr.id] = curr;
  }
  return acc;
}, {})

console.log(obj5);