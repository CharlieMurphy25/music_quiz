// ==========================================
// 1. FLAG DATA DEFINITIONS
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


// ==========================================
// 2. MUSIC DATA & FETCH LOGIC
// ==========================================

const beatlesSongsList = [
  "Love Me Do", "Please Please Me", 
  "From Me To You", 
  "She Loves You",
  "I Want To Hold Your Hand", 
  "All My Loving", 
  "Can't Buy Me Love",
  "A Hard Day's Night", 
  "And I Love Her", 
  "Eight Days A Week",
  "I Feel Fine", 
  "Ticket To Ride", 
  "Yesterday", 
  "Help!",
  "You've Got To Hide Your Love Away", 
  "We Can Work It Out", 
  "Day Tripper",
  "Drive My Car", 
  "Norwegian Wood (This Bird Has Flown)", 
  "Nowhere Man",
  "Michelle", 
  "In My Life", 
  "Girl", 
  "Paperback Writer",
  "Eleanor Rigby", 
  "Yellow Submarine",
  "Strawberry Fields Forever", 
  "Penny Lane", 
  "Sgt. Pepper's Lonely Hearts Club Band",
  "With A Little Help From My Friends", 
  "Lucy In The Sky With Diamonds",
  "A Day In The Life", 
  "All You Need Is Love", 
  "I Am The Walrus",
  "Hello Goodbye", 
  "The Fool On The Hill", 
  "Magical Mystery Tour",
  "Lady Madonna", 
  "Hey Jude", 
  "Revolution", 
  "Back In The U.S.S.R.",
  "While My Guitar Gently Weeps", 
  "Ob-La-Di Ob-La-Da", 
  "Get Back",
  "Don't Let Me Down", 
  "The Ballad Of John And Yoko", 
  "Old Brown Shoe",
  "Here Comes The Sun", 
  "Come Together", 
  "Something",
  "Octopus's Garden", 
  "Let It Be", 
  "Across The Universe",
  "The Long And Winding Road"
];

let beatlesClips = [];

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
    // Soft rate limiting for API
    await new Promise(r => setTimeout(r, 150));
  }
  beatlesClips = results;
  window.beatles = beatlesClips; // Expose globally if required by audio features
  console.log("🎵 Beatles music samples loaded successfully.");
}

// Initialise asynchronous data retrieval
loadMusicSamples();

// Export arrays globally for script.js to access safely
window.flags = flags;
