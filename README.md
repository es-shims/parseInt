# parseInt <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `parseInt` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-parseint).

## Getting started

```sh
npm install --save parseint
```

## Usage/Examples

```js
console.log(parseInt("-3")); // -3
console.log(parseInt("0x10")); // 16
console.log(parseInt("30", 7)); // 21
console.log(parseInt("ef")); // NaN
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/parseint
[npm-version-svg]: https://versionbadg.es/es-shims/parseInt.svg
[deps-svg]: https://david-dm.org/es-shims/parseInt.svg
[deps-url]: https://david-dm.org/es-shims/parseInt
[dev-deps-svg]: https://david-dm.org/es-shims/parseInt/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/parseInt#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/parseint.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/parseint.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/parseint.svg
[downloads-url]: https://npm-stat.com/charts.html?package=parseint
[codecov-image]: https://codecov.io/gh/es-shims/parseInt/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/parseInt/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/parseInt
[actions-url]: https://github.com/es-shims/parseInt/actions
