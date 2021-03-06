function computerPlay () {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playerLoss(computer) {
    alert("Computer chose "+computer+"! YOU LOSE!");
            return "LOSS";
}

function playerWin(computer) {
    alert("Computer chose "+computer+"! YOU WIN!");
            return "WIN";
}

function giveScore(playerScore, computerScore) {
    if (playerScore===computerScore) {
        alert(`YOU TIED THE GAME WITH A SCORE OF ${playerScore}`);
    } else if (playerScore > computerScore) {
        alert(`YOU WON THE GAME ${playerScore} to ${computerScore}!`);
    } else {
        alert(`YOU LOST THE GAME ${playerScore} to ${computerScore}!`);
    }
}

function playRound () {
    let player = prompt("What do you pick?", "Type 'rock' 'paper' or 'scissors'");
    player = player.toUpperCase();
    let computer = computerPlay();
    computer = computer.toUpperCase();

    if (player === computer) {
        alert("It's a tie!");
        return "TIE";
    } else if (player==="ROCK") {
        if (computer==="PAPER") {
            return playerLoss(computer);
        } else {
            return playerWin(computer);
        }
      }
    else if (player==="PAPER") {
        if (computer==="SCISSORS") {
            return playerLoss(computer);
        } else {
            return playerWin(computer);
        }
    }
    else if (player==="SCISSORS") {
        if (computer==="ROCK") {
            return playerLoss(computer);
        } else {
            return playerWin(computer);
        }
    }  
}

function game(numOfGames) {

    let playerScore = 0;
    let computerScore = 0;

    while (numOfGames > 0) {

        let winState = playRound();
        
        if (winState==="WIN") {
            playerScore++;
        } else if (winState==="LOSS") {
            computerScore++;
        }

        numOfGames--;
    }

    giveScore(playerScore, computerScore);
}

game(5);