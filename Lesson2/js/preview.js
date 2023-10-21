"use strict";

const maxLength = 100;

let strings = [
  "Lorem ipsum dolor sit amet consectetur.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo ad vitae? Officiis adipisci quam magnam blanditiis reiciendis maxime facere.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illo doloribus harum magni eos dolores ducimus beatae cumque magnam dolorem voluptate facere modi fugiat libero, iure est quae optio doloremque!",
];

function preview(str, maxLength) {
  if (str.length < maxLength) return str;

  const lastSpaceIndex = str.substr(0, maxLength).lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return str.substr(0, maxLength) + "...";
  }
  return str.substr(0, lastSpaceIndex) + "...";
}

strings.map((str) => {
  console.log(preview(str, maxLength));
});
