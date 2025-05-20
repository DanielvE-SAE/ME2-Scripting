const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const effect = document.getElementById("effect");
const game = document.getElementById("game");


let score = 0;
let timeLeft =30;
let gameTimer;
let x;
let y;
function moveTarget()
{
    const xMax = window.innerWidth - 50;
    const yMax = window.innerHeight - 50;
     x = Math.random() * xMax;
     y = Math.random() * yMax;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    target.style.display = 'block';

    console.log(x)
    console.log(y)
}
//try and do a function that triggers on click of target

function spawnEffect(x, y)
{
    const effect = document.createElement('div');
    effect.className = 'effect'; // use class instead of ID
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    document.getElementById('game').appendChild(effect);

    // Optional: Remove the effect after a short time (e.g., 0.5s)
    setTimeout(() => {
        effect.remove();
    }, 500);
}
function playSound() {
    const sound = document.getElementById("hitSound");
    sound.currentTime = 0; // Rewind to start in case it's still playing
    sound.play();
}

target.addEventListener('click', () =>
{
    score++;
    scoreDisplay.textContent = score;
    spawnEffect(x, y);
    moveTarget();
    playSound();
});

function startGame()
{
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    moveTarget();

    gameTimer = setInterval(()=>
    {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0)
        {
            clearInterval(gameTimer);
            clearInterval(gameTimer);
            target.style.display = 'none';
            alert(`Game Over! Total score: ${score}`); window.location = './index.html';

        }
    }, 1000);
}

window.onload = startGame;