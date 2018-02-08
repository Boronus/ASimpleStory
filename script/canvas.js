export class Canvas {
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
};
