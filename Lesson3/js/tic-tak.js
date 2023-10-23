"use strict";

let tick = true;
let timer = setInterval(ticker, 1000, 10);
let startDate = new Date();

function ticker(tickTime) {
  let currentDate = new Date();
  if (tick) {
    console.log("Тік ");
  } else {
    console.log("Так ");
  }
  tick = !tick;
  let difference = Math.abs(
    (startDate.getTime() - currentDate.getTime()) / 1000
  );
  if (difference >= tickTime) clearInterval(timer);
}
