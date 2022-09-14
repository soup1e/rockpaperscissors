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
let gameState = 'Input';

let total = '0';
let wins = '0';
let ties = '0';
let losses = '0';

/* Actions */
function loadPage() {
    displayScoreboard();
    displayResults();
}
/* Component */
const results = document.getElementById('results');
const computerShootImage = document.getElementById('computer-shoot');
const playerShootImage = document.getElementById('player-shoot');

/* Components */

function runGame(player) {
    const computerShoot = randomShoots(shoots);
    gameState = 'results';

    results.classList.remove('hidden'); // shows results

    playerShootImage.src = `assets/${player}.jpg`; // CHANGES PLAYER IMG
    computerShootImage.src = `assets/${computerShoot}.jpg`; // CHANGES COMPUTER IMG

    const result = winner(player, computerShoot);

    function winner(player, computerShoot) {
        // PLAYER WINS
        if (player === 'rock' && computerShoot === 'scissors') {
            return 'player';
        }
        if (player === 'paper' && computerShoot === 'rock') {
            return 'player';
        }
        if (player === 'scissors' && computerShoot === 'paper') {
            return 'player';
        }
        // COMPUTER WINS
        if (player === 'rock' && computerShoot === 'paper') {
            return 'computer';
        }
        if (player === 'paper' && computerShoot === 'scissors') {
            return 'computer';
        }
        if (player === 'scissors' && computerShoot === 'rock') {
            return 'computer';
        } else {
            return 'tie';
        }
    }

    const playerLose = document.getElementById('playerLose');
    const playerWin = document.getElementById('playerWin');
    const playerTie = document.getElementById('playerTie');

    if (result === 'player') {
        playerWin.classList.remove('hidden');
        wins++;
        total++;
    } else if (result === 'computer') {
        playerLose.classList.remove('hidden');
        losses++;
        total++;
    } else if (result === 'tie') {
        playerTie.classList.remove('hidden');
        ties++;
        total++;
    }
    loadPage();
}

// get DOM
const rockShoot = document.getElementById('rock-shoot');
const paperShoot = document.getElementById('paper-shoot');
const scissorsShoot = document.getElementById('scissors-shoot');

// display
const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const tiesDisplay = document.getElementById('ties-display');

const choose = document.getElementById('choose');
const playerLose = document.getElementById('playerLose');
const playerWin = document.getElementById('playerWin');
const playerTie = document.getElementById('playerTie');

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;
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

function displayResults() {
    if (gameState === 'results') {
        results.classList.remove('hidden');
        choose.classList.add('hidden');
    } else {
        results.classList.add('hidden');
        playerLose.classList.add('hidden');
        playerWin.classList.add('hidden');
        playerTie.classList.add('hidden');
        choose.classList.remove('hidden');
    }
}

const playAgainButton = document.getElementById('play-again-button');

playAgainButton.addEventListener('click', () => {
    playAgain();
});
function playAgain() {
    gameState = 'Input';
    loadPage();
}
/* Run page load code */
loadPage();
