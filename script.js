// ==========================================
// 1. DATA DEFINITIONS
// ==========================================
const flags = [
  { code: "ie", country: "Ireland" },
  { code: "gb", country: "United Kingdom" },
  { code: "fr", country: "France" },
  { code: "de", country: "Germany" },
  { code: "it", country: "Italy" },
  { code: "es", country: "Spain" },
  { code: "pt", country: "Portugal" },
  { code: "nl", country: "Netherlands" },
  { code: "be", country: "Belgium" },
  { code: "ch", country: "Switzerland" },
  { code: "at", country: "Austria" },
  { code: "se", country: "Sweden" },
  { code: "no", country: "Norway" },
  { code: "dk", country: "Denmark" },
  { code: "fi", country: "Finland" },
  { code: "pl", country: "Poland" },
  { code: "cz", country: "Czech Republic" },
  { code: "gr", country: "Greece" },
  { code: "us", country: "United States" },
  { code: "ca", country: "Canada" },
  { code: "au", country: "Australia" },
  { code: "nz", country: "New Zealand" },
  { code: "jp", country: "Japan" },
  { code: "cn", country: "China" },
  { code: "br", country: "Brazil" },
  { code: "mx", country: "Mexico" },
  { code: "ar", country: "Argentina" },
  { code: "za", country: "South Africa" },
  { code: "ng", country: "Nigeria" },
  { code: "in", country: "India" },
];

const possibleAnswers = flags.map(f => f.country);

function buildQuestions(count = 10) {
  return [...flags]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map(flag => ({ correct: flag.country, code: flag.code }));
}

let questions = buildQuestions();

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
  const { code } = questions[currentQuestion];
  questionEl.textContent = `Question ${currentQuestion + 1} of ${questions.length} — Which country does this flag belong to?`;
  document.getElementById("flagImg").src = `https://flagcdn.com/w320/${code}.png`;

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
  questions = buildQuestions();
  currentQuestion = 0;
  score = 0;
  loadQuestion();
};

// ==========================================
// 6. INITIALISATION
// ==========================================
populateDropdown();
loadQuestion();
