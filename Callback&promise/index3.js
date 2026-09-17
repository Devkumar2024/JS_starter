const cart = ["shoes", "pants", "shirt"];

// const promise = createOrder(cart); // async ops. returns us a promise

createOrder(cart)
  .then(function (orderID) {
    console.log(orderID);
    return orderID;
  })
  .then(function (orderID) {
    // return promise
    return proceedToPayment(orderID);
    // below then methos will be attached to this return, as promise will be attached by then method
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    // only concerned for the errors occuring on top of the chain
    console.log(err.message);
  });

// producer end :: Create a new promise and return it
function createOrder(cart) {
  // promise constructor, given by JS
  // resolve, reject functions passed by JS
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for createOrder
    const orderID = "12345";
    if (orderID) {
      setTimeout(() => {
        resolve(orderID);
      }, 5000);
    }
  });
  return pr;
}

function proceedToPayment(orderID) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successfull");
  });
}

function validateCart(cart) {
  // return true;
  return true;
}
