"use strict";
let cat = {
  weight: 5,
  maxWieght: 10,
  minWeight: 2,
  foodAmount: 3,

  feed: function (amount) {
    if (this.weight >= this.maxWieght) {
      console.log("Кіт вже дуже ситий.");
      this.diet(this.foodAmount);
    } else {
      this.weight += amount;
      console.log(`Годування: +${amount} кг. Вага кота: ${this.weight} кг.`);
    }
  },

  diet: function (amount) {
    if (this.weight <= this.minWeight) {
      console.log("Кіт вже дуже худий.");
      this.feed(this.foodAmount);
    } else {
      this.weight -= amount;
      console.log(`Дієта: -${amount} кг. Вага кота: ${this.weight} кг.`);
    }
  },

  toString: function () {
    return `Кіт з вагою ${this.weight} кг.`;
  },
};

console.log(cat.toString());
cat.feed(2);
cat.diet(1);
console.log(cat.toString());
