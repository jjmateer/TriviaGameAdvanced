//Create Variables
var timeRemaining = 30;
var currentQuestion;
var userChoices;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var correct = true;
var incorrect = false;

//Create reset function
function reset() {

}
//make an onLoad function that dynamically creates a start button
var startBtn = document.getElementById("startBtn");

//Make variables to display the questions
var question1 = "What fast food chain sells the whopper?";
var question2 = "What fast food chain sells the big mac?";
var question3 = "What fast food chain sells the triple layer nacho?";
var question4 = "What fast food chain sells animal fries?";
var question5 = "What fast food chain sells kentucky fried chicken?";


// { answer: "panda express", correct: false }];
//Create variables for each choice and make them true or false for specific questions
var mcdonalds = {Name:"Mcdonald's", q1:false, q2:true, q3:false, q4:false, q5:false};
var carlsJr = {Name:"Carl's Jr.", q1:false, q2:false, q3:false, q4:false, q5:false};
var burgerKing = {Name:"Burger King", q1:true, q2:false, q3:false, q4:false, q5:false};
var tacoBell = {Name:"Taco Bell", q1:false, q2:false, q3:true, q4:false, q5:false};
var inNOut= {Name:"In-n-out", q1:false, q2:false, q3:false, q4:true, q5:false};
var kfc = {Name:"KFC", q1:false, q2:false, q3:false, q4:false, q5:true};
//link questions
var q1 = false || true;
var q2 = false || true;
var q3 = false || true;
var q4 = false || true;
var q5 = false || true;

//Make arrays for each question containing their choices
// var question1Choices = [mcdonalds, carlsJr, burgerKing, tacoBell];
// var question2Choices = [mcdonalds, tacoBell, burgerKing, carlsJr];
// var question3Choices = [burgerKing, carlsJr, mcdonalds, tacoBell];
// var question4Choices = [inNOut, burgerKing, carlsJr, tacoBell];
// var question5Choices = [carlsJr, mcdonalds, kfc, tacoBell];


//Create on click function for the button to start the game
startBtn.addEventListener("click", function () {
});

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
        $("#startButton").empty();
    });

    //display question1 choices
    $("#choice1").text(mcdonalds.Name);
    $("#choice2").text(carlsJr.Name);
    $("#choice3").text(burgerKing.Name);
    $("#choice4").text(tacoBell.Name);

    //if else statements to alert correct or incorrect
    $("#choice1").click(function () {
        //sets value of q1 to determine if the answer is right or wrong
        q1 = false;
        //If q1 is true alert "correct!!", if false alert "incorrect!!"
        if(q1 === true) {
            alert("correct!!")
        } else if(q1 === false) {
            alert("incorrect!!")
        }
    });
    $("#choice2").click(function () {
        q1 = false;

        if(q1 === true) {
            alert("correct!!")
        } else if(q1 === false) {
            alert("incorrect!!")
        }
    });
    $("#choice3").click(function () {
        q1 = true;
        if(q1 === true) {
            alert("correct!!")
        } else if(q1 === false) {
            alert("incorrect!!")
        }
    });
    $("#choice4").click(function () {
        q1 = false;
        if(q1 === true) {
            alert("correct!!")
        } else if(q1 === false) {
            alert("incorrect!!")
        }
    });

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















