/* eslint-disable consistent-return, no-param-reassign */

const gulp = require('gulp');
const install = require('gulp-install');
const conflict = require('gulp-conflict');
const template = require('gulp-template');
const inquirer = require('inquirer');
const rename = require('gulp-rename');
const path = require('path');

gulp.task('default', (done) => {
  inquirer.prompt([
    { type: 'input', name: 'name', message: 'Name:', default: path.basename(process.cwd()) },
    { type: 'input', name: 'description', message: 'Description', default: 'Generated from slush-good-start' },
    { type: 'input', name: 'repo', message: 'Git repo:', default: gulp.args.join(' ') },
    { type: 'input', name: 'author', message: 'Author:', default: gulp.args.join(' ') },
    { type: 'input', name: 'homepage', message: 'Home page:', default: gulp.args.join(' ') },
    { type: 'confirm', name: 'moveon', message: 'Continue?' },
  ]).then((answers) => {
    if (!answers.moveon) {
      return done();
    }

    const files = [`${__dirname}/templates/app/**`];

    gulp.src(files, { dot: true })
      .pipe(rename((file) => {
        if (file.basename[0] === '_') {
          file.basename = `.${file.basename.slice(1)}`;
        }
        if (file.basename === 'good-start' && file.extname === '.iml') {
          file.basename = answers.name;
        }
      }))
      .pipe(template(answers))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('end', () => done())
      .resume();
  });
});
