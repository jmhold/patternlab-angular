var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('index', function () {
    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/app.patternlab/**/*.js'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./app/'));
});