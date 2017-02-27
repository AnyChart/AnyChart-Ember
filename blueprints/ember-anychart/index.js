module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([{name: 'anychart', target: '~7'}, {name: 'proj4', target: '~2'}]);
  }
};
