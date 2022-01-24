document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("btn");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            gameType = this.getAttribute("data-type");
            runGame(gameType);
        })
    }
    document.getElementById("start").onclick = startGame;
    document.getElementById("reset").onclick = gameReset;
});

function runGame(){}

function startGame(){
    console.log("Start");
    if (document.getElementById("difficulty").value === "easy") {
        document.getElementById("easy").style.display = "flex";
    } else {
        document.getElementById("easy").style.display = "flex";
        document.getElementById("difficult").style.display = "flex";
    }
    document.getElementById("start").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("reset").style.display = "flex";
    document.getElementById("scoreboard").style.display = "flex";
    /* document.getElementByClassName("scoreboard").style.display = "flex";
    document.getElementsByClassName("controls").style.display = "none"; */
}

function updateMessage(){}

function gameReset(){}

function incrementScore(){}

function checkScore(){}

function endGame(){}
