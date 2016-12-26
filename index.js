/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-anychart',
  included: function (app) {
    this._super.included(app);
  },
  options: {
    nodeAssets: {
      'anychart': {
        srcDir: 'dist',
        import: ['anychart-bundle.min.js', 'anychart-ui.min.css']
      }
    }
  }
};
