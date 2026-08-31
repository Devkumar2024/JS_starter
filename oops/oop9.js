// bank balance using oops
class Banking {
  // bydef balance = 100, espasulated by #var_name
  #balance = 100;
  constructor(holdername, balance = 100) {
    this.holdername = holdername;
    this.#balance = balance;
  }

  deposit(balance) {
    this.#balance += balance;
  }
// Without the setter, someone could do DEV_acc.#balance = "hacker". With your setter, if someone tries to set it to invalid data, the setter catches it, rejects it, and keeps the old balance safe. It also logs a message, which is great for debugging.
  set setBAL(balance) {
    if (isNaN(balance)) {
      console.error("Invalid input.");
      return;
    }
    console.log("Balance set successfully");
    this.#balance = balance;
  }
// Read-only access: Allows external code to view private/internal data without allowing them to change it.  
  get getBAL() {
    return this.#balance;
  }
}

let DEV_acc = new Banking("Dev kumar", 15000);
DEV_acc.setBAL = 400;
console.log(DEV_acc.getBAL);
