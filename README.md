# Rails UJS as Javascript modules without jQuery

Requires support for [element.matches](https://developer.mozilla.org/en/docs/Web/API/Element/matches) & [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent). I didn't want to include polyfills because I think every npm module should not include its own polyfills, that will bloat projects. Polyfill as needed.



# TODO

- Add back something to run the tests with
- Do this: https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738



## Install

`npm install modular-ujs`



## Contribute

Clone repo

```
$ git clone https://github.com/sakamies/modular-ujs
$ cd modular-js/
```

Install dependencies

```
$ npm install
```

TODO: add webpack & babel so you can build this

Run tests

```
$ npm run test
```

## Thanks to the original authors of Vanilla UJS

- Alex Tsokurov ([@ximik](https://github.com/ximik))
- Matt Huggins ([@mhuggins](https://github.com/mhuggins))
- Tasveer Singh ([@tazsingh](https://github.com/tazsingh))
- Tim O'Sulg ([@timgluz](https://github.com/timgluz))
- Walter Lee Davis ([@walterdavis](https://github.com/walterdavis))

# License

MIT License, see [`LICENSE`](LICENSE.txt) file.
