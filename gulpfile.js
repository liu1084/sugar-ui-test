/**
 * Created by CN40309-D-1 on 2016/2/4.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('scripts', function(){
    gulp.src('src/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify('all.min.js'))
        .pipe(gulp.dest('dist'));

});

gulp.task('watch', function(){

});
gulp.task('default', ['scripts', 'watch']);