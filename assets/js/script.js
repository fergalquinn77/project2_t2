document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByClassName("btn-play");

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
        updateMessage(gameType,computerMove);
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
        updateMessage(gameType,computerMove);
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
    updateMessage(gameType,computerMove);
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
        updateMessage(gameType,computerMove);
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
        updateMessage(gameType,computerMove);
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

function updateMessage(user,comp){
document.getElementById("message-area").innerText = `You choose ${user} and the computer played ${comp}. The game result is `;

}

function gameReset(){}

function incrementScore(gameResult) {
    console.log(gameResult);
    if (gameResult === "user") {
        let userOldScore = parseInt(document.getElementById('userScore').innerText);
        document.getElementById('userScore').innerText = ++userOldScore;
        console.log("win");
    } else if (gameResult === "computer") {
        let compOldScore = parseInt(document.getElementById('computerScore').innerText);
        document.getElementById('computerScore').innerText = ++compOldScore;
        console.log("loose");
    } else {

    }
    let userNewScore = document.getElementById('userScore').innerText;
    let compNewScore = document.getElementById('computerScore').innerText;
    checkScore(userNewScore, compNewScore);
}

function checkScore(){}

function endGame(){}

function draw(){}
