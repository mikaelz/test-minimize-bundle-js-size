#! /usr/bin/env node
var shell = require("shelljs");
shell.exec("browserify src/example.js -o dist/bundle.js -t [ babelify --presets [ es2015 ] ] -v -d -g uglifyify");
shell.exec("browserify src/example2.js -o dist/bundle2.js -t [ babelify --presets [ es2015 ] ] -v -d -g uglifyify");
