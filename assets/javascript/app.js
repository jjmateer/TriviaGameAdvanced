//Create Variables
var timeRemaining = 30;
var currentQuestion;
var userChoices;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

//Create reset function
function reset() {

}
//make an onLoad function that dynamically creates a start button
var startBtn = document.getElementById("startBtn");

//Make variables for the questions
var question1 = "What fast food chain sells the whopper?"
var question2 = "What fast food chain sells the big mac?"
var question3 = "What fast food chain sells the triple layer nacho?"
var question4 = "What fast food chain sells animal fries?"
var question5 = "What fast food chain sells kentucky fried chicken?"

1


//Make arrays for each question containing their choices
var question1Choices = ["Mcdonald's", "Carl's Jr.", "Burger King", "Taco bell", { answer: "panda express", correct: false }];
var question2Choices = ["Mcdonald's", "Taco bell", "Burger King", "Carl's Jr."];
var question3Choices = ["Burger King", "Carl's Jr.", "Mcdonald's", "Taco bell"];
var question4Choices = ["In-n-out", "Burger King", "Carl's Jr.", "Taco bell"];
var question5Choices = ["Carl's Jr.", "Mcdonald's", "KFC", "Taco bell"];

//Make variables for correct answers
var correctAnswer1 = question1Choices[2];
var correctAnswer2 = question2Choices[0];
var correctAnswer3 = question3Choices[3];
var correctAnswer4 = question4Choices[0];
var correctAnswer5 = question5Choices[2];
//Create on click function for the button to start the game
startBtn.addEventListener("click", function () {
    

});
//start timer counting down from 30 seconds



//display the first question to triviaQuestion div
$(startBtn).click(function () {
    $("#triviaQuestion").html(question1);
    //start timer counting down from 30 seconds
    var i = 30;
    $("#startButton").click(function (e) {
        setInterval(function () {
            $("#timeRemaining").html("Time remaining: " + i);
            i--;
        }, 1000);
        
    });
     
    // $("#resetButton").click(function (e) {
    //     i = 30;
    // });

    //display question1 choices
    $("#userChoices").html(question1Choices);
    

});


// When user choice is clicked, 



 //if guessed correctly

 //stop timer and display how much time is left

    //tell the user they are correct

    //display the gif of the correct answer

//if guessed incorrectly

//stop timer and display how much time is left

    //tell the user they are incorrect

    //display the correct answer with gif underneath















