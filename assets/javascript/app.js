//Create Variables
var timeRemaining = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
//Make variables to display the questions
var question1 = "What fast food chain sells the whopper?";
var question2 = "What fast food chain sells the big mac?";
var question3 = "What fast food chain sells the triple layer nacho?";
var question4 = "What fast food chain sells animal fries?";
var question5 = "What fast food chain sells kentucky fried chicken?";
//Create variables for all of the choices with name properties and boolean values for the variables rightWrong-5. 
var mcdonalds = { Name: "Mcdonald's" };
var carlsJr = { Name: "Carl's Jr." };
var burgerKing = { Name: "Burger King" };
var tacoBell = { Name: "Taco Bell" };
var inNOut = { Name: "In-n-out" };
var kfc = { Name: "KFC" };


var rightWrong = false || true;
function makeResetButton() {
$('<button/>', {
    text: "Reset", 
    id: 'resetBtn',
    click: function () { reset();; }
});
}
//Create reset function
function reset() {
    $("#startButton").html(startBtn);
    $("#timeRemaining").empty();
    $("#triviaQuestion").empty();
    $("#userChoices").empty();
}
//Create clearScreen function
function clearScreen() {
    $("#startButton").empty();
    $("#timeRemaining").empty();
    $("#triviaQuestion").empty();
    emptyChoices();
}
function emptyChoices() {
    $("#choice1").empty();
    $("#choice2").empty();
    $("#choice3").empty();
    $("#choice4").empty();
}


//Create a timeout function
function timeout() {
}
//make an onLoad function that dynamically creates a start button
var startBtn = document.getElementById("startBtn");

//Put timer into a variable to use in clearinterval for on click functions
var countdownTimer;
var countdownTimer2;
//Determine if timer is running
var clockRunning = false;
//start timer counting down from 30 seconds
var i = 30;
//When timer is less than or equal to -1, it will stop counting and call the clearScreen function.
function startTimer() {
    if (!clockRunning) {
        clockRunning = true;
        countdownTimer = setInterval(function () {
            console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer);
                questionTwo();
                unanswered++;
                i = 30;
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
                i = 30;
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
                i = 30;
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
                clearInterval(countdownTimer2);
                questionFive();
                i = 30;
                unanswered++;
            }
        }, 1000);
    }
}

clockRunning5 = false
function startTimer5() {

    if (!clockRunning5) {
        clockRunning5 = true;
        countdownTimer5 = setInterval(function () {
            console.log(i);
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;

            if (i <= -1) {
                clearInterval(countdownTimer2);
                endGameScreen();
                i = 30;
            }
        }, 1000);
    }
}


// Question 1 choices = burgerKing, carlsJr, mcdonalds, tacoBell
// Question 2 choices = mcdonalds, tacoBell, burgerKing, carlsJr
// Question 3 choices = burgerKing, carlsJr, mcdonalds, tacoBell
// Question 4 choices = inNOut, burgerKing, carlsJr, tacoBell
// Question 5 choices = carlsJr, mcdonalds, kfc, tacoBell

//Add an event listener to the start button
startBtn.addEventListener("click", function () {
});

//Add on click function for start button
$(startBtn).click(function () {

    $("#startButton").empty()
    //Display the first question
    $("#triviaQuestion").text(question1);

    //Call function to start timer
    startTimer();
    //display question1 choices
    $("#choice1").text("mcdonalds.Name");
    $("#choice2").text("carlsJr.Name");
    $("#choice3").text("burgerKing.Name");
    $("#choice4").text("tacoBell.Name");

    //if else statements to alert correct or incorrect
    $("#choice1, #choice2, #choice4").click(function () {
        //sets value of rightWrong to determine if the answer is right or wrong
        //If rightWrong is true alert "correct!!", if false alert "incorrect!!"
        rightWrong = false;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Burger King!");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
        emptyChoices();
        //When clicked, call clearScreen function in 3 seconds
        setTimeout(questionTwo, 3000)
        //Stop timer from counting down.
        clearInterval(countdownTimer);
        incorrectAnswers++;
    });

    $("#choice3").click(function () {
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("The Whopper is sold by Burger King.")
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Burger King!");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />');
        emptyChoices();
        //Go to question two in 3 seconds.
        setTimeout(questionTwo, 3000);
        clearInterval(countdownTimer);
        correctAnswers++;
    });
});
function questionTwo() {
    i = 30;
    $("#gifDiv").empty();
    $("#startButton").empty();
    //Display the second question
    $("#triviaQuestion").text(question2);
    startTimer2();
    //display question2 choices

    $("#choice1").text("mcdonalds.Name");
    $("#choice2").text("tacoBell.Name");
    $("#choice3").text("burgerKing.Name");
    $("#choice4").text("carlsJr.Name");
    //if else statements to alert correct or incorrect
    $("#choice2, #choice3, #choice4").click(function () {
        //sets value of rightWrong to determine if the answer is right or wrong
        //If rightWrong is true alert "correct!!", if false alert "incorrect!!"
        rightWrong = false;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("The Big mac is sold by mcdonalds.")
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was mcdonalds!");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
        emptyChoices();
        //When clicked, call clearScreen function in 3 seconds
        setTimeout(questionThree, 3000);

        //Stop timer from counting down.
        clearInterval(countdownTimer2);
        incorrectAnswers++;
    });

    $("#choice1").click(function () {
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("The Big mac is sold by mcdonalds.")
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was mcdonalds!");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />');
        emptyChoices();
        clearInterval(countdownTimer2);
        setTimeout(questionThree, 3000);
        correctAnswers++;
    });

}
function questionThree() {
    i = 30;
    $("#gifDiv").empty();
    $("#startButton").empty();
    //Display the second question
    $("#triviaQuestion").text(question3);
    startTimer3();
    //display question3 choices

    $("#choice1").text("burgerKing.Name");
    $("#choice2").text("carlsJr.Name");
    $("#choice3").text("mcdonalds.Name");
    $("#choice4").text("tacoBell.Name");
    //if else statements to alert correct or incorrect
    $("#choice1, #choice2, #choice3").click(function () {
        //sets value of rightWrong to determine if the answer is right or wrong
        //If rightWrong is true alert "correct!!", if false alert "incorrect!!"
        rightWrong = false;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("The Triple layer nacho is sold by Taco bell.")
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Taco Bell!");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
        emptyChoices();
        //When clicked, call clearScreen function in 3 seconds
        setTimeout(questionFour, 3000);

        //Stop timer from counting down.
        clearInterval(countdownTimer3);
        incorrectAnswers++;
    });

    $("#choice4").click(function () {
        i = 30;
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("The Triple layer nacho is sold by Taco bell.")
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Taco Bell!");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />');
        emptyChoices();
        setTimeout(questionFour, 3000);
        clearInterval(countdownTimer3);
        correctAnswers++;
    });

}
function questionFour() {
    i = 30;
    $("#gifDiv").empty();
    $("#startButton").empty();
    //Display the second question
    $("#triviaQuestion").text(question4);
    startTimer4();
    //display question4 choices

    $("#choice1").text("inNOut.Name");
    $("#choice2").text("burgerKing.Name");
    $("#choice3").text("carlsJr.Name");
    $("#choice4").text("tacoBell.Name");
    //if else statements to alert correct or incorrect
    $("#choice2, #choice3, #choice4").click(function () {
        //sets value of rightWrong to determine if the answer is right or wrong
        //If rightWrong is true alert "correct!!", if false alert "incorrect!!"
        rightWrong = false;
        if (rightWrong === true) {
            $("#triviaQuestion").text("T")
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was In-N-Out!");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />');
        emptyChoices();
        //When clicked, call clearScreen function in 3 seconds
        setTimeout(questionFive, 3000);
        //Stop timer from counting down.
        clearInterval(countdownTimer4);
        incorrectAnswers++;
    });

    $("#choice1").click(function () {
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("Animal fries are sold by In-N-Out")
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was In-N-Out!");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />');
        emptyChoices();
        setTimeout(questionFive, 3000);
        clearInterval(countdownTimer4);
        correctAnswers++;
    });

}

function questionFive() {
    i = 30;
    $("#gifDiv").empty();
    $("#startButton").empty();
    //Display the second question
    $("#triviaQuestion").text(question5);
    startTimer5();
    //display question5 choices

    $("#choice1").text("carlsJr.Name");
    $("#choice2").text("burgerKing.Name");
    $("#choice3").text("kfc.Name");
    $("#choice4").text("tacoBell.Name");
    //if else statements to alert correct or incorrect
    $("#choice1, #choice3, #choice4").click(function () {
        //sets value of rightWrong to determine if the answer is right or wrong
        //If rightWrong is true alert "correct!!", if false alert "incorrect!!"
        rightWrong = false;
        if (rightWrong === true) {
            $("#triviaQuestion").text("T")
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was KFC.");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
        emptyChoices();
        //When clicked, call clearScreen function in 3 seconds
        setTimeout(endGameScreen, 3000);
        //Stop timer from counting down.
        clearInterval(countdownTimer5);
        incorrectAnswers++;
    });

    $("#choice3").click(function () {
        rightWrong = true;
        if (rightWrong === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("Kentucky fried chicken is sold at KFC.")
        } else if (rightWrong === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer is KFC.");
        }
        //Empty out the gifDiv div
        $("#gifDiv").empty();
        $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />');
        emptyChoices();
        setTimeout(endGameScreen, 3000);
        clearInterval(countdownTimer5);
        correctAnswers++;
        makeResetButton();
        
    });
}
function endGameScreen() {
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").empty();
    $("#choice1").html("Correct answers: " + correctAnswers);
    $("#choice2").html("Incorrect answers " + incorrectAnswers);
    $("#choice3").html("Unanswered: " + unanswered);
    $("choice4").html(resetBtn)
}








