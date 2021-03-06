var gulp = require('gulp');

var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});



var minifyHTML = require('gulp-minify-html');

gulp.task('index', function() {
	var opts = {comments:true,spare:true};
	
  gulp.src('dist/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('build'))
});