const { src, dest, watch } = require("gulp");
const compileSass = require("gulp-sass")(require("sass"));
const minifyCSS = require("gulp-clean-css");
const sourceMaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");

compileSass.compiler = require("node-sass");

const bundleSass = () => {
  return src("assets/sass/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCSS())
    .pipe(sourceMaps.write())
    .pipe(concat("bundle.css"))
    .pipe(dest("assets/css"));
};

const devWatch = () => {
  watch("assets/sass/*.scss", bundleSass);
};

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
