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

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  const playerWins =
    (playerSelection === "r" && computerSelection === "scissors") ||
    (playerSelection === "s" && computerSelection === "paper") ||
    (playerSelection === "p" && computerSelection === "rock");

  const computerWins =
    (computerSelection === "rock" && playerSelection === "s") ||
    (computerSelection === "scissors" && playerSelection === "p") ||
    (computerSelection === "paper" && playerSelection === "r");

  const tieUp =
    (computerSelection === "rock" && playerSelection === "r") ||
    (computerSelection === "scissors" && playerSelection === "s") ||
    (computerSelection === "paper" && playerSelection === "p");

  if (playerWins) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    alert("You win!");
    return "player wins";
  } else if (computerWins) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    alert("looza");
    return "computer wins";
  } else if (tieUp) {
    console.log(`${playerSelection} and ${computerSelection} It's a tie!`);
    alert("tie-tie");
    return "tie";
  } else {
    return "try again";
  }
};

const game = () => {
  let roundCount = 1;
  let computerTotalWins = 0;
  let playerTotalWins = 0;
  let ties = 0;

  while (roundCount <= 5) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    let outcome = playRound(playerChoice, computerChoice);
    if (outcome === "player wins") {
      playerTotalWins++;
      roundCount++;
    } else if (outcome === "computer wins") {
      computerTotalWins++;
      roundCount++;
    } else if (outcome === "tie") {
      ties++;
      roundCount++;
    } else {
      alert("eh check da letta");
      requestIdleCallback;
    }

    console.log(roundCount);
  }

  if (playerTotalWins > computerTotalWins) {
    return alert("You win the game!");
  } else if (computerTotalWins > playerTotalWins) {
    return alert("You lose the game!");
  } else {
    return alert("The game is a tie! Go again", window.location.reload());
  }
};

game();

alert("try again", window.location.reload());
