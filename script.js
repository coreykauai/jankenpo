const getComputerChoice = () => {
  const rando = Math.ceil(Math.random() * 3);

  if (rando === 1) {
    return "Rock";
  } else if (rando === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }

  //   switch (rando){
  //     case 1:
  //    return "rock";
  //    case 2 :
  //    return "paper";
  //    case 3:
  //     default:
  //         return "scissors"
  //   }
};

let computerChoice = getComputerChoice();
console.log({ computerChoice });
