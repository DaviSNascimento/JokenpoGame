document.addEventListener("DOMContentLoaded", function() {
    const gameArea = document.getElementById('gameArea');
    const resultArea = document.getElementById('resultArea');
    const statistics = document.getElementById('statistics');
    const resultMessage = document.getElementById('resultMessage');
    const playAgainButton = document.getElementById('playAgain');

    const gamesPlayedElem = document.getElementById('gamesPlayed');
    const computerWinsElem = document.getElementById('computerWins');
    const playerWinsElem = document.getElementById('playerWins');
    const tiesElem = document.getElementById('ties');

    let gamesPlayed = 0;
    let computerWins = 0;
    let playerWins = 0;
    let ties = 0;

    let playerChoice = '';
    let gameMode = '';

    document.getElementById('infiniteMode').addEventListener('click', function() {
        gameMode = 'infinite';
        startGame();
    });

    document.getElementById('scoreMode').addEventListener('click', function() {
        gameMode = 'score';
        playerWins = 0;
        computerWins = 0;
        updateStatistics();
        startGame();
    });

    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', function() {
            playerChoice = this.dataset.choice;
            resultArea.style.display = 'none';
            setTimeout(() => {
                playGame();
            }, 500);
        });
    });
/*
    playAgainButton.addEventListener('click', function() {
        resultArea.style.display = 'none';
        gameArea.style.display = 'block';
    });

    function startGame() {
        gameArea.style.display = 'block';
        statistics.style.display = 'block';
        resultArea.style.display = 'none';
    }
*/
    function playGame() {
        const computerChoice = generateComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        gamesPlayed++;
        gamesPlayedElem.textContent = gamesPlayed;

        if (result === 'win') {
            playerWins++;
            resultMessage.textContent = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}. Você ganhou!`;
        } else if (result === 'lose') {
            computerWins++;
            resultMessage.textContent = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}. Você perdeu.`;
        } else {
            ties++;
            resultMessage.textContent = `Você escolheu ${playerChoice} e o computador escolheu ${computerChoice}. Empate!`;
        }

        updateStatistics();
        checkForWinner();
        gameArea.style.display = 'none';
        resultArea.style.display = 'block';
    }

    function generateComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(player, computer) {
        if (player === computer) {
            return 'tie';
        }
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'win';
        }
        return 'lose';
    }

    function updateStatistics() {
        computerWinsElem.textContent = computerWins;
        playerWinsElem.textContent = playerWins;
        tiesElem.textContent = ties;
    }

    // function melhor de 3
    function checkForWinner() {
        if (gameMode === 'score') {
            if (playerWins === 3) {
                alert('Você venceu a partida!');
                resetGame();
            } else if (computerWins === 3) {
                alert('O computador venceu a partida!');
                resetGame();
            }
        }
    }
    // function melhor de 3
    function resetGame() {
        playerWins = 0;
        computerWins = 0;
        gamesPlayed = 0;
        ties = 0;
        updateStatistics();
        startGame();
    }
});
