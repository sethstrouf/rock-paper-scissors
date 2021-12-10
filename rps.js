function computerPlay () {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0: return "rock".toUpperCase();
        case 1: return "paper".toUpperCase();
        case 2: return "scissors".toUpperCase();
    }
}

function drawComputerChoice(computerChoice) {
    if(computerChoice==="ROCK") {
        computerDisplay.className = "fas fa-hand-rock computer-box";
    } else if(computerChoice==="PAPER") {
        computerDisplay.className = "fas fa-hand-paper computer-box";
    } else if(computerChoice==="SCISSORS") {
        computerDisplay.className = "fas fa-hand-scissors computer-box";
    }

    computerDisplay.classList.add("clicked");
    setTimeout(function () {
        computerDisplay.classList.remove("clicked");
    }, 100);

    computerDiv.append(computerDisplay);
}

function compareHands(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("YOU TIE!")
    } else if (playerChoice==="ROCK") {
        if (computerChoice==="PAPER") {
            playerLoss();
        } else {
            playerWin();
        }
      }
    else if (playerChoice==="PAPER") {
        if (computerChoice==="SCISSORS") {
            playerLoss();
        } else {
            playerWin();
        }
    }
    else if (playerChoice==="SCISSORS") {
        if (computerChoice==="ROCK") {
            playerLoss();
        } else {
            playerWin();
        }
    }
}

function updateScoreBoard() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function endGame() {
    if(playerScore>computerScore) {
        finalMessage.textContent = "YOU WON!!!";
    } else if (computerScore>playerScore) {
        finalMessage.textContent = "YOU LOST!!!";
    } else {
        finalMessage.textContent = "YOU TIED!!";
    }
    finalMessageDisplay.append(finalMessage);
    newGame = true;
    gameCounter = 0;
}

function playerLoss(computer) {
    computerScore++;
}

function playerWin(computer) {
    playerScore++;
}

//this is where it all happens after the click!
function playRound (playerChoice) {

    let computerChoice = computerPlay();
    drawComputerChoice(computerChoice);
    compareHands(playerChoice,computerChoice);
    updateScoreBoard();

    gameCounter++;

    if(gameCounter>=5) {
        endGame();
    }
}

let boxes = document.querySelectorAll("[data-choice]");
let computerDiv = document.querySelector("#computer-choice");
let computerDisplay = document.querySelector("i.computer");
let playerScoreDisplay = document.querySelector(".player-score");
let computerScoreDisplay = document.querySelector(".computer-score");
let finalMessageDisplay = document.querySelector(".final-message");
let finalMessage = document.createElement("h3");
let playerScore = 0;
let computerScore = 0;
let winState = "";
let gameCounter = 0;
let newGame = true;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(newGame) {
            playerScore = 0;
            computerScore = 0;
            finalMessage.textContent = " ";
            finalMessageDisplay.append(finalMessage);
            newGame = false;
        }
        let playerChoice = box.dataset.choice.toUpperCase();
        winState = playRound(playerChoice);
    });
});
