module.exports = function(gulp, plugins) {
    return async function() {
        gulp.watch("./src/scss/*.scss", gulp.parallel("scss"));
        gulp.watch(
            ["./src/js/*js", "!./src/js/index.js"],
            gulp.parallel(gulp.series(["clean-js", "scripts-server"]))
        );
        gulp.watch("./src/*.html", gulp.parallel("html-server"));
    };
};
