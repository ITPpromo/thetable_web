const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');

gulp.task('sass', () => {
  return gulp.src('./assets/styles/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./assets/styles/css/'));
});

gulp.task('js', () =>
  gulp.src('assets/js/main.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('assets/js/compile/'))
);

gulp.task('watch', () => {
  gulp.watch('./assets/styles/scss/**/**/*.scss', ['sass']);
  gulp.watch('./assets/js/*.js', ['js']);
});