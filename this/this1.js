console.log(this);
let user = {
    name:"Dev",
    age:56,
    city : "Ludhiana",
    greet : function(){
        console.log(this); // ye wala this pointing to user object as this is calling object
        console.log(`My name is ${this.name}`);
    }
}

user.greet();

// we can define a function and reuse that, using this calling object var_name will be used.

const user1 = {
    name:"Rohit",
    age:30,
}
const user2 = {
    name:"Mohit",
    age:10
}

function greet(){
    console.log(`hi ${this.name}`);
}
 greet.call(user1);
 greet.call(user2);