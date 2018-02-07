// jQuery elements
var $startButton = $(".start-button");
var $stopButton = $(".stop-button");
var $arrowContainer = $(".arrow-container");
var $gameScore = $(".score-count");

// current game variables
var currentArrow = null;
var pressedArrow = null;
var gameScore = 0;


// function to listen if start game button clicked
function setClickEvent() {
    $startButton.on("click", startGame) 
}

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
        gameScore++;
        // game score passes to score board
        $gameScore.text(gameScore);                                
        
        // // set time out for x milliseconds
        // setTimeout(function() {

        // }, 1000)
        
        // // after time out set current arrow to null
        // currentArrow = null;
        
        // // remove class 
        // $arrowContainer.removeClass(currentArrow);
        
        // // render new arrow
        // renderArrow();
        
        // make each arrow flash for x milliseconds
        
    }
    console.log(gameScore, " gameScore");
}

// 
function startGame() {
    console.log("Game started");
    // initiate timer countdown
    // render first arrow
    // call arrow
    renderArrow();
    setArrowEvent();
}

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
