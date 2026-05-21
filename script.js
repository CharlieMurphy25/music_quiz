// Choices.js must be loaded in your HTML before this script:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css">
// <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>

const possibleAnswers = [
  "Dublin", "Cork", "Galway", "Limerick",
  "London", "Paris", "Berlin", "Rome"
];

const tryAgainBtn = document.getElementById("tryAgainBtn");

const questions = [
  { question: "What is the capital of Ireland?", correct: "Dublin" },
  { question: "Capital of France?", correct: "Paris" }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const submitBtn  = document.getElementById("submitBtn");
const nextBtn    = document.getElementById("nextBtn");
const scoreEl    = document.getElementById("score");

// Initialise Choices.js on the existing <select>
const choices = new Choices("#answerSelect", {
  searchEnabled: true,
  searchPlaceholderValue: "Type to search...",
  itemSelectText: "",
  shouldSort: false,
});

function populateDropdown() {
  choices.clearChoices();
  choices.setChoices(
    possibleAnswers.map(a => ({ value: a, label: a })),
    "value", "label", true
  );
}

function loadQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
  choices.setChoiceByValue(possibleAnswers[0]);
  choices.enable();
  submitBtn.disabled = false;
  nextBtn.style.display = "none";
}

submitBtn.onclick = () => {
  const selected = choices.getValue(true); // returns the selected value string
  const correct  = questions[currentQuestion].correct;

  if (selected === correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong! Correct answer: " + correct);
  }

  choices.disable();
  submitBtn.disabled = true;
  nextBtn.style.display = "inline-block";
};

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
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
