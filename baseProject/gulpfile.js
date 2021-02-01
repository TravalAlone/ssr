/*
 * @Author: sheng.wang
 * @Date: 2021-01-24 03:33:22
 * @LastEditTime: 2021-01-24 12:35:43
 * @LastEditors: sheng.wang
 * @Description: 
 * @FilePath: /SSR/baseProject/gulpfile.js
 */
const gulp = require('gulp'),
  watch = require('gulp-watch'),
  babel = require('gulp-babel'),
  rollup = require('gulp-rollup');

const entry = './src/server/**/*.js'
const cleanEntry = './src/server/config/index.js'
function buildProd() {
  return gulp.src(entry)
    .pipe(babel({
      babelrc: false,
      'plugins': ['@babel/plugin-transform-modules-commonjs']
    }))
    .pipe(gulp.dest('dist'));
}
function buildDev() {
  return watch(entry, { ignoreInitial: false })
    .pipe(babel({
      babelrc: false,
      ignore: [cleanEntry],
      'plugins': ['@babel/plugin-transform-modules-commonjs']
    }))
    .pipe(gulp.dest('dist'));
}
function buildConfig() {
  return gulp.src(entry)
    .pipe(rollup({
      input: cleanEntry,
      output: {
        format: 'cjs'
      }
    }))
  .pipe(gulp.dest('dist'))
}
let build
if (process.env.NODE_ENV === 'development') {
  build = gulp.series(buildDev)
} else {
  build = gulp.series(buildProd, buildConfig)
}

gulp.task('default', build)