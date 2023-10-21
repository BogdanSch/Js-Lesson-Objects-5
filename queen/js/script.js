"use strict";

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function startGame(cards) {
  console.log(Card.shuffle(cards));
  let card = "";
  while (cards.length > 0) {
    alert("Your turn!");
    alert(card = cards.pop);
    alert("My turn!");
  }
}

startGame(cards);
