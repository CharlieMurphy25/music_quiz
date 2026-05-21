// ============================================================================
// 1. DATA DEFINITIONS (Formerly data.js)
// ============================================================================

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
  { code: "ad", country: "Andorra" },
  { code: "al", country: "Albania" },
  { code: "am", country: "Armenia" },
  { code: "az", country: "Azerbaijan" },
  { code: "ba", country: "Bosnia and Herzegovina" },
  { code: "by", country: "Belarus" },
  { code: "ge", country: "Georgia" },
  { code: "md", country: "Moldova" },
  { code: "me", country: "Montenegro" },
  { code: "mk", country: "North Macedonia" },
  { code: "af", country: "Afghanistan" },
  { code: "kz", country: "Kazakhstan" },
  { code: "kg", country: "Kyrgyzstan" },
  { code: "mn", country: "Mongolia" },
  { code: "np", country: "Nepal" },
  { code: "lk", country: "Sri Lanka" },
  { code: "mm", country: "Myanmar" },
  { code: "kh", country: "Cambodia" },
  { code: "la", country: "Laos" },
  { code: "bn", country: "Brunei" },
  { code: "qa", country: "Qatar" },
  { code: "kw", country: "Kuwait" },
  { code: "om", country: "Oman" },
  { code: "jo", country: "Jordan" },
  { code: "lb", country: "Lebanon" },
  { code: "sy", country: "Syria" },
  { code: "ye", country: "Yemen" },
  { code: "ao", country: "Angola" },
  { code: "cm", country: "Cameroon" },
  { code: "ci", country: "Ivory Coast" },
  { code: "sn", country: "Senegal" },
  { code: "ug", country: "Uganda" },
  { code: "tz", country: "Tanzania" },
  { code: "zw", country: "Zimbabwe" },
  { code: "zm", country: "Zambia" },
  { code: "bw", country: "Botswana" },
  { code: "na", country: "Namibia" },
  { code: "sd", country: "Sudan" },
  { code: "ly", country: "Libya" },
  { code: "cd", country: "Democratic Republic of the Congo" },
  { code: "bo", country: "Bolivia" },
  { code: "py", country: "Paraguay" },
  { code: "ec", country: "Ecuador" },
  { code: "gy", country: "Guyana" },
  { code: "sr", country: "Suriname" },
  { code: "bz", country: "Belize" },
  { code: "sv", country: "El Salvador" },
  { code: "hn", country: "Honduras" },
  { code: "ni", country: "Nicaragua" },
  { code: "do", country: "Dominican Republic" },
  { code: "ht", country: "Haiti" },
  { code: "tt", country: "Trinidad and Tobago" },
  { code: "bs", country: "Bahamas" },
  { code: "bb", country: "Barbados" },
  { code: "fj", country: "Fiji" },
  { code: "pg", country: "Papua New Guinea" },
  { code: "ws", country: "Samoa" },
  { code: "to", country: "Tonga" },
  { code: "sm", country: "San Marino" }, 
  { code: "mc", country: "Monaco" },
  { code: "li", country: "Liechtenstein" },
  { code: "va", country: "Vatican City" },
];

const beatlesSongsList = [
  "Love Me Do", "Please Please Me", "From Me To You", "She Loves You",
  "I Want To Hold Your Hand", "All My Loving", "Can't Buy Me Love",
  "A Hard Day's Night", "And I Love Her", "Eight Days A Week",
  "I Feel Fine", "Ticket To Ride", "Yesterday", "Help!",
  "You've Got To Hide Your Love Away", "We Can Work It Out", "Day Tripper",
  "Drive My Car", "Norwegian Wood (This Bird Has Flown)", "Nowhere Man",
  "Michelle", "In My Life", "Girl", "Paperback Writer",
  "Eleanor Rigby", "Yellow Submarine", "Strawberry Fields Forever", "Penny Lane", 
  "Sgt. Pepper's Lonely Hearts Club Band", "With A Little Help From My Friends", 
  "Lucy In The Sky With Diamonds", "A Day In The Life", "All You Need Is Love", 
  "I Am The Walrus", "Hello Goodbye", "The Fool On The Hill", "Magical Mystery Tour",
  "Lady Madonna", "Hey Jude", "Revolution", "Back In The U.S.S.R.",
  "While My Guitar Gently Weeps", "Ob-La-Di Ob-La-Da", "Get Back",
  "Don't Let Me Down", "The Ballad Of John And Yoko", "Old Brown Shoe",
  "Here Comes The Sun", "Come Together", "Something", "Octopus's Garden", 
  "Let It Be", "Across The Universe", "The Long And Winding Road"
];

// ============================================================================
// 2. INITIAL SETUP & STATE MANAGEMENT
// ============================================================================
const possibleCountries = flags.map(f => f.country);
let possibleSongs = []; 
let questions = [];
let currentQuestion = 0;
let score = 0;
let currentAudio = null;
let audioTimeout = null; 
let beatlesClips = [];

// ============================================================================
// 3. DOM ELEMENT SELECTION
// ============================================================================
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

// ============================================================================
// 4. AUDIO LOADING UTILITIES (iTunes Preview Pipeline)
// ============================================================================
async function fetchPreview(title) {
  const query = encodeURIComponent(`${title} Beatles`);
  const url = `https://itunes.apple.com/search?term=${query}&entity=song&limit=5`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const match = data.results.find(r =>
      r.artistName.toLowerCase().includes("beatles") && r.previewUrl
    );
    return match ? match.previewUrl : null;
  } catch (err) {
    console.error(`Error fetching audio for ${title}:`, err);
    return null;
  }
}

async function loadMusicSamples() {
  const results = [];
  for (const title of beatlesSongsList) {
    const clip = await fetchPreview(title);
    results.push({ title, clip: clip || "NOT_FOUND" });
    // Soft rate limiting safeguard for API
    await new Promise(r => setTimeout(r, 150));
  }
  beatlesClips = results;
  console.log("🎵 Beatles music samples loaded successfully.");
  initGame(); // Automatically start game building setup once data is synchronized!
}

// ============================================================================
// 5. QUIZ ENGINE HELPER FUNCTIONS
// ============================================================================
function buildCombinedQuestions(count = 5) {
  const validSongs = beatlesClips.filter(s => s.clip !== "NOT_FOUND");
  possibleSongs = validSongs.map(s => s.title);

  // Shuffle both completely independently
  const shuffledFlags = [...flags].sort(() => Math.random() - 0.5);
  const shuffledSongs = [...validSongs].sort(() => Math.random() - 0.5);

  const mergedRound = [];
  for (let i = 0; i < count; i++) {
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

function playOneSecondSample() {
  if (currentAudio) {
    clearTimeout(audioTimeout);
    
    currentAudio.currentTime = 0;
    currentAudio.play()
      .then(() => {
        audioTimeout = setTimeout(() => {
          currentAudio.pause();
        }, 1000); 
      })
      .catch(e => console.log("Audio playback awaiting user click interaction..."));
  }
}

// ============================================================================
// 6. CORE GAME RUNTIME
// ============================================================================
function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = `Round ${currentQuestion + 1} of ${questions.length}`;
  
  // 1. Update Flag Image
  document.getElementById("flagImg").src = `https://flagcdn.com/w320/${current.flagCode}.png`;

  // 2. Handle Audio Setup (Prepped silently, waiting for button triggers)
  clearTimeout(audioTimeout);
  if (currentAudio) { currentAudio.pause(); }
  currentAudio = new Audio(current.audioClip);

  // 3. Reset UI Fields & Animations
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

// ============================================================================
// 7. EVENT HANDLERS
// ============================================================================
replayBtn.onclick = () => {
  playOneSecondSample();
};

// Country Input Filter Listeners
answerInput.addEventListener("focus", () => {
  if (!answerInput.value.trim()) renderSuggestions(possibleCountries.slice(0, 6), answerInput, suggestionsList);
});
answerInput.addEventListener("input", () => {
  const query = answerInput.value.trim().toLowerCase();
  const matches = query ? possibleCountries.filter(c => c.toLowerCase().includes(query)).slice(0, 6) : possibleCountries.slice(0, 6);
  renderSuggestions(matches, answerInput, suggestionsList);
});

// Song Input Filter Listeners
songInput.addEventListener("focus", () => {
  if (!songInput.value.trim()) renderSuggestions(possibleSongs.slice(0, 6), songInput, songSuggestionsList);
});
songInput.addEventListener("input", () => {
  const query = songInput.value.trim().toLowerCase();
  const matches = query ? possibleSongs.filter(s => s.toLowerCase().includes(query)).slice(0, 6) : possibleSongs.slice(0, 6);
  renderSuggestions(matches, songInput, songSuggestionsList);
});

// Clear lookup boxes clicking outside wrapper zones
document.addEventListener("click", (e) => {
  if (!e.target.closest(".input-wrapper")) {
    clearSuggestions(suggestionsList);
    clearSuggestions(songSuggestionsList);
  }
});

// Submission Verification
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

  if (isCountryCorrect) {
    answerInput.classList.add("correct");
    score += 0.5;
  } else {
    answerInput.classList.add("wrong");
  }

  if (isSongCorrect) {
    songInput.classList.add("correct");
    score += 0.5;
  } else {
    songInput.classList.add("wrong");
  }

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
  answerInput.style.display = "";
  songInput.style.display = "";
  initGame();
};

// ============================================================================
// 8. INITIALIZATION ENTRY POINT
// ============================================================================
function initGame() {
  questions = buildCombinedQuestions(5); 
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// Fire off the asynchronous resource loading sequence
loadMusicSamples();
