"use strict";

const bankAccounts = [
  new BankAccount("12345678910", "Alice", "Johnson", "234", 500),
  new BankAccount("12345678960", "Bob", "Smith", "456", 1500),
];
const atm = new ATM("987654");

const balanceButton = document.querySelector(".btn-balance");
const withdrawButton = document.querySelector(".btn-withdraw");
const output = document.querySelector(".output");

balanceButton.addEventListener("click", (e) => {
  const card = bankAccounts[0];
  atm.showAccount(card);
});
withdrawButton.addEventListener("click", (e) => {
  const card = bankAccounts[0];
  const withdrawValue = +amountInput.value;
  atm.withdraw(card, withdrawValue);
});
