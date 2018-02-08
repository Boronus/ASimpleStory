import '../main.css';
import { Canvas } from './canvas.js';

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

setTimeout( function () {
    ctx.fillText('A Simple Story', 120, 110);
}, 1000);



