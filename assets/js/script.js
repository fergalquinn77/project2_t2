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

function runGame(gameType) {

    const moves = ["rock", "paper", "scissors", "spock", "lizard"];
    let computerMove = moves[Math.floor(Math.random() * moves.length)];
    console.log(gameType);
    console.log(computerMove);
    if (gameType == "rock") {
        win = ["scissors", "lizard"];
        lose = ["spock", "paper"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            draw();
        }
        updateImage(gameType, computerMove);
    }
    if (gameType == "scissors") {
        win = ["paper", "lizard"];
        lose = ["spock", "rock"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            incrementScore("draw");
        }
        updateImage(gameType, computerMove);
    }
    if (gameType == "lizard") {
        win = ["paper", "spock"];
        lose = ["scissors", "rock"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            draw();
        }
        updateImage(gameType, computerMove);
    }
    if (gameType == "paper") {
        win = ["rock", "spock"];
        lose = ["scissors", "lizard"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            draw();
        }
        updateImage(gameType, computerMove);
    }
    if (gameType == "spock") {
        win = ["scissors", "rock"];
        lose = ["lizard", "paper"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            draw();
        }
        updateImage(gameType, computerMove);
    }

}

function startGame(){
    console.log("Start");
    if (document.getElementById("difficulty").value === "easy") {
        document.getElementById("easy").style.display = "flex";
    } else {
        document.getElementById("easy").style.display = "flex";
        document.getElementById("difficult").style.display = "flex";
    }
    document.getElementById("start").style.display = "none";
    document.getElementById("startControls").style.display = "none";
    document.getElementById("reset").style.display = "flex";
    document.getElementById("scoreboard").style.display = "flex";
}

function updateMessage(){}

function gameReset(){}

function incrementScore(){}

function checkScore(){}

function endGame(){}
