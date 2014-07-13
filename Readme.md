# retext-emoji [![Build Status](https://travis-ci.org/wooorm/retext-emoji.svg?branch=master)](https://travis-ci.org/wooorm/retext-emoji) [![Coverage Status](https://img.shields.io/coveralls/wooorm/retext-emoji.svg)](https://coveralls.io/r/wooorm/retext-emoji?branch=master)

[![browser support](https://ci.testling.com/wooorm/retext-emoji.png) ](https://ci.testling.com/wooorm/retext-emoji)

See [Browser Support](#browser-support) for more information (a.k.a. don’t worry about those grey icons above).

---


**[retext](https://github.com/wooorm/retext "Retext")** encoding of gemoji short-codes to unicode, and decoding from unicode to short-code.

## Installation

NPM:
```sh
$ npm install retext-emoji
```

Component.js:
```sh
$ component install wooorm/retext-emoji
```

## Usage & API

### emoji(options?)

```js
var Retext = require('retext'),
    emoji = require('retext-emoji');

new Retext()
    .use(emoji({
        'convert' : 'encode'
    }))
    .parse('It’s raining :cat:s and :dog:s!')
    .toString(); // 'It’s raining 🐱s and 🐶s!'
```

- `options` (`Object`)
- `options.convert` (`encode` or `decode`):
  - When `encode`, converts short-codes into their unicode equivalent (e.g., `:pig:` to `🐷`);
  - When `decode`, converts unicode emoji into their short-code equivalent (e.g., `🐷` to `:pig:`);

## Supported Gemoji
retext-emoji should support every gemoji [wooorm/gemoji](https://github.com/wooorm/gemoji) supports. There's a whole list of supported gemoji at [gemoji's repo](https://github.com/wooorm/gemoji/#supported-gemoji).

## Browser Support
Pretty much every browser (available through browserstack) runs all retext-emoji unit tests.

## License

  MIT
