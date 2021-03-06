var gulp = require('gulp');
var sass = require('gulp-sass');
// var connect = require('gulp-connect');
var browserify = require('browserify');
var vueify = require('vueify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');

var b = watchify( browserify('./public/js/vue-app.js'));
gulp.task('bundle', function() {
  b.on('error', function(e) {
    console.log(e);
    b.end();
  });
  return b.bundle()
    .pipe( source('bundle.js') )
    .pipe( gulp.dest('./public/js') );
});

// admin page js bundling
var bAdmin = browserify('./public/js/vue-admin-app.js');
gulp.task('bundle-admin', function() {
  // bAdmin.on('error', function(e) {
  //   console.log(e);
  //   b.end();
  // });
  return bAdmin
    .transform( vueify )
    .bundle()
    .pipe( source('bundle-admin.js') )
    .pipe( gulp.dest('./public/js') );
});

// conf page js bundling
var bConf = browserify('./public/js/conf.js');
gulp.task('bundle-conf', function() {
  return bConf
    .transform( vueify )
    .bundle().on('error', function(e) { console.log('bundle conf error', e); })
    .pipe( source('bundle-conf.js') )
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
gulp.task('sass', function() {
  gulp.src('./public/scss/style.scss')
    .pipe( sass().on('error', sass.logError) )
    .pipe( autoprefixer() )
    .pipe( gulp.dest('./public/css') );
});

gulp.task('watch', function() {
  gulp.watch('./public/scss/*.scss', ['sass']);
  gulp.watch('./public/js/*.js', ['bundle', 'bundle-admin','bundle-conf']);
});

gulp.task('default', ['watch']);
