"use strict";

const timerTag = document.getElementById("timer");
let dateInFuture = new Date(2024, 0, 1, 10, 32, 4);
let timer;

function startTimer() {
  let date = new Date();

  let ms = dateInFuture - date;
  let days = Math.floor(ms / (1000 * 3600 * 24));
  let hours = Math.floor((ms % (1000 * 3600 * 24)) / (24000 * 3600));
  let minutes = Math.floor((ms % (1000 * 3600)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  timerTag.innerHTML =
    "До кінця акції залишилось: " +
    days +
    " днів " +
    hours +
    " годин " +
    minutes +
    " хвилин " +
    seconds +
    " секунд";
  timer = setInterval(startTimer, 1000);
  if (ms < 0) {
    clearInterval(timer);
    timerTag.innerHTML = "Час акції вичерпано!";
  }
}
