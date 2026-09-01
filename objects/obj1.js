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

// Create a student object with an array of marks and a method getAverage() that calculates the average using this.

const student = {
    n : 'jhon',
    marks: [70, 100, 69, 50, 69, 80, 70, 90, 85, 54],
    //normal function has dynamic this value
    getAverage: function () {
        // return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
        let s = this.marks.reduce((sum_acc, current) => {
            return (sum_acc + current);
        }, 0)
      return (s/this.marks.length)
    }
}

console.log(student.getAverage());
