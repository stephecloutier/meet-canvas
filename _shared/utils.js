// hepl-mmi/meet-canvas - utils

const fIsCanvasCompatible = function($canvas) {
    return !!$canvas.getContext;
};

window.isCanvasCompatible = fIsCanvasCompatible;
