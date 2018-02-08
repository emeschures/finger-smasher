// jQuery elements
var $startButton = $(".start-button");
var $resetButton = $(".reset-button");
var $arrowContainer = $(".arrow-container");
var $gameScore = $(".score-count");
var $p1Score = $("#p1-score");
var $p2Score = $("#p2-score");
var currentPlayer = "player 1";
var $timerCount = $("#time-count");

// current game variables
var currentArrow = null;
var pressedArrow = null;
var currentScore = 0;
var countDown = 10;
var arrowIntervalId = null;


$startButton.on("click", startGame); 
$resetButton.on("click", resetGame);


// function to compare  
function setArrowEvent() {
    $(document).on("keydown", compareArrows);
}

// function to compare arrows for all assigned key numbers
function compareArrows(event) {
    var arrowKeyNumbers = {
        "37":"left",
        "38":"up",
        "39":"right",
        "40":"down"
    }
    // pressed arrow corresponds with arrow key number
    pressedArrow = arrowKeyNumbers[event.which];
    console.log(pressedArrow);
    // if correct arrow matches arrow clicked add +1 to score
    if(currentArrow === pressedArrow) {
        currentScore++;
        // game score passes to score board
        $gameScore.text(currentScore);  

    }
    console.log(currentScore, " gameScore");
}

// function to start game
function startGame() {
    console.log("Game started");
    // initiate timer countdown
    timer = setInterval(function() {
        countDown = countDown-1;
            if(countDown === 0) {
                clearInterval(timer);
                clearInterval(arrowIntervalId)
                stopGame();
            }
                console.log(countDown);
                $("#time-count").text(countDown);
    }, 1000);
    // render first arrow
    renderArrow();
    arrowIntervalId = setInterval(renderArrow, 700);
    // call arrow
    setArrowEvent();
    $("body").addClass("body");
}

// reset game function
function resetGame() {
    console.log("Game reset");
    $arrowContainer.removeClass(currentArrow);
    clearInterval(timer);
    clearInterval(arrowIntervalId); 
    currentScore = 0;
    $p1Score.text(0);
    $p2Score.text(0);
    countDown = 10;
    $timerCount.text(countDown);
    $("body").removeClass("body");
    $(document).off("keydown", compareArrows);
}
// stop game function
function stopGame() {
    $arrowContainer.removeClass(currentArrow);
    toggleCurrentPlayer();
    currentScore = 0;
    countDown = 10;
    $gameScore.text(currentScore);
    $(document).off("keydown", compareArrows);
   
    }
    

// switch between players
function toggleCurrentPlayer() {
    if(currentPlayer === "player 1") {
        $p1Score.text(currentScore);
            currentPlayer = "player 2";
            console.log(currentPlayer);
    } else {
        $p2Score.text(currentScore);    
        playerWinner();
        currentPlayer = "player 1";
        console.log(currentPlayer); 
       
}}

// create renderArrow function to show and remove arrows    
function renderArrow() {
    var arrows = ["up" , "down" , "left", "right"];
    var index = getRandomIndex(arrows);
    $arrowContainer.removeClass(currentArrow);
    currentArrow = arrows[index];
    console.log(currentArrow);
    $arrowContainer.addClass(currentArrow);
}
function getRandomIndex(arrowArray) {
    return Math.floor(Math.random() * arrowArray.length);
}

// display winner
function playerWinner() {
    console.log($p1Score.text())
    console.log($p2Score.text())
    var player1 = parseInt($p1Score.text());
    var player2 = parseInt($p2Score.text());
    if(player1 > player2) {
        swal("Player 1 wins");
        return "Player 1 wins";   
    } else if (player1 === player2) {
        swal("Tie game");
        return "Tie game";
    } else if(player1 < player2) {
        swal("Player 2 wins");
        return "Player 2 wins";
    }
}
