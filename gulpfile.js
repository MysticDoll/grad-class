var gulp = require('gulp');
var notify = require('gulp-notify');
var buffer = require('gulp-buffer');
var webserver = require('gulp-webserver');
var mathjax = require('mathjax_markdown');
var errHandler = function(){
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error %>"
  }).apply(this, args);

  this.emit('end');
};

gulp.task('build', function () {
  require("fs").readdir(".", function(err, files) {
    if(!err) {
      files.filter(function(file) {return /\.md$/.test(file)})
           .forEach(function(file) {
             mathjax.md_to_html(file, file.replace(/\.md/, ".html"));
           });
    }
  });
});

gulp.task('server', function(){
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      https: false,
      open: true
    }));
});

gulp.task('watch', function(){
  gulp.watch('./*.md',['build']);
});

gulp.task('default', ['build', 'watch', 'server']);

