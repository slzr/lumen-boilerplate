
/**
 * SERVE TASKS
 */
module.exports = function (gulp, $, conf) {
  'use strict';

  conf.browserSync = $.browserSync;

  /**
   * Build files
   * @task {build}
   * @group {Serve}
   */
  gulp.task('build', $.sequence('clean', 'scss', 'scripts','images', 'fonts', 'copy', 'bower'));


  /**
   * Build and watch files for changes
   * @task {serve}
   * @group {Serve}
   */
  gulp.task('serve', $.sequence('build', 'watch'));


  /**
   * Serve + php server with browser Sync
   * @task {serve}
   * @group {Serve}
   */
  gulp.task('connect', function() {
    $.connectPhp.server({
      base: './public',
      // open: true
    }, function(){
      $.browserSync({
        proxy: 'localhost:8000'
      });
    });
  });
  // PHP CONNECT

  gulp.task('serve:php', $.sequence('serve', 'connect'));

}