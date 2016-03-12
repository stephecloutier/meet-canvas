// hepl-mmi/meet-canvas - exo-seven

( function( CanvApp ) {

    "use strict";

    var oApp;

    CanvApp.prototype.setup = function() {
        var self = this,
            oSourceImage = new Image();

        oSourceImage.addEventListener( "load", function() {
            self.context.drawImage( this, 0, 0 );

            self._originalImageData = self.context.getImageData( 0, 0, self.width, self.height );
        } );
        oSourceImage.src = "../_shared/big-kitten.jpg";

        [ "no-red", "negative", "bw", "reset" ].forEach( function( sId ) {
            document.getElementById( sId ).addEventListener( "click", oApp.buttonClicked.bind( oApp ) );
        } );
    };

    CanvApp.prototype.buttonClicked = function( oEvent ) {
        var oImageData,
            oModifiedImageData;

        oEvent.preventDefault();

        oImageData = this.context.getImageData( 0, 0, this.width, this.height );

        switch ( oEvent.target.id ) {
            case "no-red":
                oModifiedImageData = this.applyNoRedFilter( oImageData );
                break;
            case "negative":
                oModifiedImageData = this.applyNegativeFilter( oImageData );
                break;
            case "bw":
                oModifiedImageData = this.applyBlackAndWhiteFilter( oImageData );
                break;
            case "reset":
            default:
                oModifiedImageData = this._originalImageData;
                break;
        }

        this.context.putImageData( oModifiedImageData, 0, 0 );
    };

    CanvApp.prototype.applyNoRedFilter = function( oImageData ) {
        var i = 0;

        // oImageData.data is an array of red, green, blue & alpha value for each pixel of our canvas.
        // We use this do-while loop to jump by four cases at each step.
        do {
            oImageData.data[ i ] = 0;
        } while ( ( oImageData.data[ i += 4 ] ) != null );

        return oImageData;
    };

    CanvApp.prototype.applyNegativeFilter = function( oImageData ) {
        var i = 0;

        do {
            oImageData.data[ i ] = 256 - oImageData.data[ i ]; // red
            oImageData.data[ i + 1 ] = 256 - oImageData.data[ i + 1 ]; // green
            oImageData.data[ i + 2 ] = 256 - oImageData.data[ i + 2 ]; // blue
        } while ( ( oImageData.data[ i += 4 ] ) != null );

        return oImageData;
    };

    CanvApp.prototype.applyBlackAndWhiteFilter = function( oImageData ) {
        var i = 0,
            iLuminance;

        do {
            // cf. https://fr.wikipedia.org/wiki/Luminance#Matri.C3.A7age
            iLuminance = oImageData.data[ i ] * 0.299 + oImageData.data[ i + 1 ] * 0.587 + oImageData.data[ i ] * 0.114;
            oImageData.data[ i ] = iLuminance; // red
            oImageData.data[ i + 1 ] = iLuminance; // green
            oImageData.data[ i + 2 ] = iLuminance; // blue
        } while ( ( oImageData.data[ i += 4 ] ) != null );

        return oImageData;
    };

    oApp = new CanvApp( "#my-canvas" );

    oApp.setup();

} )( window.CanvApp );
