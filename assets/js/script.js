let win, lose, gameType;
document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByClassName("btn-play");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            gameType = this.getAttribute("data-type");
            runGame(gameType);
        });
    }
    document.getElementById("start").onclick = startGame;
    document.getElementById("reset").onclick = gameReset;
    document.getElementById("easy-inst").onclick = easyInst;
    document.getElementById("diff-inst").onclick = diffInst;
    document.getElementById("newGame").onclick = newGame;

});

/* Add event listeners for all buttons */
const easy_moves = ["rock", "paper", "scissors"];
const diff_moves = ["rock", "paper", "scissors", "spock", "lizard"];

function runGame(gameType) {

    let moves;
    if (document.getElementById("difficulty").value == "easy") {
        moves = easy_moves;
    } else {
        moves = diff_moves;
    }

    /* Adjust for difficulty */

    let computerMove = moves[Math.floor(Math.random() * moves.length)];

    if (gameType == "rock") {
        win = ["scissors", "lizard"];
        lose = ["spock", "paper"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            incrementScore("draw");
        }
        updateUserMoves(gameType, computerMove);
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
        updateUserMoves(gameType, computerMove);
    }
    if (gameType == "lizard") {
        win = ["paper", "spock"];
        lose = ["scissors", "rock"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            incrementScore("draw");
        }
        updateUserMoves(gameType, computerMove);
    }
    if (gameType == "paper") {
        win = ["rock", "spock"];
        lose = ["scissors", "lizard"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            incrementScore("draw");
        }
        updateUserMoves(gameType, computerMove);
    }
    if (gameType == "spock") {
        win = ["scissors", "rock"];
        lose = ["lizard", "paper"];
        if (win.includes(computerMove)) {
            incrementScore("user");
        } else if (lose.includes(computerMove)) {
            incrementScore("computer");
        } else {
            incrementScore("draw");
        }
        updateUserMoves(gameType, computerMove);
    }

}

function startGame() {
    console.log("Start");
    if (document.getElementById("difficulty").value === "easy") {
        document.getElementById("easy").style.display = "flex";
    } else {
        document.getElementById("easy").style.display = "flex";
        document.getElementById("difficult").style.display = "flex";
    }
    /* Show buttons relating to level of difficulty as selected by user */

    document.getElementById("start").style.display = "none";
    document.getElementById("video").style.display = "none";
    document.getElementById("startControls").style.display = "none";
    document.getElementById("reset").style.display = "block";
    document.getElementById("newGame").style.display = "block";
    document.getElementById("scoreboard").style.display = "flex";
    document.getElementById("intro-message").style.display = "none";

    /* Adjust page by displaying and hiding content after game is started */
}

function updateUserMoves(user, comp) {
    document.getElementById("userLastMove").innerText = user;
    document.getElementById("computerLastMove").innerText = comp;

}

/* Adjust the scoreboard on index page to show last move by user and computer */

function gameReset() {
    startGame();
    document.getElementById('computerScore').innerText = 0;
    document.getElementById('userScore').innerText = 0;
    document.getElementById('finish').innerText = "";
}

/* Reset the game - adjust scores to zero. */

function incrementScore(gameResult) {
    if (gameResult === "user") {
        let userOldScore = parseInt(document.getElementById('userScore').innerText);
        document.getElementById('userScore').innerText = ++userOldScore;
    } else if (gameResult === "computer") {
        let compOldScore = parseInt(document.getElementById('computerScore').innerText);
        document.getElementById('computerScore').innerText = ++compOldScore;
    } else {

    }
    let userNewScore = document.getElementById('userScore').innerText;
    let compNewScore = document.getElementById('computerScore').innerText;
    checkScore(userNewScore, compNewScore);
}

/* Adjust scoreboard for new scores and check whether game is finished */

function checkScore(userScore, compScore) {
    let finish = document.getElementById("numberGames").value;
    if (userScore == finish || compScore == finish) {
        endGame(userScore, compScore);
    }
}

/* Checks if the game is over */

function endGame(userScore, compScore) {

    let finish = document.getElementById("numberGames").value;
    if (finish == userScore) {
        document.getElementById('finish').innerText = "Game is now over. You are the winner";
    } else {
        document.getElementById('finish').innerText = "Game is now over. I'm afraid you did not win.";
    }
    document.getElementById("easy").style.display = "none";
    document.getElementById("difficult").style.display = "none";
}

/* Find out who is the winner and update the scoreboard to indicate who it is. 
Take away playing keys so the user cannot continue to play */


function easyInst() {
    document.getElementById('instructions').innerText = "Rock crushes scissors, Paper covers rock and Scissors cuts paper";
}

function diffInst() {
    document.getElementById('instructions').innerText = "Rock crushes scissors, Paper covers rock, Scissors cuts paper, Rock crushes lizard, Lizard poisons spock, Spock smashes scissors, Scissors decapitates lizard, Lizard eats paper, Paper disproves Spock, Spock vaporizes rock";
}

function newGame() {
    location.reload();
}