var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('prueba', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'));
});


