// ============================================================================
// 1. DATA DEFINITIONS (Pre-compiled Instant Loading & Clean MP3 Links)
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

const beatlesClips = [
  { title: "Love Me Do", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4b/71/34/4b7134aa-8f0a-fc8c-1e24-4db23999eec3/m4a.mp3" },
  { title: "Please Please Me", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1f/2e/09/1f2e09aa-8bdf-c5e3-4c91-4c748c1e847c/m4a.mp3" },
  { title: "From Me To You", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8a/91/36/8a9136ca-0050-7059-fa0d-58744b1c676c/m4a.mp3" },
  { title: "She Loves You", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bb/9d/97/bb9d9709-b461-9f44-8d96-bc6089d8ff72/m4a.mp3" },
  { title: "I Want To Hold Your Hand", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f2/77/68/f27768f5-19e9-bbf2-df49-2e633f8fb954/m4a.mp3" },
  { title: "All My Loving", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/21/df/f0/21dff016-1f63-356b-a2eb-6e271616d2ca/m4a.mp3" },
  { title: "Can't Buy Me Love", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bf/f9/57/bff957db-83da-efdc-358b-088f343460e4/m4a.mp3" },
  { title: "A Hard Day's Night", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/be/89/34/be8934df-911e-289e-4c7f-94a1d48b78db/m4a.mp3" },
  { title: "And I Love Her", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c6/35/6b/c6356bd6-8964-6725-b1a7-e29f345ebc40/m4a.mp3" },
  { title: "Eight Days A Week", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/91/9f/df/919fdfb7-0097-f5da-661f-13fb00ee86d4/m4a.mp3" },
  { title: "I Feel Fine", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d5/47/4d/d5474d22-1dcd-9742-df86-061d49112fa5/m4a.mp3" },
  { title: "Ticket To Ride", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f5/be/72/f5be72fa-7e5c-cb3b-18b6-a81e35478d38/m4a.mp3" },
  { title: "Yesterday", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/71/2e/0f/712e0fbe-0975-fcff-83f5-6677f240bf75/m4a.mp3" },
  { title: "Help!", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/df/3f/82/df3f82aa-0c58-86d1-dbbb-b7cf6f693b4f/m4a.mp3" },
  { title: "You've Got To Hide Your Love Away", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a4/bc/d0/a4bcd060-f1c5-8472-e4eb-e866e4a689b9/m4a.mp3" },
  { title: "We Can Work It Out", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/24/77/5a247781-dbb5-d14f-5606-d0891f7481bb/m4a.mp3" },
  { title: "Day Tripper", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/51/97/81/5197818a-f5e9-d75d-6c17-ec178ebf812b/m4a.mp3" },
  { title: "Drive My Car", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/21/df/b9/21dfb9bf-9923-f38b-d72b-8a1dfbe7fc0a/m4a.mp3" },
  { title: "Norwegian Wood (This Bird Has Flown)", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/91/97/e5/9197e55a-3507-68b6-98ec-7bfd5df1f953/m4a.mp3" },
  { title: "Nowhere Man", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/99/ff/d1/99ffd174-8973-f111-e1e3-c603126bebe4/m4a.mp3" },
  { title: "Michelle", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0d/da/51/0dda51f9-8135-e414-ee17-c81b953d6d63/m4a.mp3" },
  { title: "In My Life", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/66/b6/a3/66b6a386-3392-4217-1011-823023e93148/m4a.mp3" },
  { title: "Girl", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/71/61/e8/7161e8bf-49f2-2bf2-cf70-5bca835057b4/m4a.mp3" },
  { title: "Paperback Writer", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ef/be/e0/efbee088-724d-e991-8884-3759714856b3/m4a.mp3" },
  { title: "Eleanor Rigby", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/a5/cb/5aa5cb0c-a120-e2b8-df93-f1661605ec10/m4a.mp3" },
  { title: "Yellow Submarine", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fb/0d/17/fb0d17d5-d97e-1282-cb10-18e38f4be8c8/m4a.mp3" },
  { title: "Strawberry Fields Forever", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c3/00/df/c300df23-a550-966a-ff35-e1fc84920b7a/m4a.mp3" },
  { title: "Penny Lane", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/67/62/a7676239-163e-dbbf-25c2-f1947e937d25/m4a.mp3" },
  { title: "Sgt. Pepper's Lonely Hearts Club Band", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f7/a7/69/f7a7698f-a9cb-b2aa-f173-15792efdb9f7/m4a.mp3" },
  { title: "With A Little Help From My Friends", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/71/3b/b7/713bb7f5-2633-91b4-71be-cf2b292e76f9/m4a.mp3" },
  { title: "Lucy In The Sky With Diamonds", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4b/f5/3a/4bf53a47-a929-373f-c1f0-466d71b3e817/m4a.mp3" },
  { title: "A Day In The Life", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/05/cf/54/05cf5480-49fa-1d8c-4a37-97a1d1fa7b32/m4a.mp3" },
  { title: "All You Need Is Love", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/21/df/b5/21dfb572-132d-222c-a0b2-73138b3cf435/m4a.mp3" },
  { title: "I Am The Walrus", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/dd/57/0d/dd570d57-1ba9-d3ff-568c-98282334f5aa/m4a.mp3" },
  { title: "Hello Goodbye", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6b/14/73/6b147395-538d-d779-1fec-c9fb379c6ef4/m4a.mp3" },
  { title: "The Fool On The Hill", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2b/9a/36/2b9a367c-f9cb-be72-9602-0e3c5a589eef/m4a.mp3" },
  { title: "Magical Mystery Tour", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/dd/b5/fb/ddb5fbee-3e74-0695-15a9-46747df34a2e/m4a.mp3" },
  { title: "Lady Madonna", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bd/13/26/bd13264b-b0bf-2f88-466d-929bdca25018/m4a.mp3" },
  { title: "Hey Jude", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a1/bc/f4/a1bcf4d1-6785-5026-6450-482f0ca36e6a/m4a.mp3" },
  { title: "Revolution", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6a/d2/cb/6ad2cb52-eb80-0a22-3be9-5fb1e9d1bf70/m4a.mp3" },
  { title: "Back In The U.S.S.R.", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2b/ef/0a/2bef0a18-6cf4-d754-ef86-d24268e37dc9/m4a.mp3" },
  { title: "While My Guitar Gently Weeps", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/05/cf/42/05cf4205-59c3-11b3-4675-45dbef694a1d/m4a.mp3" },
  { title: "Ob-La-Di Ob-La-Da", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cd/66/3c/cd663ce9-75b2-3c7d-ce47-3807577dfc89/m4a.mp3" },
  { title: "Get Back", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a5/d8/d5/a5d8d5df-4200-a29d-472b-8a896d8cf9f7/m4a.mp3" },
  { title: "Don't Let Me Down", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ef/be/e0/efbee0ab-db4d-91d8-a151-512c8b871c82/m4a.mp3" },
  { title: "The Ballad Of John And Yoko", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/df/3f/85/df3f8510-18e3-b9be-2dbb-43d9e8310ba0/m4a.mp3" },
  { title: "Old Brown Shoe", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/40/ff/0b/40ff0be4-5310-449e-36fa-69796e6d1912/m4a.mp3" },
  { title: "Here Comes The Sun", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ae/2e/f1/ae2ef104-585a-0498-8ec0-2646279f0412/m4a.mp3" },
  { title: "Come Together", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/05/cf/45/05cf4592-3652-3d52-fa58-29505f6bf08f/m4a.mp3" },
  { title: "Something", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/01/be/f3/01bef381-86e0-ef9a-41bf-1502b4bb7d81/m4a.mp3" },
  { title: "Octopus's Garden", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4b/f5/3a/4bf53a47-ef92-0b0c-783f-67dbb5a932eb/m4a.mp3" },
  { title: "Let It Be", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/67/62/a7676239-0260-244e-a619-3351656ca8fb/m4a.mp3" },
  { title: "Across The Universe", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/05/cf/4c/05cf4c28-9844-3d0d-ecf7-df6cfef0bfbc/m4a.mp3" },
  { title: "The Long And Winding Road", clip: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/01/be/fd/01befdf6-8dbb-b271-beeb-c65176b66ca9/m4a.mp3" }
];

// ============================================================================
// 2. INITIAL SETUP & STATE MANAGEMENT
// ============================================================================
const possibleCountries = flags.map(f => f.country);
let possibleSongs = beatlesClips.map(s => s.title); 
let questions = [];
let currentQuestion = 0;
let score = 0;
let currentAudio = null;
let audioTimeout = null; 

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
// 4. QUIZ ENGINE HELPER FUNCTIONS
// ============================================================================
function buildCombinedQuestions(count = 5) {
  const shuffledFlags = [...flags].sort(() => Math.random() - 0.5);
  const shuffledSongs = [...beatlesClips].sort(() => Math.random() - 0.5);

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
    currentAudio.pause();
    currentAudio.currentTime = 0;
    
    currentAudio.currentTime = 0;
    currentAudio.play()
      .then(() => {
        audioTimeout = setTimeout(() => {
          currentAudio.pause();
        }, 2000); // 2-second sample window cut-off
      })
      .catch(e => console.log("Audio waiting for manual user interaction gesture..."));
  }
}

// ============================================================================
// 5. CORE GAME RUNTIME
// ============================================================================
function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = `Round ${currentQuestion + 1} of ${questions.length}`;
  
  // Update Flag Image
  document.getElementById("flagImg").src = `https://flagcdn.com/w320/${current.flagCode}.png`;

  // Handle Audio Setup
  clearTimeout(audioTimeout);
  if (currentAudio) { currentAudio.pause(); }
  currentAudio = new Audio(current.audioClip);

  // Reset UI Fields & Animations
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

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  questionEl.textContent = "Game Over!";

  answerInput.style.display = "none";
  songInput.style.display = "none";
  submitBtn.style.display = "none";
  nextBtn.style.display = "none";
  replayBtn.style.display = "none";

  scoreEl.textContent =
    `Final Score: ${score}/${questions.length} total points built up!`;

  tryAgainBtn.style.display = "block";
}

// ============================================================================
// 6. EVENT HANDLERS
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
  submitBtn.style.display = "";
  replayBtn.style.display = "";
  answerInput.classList.remove("correct", "wrong");
  songInput.classList.remove("correct", "wrong");
  initGame();
};

// ============================================================================
// 7. INITIALIZATION ENTRY POINT
// ============================================================================
function initGame() {
  questions = buildCombinedQuestions(5); 
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// Start instantly
initGame();
