
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
var rightWrong = false || true;
//Function that hides the reset button
function emptyResetDiv() {
    $("#resetBtn").hide();
}
emptyResetDiv();

//Create reset function
function reset() {
    $("#startButton").html(startBtn);
    $("#timeRemaining").empty();
    $("#triviaQuestion").empty();
    $("#gifDiv").empty();
    $("#resetButton").empty();
    emptyChoices();
}
//Create clearScreen function
function clearScreen() {
    $("#startButton").empty();
    $("#timeRemaining").empty();
    $("#triviaQuestion").empty();
    emptyChoices();
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

       $("#startButton").text("Time out!!");
       $("#triviaQuestion").text("The correct answer was Burger King!");
  
   //Empty out the gifDiv div
   $("#gifDiv").empty();
   $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
   emptyChoices();
   //When clicked, call clearScreen function in 3 seconds
   setTimeout(questionTwo, 3000)
   //Stop timer from counting down.
   unanswered++;
}
function timeout2() {

    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was Mcdonald's!");

//Empty out the gifDiv div
$("#gifDiv").empty();
$('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
emptyChoices();
//When clicked, call clearScreen function in 3 seconds
setTimeout(questionThree, 3000)
//Stop timer from counting down.
unanswered++;
}
function timeout3() {

    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was Taco Bell!");

//Empty out the gifDiv div
$("#gifDiv").empty();
$('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
emptyChoices();
//When clicked, call clearScreen function in 3 seconds
setTimeout(questionFour, 3000)
//Stop timer from counting down.
unanswered++;
}
function timeout4() {

    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was In-N-Out!");

//Empty out the gifDiv div
$("#gifDiv").empty();
$('#gifDiv').html('<img src="assets/images/inNOutgif.webp" />');
emptyChoices();
//When clicked, call clearScreen function in 3 seconds
setTimeout(questionFive, 3000)
//Stop timer from counting down.
unanswered++;
}
function timeout5() {

    $("#startButton").text("Time out!!");
    $("#triviaQuestion").text("The correct answer was KFC!");

//Empty out the gifDiv div
$("#gifDiv").empty();
$('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
emptyChoices();
//When clicked, call clearScreen function in 3 seconds
setTimeout(endGameScreen, 3000)
//Stop timer from counting down.
unanswered++;
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
            console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;
            //If timed out, stop counting, add 1 to unanswered, make i equal to 5
            if (i <= -1) {
                clearInterval(countdownTimer);
                timeout1();
                unanswered++;
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
            console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer2);
                questionThree();
                timeout2();
                i = 5;
                unanswered++;
            }
        }, 1000);
    }
}

clockRunning3 = false
function startTimer3() {

    if (!clockRunning3) {
        clockRunning3 = true;
        countdownTimer3 = setInterval(function () {
            console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer3);
                questionFour();
                timeout3();
                i = 5;
                unanswered++;
            }
        }, 1000);
    }
}

clockRunning4 = false
function startTimer4() {

    if (!clockRunning4) {
        clockRunning4 = true;
        countdownTimer4 = setInterval(function () {
            console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer4);
                questionFive();
                timeout4()
                i = 5;
                unanswered++;
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
            console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer5);
                endGameScreen();
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
resetBtn.addEventListener("click", function() {
});


//Add on click function for start button
$(startBtn).click(startGame);
 function startGame() {
//Empty out the startButton div
    $("#startButton").empty()
    //Display the first question
    $("#triviaQuestion").text(question1);

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
        rightWrong = false;
         if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Burger King!");
        }
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
        incorrectAnswers++;
    });
    //if statements for correct answer
    $("#choice3").click(function () {
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("The Whopper is sold by Burger King.")
        } 
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
        emptyChoices();
        setTimeout(questionTwo, 3000);
        clearInterval(countdownTimer);
        correctAnswers++;
    });
}
function questionTwo() {
    i = 5;
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").text(question2);
    startTimer2();
   

    $("#choice1").text("Mcdonald's");
    $("#choice2").text("Taco Bell");
    $("#choice3").text("Burger King");
    $("#choice4").text("Carl's Jr.");   
    $("#choice2, #choice3, #choice4").click(function () {
        rightWrong = false;
         if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was mcdonalds!");
        }
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
        emptyChoices();
        setTimeout(questionThree, 3000);

        clearInterval(countdownTimer2);
        incorrectAnswers++;
    });

    $("#choice1").click(function () {
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("The Big mac is sold by mcdonalds.")
        } 
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
        emptyChoices();
        clearInterval(countdownTimer2);
        setTimeout(questionThree, 3000);
        correctAnswers++;
    });

}
function questionThree() {
    i = 5;
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").text(question3);
    startTimer3();
    $("#choice1").text("Burger King");
    $("#choice2").text("Carl's Jr.");
    $("#choice3").text("Mcdonald's");
    $("#choice4").text("Taco Bell");
    $("#choice1, #choice2, #choice3").click(function () {
        rightWrong = false;
         if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Taco Bell!");
        }
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
        emptyChoices();
        setTimeout(questionFour, 3000);
        clearInterval(countdownTimer3);
        incorrectAnswers++;
    });

    $("#choice4").click(function () {
        i = 5;
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("The Triple layer nacho is sold by Taco bell.")
        }
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
        emptyChoices();
        setTimeout(questionFour, 3000);
        clearInterval(countdownTimer3);
        correctAnswers++;
    });

}
function questionFour() {
    i = 5;
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").text(question4);
    startTimer4();
    $("#choice1").text("inNOut.Name");
    $("#choice2").text("Burger King");
    $("#choice3").text("Carl's Jr.");
    $("#choice4").text("Taco Bell");
    $("#choice2, #choice3, #choice4").click(function () {
         if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was In-N-Out!");
        }
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />');
        emptyChoices();
        setTimeout(questionFive, 3000);
        clearInterval(countdownTimer4);
        incorrectAnswers++;
    });

    $("#choice1").click(function () {
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("Animal fries are sold by In-N-Out")
        } 
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />');
        emptyChoices();
        setTimeout(questionFive, 3000);
        clearInterval(countdownTimer4);
        correctAnswers++;
    });

}

function questionFive() {
    i = 5;
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").text(question5);
    startTimer5();

    $("#choice1").text("Carl's Jr.");
    $("#choice2").text("Burger King");
    $("#choice3").text("kfc.Name");
    $("#choice4").text("Taco Bell");
    $("#choice1, #choice3, #choice4").click(function () {
        rightWrong = false;
        if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was KFC.");
        }
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
        emptyChoices();
        setTimeout(endGameScreen, 3000);
        clearInterval(countdownTimer5);
        incorrectAnswers++;
    });

    $("#choice3").click(function () {
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("Kentucky fried chicken is sold at KFC.")
        } 
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
        emptyChoices();
        setTimeout(endGameScreen, 3000);
        clearInterval(countdownTimer5);
        correctAnswers++;
        
        
    });
}
function endGameScreen() {
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").empty();
    $("#choice1").html("Correct answers: " + correctAnswers);
    $("#choice2").html("Incorrect answers " + incorrectAnswers);
    $("#choice3").html("Unanswered: " + unanswered);
    $("#choice4").empty();
    $("#resetBtn").show();
    $("#resetBtn").click(function () {
        $("#resetBtn").hide();
        clearScreen();
        startGame();
        var rightWrong = false || true;
    
    });
}








