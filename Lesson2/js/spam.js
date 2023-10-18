"use strict";

function replaceSpam(inputString) {
  const lowerCaseInput = inputString.toLowerCase().trim();
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
