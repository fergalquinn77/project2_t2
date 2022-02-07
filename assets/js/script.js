document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByClassName("btn-play-game");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            gameType = this.getAttribute("id");
            runGame(gameType);
        });
    }

    let game_settings = document.getElementsByClassName("btn-game-settings");

    for (let game_setting of game_settings) {
        game_setting.addEventListener("click", function () {
            openSettings();
        });
    }

    document.getElementById("learn-more").onclick = learnMore;
    document.getElementById("learn-difficult").onclick = learnDifficult;
    document.getElementById("easy").onclick = playEasy;
    document.getElementById("difficult").onclick = playDiff;
    document.getElementById("reset").onclick = gameReset;
    document.getElementById("newGame").onclick = newGame;


});

/* Add event listeners for all buttons */
const easy_moves = ["rock", "paper", "scissors"];
const diff_moves = ["rock", "paper", "scissors", "spock", "lizard"];
const playerName = document.getElementById("player-name");
const regEx = /^(?! )[A-Za-z\s\xC0-\uFFFF]*$/;
var moves = [];


function step2() {
    if (playerName.value.match(regEx) && playerName.value != null && playerName.value != undefined && playerName.value != "") {
        let player = playerName.value;

        document.getElementById("question").innerText = `Hi ${player}, do you know how to play`;
    }
    document.getElementById("intro").style.display = "none";
    document.getElementById("step2").style.display = "block";
}

function learnMore() {
    document.getElementById("step2").style.display = "none";
    document.getElementById("learn-more-section").style.display = "block";
}

function learnDifficult() {
    document.getElementById("learn-more-section").style.display = "none";
    document.getElementById("diff-instructions").style.display = "block";
}

function openSettings() {
    document.getElementById("learn-more-section").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("diff-instructions").style.display = "none";
    document.getElementById("game-settings").style.display = "block";
}

function playEasy() {
    let gameLength = document.getElementById("numberGames").value;
    document.getElementById("game-settings").style.display = "none";
    document.getElementById("game-inplay").style.display = "inline-block";
    document.getElementById("playerName").innerText = playerName.value;
    document.getElementById("playerRemaining").innerText = gameLength;
    moves = easy_moves;
}


function playDiff() {
    let gameLength = document.getElementById("numberGames").value;
    document.getElementById("game-settings").style.display = "none";
    document.getElementById("game-inplay").style.display = "inline-block";
    document.getElementById("diff-buttons").style.display = "inline-block";
    document.getElementById("playerName").innerText = playerName.value;
    document.getElementById("playerRemaining").innerText = gameLength;
    moves = diff_moves;
}


function runGame(gameType) {

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
    document.getElementById("userMove").innerText = user;
    document.getElementById("compMove").innerText = comp;
}

function incrementScore(winner) {
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

/* Adjust scoreboard for new scores and check whether game is finished */

function checkScore(userScore, compScore) {
    let finish = document.getElementById("numberGames").value;
    if (userScore == finish || compScore == finish) {
        endGame(userScore, compScore);
    }
}

function remainingMoves(user, comp) {
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

function gameOver(winner){
    document.getElementById("game-buttons").style.display="none";
    document.getElementById("message").innerHTML=`Game Over ${playerName.value}. ${winner}`;

}

function gameReset(){
    document.getElementById("compScore").innerText =0;
    document.getElementById("playerScore").innerText =0;
}



function newGame() {
    
    gameReset();
    if (moves==easy_moves){
        playEasy();
        
        document.getElementById("message").innerHTML="Let's Play";
        document.getElementById("game-buttons").style.display="inline-block";
        document.getElementById("game-buttons").style.width="inherit";

    }
    else{
        playDiff();
        document.getElementById("message").innerHTML="Let's Play";
        document.getElementById("game-buttons").style.display="inline-block";
        document.getElementById("game-buttons").style.width="inherit";
        document.getElementById("diff-buttons").style.display = "inline-block";


    }


}