var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("sass", () => {
    return gulp
        .src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task("ts", () => {
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

gulp.task(
    "serve",
    gulp.series("sass", "ts", () => {
        browserSync.init({
            server: "./src",
        });

        gulp.watch(["src/scss/*.scss"], gulp.series("sass"));
        gulp.watch(["src/ts/*.ts"], gulp.series("ts"));
        gulp.watch("src/*.html").on("change", browserSync.reload);
    })
);

gulp.task("default", gulp.series("serve"));
