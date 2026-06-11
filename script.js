const questions = [
  {
    text: "Who invented the World Wide Web?",
    answers: [
      "Tim Berners-Lee",
      "Bill Gates",
      "Linus Torvalds",
      "Ada Lovelace",
    ],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Mark Language",
      "Home Tool Markup Language",
    ],
    correct: 0,
  },
  {
    text: "Which language runs in the browser?",
    answers: ["Java", "C++", "JavaScript", "Python"],
    correct: 2,
  },
  {
    text: "What does DOM stand for?",
    answers: [
      "Data Object Model",
      "Document Object Model",
      "Disk Object Model",
      "Database Object Model",
    ],
    correct: 1,
  },
  {
    text: "What does LAN stand for?",
    answers: [
      "Label Area Network",
      "Local Area Network",
      "Language Area Network",
      "Leading Area Network",
    ],
    correct: 1,
  },
];

let currentIndex = 0;
let score = 0;

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

function loadQuestion(index) {
  const currentQuestion = questions[index];
  const currNum = index + 1;
  questionNumber.textContent =
    " Questions " + currNum + " of " + questions.length;
  questionText.textContent = currentQuestion.text;

  const btnArray = Array.from(answerBtnsNodeList);

  btnArray.forEach((btn, i) => {
    btn.textContent = currentQuestion.answers[i];
    btn.className = "answer-btn";
  });

  nextBtn.classList.add("hidden");

  questionCard.classList.remove("removed");
}

answerList.addEventListener("click", (event) => {
  // Allow button clicks
  if (event.target.tagName !== "BUTTON") return;

  console.log("target:", event.target);
  console.log("currentTarget:", event.currentTarget);

  const btnArray = Array.from(answerBtnsNodeList);
  const selectedIndex = btnArray.indexOf(event.target);

  // Find the correct answer index
  const currentQuestion = questions[currentIndex];
  const correctIndex = currentQuestion.correct;

  // Check the answer
  if (selectedIndex === correctIndex) {
    event.target.classList.add("correct");
    score++;
    scoreDisplay.textContent = score;
  } else {
    event.target.classList.add("wrong");
    btnArray[correctIndex].classList.add("correct");
  }

  btnArray.forEach((btn) => {
    btn.classList.add("disabled");
  });

  questionCard.classList.add("answered");
  nextBtn.classList.remove("hidden");
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion(currentIndex);
  } else {
    showEndScreen();
  }
});

function showEndScreen() {
  // 1. Hide the question card
  questionCard.classList.add("hidden");
  // 2. Show the end screen
  endScreen.classList.remove("hidden");

  const scoreHeading = document.createElement("h2");
  scoreHeading.textContent = `You scored ${score} out of ${questions.length}`;

  const message = document.createElement("p");

  if (score === questions.length) {
    message.textContent = "Perfect Score! Good Job!";
  } else if (score >= Math.ceil(questions.length / 2)) {
    message.textContent = "Nice Work! You passed";
  } else {
    message.textContent = "Keep practicing and try again!";
  }

  const restartButton = document.createElement("button");
  restartButton.id = "restart-btn";
  restartButton.textContent = "Play Again";

  endScreen.appendChild(scoreHeading);
  endScreen.appendChild(message);
  endScreen.appendChild(restartButton);
}

endScreen.addEventListener("click", (event) => {
  if (event.target.id !== "restart-btn") return;
  score = 0;
  currentIndex = 0;
  scoreDisplay.textContent = score;
  endScreen.innerHTML = "";
  endScreen.classList.add("hidden");
  questionCard.classList.remove("hidden");
  loadQuestion(0);
});
// Why does clicking a button inside #answer-list trigger this listener?
// Answer:
//
// What is the difference between event.target and event.currentTarget here?
// event.target  ->
// event.currentTarget  ->
//

// =========================================
// Phase 1: Connect To DOM
// ========================================
//const gameTitle = document.getElementById("game-title");
//const scoreDisplay = document.getElementById("score");

//const questionNumber = document.getElementById("question-number");
//const questionText = document.getElementById("question-text");
//const questionCard = document.getElementById("question-card");
//const answerList = document.getElementById("answer-list");
//const nextBtn = document.getElementById("next-btn");
//const endScreen = document.getElementById("end-screen");

//const answerBtnsCollection = document.getElementsByClassName("answer-btn");

//const answerBtnsNodeList = document.querySelectorAll(".answer-btn");

// =======================
// Phase 2: DOM Manipulation
// =======================

// gameTitle.textContent = "⚡ Quick Fire Trivia"; // Changes the game title
// console.log("First Question:", questionText.textContent); // Logs the first question of the Trivia
// questionNumber.textContent = questionNumber.textContent.toUpperCase();

// const firstBtn = answerBtnsNodeList[0];
// const firstLi = firstBtn.parentElement;

// console.log("The first button:", firstBtn);
// console.log("Its parent <li>:", firstLi);
// console.log("The <ul> that holds all buttons:", firstLi.parentElement);

// //questionCard.classList.add("answered");

// console.log(gameTitle);
// console.log(scoreDisplay);
// console.log(questionNumber);
// console.log(questionText);
// console.log(questionCard);
// console.log(answerList);
// console.log(nextBtn);
// console.log(endScreen);

// console.log(answerBtnsCollection);
// console.log(answerBtnsNodeList);

// const btnsArray = Array.from(answerBtnsNodeList);
// const btnsArray2 = [...answerBtnsNodeList];

// console.log(btnsArray);
// console.log(btnsArray2);
