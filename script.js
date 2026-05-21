// ==========================================
// 1. DATA DEFINITIONS
// ==========================================
const possibleAnswers = [
  "The Beatles", "Oasis", "Liam Gallagher", "Noel Gallagher", "Robbie Williams",
  "Dublin", "London", "Paris", "Berlin"
];

const questions = [
  { question: "Which iconic Britpop band released the hit album '(What's the Story) Morning Glory?'", correct: "Oasis" },
  { question: "Who was the lead singer of Take That before launching a massive solo career with hits like 'Angels'?", correct: "Robbie Williams" },
  { question: "Which legendary Liverpool band released the album 'Abbey Road' in 1969?", correct: "The Beatles" }
];

// ==========================================
// 2. DOM ELEMENT SELECTION
// ==========================================
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const answerOptions = document.getElementById("answerOptions");
const quizForm = document.getElementById("quizForm");

const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");

const feedbackEl = document.getElementById("feedback");
const errorEl = document.getElementById("error");
const scoreEl = document.getElementById("score");

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
  // Update question text
  questionEl.textContent = questions[currentQuestion].question;

  // Reset and enable input field
  answerInput.value = "";
  answerInput.disabled = false;
  answerInput.focus();

  // Reset button states
  submitBtn.disabled = false;
  nextBtn.style.display = "none";

  // Clear previous feedback or errors
  feedbackEl.textContent = "";
  errorEl.style.display = "none";
}

/**
 * Handles the game over state and reveals the reset options.
 */
function endGame() {
  questionEl.textContent = "Game Over!";
  
  // Hide active gameplay elements
  answerInput.style.display = "none";
  submitBtn.style.display = "none";
  nextBtn.style.display = "none";
  
  // Display final summary and reset controls
  scoreEl.textContent = `Final Score: ${score}/${questions.length}`;
  tryAgainBtn.style.display = "block";
}

// ==========================================
// 5. EVENT LISTENERS
// ==========================================

// Handle answer submission
submitBtn.onclick = () => {
  const selected = answerInput.value.trim();
  const correct = questions[currentQuestion].correct;

  // Case-insensitive comparison check (optional, but highly recommended for text inputs)
  if (selected.toLowerCase() === correct.toLowerCase()) {
    score++;
    feedbackEl.textContent = "✓ Correct!";
    feedbackEl.style.color = "green";
  } else {
    feedbackEl.textContent = `✗ Wrong! Correct answer: ${correct}`;
    feedbackEl.style.color = "red";
  }

  // Lock input and toggle control buttons
  answerInput.disabled = true;
  submitBtn.disabled = true;
  nextBtn.style.display = "inline-block";
};

// Handle moving to the next question or triggering end-game
nextBtn.onclick = ()
