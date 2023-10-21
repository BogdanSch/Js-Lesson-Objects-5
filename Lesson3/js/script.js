"use strict";

let date = new Date();
let dateTomorrow = new Date(2023, 9, 22);

console.log(
  Math.floor((dateTomorrow.getTime() - date.getTime()) / (60 * 60 * 1000))
);
