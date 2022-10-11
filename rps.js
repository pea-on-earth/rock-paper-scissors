const myArray = ["Rock","Paper","Scissors"];

const playerSelection  = prompt("Rock, Paper, or Scissors?", " ");
console.log(playerSelection);

function getComputerChoice () {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == computerSelection){
        alert(
            `It's a tie!`
        );
    }

}