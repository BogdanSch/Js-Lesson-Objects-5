"use strict";

const chevy = {
  made: "Chevrolet",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  mileage: 1021,
  started: false,
  mileage: 10000,
  needsWashing: true,
  fuel: 15,
  fuelUsage: -5,

  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      if (this.fuel <= 0) {
        console.log("Пального немає, потрібна дозаправка!");
        this.stop();
        return;
      }
      console.log("Погнали!");
      this.addFuel(this.fuelUsage); //Decreasing fuel value dsr5ast1e36
    } else {
      console.log("Спочатку запустіть двигун!");
    }
  },
  showFuel: function () {
    console.log("У меня в баку " + this.fuel + " литрів бензину!");
  },
  addFuel: function (amount) {
    if (amount < 0 && this.fuel - amount <= 0) this.fuel = 0;
    else this.fuel += amount;
  },
  toString: function () {
    return "Автівка: " + this.made + " має " + this.fuel + " літів палива!";
  },
};

// chevy.show();
console.log(chevy.toString());
chevy.start();
chevy.addFuel(10);
chevy.showFuel();

for (let i = 0; i < 6; i++) {
  chevy.drive();
}

chevy.showFuel();
// chevy.drive();
// console.log(chevy);
