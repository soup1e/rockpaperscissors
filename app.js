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
let total = '0';
let wins = '0';
let losses = '0';

/* Actions */
function loadPage() {
    displayScoreboard();
}
/* Component */
const results = document.getElementById('results');
const computerShootImage = document.getElementById('computer-shoot');
const playerShootImage = document.getElementById('player-shoot');

/* Components */

function runGame(player) {
    const computerShoot = randomShoots(shoots);

    console.log(computerShoot, 'computers throw');
    console.log(player, 'players throw');

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
    console.log(result);
    if (result === 'player') {
        playerWin.classList.remove('hidden');
    } else if (result === 'computer') {
        playerLose.classList.remove('hidden');
    } else if (result === 'tie') {
        playerTie.classList.remove('hidden');
    }
}

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
