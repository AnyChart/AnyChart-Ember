/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-anychart',
  included: function(app) {
    this._super.included(app);

    app.import('vendor/anychart.min.js');
    //app.import(app.bowerDirectory + '/anychart/dist/anychart.min.js');
    // https://cdn.anychart.com/js/latest/anychart.min.js
  }
};
