const game = () =>{
var playerScore = 0;
var computerScore = 0;
var moves = 0;

const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors']

    //function to start playing the game
    playerOptions.forEach(option => {
        option.addEventListener('click', function() {
            const movesLeft = document.querySelector('.movesLeft');
            moves++;
            movesLeft.innerHTML = `Moves Left: ${10 - moves}`;

            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerOptions[choiceNumber];

            winner(this.innerText,computerChoice)

            if (moves==10){
                gameOver(playerOptions,movesLeft);
            }
        })
    })

}
 

const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player == computer) {
        result.textContent = "Tie"
    }

    else if (player == "rock"){
        if (computer == "paper") {
            result.textContent = "Computer Won🥇";
            result.textContent = "Player Lost😡";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
        else {
            result.textContent = "Player Won🏆";
            result.textContent = "Computer Lost😤";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == "scissors"){
        if (computer == "rock") {
            result.textContent = "Computer Won🥇";
            result.textContent = "Player Lost😡";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
        else {
            result.textContent = "Player Won🏆";
            result.textContent = "Computer Lost😤";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (player == "paper"){
        if (computer == "scissors") {
            result.textContent = "Computer Won🥇";
            result.textContent = "Player Lost😡";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
        else {
            result.textContent = "Player Won🏆";
            result.textContent = "Computer Lost😤";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}

const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector(".move")
    const result = document.querySelector(".result")
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
            option.style.display = 'none';
        })


        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }


    // Calling playGame function inside game
    playGame();

}

game();

