#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("browserify src/bundle.js -o dist/bundle.js -t [ babelify --presets [ es2015 ] ]");
shell.exec("browserify src/bundle2.js -o dist/bundle2.js -t [ babelify --presets [ es2015 ] ]");

shell.exec("browserify src/bundle.js -o dist/bundle.min.js -t [ babelify --presets [ es2015 ] ] -g uglifyify");
shell.exec("browserify src/bundle2.js -o dist/bundle2.min.js -t [ babelify --presets [ es2015 ] ] -g uglifyify");

shell.exec("browserify src/bundle.js -o dist/bundle-debug.min.js -t [ babelify --presets [ es2015 ] ] -v -d -g uglifyify");
shell.exec("browserify src/bundle2.js -o dist/bundle2-debug.min.js -t [ babelify --presets [ es2015 ] ] -v -d -g uglifyify");
