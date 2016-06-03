var _ = require('lodash');

module.exports = function(config) {
  config.set({
    name: 'Test',

    files: [ '**/*.compiledtest' ],
    frameworks: [ 'mocha' ],
    preprocessors: {
      '**/*.compiledtest': [ 'webpack' ]
    },
    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
    ],
    webpackServer: {
      noInfo: true,   // don't spam the console when running in karma
    },

    webpack: {
      devtool: 'source-map',
      output: {
        path: './.test',
        filename: '[name]',
      },
      resolve: {
        generator: 'npm-and-modules',
        paths: ['src', 'lib'],
        extensions: ['', '.js', '.jsx', '.es6.js', '.json'],
      },
      loaders: [
        'esnextreact',
        'json',
        'ignore-styles',
      ],
      plugins: [
        'extract-css',
        'abort-if-errors',
      ],
      externals: {
        generator: 'node-modules',
        additional: ['@r/platform/createTest'],
      },
    }
  });
};
