var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('scripts', function () {
  return browserify({
      entries: [ './src/main.jsx' ],
      debug: true,
      extensions: [ '.js', '.jsx' ],
    })
    .transform(babelify, { presets: ['latest', 'react', 'stage-2'] })
    .bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
});

gulp.task('stylesheets', function () {
  return gulp.src([
    'src/**/*.css'
  ])
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['scripts', 'stylesheets']);
