const quizData = [
  {
    id: "1",
    question: "1. What is the difference between XML and HTML?",
    option1: "HTML is for exchanging purpose and XML is not",
    option2: "XML is structured launguage",
    option3: "HTML is a structured launguage and XML is not",
    option4: "HTML and XML are similar",
    correct: "HTML is for exchanging purpose and XML is not",
  },
  {
    id: "2",
    question: "2. HTML program is saved using extension.",
    option1: ".xml",
    option2: ".html",
    option3: ".HTML EXTENSION",
    option4: "none of the above",
    correct: ".html",
  },
  {
     id: "3",
    question: "3. What is the difference between XML and HTML?",
    option1: "HTML is for exchanging purpose and XML is not",
    option2: "XML is structured launguage",
    option3: "HTML is a structured launguage and XML is not",
    option4: "HTML and XML are similar",
    correct: "HTML is for exchanging purpose and XML is not",
  },
  {
    id:"4",
    question: "4. HTML program is saved using extension.",
    option1: ".xml",
    option2: ".html",
    option3: ".HTML EXTENSION",
    option4: "none of the above",
    correct: ".html",
  },
];

const quiz = document.getElementById("quiz");
const answerIs = document.querySelectorAll(".answer");
const questionIs = document.getElementById("question");
const answer1 = document.getElementById("answertext1");
const answer2 = document.getElementById("answertext2");
const answer3 = document.getElementById("answertext3");
const answer4 = document.getElementById("answertext4");
const submitBtn = document.getElementById("btnSubmit");
const ans1 = document.getElementById("answer1");
const ans2 = document.getElementById("answer2");
const ans3 = document.getElementById("answer3");
const ans4 = document.getElementById("answer4");

const timeLeftDisplay = document.getElementById("timeSpan");

let currentQuiz = 0;
let score = 0;
let timer;
let timeLeft = 10;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionIs.innerText = currentQuizData.question;
  answer1.innerText = currentQuizData.option1;
  answer2.innerText = currentQuizData.option2;
  answer3.innerText = currentQuizData.option3;
  answer4.innerText = currentQuizData.option4;

  startTimer(); 
}

function startTimer() {
  let timeLeft = 10;
  timeLeftDisplay.innerText = `TIME LEFT: ${timeLeft} s`;

  // clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timeLeftDisplay.innerText =`TIME LEFT: ${timeLeft} s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        displayScore();
      }
    }
  }, 1000);
}

function deselectAnswer() {
  answerIs.forEach((answers) => (answers.checked = false));
}

function getSelected() {
  let ans;
  answerIs.forEach((answer) => {
    if (answer.checked) {
      ans = answer.nextElementSibling.innerText;
    }
  });
  return ans;
}

submitBtn.addEventListener("click", () => {
  clearInterval(timer);
  const answers = getSelected();

  if (answers) {
    if (answers === quizData[currentQuiz].correct) {
      score ++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      
      loadQuiz();
    } else {
      displayScore();
    }
  }
});

console.log(score);

function displayScore() {
  quiz.innerHTML = `You answered ${score}/${quizData.length} questions correctly.`;
}
