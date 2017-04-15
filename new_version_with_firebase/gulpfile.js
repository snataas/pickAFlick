var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less');


gulp.task('compile-less', function() {
  gulp.src('./less/style.less')
    .pipe(less())
    .pipe(gulp.dest('.'))
});



gulp.task('watch-less', function() {
  gulp.watch('./less/**/*.less', ['compile-less']);
});

gulp.task('default', ['compile-less', 'watch-less']);
