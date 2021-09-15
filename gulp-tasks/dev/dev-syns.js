module.exports = function(gulp, plugins) {
    return async function() {
        plugins.browserSync.init({
            server: {
                baseDir: "./src/"
            },
            port: 3000,
            watch: true,
            notify: false 
        });
    };
};
