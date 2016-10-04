'use strict'

module.exports=function () {
    $.gulp.task('css_unit',function(){

        var cssRem=$.gulp.src('./source/style/*/*.scss')
            cssRem.pipe(cssunit({
                type     :    'px-to-rem',
                rootSize :    16
            }))
            cssRem.pipe($.gulp.dest('././build/'));

    })


};

