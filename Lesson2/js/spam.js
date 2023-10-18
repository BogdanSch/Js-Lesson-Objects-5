"use strict";

const sentence = "Lorem, Spam, hej spaM";

function checkString(str, spamTrigger = "spam") {
  let newStr = str.trim().toLowerCase();
  return newStr.replaceAll(spamTrigger, "***");
}

console.log(checkString(sentence));
