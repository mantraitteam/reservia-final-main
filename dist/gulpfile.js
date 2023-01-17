const gulp = require('gulp');
const jshint = require('gulp-jshint');

gulp.task('processHTML', () => {
    gulp.src('*.html')
    gulp.src('*.js')
    .pipe(jshint({
        esversion: 6
    }))
    .pipe(jshint.reporter('default'))
      .pipe(gulp.dest('dist'));
  });