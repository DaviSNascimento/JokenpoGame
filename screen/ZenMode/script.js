document.addEventListener('DOMContentLoaded', function() { 
    // Seleção de elementos do DOM
    const resultMessage = document.getElementById('resultMessage');
    const areaResultado = document.getElementById('areaResultado');
    const areaJogo = document.getElementById('areaJogo');
    const playAgain = document.getElementById('playAgain');

    const numPartidas = document.getElementById('numPartidas');
    const numVitorias = document.getElementById('numVitorias');
    const numEmpates = document.getElementById('numEmpates');
    const numDerrotas = document.getElementById('numDerrotas');

    // Variáveis para armazenar contadores
    let numeroPartidas = 0;
    let numeroVitorias = 0;
    let numeroEmpates = 0;
    let numeroDerrotas = 0;

    // Evento de clique para as escolhas de jogo
    areaJogo.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click',function() {
            const choice = this.getAttribute('data-choice');
            Jogar(choice);
        });
    });

    // Evento de clique para jogar novamente
    playAgain.addEventListener('click', function(){ 
        areaResultado.style.display = 'none';
        areaJogo.style.display = 'flex';
        resultMessage.textContent = '';
        resetGame();
    });
    
    // Atualiza as estatísticas na tela
    const updateStats = () => {
        numVitorias.textContent = numeroVitorias;
        numDerrotas.textContent = numeroDerrotas;
        numEmpates.textContent = numeroEmpates;
    };    

    // Função principal do jogo
    function Jogar(choice) {          
        const choiceAI = randomChoiceAI();
        const resultado = gameWinner(choice, choiceAI);

        areaResultado.style.display = 'flex';
        numeroPartidas++;
        numPartidas.textContent = numeroPartidas;

        // Atualiza o resultado e os contadores
        if (resultado === 'vitoria') {
            resultMessage.textContent = `Você escolheu ${choice} e a AI escolheu ${choiceAI}. Parabéns, você Ganhou!`;
            numeroVitorias++;
        } else if (resultado === 'derrota') {
            resultMessage.textContent = `Você escolheu ${choice} e a AI escolheu ${choiceAI}. Infelizmente você perdeu.`;
            numeroDerrotas++;
        } else {
            resultMessage.textContent = `Você escolheu ${choice} e a AI escolheu ${choiceAI}. Empate!`;
            numeroEmpates++;
        }
        updateStats();
        areaJogo.style.display = 'none';
    };

    // Escolha aleatória da AI
    function randomChoiceAI() {
        const choices = ['pedra', 'papel', 'tesoura'];
        return choices[Math.floor(Math.random() * choices.length)];
    };

    // Determina o vencedor da rodada
    function gameWinner(player, AI) {
        if (player === AI) {
            return 'empate';
        } else if (
            (player === 'pedra' && AI === 'tesoura') ||
            (player === 'papel' && AI === 'pedra') ||
            (player === 'tesoura' && AI === 'papel')
        ) {
            return 'vitoria';
        } else {
            return 'derrota';
        }
    };
});
