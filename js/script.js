// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce



const app = new Vue({
    el: '#root',
    data: {
        items: [{
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum'
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ],
        currentImg: 0,
        autoPlayId: null
    },
    methods: {
        nextImage: function () {
            if (this.currentImg == this.items.length - 1) {
                this.currentImg = 0;
            } else {
                this.currentImg++;
            }
        },
        prevImage: function () {
            if (this.currentImg == 0) {
                this.currentImg = this.items.length - 1;
            } else {
                this.currentImg--;
            }
        },
        selectImg: function (index) {
            this.currentImg = index;
        },
        stopPlay: function () {
            clearInterval(this.autoPlayId);
        },
        play: function () {
            this.autoPlayId = setInterval(() => {
				this.nextImage();
			}, 3000);
            // oppure
            // let self = this;
            // this.autoPlayId = setInterval(function () {
            //     self.nextImage();
            // }, 3000);
        }
    },
    created: function () {
        this.play();
    }
});