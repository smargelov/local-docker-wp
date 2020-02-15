require('dotenv').config();
let gutil = require('gulp-util'),
    ftp = require('vinyl-ftp'),
    ftpHost = process.env.FTP_HOST,
    ftpUser = process.env.FTP_USER,
    ftpPassword = process.env.FTP_PASSWORD;

module.exports = function () {
    $.gulp.task('deploy', $.gulp.series('styles:build-min', 'js:build-min', () => {

        let conn = ftp.create({
            host: ftpHost,
            user: ftpUser,
            password: ftpPassword,
            parallel: 10,
            log: gutil.log
        });

        let globs = [
            './wp-content/themes/' + $.cnf.themes.name + '/**'
        ];

        return $.gulp.src(globs, {
            base: '.',
            buffer: false
        })
            .pipe(conn.differentSize('/')) // only upload newer files
            .pipe(conn.dest('/'));

    }));
};