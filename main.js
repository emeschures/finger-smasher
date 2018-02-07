// jQuery elements
var $startButton = $(".start-button");
var $stopButton = $(".stop-button");
var $arrowContainer = $(".arrow-container");
var $gameScore = $(".score-count");

// current game variables
var currentArrow = null;
var pressedArrow = null;
var gameScore = 0;

function setClickEvent() {
    $startButton.on("click", startGame) 
}
function setArrowEvent() {
    $(document).on("keydown", compareArrows);
}

function compareArrows(event) {
    var arrowKeyNumbers = {
        "37":"left",
        "38":"up",
        "39":"right",
        "40":"down"
    }
    pressedArrow = arrowKeyNumbers[event.which];
    console.log(pressedArrow);
    if(currentArrow === pressedArrow) {
        gameScore++;
        $gameScore.text(gameScore);
        $arrowContainer.removeClass(currentArrow);
        currentArrow = null;
        
        
    }
    console.log(gameScore, " gameScore");
}

function startGame() {
    console.log("Game started");
    // initiate timer countdown
    // render first arrow
    // call arrow
    renderArrow();
    setArrowEvent();
}
function renderArrow() {
    var arrows = ["up" , "down" , "left", "right"];
    var index = getRandomIndex(arrows);
    currentArrow = arrows[index];
    console.log(currentArrow);
    $arrowContainer.addClass(currentArrow);
    
}
function getRandomIndex(arrowArray) {
    return Math.floor(Math.random() * arrowArray.length);
}
setClickEvent()