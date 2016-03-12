// hepl-mmi/meet-canvas - exo-four

( function( CanvApp ) {

    "use strict";

    var oApp;

    CanvApp.prototype.drawHouse = function() {
        var oContext = this.context;

        oContext.lineWidth = 5;
        oContext.strokeStyle = "red";

        // roof
        oContext.beginPath();
        oContext.moveTo( 40, 80 );
        oContext.lineTo( 80, 40 );
        oContext.lineTo( 120, 80 );

        // wall
        oContext.moveTo( 60, 80 );
        oContext.lineTo( 60, 120 );
        oContext.lineTo( 100, 120 );
        oContext.lineTo( 100, 80 );

        // door
        oContext.rect( 75, 100, 10, 20 );

        oContext.stroke();
    };

    CanvApp.prototype.drawSun = function() {
        var oContext = this.context;

        oContext.fillStyle = "yellow";
        oContext.strokeStyle = "orange";

        oContext.beginPath();
        oContext.arc( 180, 40, 30, 0, Math.PI * 2, true );

        oContext.fill();
        oContext.stroke();
    };

    CanvApp.prototype.drawPalmTree = function() {
        var oContext = this.context;

        oContext.strokeStyle = "limegreen";

        oContext.beginPath();
        oContext.moveTo( 20, 120 );
        oContext.arcTo( 20, 0, 100, 100, 20 ); // some additional explainations about arcTo: http://www.scriptol.com/html5/canvas/arcto.php

        oContext.stroke();
    };

    CanvApp.prototype.drawWaves = function() {
        var oContext = this.context;

        oContext.strokeStyle = "turquoise";

        oContext.beginPath();
        oContext.moveTo( 20, 150 );
        oContext.bezierCurveTo( 80, 130, 80, 180, 140, 150 );
        oContext.moveTo( 20, 170 );
        oContext.bezierCurveTo( 80, 150, 80, 200, 140, 170 );

        oContext.stroke();
    };

    CanvApp.prototype.draw = function() {
        this.drawHouse();
        this.drawSun();
        this.drawPalmTree();
        this.drawWaves();
    };

    oApp = new CanvApp( "#my-canvas" );

    oApp.draw();

} )( window.CanvApp );
