// game shouldn't start until start button is pressed
// start button pressed, one arrow lights up for 2 seconds
// user needs to press corresponding key as many times in the 2 seconds
// score goes up +1 each time correctly pressed
// if pressed incorrectly -1 to score
// new arrow button lights after 2 seconds

// setInterval to get buttons to change every 2 seconds
    // randomInt to determine which arrow will light up

setInterval(function() {
    $("#arrow-left").toggleClass("hide");
}, 500);

// setInterval(function() {
//     $("#arrow-right").toggleClass("hide");
// }, 1000);

// setInterval(function() {
//     $("#arrow-up").toggleClass("hide");
// }, 750);

// setInterval(function() {
//     $("#arrow-down").toggleClass("hide");
// }, 1500);

function randomInt(n) {
    return Math.floor( Math.random() * n )
}
    // var $arrow = $('.arrow');
    // function flashArrow() {
    //     for (var i = 0; i < $arrow.length; i++) {
    //             $arrow[randomInt(4)];
             
    // }}

    // var timerId = setInterval(flashArrow, 2000);

    // function stop () {
    //     clearInterval($arrow)
    // }
