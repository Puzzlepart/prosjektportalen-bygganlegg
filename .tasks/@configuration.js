'use strict';
var path = require("path")

module.exports = {
    PATHS: {
        DIST: path.join(__dirname, "../dist"),
        LIB: path.join(__dirname, "../lib"),
        SCRIPTS: "./.scripts",
        RELEASE: "./release",
        BUILD_GLOB: "./build/**/*",
        TEMPLATES: "./templates",
        TEMPLATES_TEMP: "./_templates",
        TEMPLATES_GLOB: "./templates/**/*",
        ROOT_TEMPLATE: path.join(__dirname, "../_templates/root"),
        CONFIG_TEMPLATE: path.join(__dirname, "../_templates/config"),
    },
    VERSION_REPLACE_TOKEN: "{package-version}"
}
