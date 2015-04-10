var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var babel = require('gulp-babel');
var babelify = require("babelify");

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(babelify); 
  b.add('./client/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});


gulp.task('watch', function () {
  gulp.watch('./client/**/*.jsx', ['browserify']);
});

gulp.task('default', ['browserify']);