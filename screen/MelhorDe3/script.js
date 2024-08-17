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

    const playerPontos = document.getElementById('playerPontos');
    const AIPontos = document.getElementById('AIPontos');
    const resultPlayer = document.getElementById('resultPlayer');

    // Variáveis para armazenar as pontuações e contadores
    let numeroPartidas = 0;
    let numeroVitorias = 0;
    let numeroEmpates = 0;
    let numeroDerrotas = 0;

    let pPontos = 0;
    let aiPontos = 0;
   
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
        areaJogo.style.display ='flex';
        resultMessage.textContent = '';
        resultPlayer.style.display = 'none';       
    });
                                 
    // Atualiza as estatísticas na tela
    const updateStats = () => {
        numVitorias.textContent = numeroVitorias;
        numDerrotas.textContent = numeroDerrotas;
        numEmpates.textContent = numeroEmpates;
        playerPontos.textContent = pPontos;
        AIPontos.textContent = aiPontos;
    };    

    // Função principal do jogo
    function Jogar(choice) {          
        const choiceAI = randomChoiceAI();
        const resultado = gameWinner(choice, choiceAI);
        
        areaResultado.style.display = 'flex';
        numeroPartidas++;
        numPartidas.textContent = numeroPartidas;

        // Atualiza o resultado e as pontuações
        if (resultado === 'vitoria') {
            resultMessage.textContent = `Você escolheu ${choice} e a AI escolheu ${choiceAI}. Parabéns, você Ganhou!`;
            pPontos++;
            numeroVitorias++;
        } else if (resultado === 'derrota') {
            resultMessage.textContent = `Você escolheu ${choice} e a AI escolheu ${choiceAI}. Infelizmente você perdeu.`;
            aiPontos++;
            numeroDerrotas++;
        } else {
            resultMessage.textContent = `Você escolheu ${choice} e a AI escolheu ${choiceAI}. Empate!`;
            numeroEmpates++;
        }

        updateStats();
        determineWinner();
        areaJogo.style.display ='none';
    };

    // Verifica se alguém atingiu 3 pontos e declara o vencedor
    const determineWinner = () =>{   
       if (pPontos === 3) {      
            resultPlayer.style.display = 'flex';
            resultPlayer.style.color = 'rgb(26, 187, 26)';
            resultPlayer.textContent = `Você Ganhou!`;
            resetGame();
        } else if (aiPontos === 3) {            
            resultPlayer.style.display = 'flex';
            resultPlayer.style.color = 'red';
            resultPlayer.textContent = `Você Perdeu!`;
            resetGame();
        }
    };

    // Reseta o jogo para uma nova rodada
    function resetGame() {
        pPontos = 0;
        aiPontos = 0;
        updateStats();
        areaResultado.style.display = 'flex';
        areaJogo.style.display ='none';
        resultMessage.textContent = '';
    }

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
