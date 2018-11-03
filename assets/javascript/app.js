

var quiz = [{
    question: "Which member of the gang has studied bird law?",
    choices: ["Charlie", "Mac", "Dee", "Dennis"],
    correctAnswer: "A",
}, {
    question: "According to Dennis, what does the D in The 'D.E.N.N.I.S. System' stand for?",
    choices: ["Demand Gratification", "Demonstrate Value", "Display Affection", "Distance Yourself"],
    correctAnswer: "B",
}, {
    question: "AFTER Dennis heard the news about Charlie having cancer, he is leaving Charlie's apartment. Before Dennis leaves, he wanted something from Charlie's apartment. What was it?",
    choices: ["Flour", "Camera", "TV", "A Basketball"],
    correctAnswer: "D",
}, {
    question: "After Dennis heard the news about Charlie having cancer, he is leaving Charlie's apartment. Before Dennis leaves, he wanted something from Charlie's apartment. What was it?",
    choices: ["Flour", "Camera", "TV", "A Basketball"],
    correctAnswer: "D",
}, {
    question: "According to Dennis, what does the D in The 'D.E.N.N.I.S. System' stand for?",
    choices: ["Demand Gratification", "Demonstrate Value", "Display Affection", "Distance Yourself"],
    correctAnswer: "B",
}, ]

var displayQuestion = [];
var questionSelected = [];
var questionNumber = 0;
var choiceIndex = 0;
var intervalId;
var clockRunning = false;
var timeUp = $('#timeUp');
var questionChoice = quiz[0].question;
var choicesDisplayed = quiz[0].choices;
var userAnswer = "";
var congrats = $('#congrats')
var wrong = $('#wrong');
var wrongGuess = 0;
var numberQ = 1
var correctGuess = 0;





window.onload = function () {
    $('#correctImage').hide()
    $('.card-header').text("It's Always Trivia")
    $('#cardText').text('Objective: See how well you know the gang. Answer 50% or more of the questions correctly and you win! You have 20 seconds to answer each question.')
    $('#timeRemaining').hide();


    $("#start").on("click", function () {
        game.start();
        $("#start").hide();
    });
};


var game = {

    time: 20,

    // Reset timer function
    reset: function () {
        game.time = 20;

        
        console.log("reset " + questionNumber);
    },

    showQuestion: function () {
        $('#timeRemaining').show();
        // update HTML with first question and corresponding number
        $('#question').text("Question " + numberQ + ": " + questionChoice);
        // update HTML with answer choices
        $("#ans0").text(choicesDisplayed[0]);
        $("#ans1").text(choicesDisplayed[1]);
        $("#ans2").text(choicesDisplayed[2]);
        $("#ans3").text(choicesDisplayed[3]);
        // increment question number to update html on question change
        numberQ++;
        
    },

    startTimer: function(){
        
        if (!clockRunning) {
        intervalId = setInterval(game.countDown, 1000)
        clockRunning = true;
    }
},

    // Start the timer
    start: function () {

        this.showQuestion();
        $('.answer').on("click", function () {
            // storing user clicked answer in var
            var selection = $(this).data("value");
            // storing correct answer in var
            console.log(".answerClick " + questionNumber);

            var answer = quiz[questionNumber].correctAnswer;
            // if answer is right
            if (selection == answer) {
                correctGuess++;
                // storing questiondiv
                var questionHide = $('#question')
                // storing correctImage img
                var correctImage = $('#correctImage')
                // adding text to empty congrats div
                congrats.text("That's right!")
                // setting the correct image source
                correctImage.attr("src", 'https://media.giphy.com/media/3o7TKGy6TBUPrjtQLC/giphy.gif')
                // showing the congrats div with text in it
                congrats.show();
                // hiding the fullQ div which contains question and answers
                questionHide.hide();
                
                // showing the correct answer image
                correctImage.show();
                game.stopTimer();
                // Delay to next question until 2 seconds has passed
                setTimeout(function () {
                    game.startTimer();

                    // Hiding the congrats image
                    correctImage.hide();
                    // showing the fullQ div after hiding it
                    questionHide.show();
                    // hiding the congrats div after showing it
                    congrats.hide();
                    // increment questionNumber to move to next questions
                    questionNumber++;
                    console.log("current QN " + questionNumber);
                    
                    //push newly incremented questionNumber into index of quiz to go to next question
                    questionChoice = quiz[questionNumber].question;
                    
                    //push questionNumber into index of quiz to go to next answer choices
                    choicesDisplayed = quiz[questionNumber].choices;
                    // reset timer
                    game.reset();
                    // restarts timer
                   // game.start();
                }, 2000) // delays for 2 seconds
            } else {
                wrongGuess++
                // storing fullQ div
                var questionHide = $('#question');
                // storing wrongImage img
                var wrongImage = $('#wrongImage');
                // adding text to empty wrong div
                wrong.text("Wrong! The correct answer was: ")
                // hiding the fullQ div
                questionHide.hide();
                // showing the wrong div with new text in it
                wrong.show();
                
                // showing the image for wrong answer
                //wrongImage.show()
                // setting the wrong image source
                //wrongImage.attr("src", 'https://media.giphy.com/media/131tYQapOkk2qc/giphy.gif');
                game.stopTimer();
                // delay next question until 3 seconds has passed
                setTimeout(function () {
                    game.startTimer();
                    // hide the wrong answer image
                    wrongImage.hide();
                    // hide the wrong answer div
                    wrong.hide();
                    // increment questionNumber to move to next questions
                    questionNumber++;
                    //push questionNumber into index of quiz to go to next question
                    questionChoice = quiz[questionNumber].question;
                    // showing the fullQ after hiding it
                    questionHide.show();
                    //push questionNumber into index of quiz to go to next answer choices
                    choicesDisplayed = quiz[questionNumber].choices;
                    // reset timer
                    game.reset();
                    // restarts timer
                    //game.start()
                }, 3000); // delays for 3 seconds
            }
        })


    },

    stopTimer: function(){
        clearInterval(intervalId);
        clockRunning = false;
    },

    


    // Decrement timer 
    countDown: function () {
        // decrement timer
        game.time--
        // set the timer time as text in timeUp div
        timeUp.text(game.time);

        // Stop the timer when it reaches zero
        if (game.time <= 0) {
            clearInterval(intervalId);
            clockRunning = false;
            timeUp.text("Time's Up! The Correct Answer was: " + quiz[questionNumber].correctAnswer);
            game.stopTimer();
            
            // delay next question until 3 seconds has passed
            setTimeout(function () {
                game.startTimer();

                // increment questionNumber
                questionNumber++;
                //push newly incremented questionNumber into index of quiz to go to next question
                questionChoice = quiz[questionNumber].question;
                //push questionNumber into index of quiz to go to next answer choices
                choicesDisplayed = quiz[questionNumber].choices;
                // reset timer
                game.reset();
                // restarts timer
                //game.start();
            }, 3000) // delays for 3 seconds


        }

    }, 


    

} 
