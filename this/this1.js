console.log(this);

let user = {
    name:"Dev",
    age:56,
    city : "Ludhiana",
    greet : function(){
        console.log(this); // ye wala this pointing to user object as this is calling object
        console.log(`my name is ${this.name}`);
    }
}

user.greet();

// reusable functions
function greet(){
    console.log(`hi ${this.name}`);
}
const user1 = {
    name:"Rohit",
    age:30,
}
const user2 = {
    name:"Mohit",
    age:10
}
 greet.call(user1);
 greet.call(user2);