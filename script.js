let player = 'Click here to start the game';
let playerOne = 'X';
let playerTwo = 'O';
let gameStarted = false;
let gameOver = false;
let winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
// create an array of all possible win conditions

function startGame() {
  if (gameStarted === false) {
    gameStarted = true;
    gameOver = false;
    player = "It's number 1 turn";
    document.getElementById('playerXO').innerHTML = player;
    document.querySelectorAll('.item').forEach((item) => (item.innerHTML = ''));
  }
}

function resetGame() {
  document.querySelectorAll('.item').forEach((item) => (item.innerHTML = ''));
  document.getElementById('playerXO').innerHTML = 'press start Game to begin';
  gameStarted = false;
}

function playGame() {
  if (gameStarted === true) {
    console.log('hi');
  }
}

// play the game when a square is clicked
// document
//   .querySelectorAll('.item')
//   .forEach((item) => item.addEventListener('click', startGame));

// switch (playerOne) {
//   case 'X':
//     player = "It's player 1 turn";
//     document.getElementById('playerXO').innerHTML = player;
//     break;
//   case 'O':
//     player = "It's player 2 turn";
//     document.getElementById('playerXO').innerHTML = player;
//     break;
// }
// put an X when the square is clicked

// put an O when the square is clicked
// check if the game is over
// check if the game is a draw
// check if the game is a win
// check if the game is a win for player X
// check if the game is a win for player O

// const playerX = 'x';
// const playerO = '0';
// const winPossibilited = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// const cellElements = document.querySelectorAll('[data-cell]');
// const boardElement = document.getElementById('board');
// const winningMessageElement = document.getElementById('winningMessage');
// const resetGame = document.getElementById('resetGame');
// const winningMessageTextElement = document.getElementById('winningMessageText');
// let isPlayer_O_Turn = false;

// startGame();

// resetGame.addEventListener('click', startGame);

// function startGame() {
//   isPlayer_O_Turn = false;
//   cellElements.forEach((cell) => {
//     cell.classList.remove(playerX);
//     cell.classList.remove(playerO);
//     cell.removeEventListener('click', handleCellClick);
//     cell.addEventListener('click', handleCellClick, { once: true });
//   });
//   setBoardHoverClass();
//   winningMessageElement.classList.remove('show');
// }
