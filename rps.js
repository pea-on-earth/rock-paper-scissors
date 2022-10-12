const myArray = ["Rock","Paper","Scissors"];

function getComputerChoice () {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(getComputerChoice());

let playerSelection = "Rock";
console.log(playerSelection);

let computerSelection = getComputerChoice();
console.log(playRound());

function playRound(playerSelection, computerSelection){
    //case insensitive
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        //tie
         return alert(`It's a tie!`);
    } else if (
        //player wins
        playerSelection === "Rock" || 
        computerSelection === "Scissors";
    ) {
         alert(`Player wins!`);
    } else (
        //computer wins
        playerSelection = "Rock" && computerSelection = "Paper";
    ) {
       alert (`Computer wins!`);
    };

}

