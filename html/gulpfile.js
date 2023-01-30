("use strict");

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");
const webp = require("gulp-webp");
const svgmin = require("gulp-svgmin");
const clean = require("gulp-clean");

const buildSCSS = () => {
  return src("src/scss/app.scss")
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(sass())
    .pipe(postcss())
    .pipe(
      rename({
        basename: "app",
        extname: ".css",
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("./dist/css"));
};

const buildJS = () => {
  return src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/js"));
};

const buildIMG = () => {
  return src("./src/assets/img/**/*.{jpg,png}")
    .pipe(webp())
    .pipe(dest("dist/img"));
};

const buildSVG = () => {
  return src("./src/assets/img/**/*.svg").pipe(svgmin()).pipe(dest("dist/img"));
};

const buildFonts = () => {
  return src("./src/assets/fonts/**/*").pipe(dest("dist/fonts"));
};

const buildScript = () => {
  return src("./src/assets/lib/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/js"));
};

const buildStyles = () => {
  return src("./src/assets/lib/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(
      rename({
        extname: ".css",
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("./dist/css"));
};

const cleanDist = () => {
  return src("dist/*", { read: false }).pipe(clean());
};

const watchTask = () => {
  watch(
    "src",
    series(
      cleanDist,
      buildSCSS,
      buildJS,
      buildIMG,
      buildSVG,
      buildFonts,
      buildScript,
      buildStyles
    )
  );
};

exports.buildSCSS = buildSCSS;
exports.buildJS = buildJS;
exports.buildIMG = buildIMG;
exports.buildSVG = buildSVG;
exports.buildFonts = buildFonts;
exports.buildScript = buildScript;
exports.buildStyles = buildStyles;
exports.cleanDist = cleanDist;

exports.dev = series(
  buildSCSS,
  buildJS,
  buildIMG,
  buildSVG,
  buildFonts,
  buildScript,
  buildStyles,
  watchTask
);
