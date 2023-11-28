let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const choices = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

//console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {


   if (computerSelection === playerSelection) {
    alert("It's a draw");
    return "Draw";
   }
   else if (computerSelection === "Rock" && playerSelection ==="Paper") {
    alert("You win! Paper beats Rock");
    playerScore += 1;
    return "Win";
   }
   else if (computerSelection === "Rock" && playerSelection === "Scissors") {
    alert("You lose! Rock beats Scissors");
    computerScore += 1;
    return "Loss";
   }
   else if (computerSelection === "Paper" && playerSelection === "Rock") {
    alert("You lose! Paper beats Rock");
    computerScore += 1;
    return "Loss";
   }
   else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    alert("You win! Scissor beats Paper");
    playerScore += 1;
    return "Win";
   }
   else if (computerSelection === "Scissors" && playerSelection === "Rock") {
    alert("You win! Rock beats Scissors");
    playerScore += 1;
    return "Win";
   }
   else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    alert("You lose! Scissor beats Paper");
    computerScore += 1;
    return "Loss";
   }

}

function getPlayerChoice() {

    let playerChoice = prompt("Enter your choice:");

    function capitalizeFirstLetter(playerChoice) {
        return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    }

    playerChoice = capitalizeFirstLetter(playerChoice);
    return playerChoice;
}


/*console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

function game() {

    const result = [];

    for(i = 0; i < 5; i++ ) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        result.push(playRound(playerSelection, computerSelection));
        console.log(result);
    } 

    if (playerScore === computerScore) {
        console.log("It's a draw");
    }
    else if (playerScore > computerScore) {
        console.log("YOU WIN!");
    }
    else if (playerScore < computerScore) {
        console.log("YOU LOSE!");
    }
}

game();
