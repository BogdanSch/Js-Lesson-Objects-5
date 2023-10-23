"use strict";

let date = new Date();
let dateTomorrow = new Date(2023, 9, 22);

console.log(
  Math.floor((dateTomorrow.getTime() - date.getTime()) / (60 * 60 * 1000))
);

//Getting week day with date
const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(date.getDate()); // current date
console.log(weeks[date.getDay()]);
console.log(months[date.getMonth()]); //date.getMonth() works the same.

console.log(date.toDateString());

let d1 = new Date();
let d2 = new Date(2024, 0, 1);
let ms = d2.getTime() - d1.getTime(); //разница в милисекундах
let s = ms / 1000; //разница в секундах
let m = s / 60; //разница в минутах
let h = m / 60; //разница в часах
let d = Math.floor(h / 24); //разница в днях
console.log(
  "Сегодня " +
    d1.getDate() +
    ". " +
    (d1.getMonth() + 1) +
    "." +
    d1.getFullYear() +
    "\nОсталось до " +
    d2.getDate() +
    "." +
    (d2.getMonth() + 1) +
    "." +
    d2.getFullYear() +
    ": дней - " +
    d +
    "; часов - " +
    h +
    "; минут - " +
    m +
    "; секунд - " +
    s
);
