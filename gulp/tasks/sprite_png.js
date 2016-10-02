'use strict';

module.exports = function(){
	$.gulp.task('sprite_png', function(){
 	var spriteData = $.gulp.src('././source/images/images_for_sprite/*.png').pipe($.gp.spritesmith({
    	imgName: 'sprite.png',
    	cssName: 'sprite.scss',
		cssFormat: 'css',
		imgPath: '../img/sprite.png',
    	padding: 50
  }));
  return spriteData.img.pipe($.gulp.dest('././build/assets/img')),
	  spriteData.css.pipe($.gulp.dest('././source/style'));
})
};