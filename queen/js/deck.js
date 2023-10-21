class Deck {
  cards;
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

  draw() {
    return this.cards.pop();
  }
}
