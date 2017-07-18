# PostCSS Alias
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[PostCSS][PostCSS] plugin that lets you create custom aliases for CSS properties with an `@alias` rule.

Part of [Rucksack - CSS Superpowers](http://simplaio.github.io/rucksack).

_Input_
```css
@alias {
  fs: font-size;
  bg: background;
}

.aliased {
  fs: 16px;
  bg: white;
}
```

_Output_
```css
.aliased {
  font-size: 16px;
  background: white;
}
```

> **Note:** Aliases in property values (eg: `transition: bg 200ms`) are not supported

### Usage

```js
postcss([ require('postcss-alias') ])
```

See [PostCSS][PostCSS] docs for examples for your environment.

***

MIT © [Sean King](https://twitter.com/seaneking)

[npm-image]: https://badge.fury.io/js/postcss-alias.svg
[npm-url]: https://npmjs.org/package/postcss-alias
[travis-image]: https://travis-ci.org/seaneking/postcss-alias.svg?branch=master
[travis-url]: https://travis-ci.org/seaneking/postcss-alias
[daviddm-image]: https://david-dm.org/seaneking/postcss-alias.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/seaneking/postcss-alias
[PostCSS]: https://github.com/postcss/postcss
