'use strict';

var forEach = require('for-each');
var hasSymbols = require('has-symbols')();

module.exports = function (parseInt, t) {
	t.test('should work', function (st) {
		st.equal(parseInt('601'), 601);
		st.end();
	});

	t.test('accepts a radix', function (st) {
		for (var i = 2; i <= 36; ++i) {
			st.equal(parseInt('10', i), i, '10 in base ' + i + ' parses to ' + i);
		}

		st.end();
	});

	t.test('defaults the radix to 10 when the number does not start with 0x or 0X', function (st) {
		forEach(['01', '08', '10', '42'], function (str) {
			st.equal(parseInt(str), parseInt(str, 10), str + ' is the same with and without radix 10');
		});

		st.end();
	});

	t.test('defaults the radix to 16 when the number starts with 0x or 0X', function (st) {
		st.equal(parseInt('0x16'), parseInt('0x16', 16), '0x prefix');
		st.equal(parseInt('0X16'), parseInt('0X16', 16), '0X prefix');

		st.end();
	});

	t.test('ignores leading whitespace', function (st) {
		st.equal(parseInt('  0x16'), parseInt('0x16', 16));
		st.equal(parseInt('  42'), parseInt('42', 10));
		st.equal(parseInt('  08'), parseInt('08', 10));

		var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'.replace(/\S/g, '');
		st.equal(parseInt(ws + '08'), parseInt('08', 10), 'whitespace and 08 === 8');
		st.equal(parseInt(ws + '0x16'), parseInt('0x16', 16), 'whitespace and 0x16 === 0x16');

		st.end();
	});

	t.test('defaults the radix properly when not a true number', function (st) {
		var fakeZero = { valueOf: function () { return 0; } };
		st.equal(parseInt('08', fakeZero), parseInt('08', 10));
		st.equal(parseInt('0x16', fakeZero), parseInt('0x16', 16));

		st.end();
	});

	t.test('allows sign-prefixed hex values', function (st) {
		st.equal(parseInt('-0xF'), -15);
		st.equal(parseInt('-0xF', 16), -15);
		st.equal(parseInt('+0xF'), 15);
		st.equal(parseInt('+0xF', 16), 15);

		st.end();
	});

	t.test('NaN parsing', function (st) {
		st.equal(parseInt(), NaN);
		st.equal(parseInt(undefined), NaN);
		st.equal(parseInt(null), NaN);
		st.equal(parseInt(NaN), NaN);

		st.end();
	});

	t.test('throws on symbols', { skip: !hasSymbols }, function (st) {
		st['throws'](function () { parseInt(Symbol('')); }, 'throws on a Symbol');
		st['throws'](function () { parseInt(Object(Symbol(''))); }, 'throws on a boxed Symbol');

		st.end();
	});
};
