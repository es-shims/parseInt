'use strict';

var define = require('define-properties');
var globalThis = require('globalthis')();

var polyfill = require('./polyfill')();

module.exports = function shimParseInt() {
	define(
		globalThis,
		{ parseInt: polyfill },
		{ parseInt: function () { return parseInt !== polyfill; } }
	);
	return polyfill;
};
