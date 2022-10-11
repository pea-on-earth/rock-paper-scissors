const myArray = ["Rock","Paper","Scissors"];

function getComputerChoice () {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
console.log(getComputerChoice());