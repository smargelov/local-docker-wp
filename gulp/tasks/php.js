module.exports = function () {
	$.gulp.task('php', () => {
		return $.gulp.src(['./dev/**/*.php', '!./dev/inc/'])
			.pipe($.gulp.dest('./wp-content/themes/' + $.cnf.themes.name + '/'))
			.on("end", $.browserSync.reload);
	});
};