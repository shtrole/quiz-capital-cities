// VARIABLES from ELEMENTS
const s = selektor => document.getElementById(selektor);

const quizTopic = s('quiz-topic');
const start = s('start');

const questionPage = s('question-page');
const questionNo = s('question-number');
const questionTotal = 10;

const answerPage = s('answer-page');
const correct = s('correct');
const wrong = s('wrong');
const next = s('next');

const scorePage = s('score-page');

let question = s('question');
let score = s('score');
let a = s('A');
let b = s('B');
let c = s('C');
let d = s('D');


// QUIZ QUESTIONS Object
let questions = [
{
    question: "What is the capital of Italy?",
    a: "Reykjavik",
    b: "Vienna",
    c: "Rome",
    d: "Milan",
    correct: "C"
},

{
    question: "What is the capital of Germany?",
    a: "Berlin",
    b: "Bratislava",
    c: "Budapest",
    d: "Bonn",
    correct: "A"
},

{
    question: "What is the capital of Serbia?",
    a: "Madrid",
    b: "Moskow",
    c: "Tallin",
    d: "Belgrade",
    correct: "D"
},

{
    question: "What is the capital of Hungary?",
    a: "Lisbon",
    b: "Budapest",
    c: "Paris",
    d: "Sofia",
    correct: "B"
},

{
    question: "What is the capital of Greece?",
    a: "London",
    b: "Praque",
    c: "Athens",
    d: "Amsterdam",
    correct: "C"
},

{
    question: "What is the capital of Switzerland?",
    a: "Kiev",
    b: "Bern",
    c: "Bucharest",
    d: "Ljubljana",
    correct: "B"
},

{
    question: "What is the capital of Spain?",
    a: "Helsinki",
    b: "Vilinus",
    c: "Riga",
    d: "Madrid",
    correct: "D"
},

{
    question: "What is the capital of Poland?",
    a: "Minsk",
    b: "Valleta",
    c: "Warsaw",
    d: "Zagreb",
    correct: "C"
},

{
    question: "What is the capital of Sweden?",
    a: "Sarajevo",
    b: "Oslo",
    c: "Stockholm",
    d: "Vaduz",
    correct: "C"
},

{
    question: "What is the capital of Estonia?",
    a: "Tallin",
    b: "Podgorica",
    c: "Nicosia",
    d: "Chisinau",
    correct: "A"
}
];

// VARIABLES

const lastQuestionIndex = questions.length - 1;
let currentQuestionIndex = 0;
score = 0;

// FUNCTION RENDER QUESTIONS & ANSWERS

function renderQuestion(){
    quizTopic.style.display = "none";
    let q = questions[currentQuestionIndex];
    questionNo.innerHTML = "Question " + (currentQuestionIndex + 1) + " / " + questionTotal;
    question.innerHTML = q.question;
    a.innerHTML = q.a;
    b.innerHTML = q.b;
    c.innerHTML = q.c;
    d.innerHTML = q.d;
};

start.addEventListener('click', startQuiz);

// START QUIZ function

function startQuiz(){
    start.style.display = "none";    
    answerPage.style.display = "none";
    scorePage.style.display = "none";
    questionPage.style.display = "block";    
    renderQuestion();      
}

// CHECK ANSWER function

function checkAnswer(answer){    
    if (answer == questions[currentQuestionIndex].correct){
    score++;    
    questionPage.style.display = "none";
    answerPage.style.display = "block";
    correct.style.display = "inline-block"; 
    wrong.style.display = "none";   
    next.style.display = "inline-block";
    next.addEventListener('click', startQuiz);
    } else {
    questionPage.style.display = "none";
    answerPage.style.display = "block";
    correct.style.display = "none";   
    wrong.style.display = "inline-block";
    next.style.display = "inline-block";
    next.addEventListener('click', startQuiz);
    }
    if (currentQuestionIndex < lastQuestionIndex){
        currentQuestionIndex++;
        renderQuestion();
    } else {
        answerPage.style.display = "block";
        next.style.display = "none";
        end.style.display = "inline-block";
    }  
};

// SHOW SCORE function

function scoreRender(){
    questionPage.style.display = "none";
    answerPage.style.display = "none";
    scorePage.style.display = "block";
    document.getElementById("score").innerHTML = score;
    currentQuestionIndex = 0;
    score = 0;    
    end.style.display = "none";
}
