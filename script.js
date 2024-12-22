const questions = [
    {
        question: "The name of technology company HP stands for what?",
        answers: ["Hewlett-Packard", "Husker-Pollosk", "Howard Packmann", "Hellman-Pohl"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Earth", "Venus", "Jupiter"],
        correct: 0
    },
    {
        question: "What is the capital of Hungary?",
        answers: ["Budapest", "Debrecen", "Szeged", "Pécs"],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const question = questions[currentQuestionIndex];

    questionElement.textContent = question.question;
    answersElement.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.onclick = () => checkAnswer(index);
        answersElement.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        alert('Helyes válasz!');
    } else {
        alert('Rossz válasz!');
    }
}

document.getElementById('next-question').onclick = () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
};

// Első kérdés betöltése
displayQuestion();
