let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

function getComputerChoice() {

    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

//console.log(getComputerChoice());

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    }); 
}


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + `<br><br>Player score: ` + playerScore + `<br>Computer score: ` + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += `<br><br>Computer won the game! Reload the page to play again`;
            disableButtons()
        }
    }

    const showResult = document.querySelector('.result');
    showResult.innerHTML = result;

}

//Old way to get player choice through prompt
/*
function getPlayerChoice() {

    let playerChoice = prompt("Enter your choice:");

    function capitalizeFirstLetter(playerChoice) {
        return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    }

    playerChoice = capitalizeFirstLetter(playerChoice);
    return playerChoice;
}
*/

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value)
    });
});
