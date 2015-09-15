'use strict';

var tizenutil = require('cordova-plugin-toast.tizenutil');

module.exports = {
	getVersion: function (success, fail, args) {
		try {
			success = success || function () {};
			fail = fail || function() {};
			args = args || '';

			var result = webapis.drminfo.getVersion();

			if (typeof result == 'string') {
				setTimeout(function () {
					success(result);
				}, 0);
			}
			else {
				setTimeout(function () {
					var error = new Error();
					error.name = 'UnknownError';
					error.message = 'UnknownError';
					fail(error);
				}, 0);
			}
		}
		catch (e) {
			throw tizenutil.createError.fromWebAPIException(e);
		}
	},
	getEsn: function(success, fail, args){
		try {
			success = success || function () {};
			fail = fail || function() {};
			args = args || '';

			var result = webapis.drminfo.getEsn(args[0]);

			if (typeof result == 'string') {
				setTimeout(function () {
					success(result);
				}, 0);
			}
			else {
				setTimeout(function () {
					var error = new Error();
					error.name = 'UnknownError';
					error.message = 'UnknownError';
					fail(error);
				}, 0);
			}
		}
		catch (e) {
			throw tizenutil.createError.fromWebAPIException(e);
		}
	},
	getSdiId: function(success, fail, args){
		try {
			success = success || function () {};
			fail = fail || function() {};
			args = args || '';

			var result = webapis.drminfo.getSdiId();

			if (typeof result == 'string') {
				setTimeout(function () {
					success(result);
				}, 0);
			}
			else {
				setTimeout(function () {
					var error = new Error();
					error.name = 'UnknownError';
					error.message = 'UnknownError';
					fail(error);
				}, 0);
			}
		}
		catch (e) {
			throw tizenutil.createError.fromWebAPIException(e);
		}
	}
};

require('cordova/exec/proxy').add('toast.drminfo',module.exports);
