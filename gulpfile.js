const gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  csslint = require('gulp-csslint'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('csslint', function(){
  gulp.src('src/**/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});

gulp.task('css-prefixer', function() {
  gulp.src('dist/*.css')
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-img',  function(){
  gulp.src('dist/assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('default', function(){
  gulp.start('build-img', 'css-prefixer');
});
  