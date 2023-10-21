"use strict";

let arr = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привіт, світ",
  "А Собака боса",
  "Лєша на полке клопа нашєл",
  "Я — арка края",
];

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zа-я]/g, "");
  return str === str.split("").reverse().join("");
}

function checkPalindroms(arr) {
  return arr.filter(isPalindrome);
}

console.log(checkPalindroms(arr));
