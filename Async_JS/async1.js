// application
const orderDetails = {
  orderId: 3284432,
  items: ["Pizza", "Lava Cake", "Coke"],
  cost: 399,
  customerName: "Dev kumar",
  CustomerLoc: "Ludhiana",
  Restaurent: "Captain Sam's Pizza",
  paymentStatus: false,
};

function placeOrder(orderDetails, Callback) {
  console.log(`Payment of ${orderDetails.cost} in progress`);

  // go to webAPI
  setTimeout(() => {
    console.log("Payment Received, order placed!");
    orderDetails.paymentStatus = true;
    Callback(orderDetails);
  }, 3000);
}

function preparingOrder(orderDetails, Callback) {
  console.log(`Order ${orderDetails.items}  cooking in progress`);

  setTimeout(() => {
    console.log(`Order of ${orderDetails.items} prepared!`);
    orderDetails.token = 53253;
    Callback(orderDetails);
  }, 3000);
}

function pickupOrder(orderDetails, Callback) {
  console.log(
    `Deliver Boy assigned, on the way from ${orderDetails.Restaurent}`,
  );

  setTimeout(() => {
    console.log("Order picked!");
    orderDetails.received = true;
    Callback();
  }, 3000);
}

function deliverOrder() {
  console.log(`Delivery partner is on the way.`);

  setTimeout(() => {
    console.log(`Order delivered successfully.`);
  }, 3000);
}

// THIS IS CALLBACK FUNCTION CALLING IN NESTED FORMAT
// CALLBACK HELL, code looks too complex
placeOrder(orderDetails, (orderDetails) => {
  preparingOrder(orderDetails, (orderDetails) => {
    pickupOrder(orderDetails, (orderDetails) => {
      deliverOrder(orderDetails);
    });
  });
});

// 1. order placed
// 2. order processing
// (orderDetails) => {....code } :: passing order details to next function
