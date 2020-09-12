const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");

let shuffledQuestions, CurentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  CurentQuestionIndex++;
  SetNexQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  CurentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  SetNexQuestion();
}

function SetNexQuestion() {
  resetState();
  showQuestion(shuffledQuestions[CurentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", SelectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function SelectAnswer(e) {
  const selecteButton = e.target;
  const correct = selecteButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > CurentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questions = [
  {
    question: "what is 2+2 ?",
    answers: [
      { text: "4", correct: "true" },
      { text: "18", wrong: "false" },
    ],
  },
  {
    question: "What is the largest country in the world ?",
    answers: [
      { text: "United States", wrong: "false" },
      { text: "Canada", wrong: "false" },
      { text: "Russia", correct: "true" },
      { text: "Brazil", wrong: "false" },
    ],
  },

  {
    question: "Who is the inventor of the lamp ?",
    answers: [
      { text: "Tomas Edison", correct: "true" },
      { text: "Robert Koch", wrong: "false" },
      { text: "Michael Farady", wrong: "false" },
      { text: "Nikola Tasla", wrong: "false" },
    ],
  },

  {
    question: "who is the oldest club in the world ?",
    answers: [
      { text: "Notingham forest", wrong: "false" },
      { text: "Aston villa", wrong: "false" },
      { text: "Udinese", wrong: "false" },
      { text: "Sheffeild United", correct: "true" },
    ],
  },

  {
    question: "what is the capital of finlande ?",
    answers: [
      { text: "Lima", wrong: "false" },
      { text: "Helsinki", correct: "true" },
      { text: "Berlin", wrong: "false" },
      { text: "Stockholm", wrong: "false" },
    ],
  },
  {
    question: "who is the first president of Algeria",
    answers: [
      { text: "Ahmed Ben Bella", correct: "true" },
      { text: "Abd El Aziz Bouteflika", wrong: "false" },
      { text: "Ali Kafi", wrong: "false" },
      { text: "Houari Boumedienne", wrong: "false" },
    ],
  },

  {
    question: "How many countries in the continent of Africa ?",
    answers: [
      { text: "54", correct: "true" },
      { text: "55", wrong: "false" },
      { text: "60", wrong: "false" },
      { text: "57", wrong: "false" },
    ],
  },
  {
    question: "Who is the team that won the World Cup in 1998 ?",
    answers: [
      { text: "France", correct: "true" },
      { text: "Brazil", wrong: "false" },
      { text: "Italy", wrong: "false" },
      { text: "Germany", wrong: "false" },
    ],
  },
];
