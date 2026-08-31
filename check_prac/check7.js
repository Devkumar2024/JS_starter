class User {
  #age; // Private field declaration

  constructor(name, age) {
    this.name = name;
    // ✅ RIGHT:  this.age = age;  (Calls the setter below)
    this.age = age;
  }

  // Getter for age
  get age() {
    return this.#age;
  }

  // Setter with validation
  set age(value) {
    if (typeof value === "number" && value >= 0 && value <= 120) {
      console.log("Error: Age valid nahi hai!");
      return;
    }
    this.#age = value;
  }
}

// Check output
const a = new User("Dev", -1145);
// Output: Error: Age valid nahi hai!

console.log(a.age);
// Output: undefined (Kyunki invalid age ki wajah se #age me koi value set hi nahi hui)
