"use strict";

const playButton = document.querySelector(".btn-play");
playButton.addEventListener("click", (e) => {
  let game = new Game();
  game.play();
});
