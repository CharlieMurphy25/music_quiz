const possibleAnswers = [
  "Dublin",
  "Cork",
  "Galway",
  "Limerick",
  "London",
  "Paris",
  "Berlin",
  "Rome"
];

const questions = [
  {
    question: "What is the capital of Ireland?",
    correct: "Dublin"
  },
  {
    question: "Capital of France?",
    correct: "Paris"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerSelect = document.getElementById("answerSelect");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function populateDropdown() {
  answerSelect.innerHTML = "";

  possibleAnswers.forEach(answer => {
    const option = document.createElement("option");
    option.value = answer;
    option.textContent = answer;

    answerSelect.appendChild(option);
  });
}

function loadQuestion() {
  const q = questions[currentQuestion];

  questionEl.textContent = q.question;

  populateDropdown();

  nextBtn.style.display = "none";
}

submitBtn.onclick = () => {
  const selected = answerSelect.value;
  const correct = questions[currentQuestion].correct;

  if (selected === correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong! Correct answer: " + correct);
  }

  nextBtn.style.display = "inline-block";
};

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Game Over!";
    answerSelect.style.display = "none";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";

    scoreEl.textContent =
      `Final Score: ${score}/${questions.length}`;
  }
};

loadQuestion();
