var gulp = require('gulp');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rm = require('gulp-rm');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create('Server');

gulp.task('browser-sync', function () {
    //watch files
    var files = [
        './style.css',
        './*.php'
    ];

    //initialize browsersync
    browserSync.init(files, {
        //browsersync with a php server
        proxy: "localhost/PostDemo/",
        notify: false
    });
});

/**
 * Compile SCSS files
 */

gulp.task('sass', function () {
    return gulp.src('assets/src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('assets/build/css/'))
        .pipe(notify('SASS build complete!'))
        .pipe(browserSync.stream());
});

gulp.task('copyFonts', function () {
    return gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
        .pipe(gulp.dest('assets/build/fonts/'))
        .pipe(browserSync.stream());
});

gulp.task('clean:build', function () {
    return gulp.src('assets/build/**/*').pipe(rm());
});

gulp.task('js', function () {
    return gulp.src(
        [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
            'assets/src/js/*.js'
        ]
    ).pipe(concat('all.min.js'))
        .pipe(gulp.dest('assets/build/js'))
        .pipe(notify('JS build complete!'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    notify('Watch started!');
    browserSync.init({
        server: "/home/jeykeu/Code/wordpress/",

    });
    gulp.watch('assets/src/sass/*.scss', ['sass']);
    gulp.watch('assets/src/js/*.js', ['js']);
    gulp.watch(['copyFonts']);

});

gulp.task('default', ['watch']);
