// script;
function getComputerChoice() {
    let choices = ['Rock', 'Paper', ' Scissors'];
    return choices[Math.floor(Math.random() * 3)]
}


let computerScore = 0;
let playerScore = 0;
let roundWinner = '';


function playRound(playerSelection, computerSelection) {
    let result='';
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore += 1;
        roundWinner = 'Player';

    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        computerScore += 1;
        roundWinner = 'Computer';
    }
    else {
        roundWinner = 'Tie';
        result = "It's a tie!";
    }

    updateScoreMessage(roundWinner, playerSelection, computerSelection)

}

function gameEnd() {
    return playerScore === 5 || computerScore === 5;
}

//UI
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const scoreMessage = document.getElementById('scoreMessage');
const scissorsBtn = document.getElementById('scissorsBtn');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scoreInfo = document.getElementById('scoreInfo');

rockBtn.addEventListener('click', () => handleClick('Rock'));
paperBtn.addEventListener('click', () => handleClick('Paper'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));

function handleClick(playerSelection) {
    if (gameEnd()) {
        openEndGameMode();
        return
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateScore();

    if (gameEnd()) {
        openEndGameMode();
        setFinalMessage();
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            playerSign.textContent = '✊'
            break
        case 'Paper':
            playerSign.textContent = '🖐'
            break
        case 'Scissors':
            playerSign.textContent = '✌️'
            break
    }

    switch (computerSelection) {
        case 'Rock':
            computerSign.textContent = '✊'
            break
        case 'Paper':
            computerSign.textContent = '🖐'
            break
        case 'Scissors':
            computerSign.textContent = '✌️'
            break
    }
}

function updateScoreMessage(roundWinner, playerSelection, computerSelection, playerScore, computerScore) {
    if (roundWinner === 'Tie') {
        scoreMessage.textContent = playerSelection + ' ties with ' + computerSelection;
        return;
    }
    if (roundWinner === 'Player' && playerScore!=5) {
        scoreMessage.textContent = playerSelection + ' beats ' + computerSelection;
        return;
    }
    if (roundWinner === 'Computer') {
        if (computerScore === 5) {
            scoreMessage.textContent = 'You lose! Click RESTART to start a new game!'
        }
        else {
            scoreMessage.textContent = playerSelection + ' is beaten by ' + computerSelection;
        }
        return;
    }


}

function updateScore() {
    if (roundWinner === 'Tie') {
        scoreInfo.textContent = "It's a tie!"
    }
    else if (roundWinner === 'Player') {
        scoreInfo.textContent = "You win!"
    }
    else {
        scoreInfo.textContent = 'You lose!'
    }

    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;

}

