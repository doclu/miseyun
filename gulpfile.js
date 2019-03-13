var gulp=require('gulp');

var sass=require('gulp-sass');
var watch=require('gulp-watch');

gulp.task('watch',function(){
    return watch('./asset/my.scss',function(){
        gulp.src('./asset/my.scss')
        .pipe(sass())
        .pipe(gulp.dest('./asset/css'))
    })
})