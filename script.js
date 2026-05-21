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
  { code: "hu", country: "Hungary" },
  { code: "ro", country: "Romania" },
  { code: "bg", country: "Bulgaria" },
  { code: "hr", country: "Croatia" },
  { code: "rs", country: "Serbia" },
  { code: "ua", country: "Ukraine" },
  { code: "ru", country: "Russia" },
  { code: "tr", country: "Turkey" },

  { code: "us", country: "United States" },
  { code: "ca", country: "Canada" },
  { code: "mx", country: "Mexico" },
  { code: "cu", country: "Cuba" },
  { code: "jm", country: "Jamaica" },
  { code: "gt", country: "Guatemala" },
  { code: "cr", country: "Costa Rica" },
  { code: "pa", country: "Panama" },

  { code: "br", country: "Brazil" },
  { code: "ar", country: "Argentina" },
  { code: "cl", country: "Chile" },
  { code: "pe", country: "Peru" },
  { code: "co", country: "Colombia" },
  { code: "ve", country: "Venezuela" },
  { code: "uy", country: "Uruguay" },

  { code: "za", country: "South Africa" },
  { code: "ng", country: "Nigeria" },
  { code: "eg", country: "Egypt" },
  { code: "ma", country: "Morocco" },
  { code: "dz", country: "Algeria" },
  { code: "ke", country: "Kenya" },
  { code: "et", country: "Ethiopia" },
  { code: "gh", country: "Ghana" },
  { code: "tn", country: "Tunisia" },

  { code: "in", country: "India" },
  { code: "cn", country: "China" },
  { code: "jp", country: "Japan" },
  { code: "kr", country: "South Korea" },
  { code: "kp", country: "North Korea" },
  { code: "vn", country: "Vietnam" },
  { code: "th", country: "Thailand" },
  { code: "my", country: "Malaysia" },
  { code: "sg", country: "Singapore" },
  { code: "id", country: "Indonesia" },
  { code: "ph", country: "Philippines" },
  { code: "pk", country: "Pakistan" },
  { code: "bd", country: "Bangladesh" },
  { code: "sa", country: "Saudi Arabia" },
  { code: "ae", country: "United Arab Emirates" },
  { code: "ir", country: "Iran" },
  { code: "iq", country: "Iraq" },
  { code: "il", country: "Israel" },

  { code: "au", country: "Australia" },
  { code: "nz", country: "New Zealand" },

  { code: "is", country: "Iceland" },
  { code: "lu", country: "Luxembourg" },
  { code: "mt", country: "Malta" },
  { code: "cy", country: "Cyprus" },
  { code: "sk", country: "Slovakia" },
  { code: "si", country: "Slovenia" },
  { code: "lt", country: "Lithuania" },
  { code: "lv", country: "Latvia" },
  { code: "ee", country: "Estonia" },
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
const questionEl      = document.getElementById("question");
const answerInput     = document.getElementById("answerInput");
const suggestionsList = document.getElementById("suggestions");
const submitBtn       = document.getElementById("submitBtn");
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
 * Clears the suggestions list.
 */
function clearSuggestions() {
  suggestionsList.innerHTML = "";
}

/**
 * Filters and renders up to 8 matching suggestions below the input.
 */
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

/**
 * Sets up the UI for the current question.
 */
function loadQuestion() {
  const { code } = questions[currentQuestion];
  questionEl.textContent = `Question ${currentQuestion + 1} of ${questions.length} — Which country does this flag belong to?`;
  document.getElementById("flagImg").src = `https://flagcdn.com/w320/${code}.png`;

  // 💡 Reset the cartoon animation classes for the new question
  answerInput.classList.remove("correct");
  feedbackEl.className = "";
  feedbackEl.style.color = ""; // Clear inline override

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

document.addEventListener("click", (e) => {
  if (!e.target.closest(".input-wrapper")) {
    clearSuggestions();
  }
});
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
  clearSuggestions();

  const correct = questions[currentQuestion].correct;

  if (selected.toLowerCase() === correct.toLowerCase()) {
    score++;
    feedbackEl.textContent = "CORRECT!";
    // 💡 Add the cartoon text style and the input shake/glow
    feedbackEl.className = "success-message"; 
    answerInput.classList.add("correct");
  } else {
    feedbackEl.textContent = `✗ Wrong! Correct answer: ${correct}`;
    feedbackEl.className = ""; // Reset to default layout if wrong
    feedbackEl.style.color = "#ef4444"; // Soft modern red
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
loadQuestion();
