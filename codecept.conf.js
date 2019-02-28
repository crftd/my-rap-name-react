exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    ResembleHelper: {
      require: 'codeceptjs-resemblehelper',
      screenshotFolder: './output/',
      baseFolder: './output/screenshots/base/',
      diffFolder: './output/screenshots/diff/',
    },
    WebDriver: {
      url: 'https://crftd.github.io/my-rap-name-react/',
      browser: 'chrome',
    },
  },
  bootstrap: null,
  mocha: {},
  name: 'my-rap-name-react',
};
