module.exports = function () {
    $.gulp.task('inc', () => {
        return $.gulp.src('./dev/static/inc/**/*.*')
            .pipe($.gulp.dest('./wp-content/themes/' + $.cnf.themes.name + '/inc/'));
    });
};