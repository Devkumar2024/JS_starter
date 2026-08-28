// more on closures
// hide internal state of code

function crateBalance(ini_balance) {
  // Outer function ka execution context Bhale hi udd (destroy) ho gaya ho, par balance variable memory se nahi udta.
  let balance = ini_balance;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
    },

    widhdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
    },

    getbalance: function () {
      return balance;
    },
  };
}

const Account = crateBalance(10000);
Account.deposit(20000);
console.log(Account.getbalance());
Account.widhdraw(560);
console.log(Account.getbalance());
// balance can not be directly accessed, as it is not ppt of object
console.log(Account.balance);
