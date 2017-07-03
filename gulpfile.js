    var gulp = require('gulp');
   //var hint = require('gulp-jshint');
    var concat= require('gulp-concat');
    var uglify = require('gulp-uglify');
    var connect = require('gulp-connect');
//
//    //create the tasks
//
//    //    gulp.task('Js-hint',function(){
//    //         gulp.src(['app/app.js','app/*/*.js',])
//    //             .pipe(hint())
//    //             .pipe(hint.reporter('default'));
//    //    });
//
    gulp.task('concatFiles', function(){
         gulp.src(['app/app.js','app/*/*.js',])
             .pipe(concat('build.js'))
             .pipe(uglify())
             .pipe(gulp.dest("./build/scripts/"));

  });

    gulp.task('web-server',function(){
       connect.server({
          port:8000
       }) );

   gulp.task('default',['concatFiles', 'web-server'], function(){});