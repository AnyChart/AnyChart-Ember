import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-anychart'],

  instance: undefined,

  didReceiveAttrs() {
    this._super(...arguments);
    this.instance = this.get('instance');
  },

  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, '_renderChart');
  },

  _renderChart: function() {
    this.instance.container(this.elementId);
    if(typeof this.instance.draw == 'function') {
      this.instance.draw();
    }
  }
});
