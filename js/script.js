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
    document.getElementById('myBtn').addEventListener('click', function(){
        const bottone = $('#myBtn');
        bottone.addClass('none');
        ('keydown', function(move){
            //salvo il topo in nuna costante
            const topo = $('.mouse')
            // freccia sinistra = 37
            if(move.which == 37){
                topo.base -=1;
            }
            //freccia destra
            else if(move.which == 39){
                topo.base +=1;
            }
            else if(topo.which == 38){
                topo.altezza +=1;
            }
            else if(topo.which == 40){
                topo.altezza -= 1;
            }

        });
    });


    const topo = $('.mouse');


});

