// =================================Getting HTML Tags ========================================================
//------------------------------------ Player elements ------------------------------------------------------
const playerScore = document.getElementById("playerScore");
const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissor = document.getElementById("playerScissor");

//---------------------------------------- Bot elements-------------------------------------------------------
const botScore = document.getElementById("botScore");
const botRock = document.getElementById("botRock");
const botPaper = document.getElementById("botPaper");
const botScissor = document.getElementById("botScissor");

// ----------------------------------Choices for the game ------------------------------------------------------
const choiceRock = document.getElementById("choiceRock");
const choicePaper = document.getElementById("choicePaper");
const choiceScissor = document.getElementById("choiceScissor");

const result = document.getElementById("result");
const resetButton = document.getElementById("resetButton");
const gameRules = document.getElementById("gameRules");
const rulesDiv = document.querySelector(".rules-div");
const backButton = document.getElementById("backButton");
// ================================================================================================================
// 0 = rock , 1 = paper , 2 = sicssors
// ================================================= Getting Images ================================================
//------------------------------------ Getting Rock ------------------------------------------------------

function GettingRock() {
  playerRock.style.display = "block";
  playerPaper.style.display = "none";
  playerScissor.style.display = "none";
  result.innerHTML = " ";
  let botChoice = BotInput();
  let playerChoice = 0;
  console.log(`playerChoice is ${playerChoice}`);
  console.log(`botChoice is ${botChoice}`);
  CheckCombinations(playerChoice, botChoice);
}
//------------------------------------ Getting Paper ------------------------------------------------------
function GettingPaper() {
  playerRock.style.display = "none";
  playerPaper.style.display = "block";
  playerScissor.style.display = "none";
  result.innerHTML = " ";
  let botChoice = BotInput();
  let playerChoice = 1;
  console.log(`playerChoice is ${playerChoice}`);
  console.log(`botChoice is ${botChoice}`);
  CheckCombinations(playerChoice, botChoice);
}
//------------------------------------ Getting Scissors ------------------------------------------------------

function GettingScissors() {
  playerRock.style.display = "none";
  playerPaper.style.display = "none";
  playerScissor.style.display = "block";
  result.innerHTML = " ";
  let botChoice = BotInput();
  let playerChoice = 2;
  console.log(`playerChoice is ${playerChoice}`);
  console.log(`botChoice is ${botChoice}`);
  CheckCombinations(playerChoice, botChoice);
}

// ================================================= Showing Images ================================================
function ShowingImages() {
  window.addEventListener("keydown", (e) => {
    if (e.key == "r" || e.key == "R") {
      GettingRock();
    } else if (e.key == "P" || e.key == "p") {
      GettingPaper();
    } else if (e.key == "S" || e.key == "s") {
      GettingScissors();
    }
  });

  choiceRock.addEventListener("click", () => {
    GettingRock();
  });

  choicePaper.addEventListener("click", () => {
    GettingPaper();
  });

  choiceScissor.addEventListener("click", () => {
    GettingScissors();
  });
}
// ================================================================================================================

// =================================================== Bot Input ==================================================
let arr = [botRock, botPaper, botScissor];

function BotInput() {
  arr.forEach((i) => {
    i.style.display = "none";
  });
  let randomBot = Math.floor(Math.random() * arr.length);
  // console.log(randomBot);
  console.log(arr[randomBot]);
  arr[randomBot].style.display = "block";
  return randomBot;
}
// ================================================================================================================
// 0 = rock , 1 = paper , 2 = sicssors
// ==================================================Check Combinations============================================
function CheckCombinations(player, bot) {
  result.innerHTML = " ";
  if (player == bot) {
    result.innerHTML = "Draw";
    result.style.color = "#747070";
    console.log("Draw");
  } else if (
    (player === 0 && bot === 2) ||
    (player === 1 && bot === 0) ||
    (player === 2 && bot === 1)
  ) {
    result.innerHTML = "You Won!";
    AddPlayerScore();
    console.log("You won!");
    result.style.color = "#2d803f";
  } else if (
    (player === 2 && bot === 0) ||
    (player === 0 && bot === 1) ||
    (player === 1 && bot === 2)
  ) {
    result.innerHTML = "Bot Won!";
    result.style.color = "#e60000";
    AddBotScore();
    console.log("Bot Won!");
  }
}
// ================================================================================================================
// ==================================================== Score Board ===============================================
let presentPlayerScore = 0;
let presentBotScore = 0;
function AddPlayerScore() {
  presentPlayerScore++;
  playerScore.innerHTML = `Score:${presentPlayerScore}`;
}

function AddBotScore() {
  presentBotScore++;
  botScore.innerHTML = `Score:${presentBotScore}`;
}
// ================================================================================================================

// ==================================================== reset Button ===============================================
resetButton.addEventListener("click", () => {
  location.reload();
});

// ================================================================================================================

gameRules.addEventListener('click' , ()=>{
  rulesDiv.style.display = "block";
  rulesDiv.style.visibility = "visible";
})

backButton.addEventListener("click", () => {
  rulesDiv.style.display = "none";
  rulesDiv.style.visibility = "hidden ";
});

window.onload = function () {
  ShowingImages();
};

// if (result.innerHTML === "win") {
//   document.getElementById("result").className = "win";
//   document.getElementById("result").classList.remove("lose");
//   document.getElementById("result").classList.remove("draw");
//   document.getElementById("result").textContent = "You Win!";
// } else if (result.innerHTML === "lose") {
//   document.getElementById("result").classList.remove("win");
//   document.getElementById("result").classList.remove("draw");
//   document.getElementById("result").className = "lose";
//   document.getElementById("result").textContent = "You Lose!";
// } else {
//   document.getElementById("result").classList.remove("win");
//   document.getElementById("result").classList.remove("lose");
//   document.getElementById("result").className = "draw";
//   document.getElementById("result").textContent = "It's a Draw!";
// }
