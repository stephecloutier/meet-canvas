// hepl-mmi/meet-canvas - exo-five

( function( CanvApp ) {

    "use strict";

    var oApp;

    CanvApp.prototype.drawStar = function() {
        var oContext = this.context,
            iSteps = 13,
            iCurrentStep = 0,
            iStarSize = 150;

        oContext.translate( this.width / 2, this.height / 2 );

        oContext.strokeStyle = "red";

        while ( ++iCurrentStep <= iSteps ) {
            oContext.strokeRect( iStarSize / 2 * -1, iStarSize / 2 * -1, iStarSize, iStarSize );
            oContext.rotate( 2 * Math.PI / iSteps );
        }
    };

    CanvApp.prototype.draw = function() {
        this.drawStar();
    };

    oApp = new CanvApp( "#my-canvas" );

    oApp.draw();

} )( window.CanvApp );
