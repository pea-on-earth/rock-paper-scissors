let playerScore = 0;
let computerScore = 0;

//computer choice
function getComputerChoice () {
    const myArray = ["rock","paper","scissors"];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

//player choice
/*function playerInput() {
    let playerChoice = prompt("Rock, Paper, or Scissors?", " ").toLowerCase();
    return playerChoice;
};*/


//rock paper scissors function
function playRound(playerSelection){
    //computer choice
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    
    //let playerSelection = playerInput();

    let result = '';

    if (playerSelection == computerSelection){
        //tie
       result += (`It's a tie! The score is ${playerScore} to ${computerScore}`);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        //player wins
        playerScore += 1;
        console.log(playerScore);
        result += (`Player wins! The player has ${playerScore} point(s).`);
            if (playerScore === 5) {
                result = (`Player has ${playerScore} points. Player beat the computer!`);
            }
    } else {
        //computer wins
        computerScore += 1;
        console.log(computerScore);
        result += (`Computer wins! The computer has ${computerScore} point(s).`);
            if (computerScore === 5){
                result = (`Computer has ${computerScore} points. Computer beat the player!`);
            }
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById('scores').innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;
    return
};

//button zone
const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', () => {
    playRound('rock');
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', () => {
    playRound('paper');
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});


/*
function game() {
        for (let rounds = 0; (playerScore < 5) && (computerScore < 5); rounds ++) {
            playRound();
        }
        if (playerScore === 5){
            alert("Player beat the computer!");
        } else if (computerScore === 5) {
            alert("Computer beat the player!");
        } else {
            alert("What have you done??")
        }
 };    

game();*/



