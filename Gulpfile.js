var source = require("vinyl-source-stream");
var browserify = require('browserify');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var reactify = require('reactify');
var babelify = require("babelify");
var babel = require('gulp-babel');
var gulp = require('gulp');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(babelify);
  b.add('./client/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});


gulp.task('lint', function() {
  return gulp.src(['./client/**/*.js','./client/*.js'])
  .pipe(jshint({'esnext':true}))
  .pipe(jshint.reporter('default'));
})

gulp.task('compress', function() {
  return gulp.src('./public/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function () {
  gulp.watch('./client/**/*.jsx', ['browserify']);
  gulp.watch('./client/**/*.js', ['browserify', 'lint']);
  gulp.watch('./client/*.js', ['browserify', 'lint']);
});

gulp.task('default', ['browserify']);

gulp.task('build', ['browserify', 'compress'])
