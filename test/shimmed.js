'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();
var globalThis = require('globalthis');
var has = require('has');

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(parseInt.length, 2, 'parseInt has a length of 2');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(parseInt.name, 'parseInt', 'parseInt has name "parseInt"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(globalThis, 'parseInt'), 'parseInt is not enumerable');
		et.end();
	});

	t.equal(parseInt.prototype, undefined, '`.prototype` is `undefined`');
	t.notOk(has(parseInt, 'prototype'), 'no own "prototype" property');

	runTests(parseInt, t);

	t.end();
});
