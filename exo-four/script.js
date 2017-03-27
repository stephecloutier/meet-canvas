// hepl-mmi/meet-canvas - exo-four

let oApp;

class ExoFourCanvApp extends CanvApp {
    constructor(sCanvasID) {
        super(sCanvasID);
    }

    drawHouse() {
        let {context} = this;

        context.strokeStyle = "red";
        context.lineWidth = 5;

        context.beginPath();

        // roof
        context.moveTo(40, 80);
        context.lineTo(80, 40);
        context.lineTo(120, 80);

        // walls
        context.moveTo(60, 80);
        context.lineTo(60, 120);
        context.lineTo(100, 120);
        context.lineTo(100, 80);

        // door
        context.rect(75, 100, 10, 20);

        context.stroke();
    }

    drawSun(){
        let {context} = this;

        context.fillStyle = "yellow";
        context.strokeStyle = "orange";

        context.beginPath();
        context.arc(180, 40, 30, 0, Math.PI * 2);

        context.fill();
        context.stroke();
    }
    drawPalmtree() {

    }

    drawWaves() {

    }

    draw() {
        this.drawHouse();
        this.drawSun();
        this.drawPalmtree();
        this.drawWaves();
    }
}

oApp = new ExoFourCanvApp("app");
oApp.draw();
