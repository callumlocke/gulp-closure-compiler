'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var closureCompiler = require('./index');

it('should minify JS', function (cb) {
	this.timeout(20000);

	var stream = closureCompiler();

	stream.on('data', function (file) {
		assert.equal(file.contents.toString(), 'console.log("foo");\n');
		cb();
	});

	stream.write(new gutil.File({
		path: 'fixture.js'
	}));
});
