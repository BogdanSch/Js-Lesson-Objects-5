"use strict";

class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run() {
    console.log(`${this.name} біжить.`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  run() {
    console.log(`${this.name} полює.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

class Cock extends Animal {
  constructor(name) {
    super(name);
  }

  run() {
    console.log(`${this.name} ходить.`);
  }
}

class Snake extends Animal {
  constructor(name) {
    super(name);
  }

  run() {
    console.log(`${this.name} повзає.`);
  }
}

class Elephant extends Animal {
  constructor(name) {
    super(name);
  }

  run() {
    console.log(`${this.name} ступає.`);
  }
}

const animals = [
  new Cat("Whiskers"),
  new Dog("Buddy"),
  new Cock("Cluckster"),
  new Snake("Slytherin"),
  new Elephant("Dumbo"),
];

for (const animal of animals) {
  animal.run();
}
