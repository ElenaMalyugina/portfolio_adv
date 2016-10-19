'use strict';

module.exports = function() {
  $.gulp.task('copy_script', function() {
    return $.gulp.src('./source/script/**', {since: $.gulp.lastRun('copy_script')})
      .pipe($.gulp.dest($.config.root + '/assets/script'));
  });
};
