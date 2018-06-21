'use strict';
var gulp = require("gulp"),
    path = require("path"),
    powershell = require("./utils/powershell.js"),
    configuration = require('./@configuration.js');

gulp.task("packageStyles", () => {
    return gulp.src(configuration.PATHS.STYLES_MAIN)
        .pipe(stylus(configuration.STYLUS))
        .pipe(gulp.dest(configuration.PATHS.DIST));
});

gulp.task("packageStylesTemplate", () => {
    return gulp.src(configuration.PATHS.STYLES_MAIN)
        .pipe(stylus(configuration.STYLUS))
        .pipe(gulp.dest(path.join(configuration.PATHS.ASSETS_TEMPLATE, "SiteAssets")));
});

gulp.task("packagePnpTemplates", (done) => {
    powershell.execute("Generate-PnP-Files.ps1", "", done);
});