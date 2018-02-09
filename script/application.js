import '../main.css';
import { Canvas } from './canvas.js';
import { Caracter } from './caracter.js';

import { events } from './lines/line-base/line-base-scene-1.js';

const canvas = new Canvas();

let canvasE = document.getElementById('game_canvas');
let ctx = canvasE.getContext('2d');
let myFont = new FontFace('Determination', 'url(/fonts/determination.otf)');

let textbox = document.getElementById('game_textbox');

myFont.load().then(function(font){
    document.fonts.add(font);
    ctx.font = '50px "Determination"';
    ctx.textBaseline = 'top';
    ctx.fillText('A Simple Story', 20, 10);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(300,150);
    ctx.stroke();
});



let andrei = new Caracter('Andrei');
console.log( andrei );

console.log( events );
showText(events[0]);

function showText ( text ) {
    console.log( text );
    textbox.innerHtml = text;
}

