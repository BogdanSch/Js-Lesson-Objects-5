"use strict";

const botReplies = {
  javascript: [
    "У JavaScript є багато методів для роботи з рядком.",
    "Масиви в JavaScript схожі на об'єкти.",
    "JavaScript - це потужна мова для веб-розробки.",
    "Я можу вам допомогти з питаннями про JavaScript.",
  ],
  html: [
    "HTML - це мова розмітки для створення веб-сторінок.",
    "Використовуйте теги для створення структури сторінки в HTML.",
    "Ви бажаєте дізнатися більше про HTML?",
  ],
  php: [
    "PHP - це мова програмування, яка використовується для розробки веб-додатків.",
    "За допомогою PHP ви можете створювати динамічні сторінки та обробляти форми.",
    "Питання про PHP? Я готовий відповісти.",
  ],
};

function getRandomResponse(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function chatBot(userInput) {
  userInput = userInput.toLowerCase().trim();
  let response = "Я хочу розмовляти про JavaScript, HTML або PHP!";

  if (userInput.includes("javascript")) {
    const jsResponses = botReplies.javascript;
    const randomResponse = getRandomResponse(jsResponses);
    response = randomResponse;
  } else if (userInput.includes("html")) {
    const htmlResponses = botReplies.html;
    const randomResponse = getRandomResponse(htmlResponses);
    response = randomResponse;
  } else if (userInput.includes("php")) {
    const phpResponses = botReplies.php;
    const randomResponse = getRandomResponse(phpResponses);
    response = randomResponse;
  }

  return response;
}

function startChat() {
  const userInput = prompt(
    "Привіт! Питайте мене про мови програмування: JavaScript, HTML або PHP."
  );
  const botResponse = chatBot(userInput);
  alert(botResponse);
}

startChat();
