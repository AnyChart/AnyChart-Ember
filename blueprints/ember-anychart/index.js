module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([{name: 'anychart', target: '~8'}, {name: 'proj4', target: '~2'}]);
  }
};
