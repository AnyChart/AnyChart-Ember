/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-anychart',
  included: function (app) {
    this._super.included(app);

    app.import('vendor/anychart/dist/anychart-bundle.min.js');
    app.import('vendor/anychart/dist/anychart-ui.min.css');
    app.import('vendor/anychart/dist/fonts.css');
    app.import('vendor/anychart/dist/fonts/anychart.eot', {destDir: '/assets/fonts'});
    app.import('vendor/anychart/dist/fonts/anychart.svg', {destDir: '/assets/fonts'});
    app.import('vendor/anychart/dist/fonts/anychart.ttf', {destDir: '/assets/fonts'});
    app.import('vendor/anychart/dist/fonts/anychart.woff', {destDir: '/assets/fonts'});
  }
  //,
  // options: {
  //   nodeAssets: {
  //     'anychart': {
  //       srcDir: 'dist',
  //       import: ['anychart-bundle.min.js', 'anychart-ui.min.css']
  //     }
  //   }
  // }
};
