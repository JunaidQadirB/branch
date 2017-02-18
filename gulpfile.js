var gulp = require('gulp');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rm = require('gulp-rm');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create('Server');
var devUrl = "http://localhost/branch-test";

gulp.task('clean:build', function () {
    return gulp.src('assets/build/**/*').pipe(rm());
});

gulp.task('scss', function () {
    return gulp.src('assets/src/scss/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(sourcemaps.init())
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(concat('all.min.css'))
        .pipe(gulp.dest('assets/build/css/'))
        .pipe(notify('scss build complete!'))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
        .pipe(gulp.dest('assets/build/fonts/'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src(
        [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
            './assets/src/js/*.js'
        ]
    ).pipe(sourcemaps.init())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(uglify())
        .pipe(gulp.dest('./assets/build/js'))
        .pipe(notify('JS build complete!'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    notify('Watch started!');
    var files = [
        './style.css',
        './assets/src/scss/*.scss',
        './assets/src/js/*.js',
        './**/*.php',
        './**/*.twig'
    ];
    browserSync.init(files, {
        proxy: {
            target: devUrl//Your wordpress URL
        }
    });
    gulp.watch('assets/src/js/*.js', ['js']);
    gulp.watch('assets/src/scss/*.scss', ['scss']);
    gulp.watch(['fonts']);
    gulp.watch("*.twig").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'scss', 'fonts', 'watch']);
