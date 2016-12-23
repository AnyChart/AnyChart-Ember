import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-anychart'],

  didInsertElement: function() {
    this._super(...arguments);

    let instance = this.get('instance');
    if (typeof instance === 'object') {
      instance.container(this.elementId);
      // If instance is a chart
      if (typeof instance.draw === 'function') {
        instance.draw();

        // after draw callback processing
        let afterDraw = this.get('after-draw');
        if (typeof afterDraw === 'function') {
          instance.listenOnce("chartdraw", function() {
            instance.animation(false);
            afterDraw(instance);
          });
        }
      }
    }
  },
});
