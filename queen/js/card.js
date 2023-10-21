class Card {
  cardValue;
  constructor(cardValue) {
    this.cardValue = cardValue;
  }
  static shuffle(cards) {
    let rand, temp;
    for (let i = 0; i < cards.length; i++) {
      rand = Math.floor(Math.random() * (i + 1));
      temp = cards[rand];
      cards[rand] = cards[i];
      cards[i] = temp;
    }
    return cards;
  }
}
