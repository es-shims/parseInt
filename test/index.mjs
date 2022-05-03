import parseInt, * as parseIntModule from 'parseint';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(parseInt, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(parseIntModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = parseIntModule;
	t.equal((await import('parseint/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('parseint/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('parseint/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
