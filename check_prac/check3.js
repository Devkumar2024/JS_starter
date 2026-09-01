function introduce(city, pin_code){
    console.log(`My name is ${this.name}, I live is ${city} and my pin code is ${pin_code}`);
}

const user1 = { name: "Rahul" };
const user2 = { name: "Priya" };

// Two PERMANENTLY BOUND functions, each function has 'this' locked to its respective object.
const introduceRahul = introduce.bind(user1);
const introducePriya = introduce.bind(user2);
// function made first, can be used later

introducePriya("bandra", 69072); // introduce.bind(user2) → Locks this to { name: "Priya" } forever.

/*
[
  { id: 1, name: "A", price: 100 },
  { id: 2, name: "B", price: 200 },
  { id: 3, name: "C", price: 300 }
]

return sum of all prices amd transfrom with names ppt deleted
}
*/

let arr = [
    { id: 1, name: "A", price: 100 },
    { id: 2, name: "B", price: 200 },
    { id: 3, name: "C", price: 300 },
    { id: 4, name: "D", price: 400 }
]

let p = arr.reduce((sum_acc, curr, index, array) => {
    return sum_acc + array[index].price;
},0)

console.log(p);
const a = arr.map(item => {
    return { id: item.id, price: item.price };
})

const b = arr.map(({ name, ...rest }) => rest)
console.log(a);
console.log(b);

const users = [
    { name: "Dev", city: "Ludhiana" },
    { name: "Jhon", city: "Ludhiana" },
    { name: "nitin", city: "Delhi" },
    { name: "ayushi", city: "Ludhiana" },
    { name: "sam", city: "Delhi" },
    { name: "vivek", city: "Asr" },
    { name: "ankush", city: "Asr" }
];

const grouped = users.reduce((acc, curr) => {
      if (acc[curr.city]) {
        acc[curr.city].push(curr);
    } else {
        acc[curr.city] = [curr];      
    }
    return acc;
}, {});

console.log(grouped);

// Given an array of products containing name and category, create an object containing the number of products in each category.

const products = [
    { name: "Yoga Mat", category: "Fitness" },
    { name: "MacBook Pro", category: "Electronics" },
    { name: "Oversized Hoodie", category: "Clothing" },
    { name: "Air Fryer", category: "Home & Kitchen" },
    { name: "Sunscreen SPF 50", category: "Beauty" },
    { name: "iPhone 15", category: "Electronics" },
    { name: "Atomic Habits", category: "Books" },
    { name: "Denim Jacket", category: "Clothing" },
    { name: "Blender", category: "Home & Kitchen" },
    { name: "Dumbbells 10kg", category: "Fitness" },
    { name: "Sony WH-1000XM5", category: "Electronics" },
    { name: "Moisturizer", category: "Beauty" },
    { name: "Cargo Pants", category: "Clothing" },
    { name: "Resistance Bands", category: "Fitness" },
    { name: "Mechanical Keyboard", category: "Electronics" },
    { name: "The Alchemist", category: "Books" },
    { name: "Coffee Maker", category: "Home & Kitchen" },
    { name: "Running Shoes", category: "Fitness" },
    { name: "Lip Balm", category: "Beauty" },
    { name: "Sneakers", category: "Clothing" },
    { name: "Gaming Mouse", category: "Electronics" },
    { name: "Protein Shaker", category: "Fitness" },
    { name: "Socks Pack", category: "Clothing" },
    { name: "Toaster", category: "Home & Kitchen" },
    { name: "Face Wash", category: "Beauty" }
];

const group = products.reduce((acc, curr)=> {
    if (acc[curr.category]) {
        acc[curr.category] += 1;
    }
    else {
        acc[curr.category] = 1;
    }
    return acc;
}, {})

console.log(group);


// ["apple", "banana", "apple", "orange", "banana", "apple"]
// create a frequency object showing how many times each item occurs.

// const products = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const freq = products.reduce((acc, curr)=> {
//     if (acc[curr]) {
//         acc[curr] += 1;
//     }
//     else {
//         acc[curr] = 1;
//     }
//     return acc;
// }, {})

// console.log(freq);