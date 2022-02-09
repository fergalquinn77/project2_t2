let gameType, win, lose;
const easy_moves = ["rock", "paper", "scissors"]; //Easy Move Game
const diff_moves = ["rock", "paper", "scissors", "spock", "lizard"]; //Diff move game
const playerName = document.getElementById("player-name");
const regEx = /^(?! )[A-Za-z\s\xC0-\uFFFF]*$/;
var moves = [];

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByClassName("btn-play-game");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            gameType = this.getAttribute("id");
            runGame(gameType);
        });
    }

    // Event listeners for playing buttons e.g. Rock, Paper, Scissors 

    let game_settings = document.getElementsByClassName("btn-game-settings");

    for (let game_setting of game_settings) {
        game_setting.addEventListener("click", function () {
            openSettings();
        });
        // Event listeners for buttons relating to game settings
    }

    document.getElementById("learn-more").onclick = learnMore;
    document.getElementById("learn-difficult").onclick = learnDifficult;
    document.getElementById("easy").onclick = playEasy;
    document.getElementById("difficult").onclick = playDiff;
    document.getElementById("reset").onclick = gameReset;
    document.getElementById("newGame").onclick = newGame;

    // Event listeners for balance of buttons used

});

function step2() {
    //Move playing from main landing page and then moving to step 2
    if (playerName.value.match(regEx) && playerName.value != null && playerName.value != undefined && playerName.value != "") {
        let player = playerName.value;

        document.getElementById("question").innerText = `Hi ${player}, do you know how to play`;
    }
    document.getElementById("intro").style.display = "none";
    document.getElementById("step2").style.display = "block";
}



function learnMore() {
    // Display learn more page
    document.getElementById("step2").style.display = "none";
    document.getElementById("learn-more-section").style.display = "block";
}



function learnDifficult() {
    // Display learn difficult version 
    document.getElementById("learn-more-section").style.display = "none";
    document.getElementById("diff-instructions").style.display = "block";
}



function openSettings() {
    // Open game settings page
    document.getElementById("learn-more-section").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("diff-instructions").style.display = "none";
    document.getElementById("game-settings").style.display = "block";
}



function playEasy() {
    // Open game in easy version
    let gameLength = document.getElementById("numberGames").value;
    document.getElementById("game-settings").style.display = "none";
    document.getElementById("game-inplay").style.display = "inline-block";
    document.getElementById("playerName").innerText = playerName.value;
    document.getElementById("playerRemaining").innerText = gameLength;
    moves = easy_moves;
}



function playDiff() {
    // Open game in difficult version
    let gameLength = document.getElementById("numberGames").value;
    document.getElementById("game-settings").style.display = "none";
    document.getElementById("game-inplay").style.display = "inline-block";
    document.getElementById("diff-buttons").style.display = "inline-block";
    document.getElementById("playerName").innerText = playerName.value;
    document.getElementById("playerRemaining").innerText = gameLength;
    moves = diff_moves;
}


function runGame(gameType) {
    /* Run Game function - used for each player move. It takes the users
    move from a button click, then generates a random move for the computer.
    It then checks whether the users wins/draws/loses. It then passes both moves
    to the upadteUserMoves function which updates the scoreboard */ 

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



function updateUserMoves(user, comp) {
    // Update user moves in scoreboard 
    document.getElementById("userMove").innerText = user;
    document.getElementById("compMove").innerText = comp;
}



function incrementScore(winner) {
    // Increment scores after move
    let userScore = parseInt(document.getElementById("playerScore").innerText);
    let compScore = parseInt(document.getElementById("compScore").innerText);
    if (winner == "user") {
        userScore++;
        document.getElementById("playerScore").innerText = userScore;

    } else if (winner == "computer") {
        compScore++;
        document.getElementById("compScore").innerText = compScore;

    }
    remainingMoves(userScore, compScore);
}



function remainingMoves(user, comp) {
    // Update remaining moves and check whether game is over 
    let remain = parseInt(document.getElementById("playerRemaining").innerText);
    if (remain > 1) {
        remain--;
        document.getElementById("playerRemaining").innerText = remain;
    } else {
        remain--;
        document.getElementById("playerRemaining").innerText = remain;
        if (user > comp) {
            gameOver("Congrats! You Win");
        } else if (user < comp) {
            gameOver("I'm Afraid You Lost.");
        } else {
            gameOver("It's A Draw");
        }

    }
}



function gameOver(winner) {
    // Execute if game is over
    document.getElementById("game-buttons").style.display = "none";
    document.getElementById("message").innerHTML = `Game Over ${playerName.value}. ${winner}`;

}



function gameReset() {
    // Reset Scores
    document.getElementById("compScore").innerText = 0;
    document.getElementById("playerScore").innerText = 0;
}




function newGame() {
    // Start a new game 
    gameReset();
    if (moves == easy_moves) {
        playEasy();

        document.getElementById("message").innerHTML = "Let's Play";
        document.getElementById("game-buttons").style.display = "inline-block";
        document.getElementById("game-buttons").style.width = "inherit";

    } else {
        playDiff();
        document.getElementById("message").innerHTML = "Let's Play";
        document.getElementById("game-buttons").style.display = "inline-block";
        document.getElementById("game-buttons").style.width = "inherit";
        document.getElementById("diff-buttons").style.display = "inline-block";
    }
}