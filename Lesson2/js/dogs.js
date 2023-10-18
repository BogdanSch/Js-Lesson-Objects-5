"use strict";

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  let speed = 0;
  let speedLimit = 0;
  let age = 0;

  this.setAge = function (value) {
    if (value >= 0) {
      this.age = value;
    } else {
      console.log("Цей пес, очевидно, ще не з'явився на світ...");
    }
  };
  this.getAge = function () {
    return age;
  };
  this.start() = function () {
    speed = 1;
  }
  this.stop() = function () {
    speed = 0;
  }
  this.changeSpeed = function (targetSpeed) {
    if(this.weight < 25){
        speedLimit = 4;
    }
    else{
        speedLimit = 20;
    }
    if(targetSpeed >= 0.5 && targetSpeed <= speedLimit)
        speed *= targetSpeed;
    else
        console.log("Error");
  };
  this.bark = function () {
    if (this.weight < 25) {
      console.log(this.name + " сказал Тяф!");
    } else {
      console.log(this.name + " сказав Гав!");
    }
  };
  this.toString = function () {
    return `${this.name}, ${this.breed}, ${this.weight}`;
  };
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

let dogs = [fido, fluffy, spot];
for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i].toString());
  dogs[i].bark();
}
