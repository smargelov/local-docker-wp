require('dotenv').config();
const link = process.env.LOCAL_DOMAIN;

module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            proxy: link + ':8000'
        });
    });
};