
var gamePattern = [];

var level = 0;

var started = false;

var  userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow" ];  // the array for button colour


function nextSequence() {

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4); // random number generator

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour); // push the colour to the array

    return randomChosenColour; // return the colour


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);




}
$("btn").click(function () { 

    var userChosenColour = $(this).attr("id)"); 

    playSound(userChosenColour);

    userClickedPattern.push(userClickedPattern);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");

    audio.play();

}

function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {

        $("#" + currentColour).removeClass("pressed");

    }, 100);
}

$(ducument).keypress(function () {

    if (!started) {
        $("#level-title").text("level" + level);
        nextSequence();
        started = true;

    }
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

    if (userClickedPattern.length === gamePattern.length) {

        setTimeout(function () {
            nextSequence();
        }, 1000);

    } else{

        console.log("wrong");
    }

}
}
