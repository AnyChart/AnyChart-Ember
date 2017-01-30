/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults);

  /*
   This build file specifies the options for the dummy test app of this
   addon, located in `/tests/dummy`
   This build file does *not* influence how the addon or the app using it
   behave. You most likely want to be modifying `./index.js` or app's build file
   */
  app.import('bower_components/proj4/dist/proj4.js');

  app.import('vendor/anychart/dist/anychart-bundle.min.js');
  app.import('vendor/anychart/dist/anychart-ui.min.css');
  app.import('vendor/anychart/dist/fonts.css');
  app.import('vendor/anychart/dist/fonts/anychart.eot', {destDir: '/assets/fonts'});
  app.import('vendor/anychart/dist/fonts/anychart.svg', {destDir: '/assets/fonts'});
  app.import('vendor/anychart/dist/fonts/anychart.ttf', {destDir: '/assets/fonts'});
  app.import('vendor/anychart/dist/fonts/anychart.woff', {destDir: '/assets/fonts'});

  return app.toTree();
};
