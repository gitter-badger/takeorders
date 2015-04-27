var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var babel = require('gulp-babel');
var babelify = require("babelify");
var uglify = require('gulp-uglify');


gulp.task('browserify', function(){
  var b = browserify();
  b.transform(babelify);
  b.add('./client/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('compress', function() {
  return gulp.src('./public/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function () {
  gulp.watch('./client/**/*.jsx', ['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('build', ['browserify', 'compress'])
