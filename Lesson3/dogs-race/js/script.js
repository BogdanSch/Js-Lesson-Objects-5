"use strict";

import { Dog } from "./dog.js";

class DogRaceController {
  constructor(raceDistance = 5) {
    this.raceDistance = raceDistance;
    this.dogs = [
      new Dog("Max", "Labrador", 30),
      new Dog("Bella", "Poodle", 20),
      new Dog("Rocky", "Bulldog", 15),
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
        this.displayResult(
          dog,
          dog.speed.toFixed(2),
          `${dog.name} finished the race!`
        );
      } else {
        dog.changeSpeed(Math.random() * 1.5 + 0.5);
        this.displayResult(dog, dog.speed.toFixed(2), distance.toFixed(2));
      }
    }, 1000);
  }
  displayResult(dog, speed, distance) {
    const newRow = this.raceResultsTable.insertRow();
    newRow.innerHTML = `
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.weight}</td>
            <td>${speed}</td>
            <td>${distance}</td>`;
  }
}

const controller = new DogRaceController(50);
