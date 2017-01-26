var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

const sassPath = './app/scss/**/*.scss';

gulp.task('hello', function() {
  console.log('Hello world!');
});

gulp.task('sass-it', function() {
  return gulp.src(sassPath)
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch-it', ['sync-yo-self', 'sass-it'], function() {
  gulp.watch(sassPath, ['sass-it']);
});

gulp.task('sync-yo-self', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});

