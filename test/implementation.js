'use strict';

var test = require('tape');
var functionsHaveNames = require('functions-have-names')();

var implementation = require('../implementation');
var runTests = require('./tests');

test('implementation', function (t) {
	t.equal(implementation.length, 2, 'implementation has a length of 2');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(implementation.name, 'parseInt', 'implementation has name "parseInt"');
		st.end();
	});

	runTests(implementation, t);

	t.end();
});
