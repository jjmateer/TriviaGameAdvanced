//Create Variables
var timeRemaining = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

//Create reset function
function reset() {
    $("#startButton").empty();
    $("#timeRemaining").empty();
    $("#triviaQuestion").empty();
    $("#userChoices").empty();
}

//Create a timeout function
function timeout() {
}


//make an onLoad function that dynamically creates a start button
var startBtn = document.getElementById("startBtn");

//Make variables to display the questions
var question1 = "What fast food chain sells the whopper?";
var question2 = "What fast food chain sells the big mac?";
var question3 = "What fast food chain sells the triple layer nacho?";
var question4 = "What fast food chain sells animal fries?";
var question5 = "What fast food chain sells kentucky fried chicken?";



//Create variables for all of the choices with name properties and boolean values for the variables q1-5. 
var mcdonalds = { Name: "Mcdonald's" };
var carlsJr = { Name: "Carl's Jr." };
var burgerKing = { Name: "Burger King" };
var tacoBell = { Name: "Taco Bell" };
var inNOut = { Name: "In-n-out" };
var kfc = { Name: "KFC" };
//link questions
var q1 = false || true;
var q2 = false || true;
var q3 = false || true;
var q4 = false || true;
var q5 = false || true;


// Question 1 choices = mcdonalds, carlsJr, burgerKing, tacoBell
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
    //Put timer into a variable to use in clearinterval for on click functions
    var countdownTimer;
    //Determine if timer is running
    var clockRunning = false;
    //start timer counting down from 30 seconds
    var i = 30;
    //When timer is less than or equal to -1, it will stop counting and call the reset function.
    function startTimer() {
        if (!clockRunning) {
            clockRunning = true;
            countdownTimer = setInterval(function () {
                console.log(i);
                $("#timeRemaining").html("Time remaining: " + i);
                i = i - 1;

                if (i <= -1) {
                    clearInterval(countdownTimer);
                    reset();
                }
            }, 1000);
        }
    }
    //Call function to start timer
    startTimer();
    //display question1 choices
    $("#choice1").text(mcdonalds.Name);
    $("#choice2").text(carlsJr.Name);
    $("#choice3").text(burgerKing.Name);
    $("#choice4").text(tacoBell.Name);

    //if else statements to alert correct or incorrect
    $("#choice1").click(function () {
        //sets value of q1 to determine if the answer is right or wrong
        //If q1 is true alert "correct!!", if false alert "incorrect!!"
        q1 = false;
        if (q1 === true) {
            $("#startButton").text("Right!!");
        } else if (q1 === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Burger King!");
        }
        //Empty out the userChoices div
        $("#userChoices").empty();
        $('#userChoices').prepend('<img src="assets/images/burgerkinggif.webp" />');
        //When clicked, call reset function in 3 seconds
        setTimeout(reset, 3000);
        //Stop timer from counting down.
        clearInterval(countdownTimer);



    });
    $("#choice2").click(function () {
        q1 = false;

        if (q1 === true) {
            $("#startButton").text("Right!!");
        } else if (q1 === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Burger King!");
        }
        //Empty out the userChoices div
        $("#userChoices").empty();
        $('#userChoices').prepend('<img src="assets/images/burgerkinggif.webp" />');
        setTimeout(reset, 3000);
        clearInterval(countdownTimer);

    });
    $("#choice3").click(function () {
        q1 = true;
        if (q1 === true) {
            $("#startButton").text("Right!!");
            $("#triviaQuestion").text("The Whopper is sold by Burger King.")
        } else if (q1 === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Burger King!");
        }
        //Empty out the userChoices div
        $("#userChoices").empty();
        $('#userChoices').prepend('<img src="assets/images/burgerkinggif.webp" />');
        setTimeout(reset, 3000);
        clearInterval(countdownTimer);

    });
    $("#choice4").click(function () {
        q1 = false;
        if (q1 === true) {
            $("#startButton").text("Right!!");
        } else if (q1 === false) {
            $("#startButton").text("Wrong!!");
            $("#triviaQuestion").text("The correct answer was Burger King!");
        }
        //Empty out the userChoices div
        $("#userChoices").empty();
        $('#userChoices').prepend('<img src="assets/images/burgerkinggif.webp" />');
        setTimeout(reset, 3000);
        clearInterval(countdownTimer);

    });

});










