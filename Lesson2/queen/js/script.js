"use strict";

import { Game } from "./game.js";

const playButton = document.querySelector(".btn-play");
playButton.addEventListener("click", (e) => {
  let game = new Game(showAlert, promptHandler);
  game.play();
});

function showAlert(message) {
  alert(message);
}

function promptHandler(message) {
  return prompt(message);
}
