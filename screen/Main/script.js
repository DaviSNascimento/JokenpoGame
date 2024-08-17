document.addEventListener('DOMContentLoaded', function () {

    // Função principal para definir o modo de jogo
    function modoJogo(modoInfinito, melhorDe3) {
        // Seleciona todos os botões e adiciona um addEventListener de clique para cada um deles
        document.querySelectorAll('buttons').forEach(button => {
            button.addEventListener('click', function(){
                
                // Obtém o atributo 'data-choice' do botão clicado para identificar a escolha do modo
                const choice = this.getAttribute('data-choice');

                // Verifica se a escolha foi o modo infinito
                if (choice === 'modoInfinito') {
                    // Exibe uma mensagem no console indicando que o modo Infinito foi escolhido 
                    console.log('modo Infinito escolhido')
                // Verifica se a escolha foi o modo "Melhor de 3"
                } else if (choice === 'melhorDe3') {
                    // Exibe uma mensagem no console indicando que o modo "Melhor de 3" foi escolhido
                    console.log('modo melhor de 3 escolhido')
                }
            });
        });
    }
    
    // A função modoJogo() será chamada para iniciar a escolha do modo de jogo.
});
