const uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    scriptsPATH = {
        input: "./dev/static/js/",
        output: "./wp-content/themes/" + $.cnf.themes.name + "/js/"
    },
    babel = require("gulp-babel");

module.exports = function () {
    $.gulp.task("libsJS:dev", () => {
        return $.gulp
            .src(["node_modules/svg4everybody/dist/svg4everybody.min.js",
                "node_modules/owl.carousel/dist/owl.carousel.min.js",
                "node_modules/jquery.maskedinput/src/jquery.maskedinput.js",
                "node_modules/lightbox2/src/js/lightbox.js"
            ])
            .pipe(concat("libs.js"))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.output));
    });

    $.gulp.task("libsJS:build", () => {
        return $.gulp
            .src(["node_modules/svg4everybody/dist/svg4everybody.min.js",
                "node_modules/owl.carousel/dist/owl.carousel.min.js",
                "node_modules/jquery.maskedinput/src/jquery.maskedinput.js",
                "node_modules/lightbox2/src/js/lightbox.js"
            ])
            .pipe(concat("libs.js"))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.output));
    });

    $.gulp.task("js:dev", () => {
        return $.gulp
            .src([
                scriptsPATH.input + "*.js",
                "!" + scriptsPATH.input + "libs.js"
            ])
            .pipe(
                babel({
                    presets: ["@babel/env"]
                })
            )
            .pipe($.gulp.dest(scriptsPATH.output))
            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });

    $.gulp.task("js:build", () => {
        return $.gulp
            .src([
                scriptsPATH.input + "*.js",
                "!" + scriptsPATH.input + "libs.js"
            ])
            .pipe(
                babel({
                    presets: ["@babel/env"]
                })
            )
            .pipe($.gulp.dest(scriptsPATH.output));
    });

    $.gulp.task("js:build-min", () => {
        return $.gulp
            .src([
                scriptsPATH.input + "*.js",
                "!" + scriptsPATH.input + "libs.js"
            ])
            .pipe(
                babel({
                    presets: ["@babel/env"]
                })
            )
            .pipe(concat("main.js"))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.output));
    });
};