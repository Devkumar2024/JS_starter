// new keyword
function createUser(name, age){
    this.age = age;
    this.name = name;
}
createUser.prototype.about = function(){
    console.log(`${this.name} ${this.age}`);
}
const user1 = new createUser("Dev Kumar", 25);
/*
new keyword creates new object {}, this = {}
puts key value pair into object, return this
***MAIN****
automatic prototype linkig of method to object
*/
user1.about();