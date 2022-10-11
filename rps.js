const myArray = ["Rock","Paper","Scissors"];

function getComputerChoice () {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    
}