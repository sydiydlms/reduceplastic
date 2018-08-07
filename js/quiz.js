var points = 0;
var highscore = 3;
var questions = [{
    question: 'How many continents are there?',
    answers: ['7 continents', '5 continents', '180 continents'],
    correctAnswerKey: 0
    }, {
    question: 'How many countries are there in the world?',
    answers: ['100 countries', '195 countries', '500 countries'],
    correctAnswerKey: 1
    }, {
    question: 'How many students are in this room?',
    answers: [1, 10, 4, 9],
    correctAnswerKey: 2
    }
];



function rightAnswer(questionId) {
    points = points + 1;
    var pointsElement = document.getElementById('points');
    pointsElement.innerHTML = points;
    var questionElement = document.getElementById(questionId);
    questionElement.innerHTML = 'You are correct.</div>';
    questionElement.style.color = '#41f46e';

    checkHighscore();
}

function wrongAnswer(questionId) {
    var questionElement = document.getElementById(questionId);
    questionElement.innerHTML += '<div class="error">Sorry, try again.</div>';
}

function checkHighscore() {
    if (points == highscore) {
        var pointsElement = document.getElementById('points');
        pointsElement.innerHTML = points + ' Highscore!';
        pointsElement.style.fontWeight = 'bold';
        pointsElement.style.color = '#6498ea';
    }
}

function renderQuestions() {
    var questionElement = document.getElementById('questions');
    var questionsCode = '';
    
    for (var questionKey in questions) {
        questionsCode += '<h2>' + questions[questionKey].question + '</h2>';
        questionsCode += '<div id="questionX' + questionKey + '">';

        for (var answerKey in questions[questionKey].answers) {
            if (answerKey == questions[questionKey].correctAnswerKey) {
                questionsCode += '<button onclick="rightAnswer(\'questionX' + questionKey + '\')" > ' + questions[questionKey].answers[answerKey] + '</button> ';    
            }
            
            else {
                questionsCode += '<button onclick="wrongAnswer(\'questionX' + questionKey + '\')" > ' + questions[questionKey].answers[answerKey] + '</button> ';
            }
        }

        questionsCode += '</div>';

    }     

    questionElement.innerHTML = questionsCode;

    highscore += questions.length;

}