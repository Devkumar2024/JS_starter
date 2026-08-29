// bank balance using oops

class Banking {
  // bydef balance = 100, provate
  #balance = 100;

  constructor(holdername, balance = 100) {
    this.holdername = holdername;
    this.#balance = balance;
  }

  deposit(balance) {
    this.#balance += balance;
  }

  set setBAL(balance) {
    if (isNaN(balance)) {
      console.error("Invalid input.");
      return;
    }
    console.log("Balance set successfully");
    this.#balance = balance;
  }
  get getBAL() {
    return this.#balance;
  }
}

let DEV_acc = new Banking("Dev kumar", 15000);
console.log(DEV_acc.getBAL);
