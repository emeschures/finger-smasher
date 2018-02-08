// jQuery elements
var $startButton = $(".start-button");
var $stopButton = $(".stop-button");
var $arrowContainer = $(".arrow-container");
var $gameScore = $(".score-count");
var $p1Score = $("#p1-score");
var $p2Score = $("#p2-score");
var currentPlayer = "player 1";


// current game variables
var currentArrow = null;
var pressedArrow = null;
var currentScore = 0;
var countDown = 10;

// create timer
// timer = setInterval(function() {
//     countDown = countDown-1;
//         if(countDown === 0) {
//             clearInterval(timer);
//         }
//             console.log(countDown);
//             $("#time-count").text(countDown);
// }, 1000);

// function to listen if start game button clicked
// function setClickEvent() {
    $startButton.on("click", startGame); 
// }

// listen if stop game button clicked
// $stopButton.on("click", stopGame);


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
                                      
        
        // set time out for x milliseconds
        // setTimeout(function() {

        // }, 2000)
        
        // // after time out set current arrow to null
        // currentArrow = null;
        
        // // remove class 
        // $arrowContainer.removeClass(currentArrow);
        
        // // render new arrow
        // renderArrow();
        
        // make each arrow flash for x milliseconds
        
    }
    console.log(currentScore, " gameScore");
}

// function to start game
function startGame() {
    console.log("Game started");
    // initiate timer countdown
    // render first arrow
    // call arrow
    timer = setInterval(function() {
        countDown = countDown-1;
            if(countDown === 0) {
                clearInterval(timer);
                stopGame();

            }
                console.log(countDown);
                $("#time-count").text(countDown);
    }, 1000);
    renderArrow();
    setArrowEvent();
}

// function to stop game
function stopGame() {
    console.log("Game stopped");
    $arrowContainer.removeClass(currentArrow);
    toggleCurrentPlayer();
    currentScore = 0;
    $gameScore.text(currentScore);
    $(document).off("keydown", compareArrows);
}

function toggleCurrentPlayer() {
    if(currentPlayer === "player 1") {
        $p1Score.text(currentScore);
            currentPlayer = "player 2";
            console.log(currentPlayer)
    } else {
        $p2Score.text(currentScore);    
        currentPlayer = "player 1";
        console.log(currentPlayer)
}}
// create renderArrow function    
function renderArrow() {
    // create variable for all arrows []
    var arrows = ["up" , "down" , "left", "right"];
    // create variable for random arrow 
    var index = getRandomIndex(arrows);
    currentArrow = arrows[index];
    console.log(currentArrow);
    $arrowContainer.addClass(currentArrow);
    
}
function getRandomIndex(arrowArray) {
    return Math.floor(Math.random() * arrowArray.length);
}

setClickEvent();

