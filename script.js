const questions = [
  {
    question: "What is the capital of Ireland?",
    answers: ["Dublin", "Cork", "Galway", "Limerick"],
    correct: 0
  },
  {
    question: "2 + 2 = ?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];

  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;

    btn.onclick = () => {
      if (index === q.correct) {
        score++;
      }

      nextBtn.style.display = "block";
    };

    answersEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    questionEl.textContent = "Game Over!";
    answersEl.innerHTML = "";
    scoreEl.textContent = `Score: ${score}/${questions.length}`;
    nextBtn.style.display = "none";
  }
};

loadQuestion();
nextBtn.style.display = "none";
