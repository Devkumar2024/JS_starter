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