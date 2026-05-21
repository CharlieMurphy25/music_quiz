// ==========================================
// 1. DATA DEFINITIONS
// ==========================================
const possibleAnswers = [
  "The Beatles", "Oasis", "Liam Gallagher", "Noel Gallagher", "Robbie Williams",
  "Dublin", "London", "Paris", "Berlin"
];

const questions = [
  { question: "Which iconic Britpop band released the hit album '(What's the Story) Morning Glory?'", correct: "Oasis" },
  { question: "Who was a member of Take That before launching a massive solo career with hits like 'Angels'?", correct: "Robbie Williams" },
  { question: "Which legendary Liverpool band released the album 'Abbey Road' in 1969?", correct: "The Beatles" }
];

// ==========================================
// 2. DOM ELEMENT SELECTION
// ==========================================
const questionEl    = document.getElementById("question");
const answerInput   = document.getElementById("answerInput");
const answerOptions = document.getElementById("answerOptions");
const submitBtn     = document.getElementById("submitBtn");
const nextBtn       = document.getElementById("nextBtn");
const tryAgainBtn   = document.getElementById("tryAgainBtn");
const feedbackEl    = document.getElementById("feedback");
const errorEl       = document.getElementById("error");
const scoreEl       = document.getElementById("score");

// ==========================================
// 3. GAME STATE
// ==========================================
let currentQuestion = 0;
let score = 0;

// ==========================================
// 4. CORE FUNCTIONS
// ==========================================

/**
 * Renders the datalist options for the autocomplete input.
 */
function populateDropdown() {
  answerOptions.innerHTML = possibleAnswers
    .map(answer => `<option value="${answer}"></option>`)
    .join("");
}

/**
 * Sets up the UI for the current question.
 */
function loadQuestion() {
  questionEl.textContent = questions[currentQuestion].question;

  answerInput.value = "";
  answerInput.disabled = false;
  answerInput.style.display = "";
  answerInput.focus();

  submitBtn.disabled = false;
  submitBtn.style.display = "";
  nextBtn.style.display = "none";
  tryAgainBtn.style.display = "none";

  feedbackEl.textContent = "";
  errorEl.style.display = "none";
  scoreEl.textContent = "";
}

/**
 * Handles the game over state and reveals the reset options.
 */
function endGame() {
  questionEl.textContent = "Game Over!";

  answerInput.style.display = "none";
  submitBtn.style.display = "none";
  nextBtn.style.display = "none";

  scoreEl.textContent = `Final Score: ${score}/${questions.length}`;
  tryAgainBtn.style.display = "block";
}

// ==========================================
// 5. EVENT LISTENERS
// ==========================================

submitBtn.onclick = () => {
  const selected = answerInput.value.trim();

  if (!selected) {
    errorEl.textContent = "Please enter an answer before submitting.";
    errorEl.style.display = "block";
    return;
  }

  errorEl.style.display = "none";

  const correct = questions[currentQuestion].correct;

  if (selected.toLowerCase() === correct.toLowerCase()) {
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
    loadQuestion();
  } else {
    endGame();
  }
};

tryAgainBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
};

// ==========================================
// 6. INITIALISATION
// ==========================================
populateDropdown();
loadQuestion();
