/* Imports */
const shoots = ['rock', 'paper', 'scissors'];

function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}
function randomShoots(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}
/* State */
let gameState = 'choose'; // or results

/* Actions */
function loadPage() {}

/* Components */
function runGame(player) {
    gameState = 'results';
    const computerShoot = randomShoots(shoots);
    console.log(computerShoot);
    console.log(player);
}

/* Component */

// get DOM
const rockShoot = document.getElementById('rock-shoot');
const paperShoot = document.getElementById('paper-shoot');
const scissorsShoot = document.getElementById('scissors-shoot');

// display
// event listeners

rockShoot.addEventListener('click', () => {
    runGame('rock');
});

paperShoot.addEventListener('click', () => {
    runGame('paper');
});

scissorsShoot.addEventListener('click', () => {
    runGame('scissors');
});

/* Run page load code */
loadPage();
