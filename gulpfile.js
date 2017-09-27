var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './src/index.js', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('copyFile', ['build'], function () {
    return gulp.src(['./src/index.html']).pipe(gulp.dest('./dist/'));
});

gulp.task('watch', ['build', 'copyFile'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);