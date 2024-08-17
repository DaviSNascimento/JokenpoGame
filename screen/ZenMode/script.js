document.addEventListener('DOMContentLoaded', function() { 
    const resultMessage = document.getElementById('resultMessage');
    const areaResultado = document.getElementById('areaResultado');
    const areaJogo = document.getElementById('areaJogo');
    const playAgain = document.getElementById('playAgain');


    const numPartidas = document.getElementById('numPartidas');
    const numVitorias = document.getElementById('numVitorias');
    const numEmpates = document.getElementById('numEmpates');
    const numDerrotas = document.getElementById('numDerrotas');

    

    let numeroPartidas = 0;
    let numeroVitorias = 0;
    let numeroEmpates = 0;
    let numeroDerrotas = 0;

   
    areaJogo.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click',function() {
            const choice = this.getAttribute('data-choice');
            console.log(`Escolha do Jogador: ${choice}`);
            Jogar(choice);
        })
    });
    playAgain.addEventListener('click', function(){ 
            areaResultado.style.display = 'none';
            areaJogo.style.display ='flex';
            resultMessage.textContent = '';
            resetGame();
       
    });
                                
    
    const updateStats = () => {
        numVitorias.textContent = numeroVitorias;
        numDerrotas.textContent = numeroDerrotas;
        numEmpates.textContent = numeroEmpates;

    };    
    



    function Jogar(choice) {          
        const choiceAI = randomChoiceAI();
        console.log(`Escolha da AI: ${choiceAI}`);

        const resultado = gameWinner(choice, choiceAI);
        console.log(`Resultado do Jogo: ${resultado}`);

        areaResultado.style.display = 'flex';
        numeroPartidas++;
        numPartidas.textContent = numeroPartidas;

        if (resultado === 'vitoria') {
            resultMessage.textContent = `Você escolheu ${choice} e a AI escolheu ${choiceAI}. Parabéns, você Ganhou!`;
            numeroVitorias++;
        } else if (resultado === 'derrota') {
            resultMessage.textContent = `Você escolheu ${choice} e a AI escolheu ${choiceAI}. Infelizmente você perdeu.`;
            numeroDerrotas++;
        }
        else {
            resultMessage.textContent = `Você escolheu ${choice} e a AI escolheu ${choiceAI}. Empate!`;
            numeroEmpates++;
        }
        updateStats();
        areaJogo.style.display ='none';
    };

    function randomChoiceAI() {
        const choices = ['pedra', 'papel', 'tesoura'];
        return choices[Math.floor(Math.random() * choices.length)];
    };

    function gameWinner(player, AI) {
        console.log(`Comparando ${player} com ${AI}`);

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