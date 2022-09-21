/* The constant is initialized with the three possible options. 
Since it will be immutable, it is written in capital letters. */
const ROCK_PAPER_SCISSORS = ["rock", "paper", "scissors"];
const TIE_MESSAGE = "Tie!";
const WIN_MESSAGE = "You win!";
const LOST_MESSAGE = "You lose!";
const INVALID_OPTION = "The option you chose is not valid";

function getComputerChoice() {
  return ROCK_PAPER_SCISSORS[
    Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)
  ];
}

function playRound(computerSelection, playerSelection) {
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

function game() {
  const VICTORIES_NEEDED = 5;
  let playerWins = 0;
  let computerWins = 0;

  const ROUND_WINNER = {
    [WIN_MESSAGE]: () => playerWins++,
    [LOST_MESSAGE]: () => computerWins++,
  };

  function gameWinner() {
    if (playerWins > computerWins) {
      return "Player wins!";
    } else if (playerWins < computerWins) {
      return "Computer wins!";
    } else {
      return `It's a tie!`;
    }
  }

  while (playerWins < VICTORIES_NEEDED && computerWins < VICTORIES_NEEDED) {
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const playerSelection = prompt(
      "Write down your choice; it can be rock, paper or scissors."
    );

    const roundMessage = playRound(computerSelection, playerSelection);

    ROUND_WINNER[roundMessage]();

    console.log(roundMessage);
  }

  console.log(playerWins, computerWins);
  console.log(gameWinner());
}

function onClickStartButton() {
  game();
}
