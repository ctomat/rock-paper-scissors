/* The constant is initialized with the three possible options. 
Since it will be immutable, it is written in capital letters. */
const ROCK_PAPER_SCISSORS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return ROCK_PAPER_SCISSORS[
    Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)
  ];
}

function playRound(computerSelection, playerSelection) {
  const TIE_MESSAGE = "Tie!";
  const WIN_MESSAGE = "You win!";
  const LOST_MESSAGE = "You lose!";
  const INVALID_OPTION = "The option you chose is not valid";

  const MATCH_CASES = {
    rock: () => {
      if (computerSelection === playerSelection) {
        return TIE_MESSAGE;
      } else if (computerSelection === "scissors") {
        return WIN_MESSAGE;
      } else {
        return LOST_MESSAGE;
      }
    },
    paper: () => {
      if (computerSelection === playerSelection) {
        return TIE_MESSAGE;
      } else if (computerSelection === "rock") {
        return WIN_MESSAGE;
      } else {
        return LOST_MESSAGE;
      }
    },
    scissors: () => {
      if (computerSelection === playerSelection) {
        return TIE_MESSAGE;
      } else if (computerSelection === "paper") {
        return WIN_MESSAGE;
      } else {
        return LOST_MESSAGE;
      }
    },
  };

  return MATCH_CASES[playerSelection]
    ? MATCH_CASES[playerSelection]()
    : INVALID_OPTION;
}

function onClickStartButton() {
  const playerSelection = prompt(
    "Write down your choice; it can be rock, paper or scissors"
  );
  console.log(playRound(computerSelection, playerSelection));
}
