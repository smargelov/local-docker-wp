"use strict";

global.$ = {
  path: {
    task: require("./gulp/path/tasks.js")
  },
  gulp: require("gulp"),
  browserSync: require("browser-sync").create(),
  del: require("del"),
  cnf: require("./package.json").config
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task(
  "dev",
  $.gulp.series(
    "clean",
    $.gulp.parallel(
      "fonts",
      "inc",
      "php",
      "other",
      "styles:dev",
      "styles:lib",
      "img:dev",
      "libsJS:dev",
      "js:dev",
      "svg"
    )
  )
);

$.gulp.task(
  "build",
  $.gulp.series(
    "clean",
    $.gulp.parallel(
      "fonts",
      "inc",
      "php",
      "other",
      "styles:build",
      "styles:lib",
      "img:build",
      "libsJS:build",
      "js:build",
      "svg"
    )
  )
);

$.gulp.task(
  "build-min",
  $.gulp.series(
    "clean",
    $.gulp.parallel(
      "fonts",
      "inc",
      "php",
      "other",
      "styles:build-min",
      "styles:lib",
      "img:build",
      "libsJS:build",
      "js:build-min",
      "svg"
    )
  )
);

$.gulp.task("default", $.gulp.series("dev", $.gulp.parallel("watch", "serve")));