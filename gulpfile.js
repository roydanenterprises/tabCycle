var gulp = require('gulp');
var minify = require('gulp-minify');
var banner = require('gulp-banner');
var pkg = require('./package.json');

var comment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' *\n' +
    ' * Copyright <%= year %>, <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    '*/\n\n';

gulp.task('build', function() {
  gulp.src('src/*.js')
    .pipe(minify())
    .pipe(banner(comment, {
        pkg: pkg,
        year : new Date().getFullYear()
    }))
    .pipe(gulp.dest('dist'))
});
