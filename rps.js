const array = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const computerSelection = array[Math.floor(Math.random() * array.length)]; 
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection == "rock" && computerSelection == 'Paper') {
        return "You Lose! Paper beats Rock";
    }
    if(playerSelection == "rock" && computerSelection == 'Rock') {
        return "You Tied!";
    }
    if(playerSelection == "rock" && computerSelection == 'Scissors') {
        return "You Win! Rock beats Scissors";
    }
    if(playerSelection == "paper" && computerSelection == 'Paper') {
        return "You Tied!";
    }
    if(playerSelection == "paper" && computerSelection == 'Rock') {
        return "You Win! Paper beats Rock";
    }
    if(playerSelection == "paper" && computerSelection == 'Scissors') {
        return "You Lose! Scissors beats Paper";
    }
    if(playerSelection = "scissors" && computerSelection == 'Paper') {
        return "You Win! Scissors beats Paper";
    }
    if(playerSelection = "scissors" && computerSelection == 'Rock') {
        return "You Lose! Rock beats Scissors";
    }
    if(playerSelection = "scissors" && computerSelection == 'Scissors') {
        return "You Tied!";
    }

  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
