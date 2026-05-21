// ==========================================
// 1. INITIAL SETUP & STATE
// ==========================================
const possibleAnswers = window.flags.map(f => f.country);
let questions = [];
let currentQuestion = 0;
let score = 0;

// ==========================================
// 2. DOM ELEMENT SELECTION
// ==========================================
const questionEl      = document.getElementById("question");
const answerInput     = document.getElementById("answerInput");
const suggestionsList = document.getElementById("suggestions");
const submitBtn       = document.getElementById("submitBtn");
const nextBtn         = document.getElementById("nextBtn");
const tryAgainBtn     = document.getElementById("tryAgainBtn");
const feedbackEl      = document.getElementById("feedback");
const errorEl         = document.getElementById("error");
const scoreEl         = document.getElementById("score");

// ==========================================
// 3. HELPER FUNCTIONS
// ==========================================
function buildQuestions(count = 10) {
  return [...window.flags]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map(flag => ({ correct: flag.country, code: flag.code }));
}

function clearSuggestions() {
  suggestionsList.innerHTML = "";
}

function renderSuggestions(matches) {
  clearSuggestions();

  matches.forEach(match => {
    const li = document.createElement("li");
    li.textContent = match;
    li.setAttribute("role", "option");

    li.onclick = () => {
      answerInput.value = match;
      clearSuggestions();
    };

    suggestionsList.appendChild(li);
  });
}

// ==========================================
// 4. CORE GAME ENGINE
// ==========================================
function loadQuestion() {
  const { code } = questions[currentQuestion];
  questionEl.textContent = `Question ${currentQuestion + 1} of ${questions.length} — Which country does this flag belong to?`;
  document.getElementById("flagImg").src = `https://flagcdn.com/w320/${code}.png`;

  // Clear out both success and failure styling from previous round
  answerInput.classList.remove("correct", "wrong");
  feedbackEl.className = "";
  feedbackEl.style.color = ""; 

  answerInput.value = "";
  answerInput.disabled = false;
  answerInput.style.display = "";
  answerInput.focus();
  clearSuggestions();

  submitBtn.disabled = false;
  submitBtn.style.display = "";
  nextBtn.style.display = "none";
  tryAgainBtn.style.display = "none";

  feedbackEl.textContent = "";
  errorEl.style.display = "none";
  scoreEl.textContent = "";
}

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
answerInput.addEventListener("focus", () => {
  if (!answerInput.value.trim()) {
    renderSuggestions(possibleAnswers.slice(0, 8));
  }
});

answerInput.addEventListener("input", () => {
  const query = answerInput.value.trim().toLowerCase();
  let matches;

  if (!query) {
    matches = possibleAnswers.slice(0, 8);
  } else {
    matches = possibleAnswers
      .filter(a => a.toLowerCase().includes(query))
      .slice(0, 8);
  }

  renderSuggestions(matches);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".input-wrapper")) {
    clearSuggestions();
  }
});

submitBtn.onclick = () => {
  const selected = answerInput.value.trim();

  if (!selected) {
    errorEl.textContent = "Please enter an answer before submitting.";
    errorEl.style.display = "block";
    return;
  }

  errorEl.style.display = "none";
  clearSuggestions();

  const correct = questions[currentQuestion].correct;

  if (selected.toLowerCase() === correct.toLowerCase()) {
    score++;
    feedbackEl.textContent = "CORRECT!";
    feedbackEl.className = "success-message"; 
    answerInput.classList.add("correct");      
  } else {
    feedbackEl.textContent = `WRONG! ANSWER IS: ${correct}`;
    feedbackEl.className = "error-message";   
    answerInput.classList.add("wrong");        
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
  initGame();
};

// ==========================================
// 6. INITIALISATION
// ==========================================
function initGame() {
  questions = buildQuestions();
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// Run the initialization code when the page loads
initGame();
