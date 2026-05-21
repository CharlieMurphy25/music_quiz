const possibleAnswers = [
  "Dublin", "Cork", "Galway", "Limerick",
  "London", "Paris", "Berlin", "Rome"
];

const questions = [
  { question: "What is the capital of Ireland?", correct: "Dublin" },
  { question: "Capital of France?", correct: "Paris" }
];

const tryAgainBtn = document.getElementById("tryAgainBtn");

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const answerOptions = document.getElementById("answerOptions");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");
const errorEl = document.getElementById("error");
const quizForm = document.getElementById("quizForm");
const quizContent = document.getElementById("quizContent");

function populateDropdown() {
  answerOptions.innerHTML = possibleAnswers
    .map(a => `<option value="${a}"></option>`)
    .join("");
}

function loadQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  answerInput.value = "";
  answerInput.focus();
  submitBtn.disabled = false;
  nextBtn.style.display = "none";
  feedbackEl.textContent = "";
  errorEl.style.display = "none";
}

submitBtn.onclick = () => {
  const selected = answerInput.value.trim();
  const correct = questions[currentQuestion].correct;

  if (selected === correct) {
    score++;
    feedbackEl.textContent = "✓ Correct!";
    feedbackEl.style.color = "green";
  } else {
    feedbackEl.textContent = `✗ Wrong! Correct answer: ${correct}`;
    feedbackEl.style.color = "red";
  }

  answerInput.disabled = true;
  submitBtn.disabled = true;
  nextBtn.style.display = "inline-block";
};

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    answerInput.disabled = false;
    loadQuestion();
  } else {
    questionEl.textContent = "Game Over!";
    quizForm.style.display = "none";
    scoreEl.textContent = `Final Score: ${score}/${questions.length}`;
    tryAgainBtn.style.display = "inline-block";
  }
};

tryAgainBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;

  questionEl.textContent = "Loading question...";
  quizForm.style.display = "block";
  tryAgainBtn.style.display = "none";
  scoreEl.textContent = "";
  feedbackEl.textContent = "";
  errorEl.style.display = "none";
  
  answerInput.value = "";
  answerInput.disabled = false;
  submitBtn.style.display = "inline-block";
  submitBtn.disabled = false;
  nextBtn.style.display = "none";
  
  populateDropdown();
  loadQuestion();
};

populateDropdown();
loadQuestion();
