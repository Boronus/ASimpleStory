import '../main.css';

/*class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

const animal = new Animal('animal');
animal.speak();*/

class Canvas {
    constructor() {
        this.element = document.getElementById('game_canvas');
        this.resize();
        this.element.style.background = 'lightgray';
        window.onresize = this.resize;
    }
    resize() {
        console.log('resize');
        let canvas = document.getElementById('game_canvas');
        //console.log( window.innerHeight );
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    }
}

const canvas = new Canvas();

let canvasE = document.getElementById('game_canvas');
let ctx = canvasE.getContext('2d');

var myFont = new FontFace('Determination', 'url(/fonts/determination.otf)');

myFont.load().then(function(font){
    document.fonts.add(font);

    //console.log('Font loaded');
    ctx.font = '50px "Determination"';
    ctx.textBaseline = 'top';
    ctx.fillText('A Simple Story', 20, 10);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(300,150);
    ctx.stroke();

});



