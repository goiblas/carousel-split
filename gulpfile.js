const gulp = require("gulp");
const postcss = require("gulp-postcss");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync").create();
const cssnext = require("postcss-cssnext");
const rollup = require("gulp-better-rollup");
const babel = require("rollup-plugin-babel");
const rename = require("gulp-rename");
const header = require("gulp-header");
const uglify = require("rollup-plugin-uglify");
const cssnano = require("gulp-cssnano");

const pkg = require("./package.json");
const banner = [
  "/**",
  " * <%= pkg.name %> - <%= pkg.description %>",
  " * @version v<%= pkg.version %>",
  " * @link <%= pkg.homepage %>",
  " * @license <%= pkg.license %>",
  " */",
  ""
].join("\n");


gulp.task("server", ["css", "js"], () => {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "demo/index.html"
    }
  });

  gulp.watch("./src/css/*.css", ["css"]);
  gulp.watch("./src/js/*.js", ["js"]);
});


const plugins = [cssnext({
    browsers: ["> 1%", "last 1 versions", "IE 10"]
})];
gulp.task("css", () => {

  return gulp
    .src("./src/css/*.css")
    .pipe(postcss(plugins))
    .pipe(plumber())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("css:min", () => {

  return gulp
    .src("./src/css/*.css")
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./dist"))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest("./dist"));

});


gulp.task("js", () => {
  return gulp
    .src("./src/js/carousel-split.js")
    .pipe(rollup({ plugins: [babel()] }, { format: "umd" }))
    .pipe(plumber())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("js:min", () => {
  return gulp
    .src("./src/js/carousel-split.js")
    .pipe(rollup({ 
        plugins: [babel(), uglify()] }, { 
        format: "umd" }))
    .pipe(plumber())
    .pipe(rename({ suffix: ".min" }))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest("./dist"));
});


gulp.task("default", ["server"]);
gulp.task("build", ["css:min", "js", "js:min"]);