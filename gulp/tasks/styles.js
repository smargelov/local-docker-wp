const plumber = require('gulp-plumber'),
  sass = require('gulp-sass')(require('sass')),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  csscomb = require('gulp-csscomb'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  importCss = require('gulp-import-css'),
  mmq = require('gulp-merge-media-queries'),
  stylesPATH = {
    input: './dev/static/styles/',
    output: './wp-content/themes/' + $.cnf.themes.name + '/css/'
  }

module.exports = function () {
  $.gulp.task('styles:dev', () => {
    return $.gulp
      .src(stylesPATH.input + 'main.sass')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(
        autoprefixer({
          overrideBrowserslist: ['last 3 versions']
        })
      )
      .pipe(sourcemaps.write())
      .pipe(rename('main.min.css'))
      .pipe($.gulp.dest(stylesPATH.output))
      .on('end', $.browserSync.reload)
  })
  $.gulp.task('styles:lib', () => {
    return $.gulp
      .src('./dev/static/css/libs.css')
      .pipe(plumber())
      .pipe(importCss())
      .pipe(csso())
      .pipe(rename('libs.min.css'))
      .pipe($.gulp.dest(stylesPATH.output))
      .on('end', $.browserSync.reload)
  })
  $.gulp.task('styles:build', () => {
    return $.gulp
      .src(stylesPATH.input + 'main.sass')
      .pipe(sass())
      .pipe(
        autoprefixer({
          overrideBrowserslist: ['last 3 versions']
        })
      )
      .pipe(autoprefixer())
      .pipe(mmq())
      .pipe(csscomb())
      .pipe($.gulp.dest(stylesPATH.output))
  })
  $.gulp.task('styles:build-min', () => {
    return $.gulp
      .src(stylesPATH.input + 'main.sass')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(mmq())
      .pipe(csscomb())
      .pipe(csso())
      .pipe(rename('main.min.css'))
      .pipe($.gulp.dest(stylesPATH.output))
  })
}
