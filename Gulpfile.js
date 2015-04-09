var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var babel = require('gulp-babel');
var babelify = require("babelify");

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(babelify); // use the reactify transform
  b.add('./client/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('babel', function () {
    return gulp.src('src/app.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify']);