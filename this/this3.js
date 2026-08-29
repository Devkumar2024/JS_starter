const user1 = {
  name: "Amit",
  showDetails: function(age, city) {
    console.log(`${this.name} ki umar ${age} saal hai aur woh ${city} me rehta hai.`);
  }
};

const user2 = {
  name: "Suresh"
};

// call() me comma-separated arguments hote hain:
user1.showDetails.call(user1, 25, "Delhi");

// apply() me arguments ko Array [] ke andar pass karte hain:
user1.showDetails.apply(user2, [25, "ldh"]);
// Output: Suresh ki umar 25 saal hai aur woh Delhi me rehta hai.