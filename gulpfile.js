var gulp = require('gulp');
var annotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var cssfiles = [
  'public/app/bower_components/animate.css/animate.min.css',
  'public/app/layout/styles/*.css'
];
var htmlfiles = 'public/app/**.html';
var jsfiles = [
  'public/app/core/app-core.module.js',
  'public/app/ide/app-ide.module.js',
  'public/app/app.module.js',
  'public/app/*.js',
  'public/app/**/*.js', 
  '!public/app/build.js', 
  '!public/app/vendor.js',
  '!public/app/bower_components/**/*'
];

gulp.task('app-js', function() {
  return gulp.src(jsfiles)
  	.pipe(jshint())
  	.pipe(jshint.reporter('jshint-stylish'))
    .pipe(sourcemaps.init())
  	.pipe(annotate())
    .pipe(concat('build.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/app/'));
});

gulp.task('app-js-prod', function() {
  return gulp.src(jsfiles)
    .pipe(annotate())
    .pipe(uglify())
    .pipe(concat('build.js'))
    .pipe(gulp.dest('public/app/'));
});

gulp.task('app-css', function() {
  return gulp.src(cssfiles)
    .pipe(concat('build.css'))
    .pipe(gulp.dest('public/app/'));
});

gulp.task('vendor-js', function() {
  var path = 'public/app/bower_components/';
  return gulp.src([
      path + 'jquery/dist/jquery.js',
      path + 'lodash/dist/lodash.js',
      path + 'angular/angular.js',
      path + 'angular-route/angular-route.js',
      path + 'moment/min/moment-with-locales.js',
      path + 'Snap.svg/dist/snap.svg.js'
    ])
    .pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/app/'));
});

gulp.task('production', ['vendor-js', 'app-css', 'app-js-prod']);

gulp.task('watch', ['vendor-js', 'app-js', 'app-css'], function() {
    return gulp.watch(
    	['public/**/*.*', '!public/app/build.js', '!public/app/vendor.js'], 
    	['app-js', 'app-css']);
});

gulp.task('default', ['watch']);
