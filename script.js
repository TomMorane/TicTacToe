let player = '';
let playerOne = false;
let playerTwo = false;
let gameStarted = false;
let gameOver = false;
let result = false;
let playerOneScore = 1;
let playerTwoScore = 1;
let displayPlayerOneScore = '';
let displayPlayerTwoScore = '';

const cell1 = document.querySelector('.cell1');
const cell2 = document.querySelector('.cell2');
const cell3 = document.querySelector('.cell3');
const cell4 = document.querySelector('.cell4');
const cell5 = document.querySelector('.cell5');
const cell6 = document.querySelector('.cell6');
const cell7 = document.querySelector('.cell7');
const cell8 = document.querySelector('.cell8');
const cell9 = document.querySelector('.cell9');

let winConditions = [
  [cell1, cell2, cell3],
  [cell4, cell5, cell6],
  [cell7, cell8, cell9],
  [cell1, cell4, cell7],
  [cell2, cell5, cell8],
  [cell3, cell6, cell9],
  [cell1, cell5, cell9],
  [cell3, cell5, cell7],
];
// create an array of all possible win conditions
console.log(winConditions[1]);

// use the array of all possible win conditions to check if any of them are true

function checkWin() {
  winConditions.forEach((condition) => {
    if (
      condition[0].innerHTML === 'X' &&
      condition[1].innerHTML === 'X' &&
      condition[2].innerHTML === 'X'
    ) {
      player = 'Player 1 Wins';
      document.getElementById('playerXO').innerHTML = player;
      gameOver = true;
      displayPlayerOneScore = `Player One Score : ${playerOneScore}`;

      playerOneScore++;
      document.getElementById('playerOneScoreNumber').innerHTML =
        displayPlayerOneScore;
    } else if (
      condition[0].innerHTML === 'O' &&
      condition[1].innerHTML === 'O' &&
      condition[2].innerHTML === 'O'
    ) {
      player = 'Player 2 Wins';
      document.getElementById('playerXO').innerHTML = player;
      gameOver = true;
      displayPlayerTwoScore = `Player Two Score : ${playerTwoScore}`;
      playerTwoScore++;
      document.getElementById('playerTwoScoreNumber').innerHTML =
        displayPlayerTwoScore;
    } else if (
      cell1.innerHTML != '' &&
      cell2.innerHTML != '' &&
      cell3.innerHTML != '' &&
      cell4.innerHTML != '' &&
      cell5.innerHTML != '' &&
      cell6.innerHTML != '' &&
      cell7.innerHTML != '' &&
      cell8.innerHTML != '' &&
      cell9.innerHTML != ''
    ) {
      player = 'Draw';
      document.getElementById('playerXO').innerHTML = player;
      gameOver = true;
    }
  });
}

function startGame() {
  if (gameStarted === false) {
    gameStarted = true;
    gameOver = false;
    playerOne = true;
    player = "It's Player 1 turn";
    document.getElementById('playerXO').innerHTML = player;
    document.querySelectorAll('.item').forEach((item) => (item.innerHTML = ''));
    cell1.addEventListener('click', playGame);
    cell2.addEventListener('click', playGame);
    cell3.addEventListener('click', playGame);
    cell4.addEventListener('click', playGame);
    cell5.addEventListener('click', playGame);
    cell6.addEventListener('click', playGame);
    cell7.addEventListener('click', playGame);
    cell8.addEventListener('click', playGame);
    cell9.addEventListener('click', playGame);
  }
}

function resetGame() {
  document.querySelectorAll('.item').forEach((item) => (item.innerHTML = ''));
  document.getElementById('playerXO').innerHTML = 'Press Start Game to begin';
  gameStarted = false;
}

function playGame() {
  if (gameStarted === true && gameOver === false) {
    if (playerOne === true && playerTwo === false) {
      console.log('player 1 played');
      this.innerHTML = 'X';
      playerOne = false;
      playerTwo = true;
      player = "It's Player 2 turn";
      document.getElementById('playerXO').innerHTML = player;
      this.removeEventListener('click', playGame);
      checkWin();
    } else if (playerOne === false && playerTwo === true) {
      console.log('player 2 played');
      this.innerHTML = 'O';
      player = "It's Player 1 turn";
      document.getElementById('playerXO').innerHTML = player;
      playerOne = true;
      playerTwo = false;
      this.removeEventListener('click', playGame);
      checkWin();
    } else {
      console.log('no');
      playerOne = true;
      playerTwo = false;
      this.innerHTML = 'X';
      playerOne = false;
      playerTwo = true;
      player = "It's Player 2 turn";
      document.getElementById('playerXO').innerHTML = player;
      this.removeEventListener('click', playGame);
      checkWin();
    }
  }
}

// const counterCreator = () => {
//   let count = 0;
//   return () => {
//     console.log(count);
//     count++;
//   };
// };

// const counter = counterCreator();

// counter(); // 0
// counter(); // 1
// counter(); // 2
// counter(); // 3
