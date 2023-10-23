export class Dog {
  constructor(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.age = 0;
    this.speed = 0;
    this.speedLimit = 4;
  }

  setAge(value) {
    if (value >= 0) {
      this.age = value;
    } else {
      console.log("Цей пес, очевидно, ще не з'явився на світ...");
    }
  }

  getAge() {
    return this.age;
  }

  start() {
    this.speed = 1;
  }

  stop() {
    this.speed = 0;
  }

  changeSpeed(targetSpeed) {
    this.speed *= targetSpeed;
  }

  bark() {
    if (this.weight < 25) {
      console.log(this.name + " сказав Тяф!");
    } else {
      console.log(this.name + " сказав Гав!");
    }
  }

  toString() {
    return `${this.name}, ${this.breed}, ${this.weight}`;
  }
}
