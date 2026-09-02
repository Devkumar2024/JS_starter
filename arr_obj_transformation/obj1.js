const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Phone", price: 30000, category: "Electronics" },
    { id: 3, name: "Chair", price: 5000, category: "Furniture" },
    { id: 4, name: "Table", price: 8000, category: "Furniture" }
]; 

// Create a new array containing only the name of every product.
let arr = products.map((e) => {
    return e.name;
});
console.log(arr);

// Create a new array containing objects with only name and price.
let arr2 = products.map((e) => {
    return { name: e.name, price: e.price};
});
console.log(arr2);

// Create a new array where every product also contains a discountedPrice property after applying a 10% discount.
let arr3 = products.map((e) => {
    return { ...e, discountedPrice : 0.9 * e.price};
});
console.log(arr3);

// Create a new array containing { name, totalPrice },assuming every product has a quantity of 2.
let arr4 = products.map((e) => {
    return { name: e.name, totalPrice: e.price*2 };
});
console.log(arr4);