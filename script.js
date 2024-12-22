const apiUrl = 'https://opentdb.com/api.php?amount=1&type=multiple&language=hu'; // Kvíz API
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('nextQuestion');

// API hívás
function fetchQuestion() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const question = data.results[0];
            displayQuestion(question);
        })
        .catch(error => {
            questionElement.innerHTML = "Hiba történt a kvíz betöltésekor.";
        });
}

// Kérdés megjelenítése
function displayQuestion(question) {
    questionElement.innerHTML = question.question;
    const answers = [...question.incorrect_answers, question.correct_answer];
    shuffleArray(answers); // Véletlenszerű sorrend

    answersElement.innerHTML = '';
    answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener('click', () => checkAnswer(answer, question.correct_answer));
        answersElement.appendChild(li);
    });

    nextButton.style.display = 'block';
}

// Ellenőrizni, hogy a válasz helyes-e
function checkAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
        alert('Helyes válasz!');
    } else {
        alert('Helytelen válasz!');
    }
    nextButton.style.display = 'block';
}

// Következő kérdés
nextButton.addEventListener('click', fetchQuestion);

// Véletlenszerűen keverjük meg a válaszokat
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Első kérdés betöltése
fetchQuestion();
