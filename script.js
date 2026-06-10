
const gameTitle = document.getElementById("game-title");
const scoreDisplay = document.getElementById("score");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const questionCard = document.getElementById("question-card");
const answerList = document.getElementById("answer-list");
const nextBtn = document.getElementById("next-btn");
const endScreen = document.getElementById("end-screen");

const answerBtnsCollection = document.getElementsByClassName("answer-btn");

const answerBtnsNodeList = document.querySelectorAll(".answer-btn");

console.log(gameTitle);
console.log(scoreDisplay);
console.log(questionNumber);
console.log(questionText);
console.log(questionCard);
console.log(answerList);
console.log(nextBtn);
console.log(endScreen);

console.log(answerBtnsCollection);
console.log(answerBtnsNodeList);

const btnsArray = Array.from(answerBtnsNodeList);
const btnsArray2 = [...answerBtnsNodeList];

console.log(btnsArray);
console.log(btnsArray2);