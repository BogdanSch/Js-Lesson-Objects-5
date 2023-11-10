"use strict";

class Transport {
  constructor(name) {
    this.name = name;
  }

  about() {
    console.log(`Я - ${this.name}`);
  }
}

class AirTransport extends Transport {
  constructor(name) {
    super(name);
  }

  about() {
    super.about();
    console.log("Я лечу!");
  }
}

class WaterTransport extends Transport {
  constructor(name) {
    super(name);
  }

  about() {
    super.about();
    console.log("Я пливу!");
  }
}

class LandTransport extends Transport {
  constructor(name) {
    super(name);
  }

  about() {
    super.about();
    console.log("Я їду!");
  }
}

const transports = [
  new AirTransport("Ракета"),
  new AirTransport("Літак"),
  new WaterTransport("Теплохід"),
  new WaterTransport("Катер"),
  new LandTransport("Автомобіль"),
  new LandTransport("Вантажівка"),
];

for (const transport of transports) {
  transport.about();
}
