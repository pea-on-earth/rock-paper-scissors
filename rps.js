const myArray = ["Rock","Paper","Scissors"];

function getComputerChoice () {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

let playerScore = 0;
let computerScore = 0;

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
        alert(`It's a tie!`);
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") 
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



