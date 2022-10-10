const PK_OPTIONS = ["fire", "freeze", "thunder", "flash", "startoms"];
const WIN = "Win";
const LOSE = "Lose";
const TIE = "Tie";
const VICTORIES_NEEDED = 5;
let playerWins = 0;
let computerWins = 0;

const optionButtons = {
  fire: document.querySelector(`button[data-pk="fire"]`),
  freeze: document.querySelector(`button[data-pk="freeze"]`),
  thunder: document.querySelector(`button[data-pk="thunder"]`),
  flash: document.querySelector(`button[data-pk="flash"]`),
  startoms: document.querySelector(`button[data-pk="startoms"]`),
  all: document.querySelectorAll(".option-button"),
};

const header = document.querySelector(".header-container");

const textBox = document.querySelector(".text-box-content");

const starman = document.querySelector(".starman");

function typeWriter(i, txt, className, speed) {
  if (i < txt.length) {
    document.querySelector(className).innerText += txt.charAt(i);
    i++;
    setTimeout(() => typeWriter(i, txt, className, speed), speed);
  }
}

function getComputerChoice() {
  return PK_OPTIONS[Math.floor(Math.random() * PK_OPTIONS.length)];
}

function playRound(computerSelection, playerSelection) {
  const MATCH_CASES = {
    fire: () => {
      const FIRE_MATCH = {
        freeze: WIN,
        flash: WIN,
        thunder: LOSE,
        startoms: LOSE,
      };

      return FIRE_MATCH[computerSelection]
        ? FIRE_MATCH[computerSelection]
        : TIE;
    },
    freeze: () => {
      const FREEZE_MATCH = {
        thunder: WIN,
        startoms: WIN,
        fire: LOSE,
        flash: LOSE,
      };

      return FREEZE_MATCH[computerSelection]
        ? FREEZE_MATCH[computerSelection]
        : TIE;
    },
    thunder: () => {
      const THUNDER_MATCH = {
        fire: WIN,
        flash: WIN,
        freeze: LOSE,
        startoms: LOSE,
      };

      return THUNDER_MATCH[computerSelection]
        ? THUNDER_MATCH[computerSelection]
        : TIE;
    },
    flash: () => {
      const FLASH_MATCH = {
        freeze: WIN,
        startoms: WIN,
        fire: LOSE,
        thunder: LOSE,
      };

      return FLASH_MATCH[computerSelection]
        ? FLASH_MATCH[computerSelection]
        : TIE;
    },
    startoms: () => {
      const STARTOMS_MATCH = {
        thunder: WIN,
        fire: WIN,
        freeze: LOSE,
        flash: LOSE,
      };

      return STARTOMS_MATCH[computerSelection]
        ? STARTOMS_MATCH[computerSelection]
        : TIE;
    },
  };

  return MATCH_CASES[playerSelection]();
}

function gameWinner() {
  if (playerWins > computerWins) {
    return "Player wins!";
  }

  return "Computer wins!";
}

function game(playerSelection) {
  const ROUND_WINNER = {
    [WIN]: () => {
      textBox.innerText = "";
      typeWriter(
        0,
        `•\u00a0Starman\u00a0was\u00a0impacted\u00a0by\u00a0PK\u00a0${playerSelection.toUpperCase()}`,
        ".text-box-content",
        75
      );
      playerWins++;
      starman.classList.add("damage");
      optionButtons.all.forEach((button) => {
        button.disabled = true;
        button.classList.remove("button-hover-animation");
        button.style.opacity = "0.4";
      });
      setTimeout(() => {
        starman.classList.remove("damage");
        optionButtons.all.forEach((button) => {
          button.disabled = false;
          button.classList.add("button-hover-animation");
          button.style.opacity = "1";
        });
      }, 3000);
    },
    [LOSE]: () => {
      textBox.innerText = "";
      typeWriter(
        0,
        `•\u00a0Starman\u00a0has\u00a0attacked\u00a0you`,
        ".text-box-content",
        75
      );
      computerWins++;
      header.classList.add("damage");
      optionButtons.all.forEach((button) => {
        button.disabled = true;
        button.classList.remove("button-hover-animation");
        button.style.opacity = "0.4";
      });
      setTimeout(() => {
        header.classList.remove("damage");
        optionButtons.all.forEach((button) => {
          button.disabled = false;
          button.classList.add("button-hover-animation");
          button.style.opacity = "1";
        });
      }, 3000);
    },
    [TIE]: () => {
      textBox.innerText = "";
      typeWriter(
        0,
        `•\u00a0The\u00a0PKs\u00a0have\u00a0clashed`,
        ".text-box-content",
        75
      );
      optionButtons.all.forEach((button) => {
        button.disabled = true;
        button.classList.remove("button-hover-animation");
        button.style.opacity = "0.4";
      });
      setTimeout(() => {
        optionButtons.all.forEach((button) => {
          button.disabled = false;
          button.classList.add("button-hover-animation");
          button.style.opacity = "1";
        });
      }, 3000);
    },
  };

  if (playerWins < VICTORIES_NEEDED && computerWins < VICTORIES_NEEDED) {
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playerSelection);

    const roundMessage = playRound(computerSelection, playerSelection);

    console.log(roundMessage);

    ROUND_WINNER[roundMessage]();

    return;
  }

  console.log(gameWinner());
}

optionButtons.fire.addEventListener("click", () => game("fire"));
optionButtons.freeze.addEventListener("click", () => game("freeze"));
optionButtons.thunder.addEventListener("click", () => game("thunder"));
optionButtons.flash.addEventListener("click", () => game("flash"));
optionButtons.startoms.addEventListener("click", () => game("startoms"));
