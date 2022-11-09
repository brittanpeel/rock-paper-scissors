const array = ["rock", "paper", "scissors"];

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let rockOutput = rock.value;
let paperOutput = paper.value;
let scissorsOutput = scissors.value;
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

function updateScore(result) {
    if (result.includes("Win!")) {
        playerScore += 1;
    } else if (result.includes("Lose!")) {
        computerScore += 1;
    }
}

function showScore() {
    console.log(
        `Your score is: ${playerScore} and the computer's is: ${computerScore}`
    );
}

function determineWinner() {
    if (playerScore === 5) {
        return "you win";
    } else if (computerScore === 5) {
        return "you lose";
    } else {
        return "no winner";
    }
}

function showWinner(result) {
    if (result === "you win") {
        console.log("You Win!");
    } else if (result === "you lose") {
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
    updateScore(playerSelection, computerChoice);
    showScore();
    let result = determineWinner(playerSelection, computerChoice);
    if (result === "you win") {
        showWinner(result);
        resetScores();
    } else if (result === "you lose") {
        showWinner(result);
        resetScores();
    }
}
