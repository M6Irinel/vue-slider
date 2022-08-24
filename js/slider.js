const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
];

new Vue( {
	el: '#slider',
	data () {
		return {
			slides,
			i: 0
		}
	},
	methods: {
		next () {
			if ( ++this.i >= slides.length )
				this.i = 0;
		},
		prev () {
			if ( --this.i < 0 )
				this.i = slides.length - 1;
		}
	},
} );
