const gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

gulp.task('fonts', () => {
    return gulp.src('./fonts/*')
      .pipe(gulp.dest('src/fonts'));
  });


function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/*.scss', style);
    gulp.watch('./fonts/*', fonts);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;