class Game {
  constructor() {
    this.deck = new Deck();
    this.player = "Player 1";
    this.bot = "Bot";
  }

  play() {
    let winner = null;
    while (this.deck.cards.length > 0) {
      const playerCard = this.deck.draw();
      alert(`${this.player} drew a ${playerCard.value}`);
      if (playerCard.value === "Q") {
        winner = this.player;
        break;
      }

      const botCard = this.deck.draw();
      alert(`${this.bot} drew a ${botCard.value}`);
      if (botCard.value === "Q") {
        winner = this.bot;
        break;
      }
    }

    if (winner) {
      alert(`${winner.name} wins!`);
    } else {
      alert("It's a draw!");
    }
  }
}
