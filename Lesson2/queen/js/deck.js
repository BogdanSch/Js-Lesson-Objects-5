import { Card } from "./card.js";

export class Deck {
  constructor() {
    this.cards = [];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    for (const value of values) {
      this.cards.push(new Card(value));
    }
    this.shuffle();
  }

  shuffle() {
    let currentIndex = this.cards.length,
      randomIndex,
      temporaryValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  draw(index = 0) {
    if (index > this.cards.length || index < 0) {
      throw new Error('Error, please enter a correct one!');
    }
    let targetCard = this.cards[index];
    this.cards.splice(index, 1);
    return targetCard;
  }
}
