/**
 * @file
 * Task: Minify:CSS.
 */

 /* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';

  gulp.task('minify:css', function (cb) {
    return gulp.src([
      options.css.files,
      '!' + options.css.destination + '**/*.min.css'
    ])
      .pipe(plugins.rename({
        suffix: '.min'
      }))
      .pipe(plugins.cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest(options.css.destination));
      cb();
  });
};
