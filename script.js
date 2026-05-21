// ==========================================
// 1. INITIAL SETUP & STATE
// ==========================================
const possibleCountries = window.flags.map(f => f.country);
// Extract the song titles from the array generated in data.js
let possibleSongs = []; 
let questions = [];
let currentQuestion = 0;
let score = 0;
let currentAudio = null;
let audioTimeout = null; // Track the 1-second playback limit

// ==========================================
// 2. DOM ELEMENT SELECTION
// ==========================================
const questionEl         = document.getElementById("question");
const answerInput        = document.getElementById("answerInput");
const songInput          = document.getElementById("songInput");
const suggestionsList    = document.getElementById("suggestions");
const songSuggestionsList = document.getElementById("songSuggestions");
const submitBtn          = document.getElementById("submitBtn");
const nextBtn            = document.getElementById("nextBtn");
const tryAgainBtn        = document.getElementById("tryAgainBtn");
const replayBtn          = document.getElementById("replayBtn");
const feedbackEl         = document.getElementById("feedback");
const errorEl            = document.getElementById("error");
const scoreEl            = document.getElementById("score");

// ==========================================
// 3. HELPER FUNCTIONS
// ==========================================
function buildCombinedQuestions(count = 5) {
  // Ensure we only use tracks that successfully found an audio clip
  const validSongs = window.beatles.filter(s => s.clip !== "NOT_FOUND");
  possibleSongs = validSongs.map(s => s.title);

  // Shuffle both datasets completely independently
  const shuffledFlags = [...window.flags].sort(() => Math.random() - 0.5);
  const shuffledSongs = [...validSongs].sort(() => Math.random() - 0.5);

  const mergedRound = [];
  for (let i = 0; i < count; i++) {
    // Loop back around if dataset sizes are smaller than the requested count
    const flagIdx = i % shuffledFlags.length;
    const songIdx = i % shuffledSongs.length;

    mergedRound.push({
      flagCode: shuffledFlags[flagIdx].code,
      correctCountry: shuffledFlags[flagIdx].country,
      correctSong: shuffledSongs[songIdx].title,
      audioClip: shuffledSongs[songIdx].clip
    });
  }
  return mergedRound;
}

function clearSuggestions(listElement) {
  listElement.innerHTML = "";
}

function renderSuggestions(matches, inputElement, listElement) {
  clearSuggestions(listElement);
  matches.forEach(match => {
    const li = document.createElement("li");
    li.textContent = match;
    li.setAttribute("role", "option");
    li.onclick = () => {
      inputElement.value = match;
      clearSuggestions(listElement);
    };
    listElement.appendChild(li);
  });
}

// Custom handler to play exactly 1 second of audio
function playOneSecondSample() {
  if (currentAudio) {
    // Clear any pending pauses if clicked repeatedly
    clearTimeout(audioTimeout);
    
    currentAudio.currentTime = 0;
    currentAudio.play()
      .then(() => {
        audioTimeout = setTimeout(() => {
          currentAudio.pause();
        }, 1000); // Stop right at 1000ms
      })
      .catch(e => console.log("Audio playback waiting for user interaction..."));
  }
}

// ==========================================
// 4. CORE GAME ENGINE
// ==========================================
function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = `Round ${currentQuestion + 1} of ${questions.length}`;
  
  // 1. Update Flag Image
  document.getElementById("flagImg").src = `https://flagcdn.com/w320/${current.flagCode}.png`;

  // 2. Handle Audio Setup (Do not auto-play, wait for button press)
  clearTimeout(audioTimeout);
  if (currentAudio) { currentAudio.pause(); }
  currentAudio = new Audio(current.audioClip);

  // 3. Reset UI Fields & Styles
  answerInput.classList.remove("correct", "wrong");
  songInput.classList.remove("correct", "wrong");
  feedbackEl.className = "";

  answerInput.value = "";
  songInput.value = "";
  answerInput.disabled = false;
  songInput.disabled = false;

  submitBtn.disabled = false;
  submitBtn.style.display = "";
  nextBtn.style.display = "none";
  tryAgainBtn.style.display = "none";

  feedbackEl.textContent = "";
  errorEl.style.display = "none";
  scoreEl.textContent = "";
  clearSuggestions(suggestionsList);
  clearSuggestions(songSuggestionsList);
}

function endGame() {
  clearTimeout(audioTimeout);
  if (currentAudio) { currentAudio.pause(); }
  questionEl.textContent = "Game Over!";
  
  answerInput.style.display = "none";
  songInput.style.display = "none";
  submitBtn.style.display = "none";
  nextBtn.style.display = "none";

  scoreEl.textContent = `Final Score: ${score}/${questions.length} total points built up!`;
  tryAgainBtn.style.display = "block";
}

// ==========================================
// 5. EVENT LISTENERS
// ==========================================

// Replay button plays the restricted 1-second sample
replayBtn.onclick = () => {
  playOneSecondSample();
};

// Country Input Suggestions
answerInput.addEventListener("focus", () => {
  if (!answerInput.value.trim()) renderSuggestions(possibleCountries.slice(0, 6), answerInput, suggestionsList);
});
answerInput.addEventListener("input", () => {
  const query = answerInput.value.trim().toLowerCase();
  const matches = query ? possibleCountries.filter(c => c.toLowerCase().includes(query)).slice(0, 6) : possibleCountries.slice(0, 6);
  renderSuggestions(matches, answerInput, suggestionsList);
});

// Song Input Suggestions
songInput.addEventListener("focus", () => {
  if (!songInput.value.trim()) renderSuggestions(possibleSongs.slice(0, 6), songInput, songSuggestionsList);
});
songInput.addEventListener("input", () => {
  const query = songInput.value.trim().toLowerCase();
  const matches = query ? possibleSongs.filter(s => s.toLowerCase().includes(query)).slice(0, 6) : possibleSongs.slice(0, 6);
  renderSuggestions(matches, songInput, songSuggestionsList);
});

// Dismiss menus clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".input-wrapper")) {
    clearSuggestions(suggestionsList);
    clearSuggestions(songSuggestionsList);
  }
});

// Submit Logic
submitBtn.onclick = () => {
  const countryGuess = answerInput.value.trim();
  const songGuess = songInput.value.trim();

  if (!countryGuess || !songGuess) {
    errorEl.textContent = "Please answer both parts of the puzzle before submitting!";
    errorEl.style.display = "block";
    return;
  }

  errorEl.style.display = "none";
  clearSuggestions(suggestionsList);
  clearSuggestions(songSuggestionsList);

  const current = questions[currentQuestion];
  const isCountryCorrect = countryGuess.toLowerCase() === current.correctCountry.toLowerCase();
  const isSongCorrect = songGuess.toLowerCase() === current.correctSong.toLowerCase();

  // Highlight Country Input Box
  if (isCountryCorrect) {
    answerInput.classList.add("correct");
    score += 0.5; // Award partial credit
  } else {
    answerInput.classList.add("wrong");
  }

  // Highlight Song Input Box
  if (isSongCorrect) {
    songInput.classList.add("correct");
    score += 0.5;
  } else {
    songInput.classList.add("wrong");
  }

  // Generate composite feedback summary text
  if (isCountryCorrect && isSongCorrect) {
    feedbackEl.textContent = "PERFECT ROUND! Both are correct!";
    feedbackEl.className = "success-message";
  } else {
    feedbackEl.textContent = `RESULTS — Country: ${isCountryCorrect ? '✓' : '✗ ('+current.correctCountry+')'} | Song: ${isSongCorrect ? '✓' : '✗ ('+current.correctSong+')'}`;
    feedbackEl.className = "error-message";
  }

  answerInput.disabled = true;
  songInput.disabled = true;
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
  // Show inputs if hidden by game over sequence
  answerInput.style.display = "";
  songInput.style.display = "";
  initGame();
};

// ==========================================
// 6. INITIALISATION
// ==========================================
function initGame() {
  // Wait safely in case Apple API requests are still finishing data collection
  if (!window.beatles || window.beatles.length === 0) {
    setTimeout(initGame, 300);
    return;
  }
  questions = buildCombinedQuestions(5); // Changed to 5 questions
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// Fire up quiz engine
initGame();
