var $startButton = $(".start-button");
var $stopButton = $(".stop-button");
var $arrowContainer = $(".arrow-container");

function setClickEvent() {
    $startButton.on("click", startGame) 
}
function setArrowEvent() {
    var arrowKeyNumbers = {
        "37":"left",
        "38":"up",
        "39":"right",
        "40":"down"
    }
    $(document).on("keydown", function(event) {
        console.log("keydown", event.which);
        var pressedArrow = arrowKeyNumbers[event.which];
        console.log(pressedArrow);
    });
}

function startGame() {
    console.log("Game started");
    // initiate timer countdown
    // render first arrow
    // call arrow
    renderArrow();
}
function renderArrow() {
    var arrows = ["up" , "down" , "left", "right"];
    var index = getRandomIndex(arrows);
    var currentArrow = arrows[index];
    console.log(currentArrow);
    $arrowContainer.addClass(currentArrow);
    setArrowEvent();
}
function getRandomIndex(arrowArray) {
    return Math.floor(Math.random() * arrowArray.length);
}
setClickEvent()