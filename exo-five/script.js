// hepl-mmi/meet-canvas - exo-five

let oApp;

class ExoFiveCanvApp extends CanvApp {
    draw() {
        let {context, width, height} = this,
            iStarSize = 250,
            iSteps = 17,
            iCurrentStep = 0;

        context.strokeStyle = "red";

        context.translate(width / 2, height / 2)

        while(++iCurrentStep <= iSteps) {
            context.rotate(Math.PI * 2 / iSteps);
            context.strokeRect(iStarSize / 2 * -1, iStarSize / 2 * -1, iStarSize, iStarSize);
        }

        context.stroke();
    }
}

oApp = new ExoFiveCanvApp("app");
oApp.draw();
