'use strict';

var boundFunctionsHaveNames = require('functions-have-names').boundFunctionsHaveNames();
var functionsHaveConfigurableNames = require('functions-have-names').functionsHaveConfigurableNames();

module.exports = function noProto(fn) {
	fn.prototype = undefined; // eslint-disable-line no-param-reassign
	if (!functionsHaveConfigurableNames || !boundFunctionsHaveNames) {
		return fn;
	}
	var bound = Function.bind.call(Function.call, fn);
	try {
		Object.defineProperties(bound, {
			length: Object.getOwnPropertyDescriptor(fn, 'length'),
			name: Object.getOwnPropertyDescriptor(fn, 'name')
		});
	} catch (err) {
		try {
			bound.name = fn.name;
		} catch (e2) {}
	}
	return bound;
};
