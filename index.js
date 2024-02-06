var gamePattern = [];

var  userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow" ];  // the array for button colour


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4); // random number generator

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour); // push the colour to the array

    return randomChosenColour; // return the colour


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");

    audio.play();



}

$("btn").click(function () { 

    var userChosenColour = $(this).attr("id)"); 

    userClickedPattern.push(userClickedPattern);
});
