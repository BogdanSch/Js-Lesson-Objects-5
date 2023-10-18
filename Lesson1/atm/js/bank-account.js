class BankAccount {
  cardNumber;
  firstName;
  lastName;
  securityCode;
  balance;
  bankName = "MyBank";

  constructor(
    cardNumber = "0",
    firstName = "",
    lastName = "",
    securityCode = "",
    balance = ""
  ) {
    this.cardNumber = cardNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.securityCode = securityCode;
    this.balance = balance;
  }
}
