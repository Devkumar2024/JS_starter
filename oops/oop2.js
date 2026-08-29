// factory functions :: return object

function milk_factory(cow_name, origin, Grass_fed, Liter_yield) {
  return {
    // def parameters
    name: cow_name,
    origin: origin,
    food: Grass_fed,
    yield: Liter_yield,
    descr: function () {
      console.log(
        `${this.name} improted from ${this.origin} is grassfed : ${this.food} and yield milk of ${this.yield} Liter`,
      );
    },
    // ballu: ()=> {
    //   console.log(
    //     `${this.name} improted from ${this.origin} is grassfed : ${this.food} and yield milk of ${this.yield} Liter`,
    //   );
    // },
  };
}

let result = milk_factory("Mua", "india", false, 40);
console.log(result);
result.descr();
// result.ballu();
