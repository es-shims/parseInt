import callBind from 'call-bind';

import getPolyfill from 'parseint/polyfill';

export default callBind(getPolyfill(), null);

export { default as getPolyfill } from 'parseint/polyfill';
export { default as implementation } from 'parseint/implementation';
export { default as shim } from 'parseint/shim';
