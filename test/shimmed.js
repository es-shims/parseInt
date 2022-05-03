'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();
var globalThis = require('globalthis');

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(parseInt.length, 2, 'Number.parseInt has a length of 2');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(parseInt.name, 'parseInt', 'Number.parseInt has name "parseInt"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(globalThis, 'parseInt'), 'Number.parseInt is not enumerable');
		et.end();
	});

	runTests(parseInt, t);

	t.end();
});
