const { src, dest, parallel } = require('gulp');
var mjml = require('gulp-mjml');

function compileMJML() {
  return src('./emails/**/*.mjml')
    .pipe(mjml())
    .pipe(dest('./compiled'));
}

function compileAssets() {
  return src('./emails/**/*.jpg').pipe(dest('./compiled'));
}

exports.compileMJML = compileMJML;
exports.compileAssets = compileAssets;
exports.default = parallel(compileMJML, compileAssets);
