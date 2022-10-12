const myArray = ["Rock","Paper","Scissors"];

function getComputerChoice () {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(getComputerChoice());

function playRound(playerSelection){
    /* case insensitive
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase(); */

    playerSelection = "Rock";
    console.log(playerSelection);

    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    if ((playerSelection == computerSelection)){
        //tie
        return alert(`It's a tie!`);
    } else if (
        //player wins
        (playerSelection == "Rock" && computerSelection == "Scissors") 
    ) {
        return alert(`Player wins!`);
    } else {
        //computer wins
        return alert (`Computer wins!`);
    }
    };

    playRound();



