// const quizData

const questionEl = document.getElementById("question");
const imageEl = document.getElementById("image");
const answerEl = document.getElementById("answer");
const submitBtn = document.getElementById("submit");
const revealBtn = document.getElementById("reveal");
const detailsBtn = document.getElementById("details");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

const correctCounterEl = document.getElementById("correct-counter");
const incorrectCounterEl = document.getElementById("incorrect-counter");
const startOverBtn = document.getElementById("start-over");

let currentQuestion = 0;
let correctCounter = 0;
let incorrectCounter = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    questionEl.innerText = questionData.question;
    imageEl.src = questionData.image;
    answerEl.value = "";

    // Reset the message and revealed-answer elements
    const messageEl = document.getElementById("message");
    const revealedAnswerEl = document.getElementById("revealed-answer");
    const revealedDetailsEl = document.getElementById("revealed-details");
    messageEl.innerText = "";
    revealedAnswerEl.innerText = "";
    revealedDetailsEl.innerText = "";
}


submitBtn.addEventListener("click", () => {
    const userAnswer = answerEl.value.trim().toLowerCase();
    const correctAnswer = quizData[currentQuestion].answer.toLowerCase();
    const messageEl = document.getElementById("message");

    messageEl.classList.remove("correct-answer", "wrong-answer"); // Remove both classes before setting a new one

    if (userAnswer === correctAnswer) {
        messageEl.innerText = "Správně!";
        // messageEl.style.color = "green";
        messageEl.classList.add("correct-answer"); // Add the "correct-answer" class
        correctCounter++;
        correctCounterEl.innerText = correctCounter;
    } else {
        messageEl.innerText = "Špatně!";
        // messageEl.style.color = "red";
        messageEl.classList.add("wrong-answer"); // Add the "wrong-answer" class
        incorrectCounter++;
        incorrectCounterEl.innerText = incorrectCounter;
    }
});

revealBtn.addEventListener("click", () => {
    const revealedAnswerEl = document.getElementById("revealed-answer");
    revealedAnswerEl.innerText = "Správná odpověď: " + quizData[currentQuestion].answer;
});

detailsBtn.addEventListener("click", () => {
    const revealedDetailsEl = document.getElementById("revealed-details");
    revealedDetailsEl.innerText = "Podrobnosti: " + quizData[currentQuestion].details;
});

previousBtn.addEventListener("click", () => {
    currentQuestion--;
    if (currentQuestion < 0) {
        currentQuestion = quizData.length - 1;
    }
    loadQuestion();
});

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
        currentQuestion = 0;
    }
    loadQuestion();
});

startOverBtn.addEventListener("click", () => {
    correctCounter = 0;
    incorrectCounter = 0;
    correctCounterEl.innerText = correctCounter;
    incorrectCounterEl.innerText = incorrectCounter;
    currentQuestion = 0;
    loadQuestion();
});

loadQuestion();
