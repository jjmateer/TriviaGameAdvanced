var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var clockRunning = false;
var rightWrong = true || false;

//Questions
const questionArray = [
    q1 = "What fast food chain sells the whopper?",
    q2 = "What fast food chain sells the big mac?",
    q3 = "What fast food chain sells the triple layer nacho?",
    q4 = "What fast food chain sells animal fries?",
    q5 = "What fast food chain sells kentucky fried chicken?"
];

q1 = false;
q2 = false;
q3 = false;
q4 = false;
q5 = false;
console.log(questionArray);
//Choices

var choicesArray = new Array();
choicesArray[0] = ["<btn id='r' class='cbtn'>burgerKing</btn>", "<btn class='cbtn'>carlsJr</btn>", "<btn class='cbtn'>mcdonalds</btn>", "<btn class='cbtn'>tacoBell</btn>"];
choicesArray[1] = ["<btn id='r' class='cbtn2'>mcdonalds</btn>", "<btn class='cbtn2'>tacoBell</btn>", "<btn class='cbtn2'>burgerKing</btn>", "<btn class='cbtn2'>carlsJr</btn>"];
choicesArray[2] = ["<btn class='cbtn3'>burgerKing</btn>", "<btn class='cbtn3'>carlsJr</btn>", "<btn class='cbtn3'>mcdonalds</btn>", "<btn id='r' class='cbtn3'>tacoBell</btn>"];
choicesArray[3] = ["<btn id='r' class='cbtn4'>inNOut</btn>", "<btn class='cbtn4'>burgerKing</btn>", "<btn class='cbtn4'>carlsJr</btn>", "<btn class='cbtn4'>tacoBell</btn>"];
choicesArray[4] = ["<btn class='cbtn5'>carlsJr</btn>", "<btn class='cbtn5'>mcdonalds</btn>", "<btn id='r' class='cbtn5'>kfc</btn>", "<btn class='cbtn5'>tacoBell</btn>"];

// Correct  choices
var rightChoices = [
    choicesArray[0][0],
    choicesArray[1][0],
    choicesArray[2][3],
    choicesArray[3][0],
    choicesArray[4][2]
];

console.log(choicesArray);
//Gifs for each correct answer
var qGifs = [
    $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />'),
    $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />'),
    $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />'),
    $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />'),
    $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />')
];


//Text displaying the correct answer
var qText = [
    "Correct answer: Burger King",
    "Correct answer: Mcdonald's",
    "Correct answer: Taco Bell",
    "Correct answer: In n Out",
    "Correct answer: KFC"
];
//Event listeners for buttons
startBtn.addEventListener("click", function () {
});
resetBtn.addEventListener("click", function () {
});

//Hide resetBtn on load
$("#resetBtn").hide();
$("#countDisplay").hide();
$("#gifDiv").empty();
//Clear all divs
function clearScreen() {
    $("#startButton").empty();
    $("#timeRemaining").empty();
    $("#gifDiv").empty();
    $("#triviaQuestion").empty();
    $("#resetButton").hide();
    $("#userChoices").empty();
}
//Start the timer
function startTimer() {
    if (!clockRunning) {
        i = 10;
        clockRunning = true;
        countdownTimer = setInterval(function () {
            $("#timeRemaining").html("Time remaining: " + i);
            i = i - 1;
            if (i <= -1) {
                timeout();
                i = 10;
            }
        }, 1000);
    }
}
function timeoutFunction() {
    $("#startButton").text("Time out!!");
    $("#userChoices").empty();
    setTimeout(clearScreen, 3000)
    setTimeout(nextQ, 3500)
    setTimeout(startTimer, 3500)
    unanswered++;
    showCorrect();
    clearInterval(countdownTimer);
    clockRunning = false;
    
}
//Time out
function timeout() {

    if (i <= -1 && q1 === true) {
        timeoutFunction();
    }
    if (i <= -1 && q2 === true) {
        timeoutFunction();
    }
    if (i <= -1 && q3 === true) {
        timeoutFunction();
    }
    if (i <= -1 && q4 === true) {
        timeoutFunction();
    }
    if (q5 === true) {
        endGameScreen();
        $("#timeRemaining").empty();
    }
}
q1 = true;
function startGame() {
    startTimer();
    renderQuestion();
    $("#startButton").empty();
    renderButtons();

}
//Display question
function renderQuestion() {
    if (q1 === true) {
        $("#triviaQuestion").html(questionArray[0]);
    }
    if (q2 === true) {
        $("#triviaQuestion").html(questionArray[1]);
    }
    if (q3 === true) {
        $("#triviaQuestion").html(questionArray[2]);
    }
    if (q4 === true) {
        $("#triviaQuestion").html(questionArray[3]);
    }
    if (q5 === true) {
        $("#triviaQuestion").html(questionArray[4]);
    }
}
//Display next question
function nextQ() {
    renderQuestion();
    renderButtons();

}
//Show div and text for correct answer
function showCorrect() {
    if (q1 === true) {
        $('#gifDiv').html('<img src="assets/images/burgerkinggif.webp" />')
        $("#triviaQuestion").html(qText[0])
    }
    if (q2 === true) {
        $('#gifDiv').html('<img src="assets/images/mcdonaldsgif.webp" />')
        $("#triviaQuestion").html(qText[1])
    }
    if (q3 === true) {
        $('#gifDiv').html('<img src="assets/images/tacoBellgif.webp" />')
        $("#triviaQuestion").html(qText[2])
    }
    if (q4 === true) {
        $('#gifDiv').html('<img src="assets/images/inNoutgif.webp" />')
        $("#triviaQuestion").html(qText[3])
    }
    if (q5 === true) {
        $('#gifDiv').html('<img src="assets/images/kfcgif.webp" />')
        $("#triviaQuestion").html(qText[4])
    }
}
//Append corresponding buttons to page
function renderButtons() {

    for (var i = 0; i < 4; i++) {
        if (q1 === true) {
            $("#userChoices").append(choicesArray[0][i])
        }
        if (q2 === true) {
            $("#userChoices").append(choicesArray[1][i])
        }
        if (q3 === true) {
            $("#userChoices").append(choicesArray[2][i])
        }
        if (q4 === true) {
            $("#userChoices").append(choicesArray[3][i])
        }
        if (q5 === true) {
            $("#userChoices").append(choicesArray[4][i])
        }
    }
    $("#r").on('click', function () {
        console.log("correct: " + correctAnswers)
        zeroOne = 1;
        if(zeroOne === 1){
            correctAnswers++;
        }
        console.log("01:" + zeroOne)
    });
    var zeroOne = 0;
    if(zeroOne)
    var rightChoices = [
        choicesArray[0][0],
        choicesArray[1][0],
        choicesArray[2][3],
        choicesArray[3][0],
        choicesArray[4][2]
    ];
    $(rightChoices).on('click', function() {
        correctAnswers++;
    });

    $(".cbtn").on('click', function () {
        console.log('clicked');
        clearInterval(countdownTimer);
        clockRunning = false;
        showCorrect();
        q1 = false;
        q2 = true;
        $("#userChoices").empty();
        setTimeout(clearScreen, 3000)
        setTimeout(nextQ, 3500)
        setTimeout(startTimer, 3500)
        console.log("Incorrect:" + incorrectAnswers);
    });
    $(".cbtn2").on('click', function () {
        console.log('clicked');
        clearInterval(countdownTimer);
        clockRunning = false;
        showCorrect();
        q2 = false;
        q3 = true;
        $("#userChoices").empty();
        setTimeout(clearScreen, 3000)
        setTimeout(nextQ, 3500)
        setTimeout(startTimer, 3500)
        console.log("Incorrect:" + incorrectAnswers);
    });
    $(".cbtn3").on('click', function () {
        console.log('clicked');
        clearInterval(countdownTimer);
        clockRunning = false;
        showCorrect();
        q3 = false;
        q4 = true;
        $("#userChoices").empty();
        setTimeout(clearScreen, 3000)
        setTimeout(nextQ, 3500)
        setTimeout(startTimer, 3500)
        console.log("Incorrect:" + incorrectAnswers);

    });
    $(".cbtn4").on('click', function () {
        console.log('clicked');
        clearInterval(countdownTimer);
        clockRunning = false;
        showCorrect();
        q4 = false;
        q5 = true;
        $("#userChoices").empty();
        setTimeout(clearScreen, 3000)
        setTimeout(nextQ, 3500)
        setTimeout(startTimer, 3500)
        console.log("Incorrect:" + incorrectAnswers);
    });
    $(".cbtn5").on('click', function () {
        console.log('clicked');
        clearInterval(countdownTimer);
        clockRunning = false;
        showCorrect();
        q5 = true;
        $("#userChoices").empty();
        console.log("Incorrect:" + incorrectAnswers);
        setTimeout(endGameScreen, 3000)
    });

}
//Start the game
$(startBtn).on("click", function () {
    startGame();
});




function endGameScreen() {
    $("#gifDiv").empty();
    $("#startButton").empty();
    $("#triviaQuestion").empty();
    $("#countDisplay").show();
    $("#countDisplay").text("Correct answers: " + correctAnswers + "Incorrect answers: " + incorrectAnswers +
        "Unanswered: " + unanswered);
    $("#resetBtn").show();
    $("#countDisplay").show();
    $("#timeRemaining").hide();
    console.log(correctAnswers);
}

$("#resetBtn").click(function () {
    clearScreen();
    rightWrong = 0 || 1;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
});