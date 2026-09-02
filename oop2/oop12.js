// getters and setters
class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    get fullName(){
        return `${this.name} => ${this.age}`
    }

    set setName(name_age){
        const[name, age] = name_age.split(" ");
        this.name = name;
        this.age = age;
    }
}

const p1 = new Person("dev kumar", 54, "India")
// methods in class are called by (), not for properties
console.log(p1.name);
// console.log(p1.fullName());
console.log(p1.fullName);

// we can set values in function like ppts
p1.setName = "Rosie_Mehra 26";
console.log(p1);