// Run this in your terminal: node fetch_beatles_previews.js
// Or paste the fetchPreview function into your browser console and call it manually

const songs = [
  // Red Album (1962-1966)
  "Love Me Do", "Please Please Me", "From Me To You", "She Loves You",
  "I Want To Hold Your Hand", "All My Loving", "Can't Buy Me Love",
  "A Hard Day's Night", "And I Love Her", "Eight Days A Week",
  "I Feel Fine", "Ticket To Ride", "Yesterday", "Help!",
  "You've Got To Hide Your Love Away", "We Can Work It Out", "Day Tripper",
  "Drive My Car", "Norwegian Wood (This Bird Has Flown)", "Nowhere Man",
  "Michelle", "In My Life", "Girl", "Paperback Writer",
  "Eleanor Rigby", "Yellow Submarine",

  // Blue Album (1967-1970)
  "Strawberry Fields Forever", "Penny Lane", "Sgt. Pepper's Lonely Hearts Club Band",
  "With A Little Help From My Friends", "Lucy In The Sky With Diamonds",
  "A Day In The Life", "All You Need Is Love", "I Am The Walrus",
  "Hello Goodbye", "The Fool On The Hill", "Magical Mystery Tour",
  "Lady Madonna", "Hey Jude", "Revolution", "Back In The U.S.S.R.",
  "While My Guitar Gently Weeps", "Ob-La-Di Ob-La-Da", "Get Back",
  "Don't Let Me Down", "The Ballad Of John And Yoko", "Old Brown Shoe",
  "Here Comes The Sun", "Come Together", "Something",
  "Octopus's Garden", "Let It Be", "Across The Universe",
  "The Long And Winding Road"
];

async function fetchPreview(title) {
  const query = encodeURIComponent(`${title} Beatles`);
  const url = `https://itunes.apple.com/search?term=${query}&entity=song&limit=5`;
  const res = await fetch(url);
  const data = await res.json();
  const match = data.results.find(r =>
    r.artistName.toLowerCase().includes("beatles") && r.previewUrl
  );
  return match ? match.previewUrl : null;
}

async function main() {
  const results = [];
  for (const title of songs) {
    const clip = await fetchPreview(title);
    results.push({ title, clip: clip || "NOT_FOUND" });
    console.log(`${clip ? "✓" : "✗"} ${title}`);
    await new Promise(r => setTimeout(r, 150));
  }

  console.log("\n\n--- COPY THIS INTO data.js ---\n");
  console.log("const beatles = [");
  for (const r of results) {
    console.log(`  { title: "${r.title}", clip: "${r.clip}" },`);
  }
  console.log("];");
}

main();
