// hepl-mmi/meet-canvas - exo-three

const oApp = {
    "canvas": null,
    "width": null,
    "height": null,
    "context": null,
}

oApp.setup = function() {
    this.canvas = document.getElementById("app");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    if (!window.isCanvasCompatible(this.canvas)) {
        return console.error("Your browser doesn't support canvas. Please update.")
    }
    this.context = this.canvas.getContext("2d");
}

oApp.drawFirstTriangle = function() {
    let {context} = this;

    context.fillStyle = "yellowgreen";
    context.strokeStyle = "steelblue";
    context.lineWidth = 20;

    context.beginPath();
    context.moveTo(25, 25);
    context.lineTo(100, 25);
    context.lineTo(100, 100);
    context.closePath();

    context.fill();
    context.stroke();
}

oApp.drawSecondTriangle = function() {
    let {context} = this;

    context.fillStyle = "hotpink";
    context.strokeStyle = "yellow";
    context.lineWidth = 20;

    context.beginPath();
    context.moveTo(300, 100);
    context.lineTo(220, 100);
    context.lineTo(220, 25);
    context.lineTo(300, 100);

    context.fill();
    context.stroke();
}

oApp.drawThirdTriangle = function() {
    let {context} = this;

    context.fillStyle = "limegreen";
    context.strokeStyle = "grey";
    context.lineWidth = 20;

    context.lineJoin = "round";

    context.beginPath();
    context.moveTo(400, 100);
    context.lineTo(350, 100);
    context.lineTo(350, 25);
    context.lineTo(400, 100);
    context.closePath();

    context.fill();
    context.stroke();
}

oApp.draw = function() {
    this.drawFirstTriangle();
    this.drawSecondTriangle();
    this.drawThirdTriangle();
}

oApp.setup();
oApp.draw();
