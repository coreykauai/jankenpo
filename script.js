const playerScore = document.querySelector(".player-score");
const compScore = document.querySelector(".comp-score");
const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".output");
const gameBoard = document.querySelector(".game");

const getComputerChoice = () => {
  const rando = Math.ceil(Math.random() * 3);

  if (rando === 1) {
    return "rock";
  } else if (rando === 2) {
    return "scissors";
  } else {
    return "paper";
  }
};

const getPlayerChoice = () => {
  let playerChoice = prompt(
    "Type 'r' fo 'rock', 'p' fo 'paper', an 's' fo 'scissors' fo play Jan Ken Po."
  );

  if (playerChoice === null) {
    alert("Fine den!");
    return;
    //if result = true call game()
  } else if (playerChoice === "") {
    playerChoice = prompt(
      "Type 'r' fo 'rock', 'p' fo 'paper', an 's' fo 'scissors' fo play Jan Ken Po."
    );
  }
  return playerChoice;
};
const updateOutput = (msg) => {
  output.innerText = msg;
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  const playerWins =
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock");

  const computerWins =
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock");

  const tieUp =
    (computerSelection === "rock" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "paper");

  if (playerWins) {
    updateOutput(`You win! ${playerSelection} beats ${computerSelection}`);
    return "player wins";
  } else if (computerWins) {
    updateOutput(`You lose! ${computerSelection} beats ${playerSelection}`);
    return "computer wins";
  } else if (tieUp) {
    updateOutput(`${playerSelection} and ${computerSelection} It's a tie!`);
    return "tie";
  }
};
let computerTotalWins = 0;
let playerTotalWins = 0;

const game = (evnt) => {
  let computerChoice = getComputerChoice();
  let playerChoice = evnt.target.dataset.type;

  let outcome = playRound(playerChoice, computerChoice);
  console.log(outcome);
  if (outcome === "player wins") {
    playerTotalWins++;
    playerScore.innerText = playerTotalWins;
  } else if (outcome === "computer wins") {
    computerTotalWins++;
    compScore.innerText = computerTotalWins;
  }

  if (playerTotalWins === 5) {
    gameBoard.innerText = "You win the game! Refresh fo play again";
  } else if (computerTotalWins === 5) {
    gameBoard.innerText = "You lose the game! Refresh fo play again";
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", game);
});
