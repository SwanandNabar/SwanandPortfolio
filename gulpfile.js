var gulp = require('gulp');

gulp.task('sometask', function () {
    console.log('executed');
});
gulp.task('sometask2', function () {
    console.log('executed 2');
});
gulp.task('final',['sometask','sometask2'], function () {
    console.log('executed final');
});

gulp.task('styles', function (){

});
gulp.task('scripts', function() {

});