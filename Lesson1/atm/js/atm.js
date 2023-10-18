class ATM {
  constructor(atmNumber) {
    this.atmNumber = atmNumber;
  }

  showAccount(card) {
    if (this.verifyCard(card)) {
      output.innerHTML += "<br>Ваш поточний баланс = " + card.balance;
    } else {
      output.innerHTML += "<br>Помилка: неправильна картка або код.";
    }
  }

  withdraw(card, amount = 0) {
    if (this.verifyCard(card)) {
      if (card.balance >= amount) {
        card.balance -= amount;
        output.innerHTML += `<br>Знято ${amount} з рахунку. Залишок: ${card.balance}`;
      } else {
        output.innerHTML += "<br>На рахунку недостатньо коштів.";
      }
    } else {
      output.innerHTML += "<br>Помилка: неправильна картка або код.";
    }
  }

  verifyCard(card) {
    let inputCardSecurityCode = prompt("Enter card security code: ");

    if (inputCardSecurityCode === card.securityCode) {
      output.innerHTML = "Перевірку пройдено, виконуємо операцію...!";
      return true;
    }
    output.innerHTML = "Помилка: неправильний код безпеки!";
    return false;
  }
}
