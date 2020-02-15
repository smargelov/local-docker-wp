module.exports = function () {
    $.gulp.task('other', () => {
        return $.gulp.src(['./dev/other/**/*.*'])
            .pipe($.gulp.dest('./wp-content/themes/' + $.cnf.themes.name + '/'));
    });
};