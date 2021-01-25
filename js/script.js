// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt 
//dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.

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