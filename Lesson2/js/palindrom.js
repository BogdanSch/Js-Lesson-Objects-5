"use strict";

let arr = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привет, мир",
  "А Собака боса",
  "Лёша на полке клопа нашёл",
  "Я — арка края",
];

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zа-яё]/g, "");
  return str === str.split("").reverse().join("");
}

function checkPalindroms(arr) {
  return arr.filter(isPalindrome);
}

console.log(checkPalindroms(arr));
