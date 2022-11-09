const array = ["rock", "paper", "scissors"];
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", (e) => playGame(e));
paperButton.addEventListener("click", (e) => playGame(e));
scissorsButton.addEventListener("click", (e) => playGame(e));

function getComputerChoice() {
    const computerSelection = array[Math.floor(Math.random() * array.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You Tied";
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "rock") {
        return "You Win! Paper beats Scissors";
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
}

function showScore() {
    console.log(
        `Your score is: ${playerScore} and the computer's is: ${computerScore}`
    );
}

function determineGame() {
    if (playerScore === 5) {
        return "you win";
    } else if (computerScore === 5) {
        return "you lose";
    } else {
        return "no winner";
    }
}

function showWinner(gameResult) {
    if (gameResult === "you win") {
        console.log("You Win!");
    } else if (gameResult === "you lose") {
        console.log("You Lost!");
    }
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function playGame(e) {
    const playerSelection = e.target.value;
    const computerChoice = getComputerChoice();
    console.log(playRound(playerSelection, computerChoice));
    updateScore(roundResult);
    showScore();
    let gameResult = determineGame();
    if (gameResult === "you win") {
        showWinner(gameResult);
        resetScores();
    } else if (gameResult === "you lose") {
        showWinner(gameResult);
        resetScores();
    }
    // console.log(determineWinner(playerSelection, computerChoice));
    console.log(updateScore(roundResult));
}

function updateScore(roundResult) {
    if (roundResult.includes("you win")) {
        playerScore += 1;
    } else if (roundResult.includes("you lose")) {
        computerScore += 1;
    }
}
