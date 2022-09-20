/* The constant is initialized with the three possible options. 
Since it will be immutable, it is written in capital letters. */
const ROCK_PAPER_SCISSORS = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return ROCK_PAPER_SCISSORS[
    Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)
  ];
}

function onClickStartButton() {
  console.log(getComputerChoice());
}
