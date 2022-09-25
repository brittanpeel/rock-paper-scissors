const array = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerSelection = array[Math.floor(Math.random() * array.length)];
    return computerSelection;
}

function getPlayerSelection() {

    const input = prompt("Type rock, paper or scissors").toLowerCase();
    return input;
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

for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));  
 }