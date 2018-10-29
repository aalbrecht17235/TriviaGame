var displayQuestion = []


var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

var jumbo = $('#hero');

var quiz = [{
    question: "the answer is A",
    choices: ["A", "B", "C", "D"],
    correctAnswer: choices[0]
}, {
    question: "the answer is B",
    choices: ["B", "B", "B", "B"],
    correctAnswer: choices[1]
}, ]

// loop through quiz and push the questions and choices to var
for (var i = 0; i < quiz.length; i++) {
    displayQuestion.push(quiz[i]);
}

// selecting a random question and choices and storing them in questionChoice var
var questionChoice = displayQuestion[Math.floor(Math.random() * displayQuestion.length)];

console.log(questionChoice);
console.log(displayQuestion);

window.onload = function () {

    $("#start").on("click", function () {
        game.start();
    });
};

var game = {

    time: 5,

    // Reset timer with each new question
    reset: function () {},

    // Start the timer
    start: function () {
        // push a random question to question div
        $('#question').text("question: " + questionChoice.question);
        // push choices of random question to choices div
        $("#choices").text("choices: " + questionChoice.choices);
        if (!clockRunning) {
            intervalId = setInterval(game.countDown, 1000)
            clockRunning = true;
        }

    },

    // Decrement timer 
    countDown: function () {
        game.time--
        jumbo.text(game.time);
        console.log(game.time);

        // Stop the timer when it reaches zero
        if (game.time == 0) {
            clearInterval(intervalId);
            clockRunning = false;
            jumbo.text("next");
        }

    },



}