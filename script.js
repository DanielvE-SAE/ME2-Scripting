const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const effect = document.getElementById("effect");

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
//function spawnEffect()
//{

    //effect.style.left = `${x}px`;
    //effect.style.top = `${y}px`;
    //effect.style.display = `block`;
//}

target.addEventListener('click', ()=>
{
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
    //spawnEffect();
});

function startGame()
{
    score = 0;
    timeLeft = 30;
    scoreDisplay.textConent = score;
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
            alert(`Game Over! Total score: ${score}`);
        }
    }, 1000);
}

window.onload = startGame;