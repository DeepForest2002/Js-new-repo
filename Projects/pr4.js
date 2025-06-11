let random = parseInt(Math.random() * 100 + 1);
const guessfield = document.querySelector("#guessfield");
const submit = document.querySelector("#subt");
const prev_guess = document.querySelector(".prev-guess");
const remaining = document.querySelector(".remaining");
const lowHi = document.querySelector(".lowhi");
let startOver = document.querySelectorAll(".result-section");

//create a para
const para = document.createElement("p");

//create an array to store the guesses
let arr = [];
let numbers_guess = 1;
let playGame = true;

//GameStarts
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    //get the value of guess
    const g_val = parseInt(guessfield.value);
    console.log(g_val);
    check_val(g_val);
  });
}

//To check if the number is valid or not (means no char and no neg val)
function check_val(guess) {
  //check if the value is right or wrong
  if (isNaN(guess)) {
    alert("Please enter a valid input");
  } else if (guess < 1) {
    alert("Please enter a positive number");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    arr.push(guess);
    if (numbers_guess === 11) {
      displayguess(guess);
      DisplayMessage(`Game over, Random number was ${random}`);
      endGame();
    } else {
      displayguess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == random) {
    DisplayMessage("Your guess is right");
    endGame();
  } else if (guess < random) {
    DisplayMessage("Number is too low");
  } else {
    DisplayMessage("Number is too high");
  }
}

function displayguess(guess) {
  guessfield.value = "";
  prev_guess.innerHTML = `<h5>Prev Guesses: ${arr},</h5> `;
  numbers_guess += 1;
  remaining.innerHTML = `<h5>Remaining Guesses: ${11 - numbers_guess} </h5>`;
}

function DisplayMessage(message) {
  lowHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  guessfield.value = "";
  guessfield.setAttribute("disabled", "true");
  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

  if (!startOver.contains(para)) {
    startOver.appendChild(para);
  }

  playGame = false;

  // ⚠️ Don't call newGame() here — wait for user to click
  const newgame = document.querySelector("#newGame");
  newgame.addEventListener("click", newGame, { once: true });
}

function newGame() {
  // Reset everything
  random = Math.floor(Math.random() * 100) + 1;
  arr = [];
  numbers_guess = 1;
  remaining.innerHTML = `<h5>Remaining Guesses: ${11 - numbers_guess}</h5>`;
  prev_guess.innerHTML = "";
  lowHi.innerHTML = "";
  guessfield.removeAttribute("disabled");

  // Remove the restart button
  if (startOver.contains(para)) {
    startOver.removeChild(para);
  }

  playGame = true;
}
