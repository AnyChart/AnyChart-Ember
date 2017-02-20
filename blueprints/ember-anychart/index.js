module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addPackageToProject('proj4');
  }
};
