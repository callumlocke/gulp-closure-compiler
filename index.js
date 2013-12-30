'use strict';
var es = require('event-stream');
var gutil = require('gulp-util');
var ClosureCompiler = require('closurecompiler');

module.exports = function (options) {
	return es.map(function (file, cb) {
		ClosureCompiler.compile(file.path, options, function (err, data) {
			if (err) {
				return cb(err);
			}

			file.contents = new Buffer(data);
			cb(null, file);
		});
	});
};
