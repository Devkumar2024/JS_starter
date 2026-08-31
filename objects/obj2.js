// properties and methods
// object = state + behaviour

let laptop = {
  name: "DESKTOP-C0ON46O",
  Processor: {
    family: "AMD",
    model: "Ryzen 3 5300U",
    gpx: "Radeon Graphics (2.60 GHz)",
  },
  Installed_RAM: "16.0 GB (15.3 GB usable)",
  Graphics_card: "AMD Radeon(TM) Graphics (496 MB)",
  Storage: "118 GB of 477 GB used",
  model : 2023,
  //   Device_ON: function(){
  //     console.log("The device is running properly/");
  //   }

  // modern syntax
  Device_ON() {
    console.log("The device is running properly.");
  },

  // using object's property
  Return_model(){
    console.log("The device " + this.name + ", Model " + this.model);
  },

  // Modify property
  New_card(){
    this.Graphics_card = "GTX 1650";
    console.log("New card is : " + this.Graphics_card);
  }
};

// name, processor, ram, storage, ...etc are properties.
console.log(laptop.Processor);
// property.fun_name() :: () is req to call the function
console.log(laptop.Device_ON());
console.log(laptop.Return_model());
console.log(laptop.New_card());
console.log(laptop.Graphics_card);
