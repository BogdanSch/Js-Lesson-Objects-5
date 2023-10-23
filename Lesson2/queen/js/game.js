import { Deck } from "./deck.js";
import { Player } from "./player.js";

export class Game {
  constructor(alertHandler, promptHandler) {
    this.deck = new Deck();
    this.player = new Player("Player 1");
    this.bot = new Player("Bot");
    this.alertHandler = alertHandler;
    this.promptHandler = promptHandler;
  }

  getPlayerCard() {
    const cardIndex = +this.promptHandler(
      `Enter a number of card from 1 - ${this.deck.cards.length}`
    );
    if (!isNaN(cardIndex)) {
      return this.deck.draw(cardIndex - 1);
    } else {
      throw new Error("Error, enter a correct one!");
    }
  }
  getBotCard() {
    const randomIndex = Math.floor(Math.random() * this.deck.cards.length);
    return this.deck.draw(randomIndex);
  }

  play() {
    let winner = null;
    while (this.deck.cards.length > 0) {
      const playerCard = this.getPlayerCard();
      this.alertHandler(`${this.player.name} drew a ${playerCard.cardValue}`);
      if (playerCard.cardValue === "Q") {
        winner = this.player.name;
        break;
      }

      const botCard = this.getBotCard();
      this.alertHandler(`${this.bot.name} drew a ${botCard.cardValue}`);
      if (botCard.cardValue === "Q") {
        winner = this.bot.name;
        break;
      }
    }

    if (winner) {
      this.alertHandler(`${winner} wins!`);
    } else {
      this.alertHandler("It's a draw!");
    }
  }
}
