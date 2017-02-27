/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-anychart',
  included: function (app) {
    this._super.included(app);

    app.import('bower_components/proj4/dist/proj4.js');

    app.import('bower_components/anychart/dist/anychart-bundle.min.js');
    app.import('bower_components/anychart/dist/anychart-ui.min.css');

    app.import('vendor/anychart/fonts.css');
    app.import('vendor/anychart/fonts/anychart.eot', {destDir: '/assets/fonts'});
    app.import('vendor/anychart/fonts/anychart.svg', {destDir: '/assets/fonts'});
    app.import('vendor/anychart/fonts/anychart.ttf', {destDir: '/assets/fonts'});
    app.import('vendor/anychart/fonts/anychart.woff', {destDir: '/assets/fonts'});
  }
};
