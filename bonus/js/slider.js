const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg'
];

const app = new Vue( {
	el: '#slider',
	data () {
		return {
			slides,
			i: 0,
			isInsideMouse: false,
			autoplay: setInterval( this.invertDirectionF , 3000 ),
			fl_basis: `flex-basis: calc(100% / ${ slides.length });`,
			invertDirection: false
		}
	},
	methods: {
		present ( id ) {
			if ( this.i === id )
				return 'active';
		},

		next () {
			this.isNotInside();

			if ( ++this.i >= slides.length )
				this.i = 0;
		},

		prev () {
			this.isNotInside();

			if ( --this.i < 0 )
				this.i = slides.length - 1;
		},

		isNotInside () {
			if ( !this.isInsideMouse ) {
				this.stop_autoPlay();
				this.start_autoPlay();
			}
		},

		stop_autoPlay () {
			this.isInsideMouse = true;
			clearInterval( this.autoplay );
		},

		start_autoPlay () {
			this.isInsideMouse = false;
			this.autoplay = setInterval( this.invertDirectionF , 3000 );
		},

		active_this(id) {
			this.i = id;
		},

		invertDirectionF () {
			this.invertDirection ? this.prev() : this.next();
		}
	}
} );
