import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: "data",
  suffix: '.json',

  pathForType: function(type) {
    return this._super(type) + this.get('suffix');
  }
  // urlForFindAll(modelName) {
  //   return modelName + '.json';
  // }

});
