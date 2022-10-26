

let playerScore = 0;
let computerScore = 0;

function playRound(){

    let playerInput = prompt("Rock, Paper, or Scissors?", " ");
    let playerSelection = playerInput.toLowerCase();
    console.log(playerSelection);

    const myArray = ["rock","paper","scissors"];

    function getComputerChoice () {
    return myArray[Math.floor(Math.random() * myArray.length)];
    }

    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    if ((playerSelection === computerSelection)){
        //tie
        alert(`It's a tie!`);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        //player wins
        
        alert(`Player wins!`);
        playerScore += 1;
        console.log(`The player has ${playerScore} point(s).`);


    } else {
        //computer wins
        
        alert (`Computer wins!`);
        computerScore += 1;
        console.log(`The computer has ${computerScore} point(s).`);
        
    }
    };
    
    function game() {
        for (let playerScore = 0; playerScore <= 5; playerScore++) {
            playRound();
        }
    };

    game(); 



