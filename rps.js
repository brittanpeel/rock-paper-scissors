const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const computerSelection = array[Math.floor(Math.random() * array.length)];
    return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "You Tied";
    }
    if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if ((computerSelection = "Paper")) {
        return "You Lose! Paper beats Rock";
    }
    if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    }
    if (playerSelection == "scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    } else if (computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors";
    }
}

function game(playRound) {
    for (const i = 0; i < 5; i++) {
        playRound();
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));