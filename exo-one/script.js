// hepl-mmi/meet-canvas - exo-one

( function() {

    "use strict";

    var oApp,
        _isCanvasSupported;

    oApp = {
        "canvas": null,
        "context": null,
        "width": null,
        "height": null
    };

    _isCanvasSupported = function( $canvasElt ) {
        return !!$canvasElt.getContext;
    };

    oApp.setup = function() {
        this.canvas = document.querySelector( "#my-canvas" );
        if ( !_isCanvasSupported( this.canvas ) ) {
            return console.error( "Canvas isn't supported!" );
        }
        this.context = this.canvas.getContext( "2d" );
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.draw();
    };

    oApp.drawSquares = function() {
        var oContext = this.context;

        oContext.fillStyle = "#ffffaa";
        oContext.fillRect( 0, 0, this.width / 2, this.height / 2 );
        oContext.fillStyle = "#aaffff";
        oContext.fillRect( this.width / 2, 0, this.width / 2, this.height / 2 );
        oContext.fillStyle = "#ffaaaa";
        oContext.fillRect( 0, this.height / 2, this.width / 2, this.height / 2 );
        oContext.fillStyle = "#aaffaa";
        oContext.fillRect( this.width / 2, this.height / 2, this.width / 2, this.height / 2 );
    };

    oApp.drawText = function() {
        var oContext = this.context;

        oContext.font = "100 24px Helvetica, sans-serif";
        oContext.fillStyle = "black";
        oContext.textBaseline = "top";
        oContext.fillText( "Javascript, kittens & psycho colors FTW", 20, 20 );
    };

    oApp.drawImage = function() {
        var self = this,
            oContext = self.context,
            oImage = new Image();

        oImage.addEventListener( "load", function() {
            oContext.drawImage( this, ( self.width - this.width ) / 2, ( self.height - this.height ) / 2 );
        } );
        oImage.src = "../_shared/small-kitten.png";
    };

    oApp.drawStroke = function() {
        var oContext = this.context;

        oContext.strokeStyle = "red";
        oContext.strokeRect( 10, 10, this.width - 20, this.height - 20 );
    };

    oApp.draw = function() {
        this.drawSquares();
        this.drawText();
        this.drawImage();
        this.drawStroke();
    };

    oApp.setup();

} )();
