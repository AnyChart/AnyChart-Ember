import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-anychart'],

  didInsertElement: function() {
    this._super(...arguments);

    let instance = this.get('instance');
    if (typeof instance === 'object') {
      instance.container(this.elementId);
      if (typeof instance.draw === 'function') {
        instance.draw();
      }
    }
  },
});
