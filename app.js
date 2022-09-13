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
let total = '0';
let wins = '0';
let losses = '0';

/* Actions */
function loadPage() {
    displayScoreboard();
}

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
const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
}

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
