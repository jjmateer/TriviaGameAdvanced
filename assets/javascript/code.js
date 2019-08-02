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
console.log(questionArray);
//Choices
var choicesArray = new Array();
choicesArray[0] = ["<btn class ='cbtn'>burgerKing</btn>", "<btn class ='cbtn'>carlsJr</btn>", "<btn class ='cbtn'>mcdonalds</btn>", "<btn class ='cbtn'>tacoBell</btn>"];
choicesArray[1] = ["<btn class ='cbtn'>mcdonalds</btn>", "<btn class ='cbtn'>tacoBell</btn>", "<btn class ='cbtn'>burgerKing</btn>", "carlsJr</btn>"];
choicesArray[2] = ["<btn class ='cbtn'>burgerKing</btn>", "<btn class ='cbtn'>carlsJr</btn>", "<btn class ='cbtn'>mcdonalds</btn>", "<btn class ='cbtn'>tacoBell</btn>"];
choicesArray[3] = ["<btn class ='cbtn'>inNOut</btn>", "<btn class ='cbtn'>burgerKing</btn>", "<btn class ='cbtn'>carlsJr</btn>", "<btn class ='cbtn'>tacoBell</btn>"];
choicesArray[4] = ["<btn class ='cbtn'>carlsJr</btn>", "<btn class ='cbtn'>mcdonalds</btn>", "<btn class ='cbtn'>kfc</btn>", "<btn class ='cbtn'>tacoBell</btn>"];

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
// var qGifs = [
//     $('#gifDiv').append('<img src="assets/images/burgerkinggif.webp" />'),
//     $('#gifDiv').append('<img src="assets/images/mcdonaldsgif.webp" />'),
//     $('#gifDiv').append('<img src="assets/images/tacoBellgif.webp" />'),
//     $('#gifDiv').append('<img src="assets/images/inNoutgif.webp" />'),
//     $('#gifDiv').append('<img src="assets/images/kfcgif.webp" />')
// ];

// var qGifs = new Array();

// qGifs[0] = new Image();
// qGifs[0].src = '<img src="assets/images/burgerkinggif.webp" />';

// qGifs[1] = new Image();
// qGifs[1].src = '<img src="assets/images/mcdonaldsgif.webp />';

// qGifs[2] = new Image();
// qGifs[2].src = '<img src="assets/images/tacoBellgif.webp" />';

// qGifs[3] = new Image();
// qGifs[3].src = '<img src="assets/images/inNoutgif.webp" />';

// qGifs[4] = new Image();
// qGifs[4].src = '<img src="assets/images/kfcgif.webp" />';

function nextImage(element) {
    var img = document.getElementById(element);

    for (var i = 0; i < qGifs.length; i++) {
        if (qGifs[i].src == img.src) // << check this
        {
            if (i === qGifs.length) {
                document.getElementById(element).src = qGifs[0].src;
                break;
            }
            document.getElementById(element).src = qGifs[i + 1].src;
            break;
        }
    }
}

//Text displaying the correct answer
var qText = new Array();
qText[0] = "Correct answer: Burger King",
    qText[1] = "Correct answer: Mcdonald's",
    qText[2] = "Correct answer: Taco Bell",
    qText[3] = "Correct answer: In n Out",
    qText[4] = "Correct answer: KFC"

function isTrue() {
    var trueFalse;
    if (rightChoices) {
        trueFalse = true;
    } else {
        trueFalse = false;
    }
}
//Event listeners for buttons
startBtn.addEventListener("click", function () {
});
resetBtn.addEventListener("click", function () {
});

document.getElementById(".cbtn").addEventListener("click", function () {
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
var restartTimer;
//Time out
function timeout() {
    clearInterval(countdownTimer);
    $("#startButton").text("Time out!!");
    $("#userChoices").hide();
    clockRunning = false;
    setTimeout(startTimer, 3000)
    showCorrect();
    $("#triviaQuestion").empty();
    unanswered = unanswered + 1;
}
function nextQ() {

}

function startGame() {
    startTimer();
    displayInfo();
    $("#startButton").hide();

}
function displayInfo() {
    for (var i = 0; i < 5; i++) {
        $("#triviaQuestion").html(questionArray[i]);
        $("#userChoices").html(choicesArray[i]);
    }


    // for (var i = 0; i < 4; i++) {
    //     var choiceBtn = document.createElement("button");
    //     choiceBtn.className = "choiceBtn" + i;
    //     userChoices.appendChild(choiceBtn);
    //     choiceBtn.innerHTML = choicesArray[i][i];

}

function showCorrect() {
    for (var i = 0; i < 5; i++) {
        qText(i);
        qGifs(i);

    }
}
//Start the game
$(startBtn).on("click", function () {
    startGame();

});

$(".cbtn").on("click", function () {
    // if(trueFalse === true) {
    //     alert("yes");
    // } else if(trueFalse === false) {
    //     alert("no");
    // }
    console.log();
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
    console.log(correctAnswers);
}

$("#resetBtn").click(function () {
    clearScreen();
    rightWrong = 0 || 1;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
});