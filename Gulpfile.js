var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./client/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['browserify']);