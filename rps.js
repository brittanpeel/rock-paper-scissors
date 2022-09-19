window.onload = console.log(playerSelection());

const array = ['Rock'];
const computerSelection = getComputerChoice();

function getComputerChoice() {
   const computerSelection = array[Math.floor(Math.random() * array.length)];
 }

function playerSelection() {
   let playerChoice = prompt("What do you want to choose");
   return playerChoice.toLowerCase()
}

function playRound(playerChoice, computerSelection) {
   if (computerSelection == 'rock' && playerSelection == "paper") {
      console.log("Player Won")
   }
   console.log("test")
}
console.log(playRound(computerSelection))