document.addEventListener(DOMContentLoaded, function () {

    function modoJogo(modoInfinito, melhorDe3) {
        document.querySelectorAll('buttons').forEach(button => {
            button.addEventListener('click', function(){

                const choice = this.getAttribute('data-choice');

                if (choice === 'modoInfinito') {
                   
                    // função para iniciar jogo 
                    window.alert('modo Infinito escolhido'); 
                    
                }else if (choice === 'melhorDe3'){
                    // função para iniciar contador de stats
                    window.alert('modo Melhor de 3 escolhido');
                }



        })});

        
    }
    /* 
        id = modoInfinito
        id= melhorDe3
        func modoJogo()
        func stats()
        func updateStats()
    */
    
    
});