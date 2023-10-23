"use strict";

import { Dog } from "./dog.js";

class DogRaceController {
  constructor(raceDistance = 5) {
    this.raceDistance = raceDistance;
    this.dogs = [
      new Dog("Dog 1", "Labrador", 30),
      new Dog("Dog 2", "Poodle", 20),
      new Dog("Dog 3", "Bulldog", 15),
    ];

    this.startRaceButton = document.querySelector("#raceStartButton");
    this.raceResultsTable = document.querySelector("#raceResults");

    this.startRaceButton.addEventListener("click", (e) => this.startRace());
  }

  startRace() {
    this.raceResultsTable.innerHTML = "";
    this.dogs.forEach((dog) => {
      dog.start();
      this.runRace(dog);
    });
  }

  runRace(dog) {
    let distance = this.raceDistance;
    const timer = setInterval(() => {
      distance -= dog.speed;
      if (distance <= 0) {
        clearInterval(timer);
        this.displayResult(dog, `${dog.name} finished the race!`);
      } else {
        dog.changeSpeed(Math.random() * 1.5 + 0.5);
        this.displayResult(dog, distance);
      }
    }, 1000);
  }
  finishRace() {}
  displayResult(dog, message) {
    const newRow = this.raceResultsTable.insertRow();
    newRow.innerHTML = `
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.weight}</td>
            <td>${dog.speed}</td>
            <td>${message}</td>`;
  }
}

const controller = new DogRaceController(50);
