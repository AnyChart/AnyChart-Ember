import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-anychart'],

  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, '_renderChart');
  },

  _renderChart: function() {
    let instance = this.get('instance');
    if (typeof instance === 'object') {
      instance.container(this.elementId);
      if (typeof instance.draw === 'function') {
        instance.draw();
      }
    }
  }
});
