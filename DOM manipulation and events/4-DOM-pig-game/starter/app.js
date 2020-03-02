/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice, gamePlaying;

dice = Math.floor((Math.random()*6) + 1);

init();

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// let x = document.querySelector('#score-0').textContent;


/* 
event listeners get their our execution context after the global execution stack. click events and scroll events 
are event listeners

this next part will go over:

    -   how to set up an event handler
    -   what a callback function is
    -   what an anonymous function is
    -   another way to select elements by ID
    -   how to change the image in an image element

part 2 will go over:
    -   what the ternary operator can do
    -   how to add remove toggle HTML classes
*/
function nextPlayer() {

    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

};

function init() {

    gamePlaying = true;

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-0').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

};

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
    // random number
    let dice = Math.floor((Math.random()*6) + 1);
    // display result
    let diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // update the round score if the rolled number was not a 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        // next player
        nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
        // update the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
            
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

var b = '';
first();

function first() {
    b = 'hello';
    return b;
};

console.log(b);