let playerScore = 0;
let computerScore = 0;

//computer choice
const myArray = ["rock","paper","scissors"];

function getComputerChoice () {
return myArray[Math.floor(Math.random() * myArray.length)];
}

//rock paper scissors function
function playRound(){
    
    //computer choice
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    //player choice
    let playerInput = prompt("Rock, Paper, or Scissors?", " ");
    const playerSelection = playerInput.toLowerCase();
    console.log(playerSelection);

    if (playerSelection == computerSelection){
        //tie
       alert(`It's a tie!`);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        //player wins
        playerScore += 1;
        return (`Player wins! The player has ${playerScore} point(s).`);
    } else {
        //computer wins
        computerScore += 1;
        return (`Computer wins! The computer has ${computerScore} point(s).`);
    }
    };

    function game() {
        for (let rounds = 0; (playerScore < 5) && (computerScore < 5); rounds ++) {
            alert(playRound());
        }
        if (playerScore === 5){
            alert("Player beat the computer!");
        } else if (computerScore === 5) {
            alert("Computer beat the player!");
        } else {
            alert("What have you done??")
        }
    };

     game(); 



