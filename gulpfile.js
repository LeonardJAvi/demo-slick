var gulp = require('gulp');
var sass = require('gulp-sass');
var haml = require('gulp-haml');
var browserSync = require('browser-sync').create();

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  })
});

gulp.task('prueba', function () {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./docs/assets/css'));
});


gulp.task('prueba2', function () {
  gulp.src('./src/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./docs'));
});


gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss').on('change', browserSync.reload) 
  gulp.watch('./src/*.haml').on('change', browserSync.reload);
});

gulp.task('default', ['prueba', 'prueba2','watch','serve',])