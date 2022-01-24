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

function startGame(){}

function updateMessage(){}

function gameReset(){}

function incrementScore(){}

function checkScore(){}

function endGame(){}
