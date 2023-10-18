"use strict";

const amountInput = document.getElementById("amountInput");
let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  amountInput.value = currentInput;
}

function clearInput() {
  currentInput = "0";
  amountInput.value = currentInput;
}
