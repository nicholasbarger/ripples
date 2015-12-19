var gulp = require('gulp');
var annotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var cssfiles = 'public/app/**.scss';
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
    .pipe(uglify())
    .pipe(concat('build.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/app/'));
});

gulp.task('vendor-js', function() {
  var path = 'public/app/bower_components/';
  return gulp.src([
      path + 'jquery/dist/jquery.js',
      path + 'bootstrap/dist/js/bootstrap.js',
      path + 'angular/angular.js',
      path + 'angular-route/angular-route.js'
    ])
    .pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/app/'));
});

gulp.task('watch', function () {
    return gulp.watch(
    	['public/**/*.*', '!public/app/build.js', '!public/app/vendor.js'], 
    	['app-js']);
});

gulp.task('default', ['vendor-js', 'app-js', 'watch']);
