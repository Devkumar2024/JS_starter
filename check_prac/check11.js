class BankACCOUNT {
  constructor(holder_NM, balance = 0) {
    this.holder_NM = holder_NM;
    this.balance = balance;
  }

  Deposit(money) {
    if (this.balance >= 0) {
      this.balance += money;
    } else {
      console.log(`INVALID OPS`);
    }
  }

  withdraw(money) {
    if (money <= this.balance) {
      this.balance -= money;
    } else {
      console.log(`INVALID OPS`);
    }
  }

  displayBAL() {
    console.log(`${this.holder_NM} current balance = ${this.balance} `);
  }
}

// Instances creation and method calls
let dev_acc = new BankACCOUNT("Dev kumar", 1000);
console.log(dev_acc);
dev_acc.Deposit(2000);
dev_acc.displayBAL();
dev_acc.withdraw(500);
dev_acc.displayBAL();

let cutie = new BankACCOUNT("Mikku", 5000);
cutie.Deposit(2000);
cutie.displayBAL();