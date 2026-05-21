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
}

submitBtn.onclick = () => {
  const selected = answerInput.value.trim();
  const correct = questions[currentQuestion].correct;

  if (selected === correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong! Correct answer: " + correct);
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
  choices.destroy();
  document.getElementById("answerSelect").style.display = "none";
  submitBtn.style.display = "none";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Final Score: ${score}/${questions.length}`;
  tryAgainBtn.style.display = "inline-block";
}
};

tryAgainBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;

  questionEl.textContent = "Loading question...";
  submitBtn.style.display = "inline-block";
  nextBtn.style.display = "none";
  tryAgainBtn.style.display = "none";
  scoreEl.textContent = "";

  if (!choices.initialised) choices.init();
  document.getElementById("answerSelect").style.display = "";
  populateDropdown();
  loadQuestion();
};

populateDropdown();
loadQuestion();
