
//Create Variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
//Make variables to display the questions
var question1 = "What fast food chain sells the whopper?";
var question2 = "What fast food chain sells the big mac?";
var question3 = "What fast food chain sells the triple layer nacho?";
var question4 = "What fast food chain sells animal fries?";
var question5 = "What fast food chain sells kentucky fried chicken?";

//variable put in place that is changed to either true or false when a #choice is clicked
var rightWrong = 0 || 1;
// var rightWrong2 = 0 || 1;
// var rightWrong3 = 0 || 1;
// var rightWrong4 = 0 || 1;
// var rightWrong5 = 0 || 1;
//Function that hides the reset button

$("#resetBtn").hide();


$("#countDisplay").hide();
//Create reset function

//Create clearScreen function
function clearScreen() {
    $("#startButton").empty();
    $("#timeRemaining").empty();
    $("#gifDiv").empty();
    $("#triviaQuestion").empty();
    $("#resetButton").hide();
    $("#countDisplay1").hide();
    $("#countDisplay2").hide();
    $("#countDisplay3").hide();
    emptyChoices();
}

function hideCount() {
    $("#countDisplay1").hide();
    $("#countDisplay2").hide();
    $("#countDisplay3").hide();
}
//Create function to empty out the userChoices div without deleting the divs inside.
function emptyChoices() {
    $("#choice1").empty();
    $("#choice2").empty();
    $("#choice3").empty();
    $("#choice4").empty();
}

//Create a timeout function
function timeout1() {
    clearInterval(countdownTimer);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was Burger King!");

    //Empty out the gifDiv div
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
    emptyChoices();
    //When clicked, call clearScreen function in 3 seconds
    setTimeout(questionTwo, 3000)
    //Stop timer from counting down.
    unanswered = unanswered + 1;
}
function timeout2() {
    clearInterval(countdownTimer2);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was Mcdonald's!");

    //Empty out the gifDiv div
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
    emptyChoices();
    //When clicked, call clearScreen function in 3 seconds
    setTimeout(questionThree, 3000)
    //Stop timer from counting down.
    unanswered = unanswered + 1;
}
function timeout3() {
    clearInterval(countdownTimer3);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was Taco Bell!");

    //Empty out the gifDiv div
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
    emptyChoices();
    //When clicked, call clearScreen function in 3 seconds
    setTimeout(questionFour, 3000)
    //Stop timer from counting down.
    unanswered = unanswered + 1;
}
function timeout4() {
    clearInterval(countdownTimer4);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was In-N-Out!");

    //Empty out the gifDiv div
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/inNOutgif.webp" />');
    emptyChoices();
    //When clicked, call clearScreen function in 3 seconds
    setTimeout(questionFive, 3000)
    //Stop timer from counting down.
    unanswered = unanswered + 1;
}
function timeout5() {
    clearInterval(countdownTimer5);
    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was KFC!");

    //Empty out the gifDiv div
    $("#gifDiv").empty();
    $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
    emptyChoices();
    //When clicked, call clearScreen function in 3 seconds
    setTimeout(endGameScreen, 3000)
    //Stop timer from counting down.
    unanswered = unanswered + 1;
}

//make start and reset buttons into variables
var startBtn = document.getElementById("startBtn");
var resetBtn = document.getElementById("resetBtn");

//Put timer into a variable to use in clearinterval for on click functions
var countdownTimer;
var countdownTimer2;
var countdownTimer3;
var countdownTimer4;
var countdownTimer5;
//Determine if timer is running
var clockRunning = false;
//start timer counting down from 30 seconds
var i = 5;

//When timer is less than or equal to -1, it will stop counting and call the clearScreen function.
function startTimer() {
    if (!clockRunning) {
        //Start the timer
        clockRunning = true;
        //subtract 1 from i every second and display to screen
        countdownTimer = setInterval(function () {
            // console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;
            //If timed out, stop counting, add 1 to unanswered, make i equal to 5
            if (i <= -1) {
                clearInterval(countdownTimer);
                timeout1();
                i = 5;
            }
        }, 1000);
    }
}


clockRunning2 = false
function startTimer2() {

    if (!clockRunning2) {
        clockRunning2 = true;
        countdownTimer2 = setInterval(function () {
            // console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer2);

                timeout2();
                i = 5;
            }
        }, 1000);
    }
}

clockRunning3 = false
function startTimer3() {

    if (!clockRunning3) {
        clockRunning3 = true;
        countdownTimer3 = setInterval(function () {
            // console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer3);

                timeout3();
                i = 5;
            }
        }, 1000);
    }
}

clockRunning4 = false
function startTimer4() {

    if (!clockRunning4) {
        clockRunning4 = true;
        countdownTimer4 = setInterval(function () {
            // console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer4);

                timeout4()
                i = 5;
            }
        }, 1000);
    }
}

clockRunning5 = false
function startTimer5() {
    i = 5;
    if (!clockRunning5) {
        clockRunning5 = true;
        countdownTimer5 = setInterval(function () {
            // console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer5);
                timeout5();
                i = 5;
            }
        }, 1000);
    }
}


// Question 1 choices = burgerKing, carlsJr, mcdonalds, tacoBell
// Question 2 choices = mcdonalds, tacoBell, burgerKing, carlsJr
// Question 3 choices = burgerKing, carlsJr, mcdonalds, tacoBell
// Question 4 choices = inNOut, burgerKing, carlsJr, tacoBell
// Question 5 choices = carlsJr, mcdonalds, kfc, tacoBell

//Add an event listener to the start button and reset button
startBtn.addEventListener("click", function () {
});
resetBtn.addEventListener("click", function () {
});


//Add on click function for start button
$(startBtn).click(startGame);
function startGame() {
    //Empty out the startButton div
    $("#startButton").empty()
    //Display the first question
    $("#triviaQuestion").text(question1);

    hideCount();

    //Call function to start timer
    startTimer();
    //display question1 choices
    $("#choice1").text("Mcdonald's");
    $("#choice2").text("Carl's Jr.");
    $("#choice3").text("Burger King");
    $("#choice4").text("Taco Bell");

    //if statements for incorrect answer
    $("#choice1, #choice2, #choice4").click(function () {
        //sets value of rightWrong to determine if the answer is right or wrong
        //If rightWrong is true alert "correct!!", if false alert "incorrect!!"
        rightWrong = 0;

        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was Burger King!");


        //Empty out the gifDiv div
        $("#gifDiv").empty();
        //display matching div for question
        $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
        //Empty out the userChoices div without deleting the divs inside.
        emptyChoices();
        //When clicked, move to the next screen in 3 seconds
        setTimeout(questionTwo, 3000)
        //Stop timer from counting down.
        clearInterval(countdownTimer);
        //+1 to incorrectAnswers
        if (rightWrong === 0) {
            incorrectAnswers = incorrectAnswers + 1;
        }

    });
    //if statements for correct answer
    $("#choice3").click(function () {
        rightWrong = 1;

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("The Whopper is sold by Burger King.")

        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
        emptyChoices();
        setTimeout(questionTwo, 3000);
        clearInterval(countdownTimer);



     if (rightWrong === 1) {
        correctAnswers = correctAnswers + 1;
    }
});
    console.log(incorrectAnswers);
    console.log(correctAnswers);
}

function questionTwo() {
    i = 5;
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").text(question2);
    startTimer2();
    hideCount();

    $("#choice1").text("Mcdonald's");
    $("#choice2").text("Taco Bell");
    $("#choice3").text("Burger King");
    $("#choice4").text("Carl's Jr.");
    $("#choice2, #choice3, #choice4").click(function () {
        rightWrong = 0;

        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was mcdonalds!");


        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
        emptyChoices();
        setTimeout(questionThree, 3000);

        clearInterval(countdownTimer2);
        if (rightWrong === 1) {
            correctAnswers = correctAnswers + 1;
        }
    });

    $("#choice1").click(function () {
        rightWrong = 1;

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("The Big mac is sold by mcdonalds.")

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
        emptyChoices();
        clearInterval(countdownTimer2);
        setTimeout(questionThree, 3000);
        if (rightWrong === 0) {
            incorrectAnswers = incorrectAnswers + 1;
        }
    });


    console.log(incorrectAnswers);
    console.log(correctAnswers);
}
function questionThree() {

    i = 5;
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").text(question3);
    startTimer3();
    hideCount();
    $("#choice1").text("Burger King");
    $("#choice2").text("Carl's Jr.");
    $("#choice3").text("Mcdonald's");
    $("#choice4").text("Taco Bell");
    $("#choice1, #choice2, #choice3").click(function () {
        rightWrong = 0;

        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was Taco Bell!");



        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
        emptyChoices();
        setTimeout(questionFour, 3000);
        clearInterval(countdownTimer3);
        if (rightWrong === 0) {
            incorrectAnswers = incorrectAnswers + 1;
        }
    });

    $("#choice4").click(function () {
        i = 5;
        rightWrong = 1;

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("The Triple layer nacho is sold by Taco bell.")

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
        emptyChoices();
        setTimeout(questionFour, 3000);
        clearInterval(countdownTimer3);
        if (rightWrong === 1) {
            correctAnswers = correctAnswers + 1;
        }
    });


    console.log(incorrectAnswers);
    console.log(correctAnswers);
}
function questionFour() {

    i = 5;
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").text(question4);
    startTimer4();
    hideCount();
    $("#choice1").text("In - N - Out");
    $("#choice2").text("Burger King");
    $("#choice3").text("Carl's Jr.");
    $("#choice4").text("Taco Bell");
    $("#choice2, #choice3, #choice4").click(function () {
        rightWrong = 0;
        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was In-N-Out!");


        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />');
        emptyChoices();
        setTimeout(questionFive, 3000);
        clearInterval(countdownTimer4);
        if (rightWrong === 0) {
            incorrectAnswers = incorrectAnswers + 1;
        }
    });

    $("#choice1").click(function () {
        rightWrong = 1;

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("Animal fries are sold by In-N-Out")

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />');
        emptyChoices();
        setTimeout(questionFive, 3000);
        clearInterval(countdownTimer4);
        if (rightWrong === 1) {
            correctAnswers = correctAnswers + 1;
        }
    });


    console.log(incorrectAnswers);
    console.log(correctAnswers);
}

function questionFive() {

    i = 5;
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").text(question5);
    startTimer5();
    hideCount();
    $("#choice1").text("Carl's Jr.");
    $("#choice2").text("Burger King");
    $("#choice3").text("KFC");
    $("#choice4").text("Taco Bell");
    $("#choice1, #choice2, #choice4").click(function () {
        rightWrong = 0;

        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was KFC.");

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
        emptyChoices();
        setTimeout(endGameScreen, 3000);
        clearInterval(countdownTimer5);
        if (rightWrong === 0) {
            incorrectAnswers = incorrectAnswers + 1;
        }
    });

    $("#choice3").click(function () {
        rightWrong = 1;

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("Kentucky fried chicken is sold at KFC.")

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
        emptyChoices();
        setTimeout(endGameScreen, 3000);
        clearInterval(countdownTimer5);
        if (rightWrong === 1) {
            correctAnswers = correctAnswers + 1;
        }


    });
  

    console.log(incorrectAnswers);
    console.log(correctAnswers);
}
function endGameScreen() {
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").empty();
    $("#countDisplay1").show();
    $("#countDisplay2").show();
    $("#countDisplay3").show();
    $("#countDisplay1").text("Correct answers: " + correctAnswers);
    $("#countDisplay2").text("Incorrect answers: " + incorrectAnswers);
    $("#countDisplay3").text("Unanswered: " + unanswered);
    $("#choice1").empty();
    $("#choice2").empty();
    $("#choice3").empty();
    $("#choice4").empty();
    $("#resetBtn").show();
    $("#countDisplay").show();
    console.log(correctAnswers);
}

$("#resetBtn").click(function () {
    clearScreen();
    startGame();
    rightWrong = 0 || 1;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
});


