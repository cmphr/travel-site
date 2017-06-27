var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Horray! You created a gulp task');
});

gulp.task('html', function() {
  console.log('Imagine something useful done to html files');
});

gulp.task('styles', function() {
  console.log('Imagine something useful done to css files');
});

gulp.task('watch', function () {
  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });
});
