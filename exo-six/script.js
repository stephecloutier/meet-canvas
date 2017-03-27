// hepl-mmi/meet-canvas - exo-six

let oApp;

class ExoSixCanvApp extends CanvApp {
    constructor(sSourceID, sCopyID) {
        super(sSourceID);
        this.copyCanvas = document.getElementById(sCopyID);
        this.copyWidth = this.copyCanvas.width;
        this.copyHeight = this.copyCanvas.height;
        this.copyContext = this.copyCanvas.getContext("2d");
    }

    draw(){
        let {context, width, height} = this;

        this.image = new Image();

        this.image.addEventListener("load", () => {
            context.drawImage(this.image, 0, 0, width, height);

            this.updateCopy();
            this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
        });
        this.image.src = "../_shared/big-kitten.jpg";
    }

    handleMouseMove({clientX, clientY}) {
        let {top, left} = this.canvas.getBoundingClientRect(),
            {copyWidth, copyHeight, width, height} = this,
            x, y;

        x = clientX - left - copyWidth / 2;
        y = clientY - top - copyHeight / 2;

        (x < 0) && (x = 0);
        (y < 0) && (y = 0);

        (x > width - copyWidth) && (x = width - copyWidth);
        (y > height - copyHeight) && (y = height - copyHeight);

        this.updateCopy(x, y);
    }

    updateCopy(x = 0, y = 0) {
        let {context, copyWidth, copyHeight, copyContext} = this,
            oCopy;
        oCopy = context.getImageData(x, y, copyHeight, copyWidth);
        copyContext.putImageData(oCopy, 0, 0);
    }
}

oApp = new ExoSixCanvApp("source", "copy");
oApp.draw();
