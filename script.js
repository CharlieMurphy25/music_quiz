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
  { title: "All My Loving", clip: "beatles/AllMyLoving.mp3" },
  { title: "All You Need Is Love", clip: "beatles/AllYouNeedIsLove.mp3" },
  { title: "And I Love Her", clip: "beatles/AndILoveHer.mp3" },
  { title: "Back In The U.S.S.R.", clip: "beatles/USSR.mp3" },
  { title: "The Ballad Of John And Yoko", clip: "beatles/BalladOfJohnAndYoko.mp3" },
  { title: "Blackbird", clip: "beatles/Blackbird.mp3" },
  { title: "Can't Buy Me Love", clip: "beatles/CantBuyMeLove.mp3" },
  { title: "Come Together", clip: "beatles/ComeTogether.mp3" },
  { title: "A Day In The Life", clip: "beatles/DayInTheLife.mp3" },
  { title: "Day Tripper", clip: "beatles/DayTripper.mp3" },
  { title: "Dear Prudence", clip: "beatles/DearPrudence.mp3" },
  { title: "Don't Let Me Down", clip: "beatles/DontLetMeDown.mp3" },
  { title: "Drive My Car", clip: "beatles/DriveMyCar.mp3" },
  { title: "Eight Days A Week", clip: "beatles/EightDaysAWeek.mp3" },
  { title: "Eleanor Rigby", clip: "beatles/EleanorRigby.mp3" },
  { title: "The Fool On The Hill", clip: "beatles/FoolOnTheHill.mp3" },
  { title: "From Me To You", clip: "beatles/FromMeToYou.mp3" },
  { title: "Get Back", clip: "beatles/GetBack.mp3" },
  { title: "Girl", clip: "beatles/Girl.mp3" },
  { title: "Glass Onion", clip: "beatles/GlassOnion.mp3" },
  { title: "Got To Get You Into My Life", clip: "beatles/GotToGetYouIntoMyLife.mp3" },
  { title: "A Hard Day's Night", clip: "beatles/HardDaysNight.mp3" },
  { title: "Hello Goodbye", clip: "beatles/HelloGoodbye.mp3" },
  { title: "Help!", clip: "beatles/Help.mp3" },
  { title: "Here Comes The Sun", clip: "beatles/HereComesTheSun.mp3" },
  { title: "Here There And Everywhere", clip: "beatles/HereThereAndEverywhere.mp3" },
  { title: "Hey Bulldog", clip: "beatles/HeyBulldog.mp3" },
  { title: "Hey Jude", clip: "beatles/HeyJude.mp3" },
  { title: "You've Got To Hide Your Love Away", clip: "beatles/HideYourLoveAway.mp3" },
  { title: "I Am The Walrus", clip: "beatles/IAmTheWalrus.mp3" },
  { title: "I Feel Fine", clip: "beatles/IFeelFine.mp3" },
  { title: "I Saw Her Standing There", clip: "beatles/ISawHerStandingThere.mp3" },
  { title: "I Want To Hold Your Hand", clip: "beatles/IWantToHoldYourHand.mp3" },
  { title: "I Want You (She's So Heavy)", clip: "beatles/IWantYou.mp3" },
  { title: "If I Needed Someone", clip: "beatles/IfINeededSomeone.mp3" },
  { title: "I'm Only Sleeping", clip: "beatles/ImOnlySleeping.mp3" },
  { title: "In My Life", clip: "beatles/InMyLife.mp3" },
  { title: "Lady Madonna", clip: "beatles/LadyMadonna.mp3" },
  { title: "Love Me Do", clip: "beatles/LoveMeDo.mp3" },
  { title: "Lucy In The Sky With Diamonds", clip: "beatles/LucyInTheSky.mp3" },
  { title: "Magical Mystery Tour", clip: "beatles/MagicalMysteryTour.mp3" },
  { title: "Michelle", clip: "beatles/Michelle.mp3" },
  { title: "Norwegian Wood", clip: "beatles/NorwegianWood.mp3" },
  { title: "Nowhere Man", clip: "beatles/NowhereMan.mp3" },
  { title: "Ob-La-Di Ob-La-Da", clip: "beatles/ObLaDiObLaDa.mp3" },
  { title: "Octopus's Garden", clip: "beatles/OctopusGarden.mp3" },
  { title: "Oh! Darling", clip: "beatles/OhDarling.mp3" },
  { title: "Old Brown Shoe", clip: "beatles/OldBrownShoe.mp3" },
  { title: "Paperback Writer", clip: "beatles/PaperbackWriter.mp3" },
  { title: "Penny Lane", clip: "beatles/PennyLane.mp3" },
  { title: "Please Please Me", clip: "beatles/PleasePleaseMe.mp3" },
  { title: "Revolution", clip: "beatles/Revolution.mp3" },
  { title: "Sgt. Pepper's Lonely Hearts Club Band", clip: "beatles/SgtPepper.mp3" },
  { title: "She Loves You", clip: "beatles/SheLovesYou.mp3" },
  { title: "Something", clip: "beatles/Something.mp3" },
  { title: "Strawberry Fields Forever", clip: "beatles/StrawberryFieldsForever.mp3" },
  { title: "Taxman", clip: "beatles/Taxman.mp3" },
  { title: "This Boy", clip: "beatles/ThisBoy.mp3" },
  { title: "Ticket To Ride", clip: "beatles/TicketToRide.mp3" },
  { title: "Tomorrow Never Knows", clip: "beatles/TomorrowNeverKnows.mp3" },
  { title: "Twist And Shout", clip: "beatles/TwistAndShout.mp3" },
  { title: "We Can Work It Out", clip: "beatles/WeCanWorkItOut.mp3" },
  { title: "While My Guitar Gently Weeps", clip: "beatles/WhileMyGuitar.mp3" },
  { title: "With A Little Help From My Friends", clip: "beatles/WithALittleHelp.mp3" },
  { title: "Within You Without You", clip: "beatles/WithinYouWithoutYou.mp3" },
  { title: "Yellow Submarine", clip: "beatles/YellowSubmarine.mp3" },
  { title: "Yesterday", clip: "beatles/Yesterday.mp3" },
  { title: "You Can't Do That", clip: "beatles/YouCantDoThat.mp3" },
  { title: "You Really Got A Hold On Me", clip: "beatles/YouReallyGotAHoldOnMe.mp3" }
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
        }, 1000); // 2-second sample window cut-off
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
