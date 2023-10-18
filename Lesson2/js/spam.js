"use strict";

// const sentence = "Lorem, Spam, hej spaM";

// function checkString(str, spamTrigger = "spam") {
//   let newStr = str.trim().toLowerCase();
//   return newStr.replaceAll(spamTrigger, "***");
// }

// console.log(checkString(sentence));

function replaceSpam(inputString) {
  const lowerCaseInput = inputString.toLowerCase();
  if (lowerCaseInput.includes("spam")) {
    return inputString.replace(/spam/gi, "***");
  }
  return inputString;
}

function replaceSpamInArray(stringArray) {
  const modifiedArray = stringArray.map((str) => {
    return replaceSpam(str);
  });
  return modifiedArray;
}

const text = "Це текст SPAM із словом Spam!";
console.log(replaceSpam(text));

const textArray = [
  "Це текст із словом Spam та ще spAm!",
  "Ще один рядок без spam.",
];
const modifiedArray = replaceSpamInArray(textArray);
console.log(modifiedArray);
