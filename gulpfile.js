/* leny/meet-canvas
 *
 * /gulpfile.js - Gulp tasks
 *
 * coded by leny@flatLand!
 * started at 13/03/2017
 */

var gulp = require( "gulp" ),
    babel = require( "gulp-babel" ),
    rename = require( "gulp-rename" ),
    sourcemaps = require( "gulp-sourcemaps" ),
    fCompileExo;

fCompileExo = function( sExoName ) {
    return function() {
        gulp.src( "exo-" + sExoName + "/script.js" )
            .pipe( sourcemaps.init() )
            .pipe( babel() )
            .on( "error", function( oError ) {
                console.error( oError );
                this.emit( "end" );
            } )
            .pipe( sourcemaps.write() )
            .pipe( rename( "script.min.js" ) )
            .pipe( gulp.dest( "exo-" + sExoName ) );
    };
};

// --- Task for js

gulp.task( "exo-one", fCompileExo( "one" ) );
gulp.task( "exo-two", fCompileExo( "two" ) );
gulp.task( "exo-three", fCompileExo( "three" ) );
gulp.task( "exo-four", fCompileExo( "four" ) );
gulp.task( "exo-five", fCompileExo( "five" ) );
gulp.task( "exo-six", fCompileExo( "six" ) );
gulp.task( "exo-seven", fCompileExo( "seven" ) );

// --- Watch tasks

gulp.task( "watch", function() {
    gulp.watch( "exo-one/script.js", [ "exo-one" ] );
    gulp.watch( "exo-two/script.js", [ "exo-two" ] );
    gulp.watch( "exo-three/script.js", [ "exo-three" ] );
    gulp.watch( "exo-four/script.js", [ "exo-four" ] );
    gulp.watch( "exo-five/script.js", [ "exo-five" ] );
    gulp.watch( "exo-six/script.js", [ "exo-six" ] );
    gulp.watch( "exo-seven/script.js", [ "exo-seven" ] );
} );

// --- Aliases

gulp.task( "default", [ "exo-one", "exo-two", "exo-three", "exo-four", "exo-five", "exo-six", "exo-seven" ] );
gulp.task( "work", [ "default", "watch" ] );
