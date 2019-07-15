
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
var rightWrong = true || false;
function correct() {
    rightwrong = true;
}
function incorrect(){
    rightwrong = false;
}
// var rightWrong2 = 0 || 1;
// var rightWrong3 = 0 || 1;
// var rightWrong4 = 0 || 1;
// var rightWrong5 = 0 || 1;
//Function that hides the reset button
$("#resetBtn").hide();



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
//Hide the display counts
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
    rightWrong = true || false;
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
       incorrect();

        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was Burger King!");


        //Empty out the gifDiv div
        $("#gifDiv").empty();
        //display matching div for question
        $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
        //Empty out the userChoices div without deleting the divs inside.
        emptyChoices();
        //When clicked, move to the next screen in 3 seconds

        //Stop timer from counting down.
        clearInterval(countdownTimer);
        //+1 to incorrectAnswers
        if (rightWrong === false) {
            incorrectAnswers++;
            setTimeout(questionTwo, 3000)
        }

    });
    //if statements for correct answer
    $("#choice3").click(function () {
        correct();

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("The Whopper is sold by Burger King.")

        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
        emptyChoices();

        clearInterval(countdownTimer);



        if (rightWrong === true) {
            correctAnswers++;
            setTimeout(questionTwo, 3000)
        }
    });
    console.log(incorrectAnswers);
    console.log(correctAnswers);
}

function questionTwo() {
    rightWrong = true || false;
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
       incorrect();

        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was mcdonalds!");


        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
        emptyChoices();


        clearInterval(countdownTimer2);
        if (rightWrong === false) {
            correctAnswers++;
            setTimeout(questionThree, 3000);
        }
    });

    $("#choice1").click(function () {
        correct();

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("The Big mac is sold by mcdonalds.")

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
        emptyChoices();
        clearInterval(countdownTimer2);

        if (rightWrong === true) {
            incorrectAnswers++;
            setTimeout(questionThree, 3000);
        }
    });


    console.log(incorrectAnswers);
    console.log(correctAnswers);
}
function questionThree() {
    rightWrong = true || false;
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
       incorrect();

        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was Taco Bell!");



        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
        emptyChoices();

        clearInterval(countdownTimer3);
        if (rightWrong === false) {
            incorrectAnswers++;
            setTimeout(questionFour, 3000);
        }
    });

    $("#choice4").click(function () {
        i = 5;
        correct();

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("The Triple layer nacho is sold by Taco bell.")

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
        emptyChoices();

        clearInterval(countdownTimer3);
        if (rightWrong === true) {
            correctAnswers++;
            setTimeout(questionFour, 3000)
        }
    });


    console.log(incorrectAnswers);
    console.log(correctAnswers);
}
function questionFour() {
    rightWrong = true || false;
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
       incorrect();
        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was In-N-Out!");


        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />');
        emptyChoices();

        clearInterval(countdownTimer4);
        if (rightWrong === false) {
            incorrectAnswers++;
            setTimeout(questionFive, 3000)
        }
    });

    $("#choice1").click(function () {
        correct();

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("Animal fries are sold by In-N-Out")

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />');
        emptyChoices();

        clearInterval(countdownTimer4);
        if (rightWrong === true) {
            correctAnswers++;
            setTimeout(questionFive, 3000)
        }
    });


    console.log(incorrectAnswers);
    console.log(correctAnswers);
}

function questionFive() {
    rightWrong = true || false;
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
       incorrect();

        $("#startButton").text("Wrong!!");
        $("#triviaQuestion").text("The correct answer was KFC.");

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
        emptyChoices();

        clearInterval(countdownTimer5);
        if (rightWrong === false) {
            incorrectAnswers++;
            setTimeout(endGameScreen, 3000)

        }
    });

    $("#choice3").click(function () {
        correct();

        $("#startButton").text("Right!!");
        $("#triviaQuestion").text("Kentucky fried chicken is sold at KFC.")

        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
        emptyChoices();

        clearInterval(countdownTimer5);
        if (rightWrong === true) {
            correctAnswers++;
            setTimeout(endGameScreen, 3000)
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



//Since I did not use for loops on this early on and already finished more than half, I just continued to try to get it to
//work like this. Everything functions correctly aside from the counts for correct and
//incorrect counts at the end of the game, and I couldn't find a way to get my timers to
// restart once the reset button is pressed.

//If I were to redo this, I would make arrays with the questions and choices, use for loops
//to display the length of the array and have the matching choices display with each question.
//After that, I would make individual timers for each question that stop when a choice is clicked.
//I would then make an array of correct answers and create if else statements that will 
//display the div, right or wrong, and the correct answer for correct or incorrect.
//If the user did not answer in time, I would create time out functions similar to the correct 
//or incorrect, but is activated when the time of the clock is less than or equal to -1.
//Once the loop has finished, push the correct, incorrect, unanswered, and time remaining using .html,
// then create a reset button that restarts the for loop which will then zero out all the 
//scores and loop back through till the end.