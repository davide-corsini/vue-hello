// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt 

let move = new Vue({
    el: '#container',
    data: {
        message: false,
        src: ''
    },
    methods: {
        addText() {
            this.message = !this.message;
        },
        addImg() {

            (this.src == '') ? this.src += 'https://i.ytimg.com/vi/gzc80ics6sI/maxresdefault.jpg' : this.src = '';
            
        }
    }
})

$(document).ready(function(){

    let topo = document.querySelector('.mouse');
    console.log(topo);
    let movimento = 10; //questo 10rappresenta i miei px
    
    //fase di partenza
    window.addEventListener('load', () => {
        topo.style.position = 'absolute';
        topo.style.right = 10;//qui é da dove parte il toporagno asse delle x
        topo.style.bottom = 30;//qui stessa cosa ma in altezza sse delle y
    });
    //qui gli dico che al click del bottone puoi muovere le frecce ma non va 
    document.getElementById('mioBottone').click(function(){
        const bottone = $('#mioBottone');
        bottone.addClass('none');
    addEventListener('keydown', (movimento) => {
        switch(movimento.key){
            case 'ArrowLeft':
                topo.style.left = parseInt(topo.style.left) - moveby + 'px';
                break;
            case 'ArrowRight':
                topo.style.left = parseInt(topo.style.left) + moveby + 'px';
                break;
            case 'ArrowUp':
                topo.style.top = parseInt(topo.style.top) - moveby + 'px';
                break;
            case 'ArrowDown':
                topo.style.top = parseInt(topo.style.top) + moveby + 'px';
                break;
        }
    })
    })
        

});    








