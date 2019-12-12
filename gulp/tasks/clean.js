module.exports = function () {
    $.gulp.task('clean', function () {
        return $.del('./wp-content/themes/' + $.cnf.themes.name)
    })
};