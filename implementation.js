'use strict';

var ToString = require('es-abstract/2021/ToString');
var TrimString = require('es-abstract/2021/TrimString');
var ToInt32 = require('es-abstract/2021/ToInt32');

var regexTester = require('es-abstract/helpers/regexTester');

var callBound = require('call-bind/callBound');

var hasSign = regexTester(/^[-+]/);
var hasHexPrefix = regexTester(/^0[xX]/);
var hasMinus = regexTester(/^-/);

var $strSlice = callBound('String.prototype.slice');
var origParseInt = callBound('parseInt');

module.exports = function parseInt(string, radix) {
	var inputString = ToString(string); // step 1
	var S = TrimString(inputString, 'start'); // step 2
	var sign = S !== '' && hasMinus(S) ? -1 : 1; // step 3-4
	if (S !== '' && hasSign(S)) {
		S = $strSlice(S, 1); // step 5
	}
	var R = ToInt32(radix); // step 6
	var stripPrefix = true; // step 7
	// eslint-disable-next-line no-negated-condition
	if (R !== 0) { // step 8
		if (R < 2 || R > 36) {
			return NaN; // step 8.a.
		}
		if (R !== 16) {
			stripPrefix = false;
		}
	} else { // step 9
		R = 10;
	}
	if (stripPrefix) { // step 10
		if (S.length >= 2 && hasHexPrefix(S)) { // step 10.a.
			S = $strSlice(S, 2);
			R = 16;
		}
	}

	return sign * origParseInt(S, R); // steps 3-4, 11-16
};
