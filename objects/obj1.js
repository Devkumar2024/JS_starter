// object : named ppt collection with key value pair to store meaningful data, can hold upto any typeof value

let laptop = {
  name: "DESKTOP-C0ON46O",
  Processor: {
    family : "AMD",
    model : "Ryzen 3 5300U",
    gpx : "Radeon Graphics (2.60 GHz)"
  },
  Installed_RAM: "16.0 GB (15.3 GB usable)",
  Graphics_card: "AMD Radeon(TM) Graphics (496 MB)",
  Storage: "118 GB of 477 GB used",
  Device_ID: "68B68DCSCS-4B473A4C5",
  Product_ID: "00356-56565-8652-AAOEM",
  System_type: "64-bit operating system, x64-based processor",
  Pen_and_touch: "Pen support",
};


console.log(laptop.name);
let key = "Device_ID";
console.log(laptop[key]);

laptop.year = 2023;
console.log(laptop);

// delete a property
delete laptop.year;
console.log(laptop);
