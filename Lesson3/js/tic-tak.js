"use strict";

let tick = true;
function ticker() {
  if (tick) {
    document.write("Тік ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
}

let timer = setInterval(ticker, 1000);
// clearInterval(t);
