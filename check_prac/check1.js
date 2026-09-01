// Create a student object containing name, age, course, and marks. Print all its information.

const student = {
    name: "Dev",
    age: 54,
    course: ['eng', 'maths', 'sst'],
    marks : [66,68,72]
}

for (let i in student) {
    console.log(i);
}



// Given a product object, add a new discount property, update its price, and remove its category property.

const product = {
    name: 'laptop',
    model_year: 2020,
    price: 55000,
    processor : "amd ryzen 3775h"
}

product.discount = 5;
product.price = product.price * ((100 - product.discount) / 100);
delete product.processor;
console.log(product);

// Create a rectangle object containing length and width, with methods to calculate its area and perimeter.

let rectangle = {
    length: 100,
    width: 200,
    area: function() {
        console.log(this.length * this.width);
    },
    perimeter: function() {
        console.log(2 * (this.length + this.width));
    }
}

rectangle.area();
rectangle.perimeter();

// Create a bankAccount object with owner, balance, and methods deposit() and withdraw()

let bankAccount = {
    owner: 'Dev kumar',
    current_bal: 1500,

    deposit: function (money) {
        this.current_bal += money;
        return (this.current_bal);
    },

    withdraw: function (money) {
        if (this.current_bal < 0 || money > this.current_bal) {
            console.log(`invalid ops`);
        }
        else if (money <= this.current_bal) {
            this.current_bal -= money;
        }
        return (this.current_bal);
    }
}

console.log(bankAccount.deposit(2000));
console.log(bankAccount.withdraw(12000));

// Create a counter object with count, increment(), decrement(), and reset() methods.

const count = {
    number: 0,

    increment: function () {
        return (this.number += 1);
    },

    decrement: function () {
        return (this.number -= 1);
    },

    reset: function () {
        return (this.number = 0);
    },

    check_val: function () {
        console.log(this.number);
    }
}

count.increment();
count.increment();
count.increment();
count.increment();
count.decrement();
count.check_val();
count.reset();
count.check_val();