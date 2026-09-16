// promises

const cart = ["shoes", "pants", "shirt"];

// both are asyc and inter dependent APIs, using old callback method
// inversion of control issue exists, means passing control of program to some other part of code
// createOrder(cart, function (orderID) {
//   proceedToPayment(orderID);
// }); // takes cart items and return orderID

// {data : hold what createorder returns}
// {data : undefnied}
// promise object will be filled with data automatically after data will be returned by createorder API

// promise chaining

createOrder(cart)
  .then(function (orderID) {
    return proceedToPayment(orderID);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });
