var gulp = require('gulp');
// var sass = require('gulp-sass');
// var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
// var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');

var b = watchify( browserify('./public/js/vue-app.js'));
gulp.task('bundle', function() {
  return b.bundle()
    .pipe( source('bundle.js') )
    .pipe( gulp.dest('./public/js') );
});

// linting
gulp.task('lint', function() {
  return gulp.src('./public/js/*.js')
    .pipe( eslint() )
    .pipe( eslint.format() )
    .pipe( eslint.failOnError() );
});

// ex
gulp.task('test', function() {
  console.log('testing yo');
});

// server
// gulp.task('server',  function() {
//   connect.server();
// });

// sass
// gulp.task('sass', function() {
//   gulp.src('./scss/*.scss')
//     .pipe( sass() )
//     .pipe( autoprefixer() )
//     .pipe( gulp.dest('css') );
// });

gulp.task('watch', function() {
  // gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./public/js/*.js', ['bundle']);
});

gulp.task('default', ['watch']);
