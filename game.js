//create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow"
var buttonColours = ["red", "blue", "green", "yellow"];
//create a new empty array called gamePattern
var gamePattern = [];
// create a new function called nextSequence()
function nextSequence() {
    //generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    //Add the new randomChosenColour generated above to the end of the gamePattern
    gamePattern.push(randomChosenColour);
}
nextSequence();
//select the button with the same id as the randomChosenColour and animate a flash to the button selected
$("#" + gamePattern).fadeIn(100).fadeOut(100).fadeIn(100);
