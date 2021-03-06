import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["ember-anychart"],

  // Instance of chart or stage object
  instance: undefined,

  didReceiveAttrs() {
    this._super(...arguments);

    let attributes = this.get('attrs');

    if (!("instance" in attributes)) {
      let acType = this.get("type") || "line";
      this.set("instance", anychart[acType]());
    }

    let instance = this.get("instance");
    let attr;
    for (attr in attributes) {
      let value = attributes[attr]["value"];
      if (typeof instance[attr] === "function") {
        instance[attr](value);
      }
    }
  },

  didInsertElement() {
    this._super(...arguments);

    Ember.run.scheduleOnce('afterRender', this, '_renderChart');
  },

  _renderChart(){
    let instance = this.get("instance");
    if (typeof instance === "object") {
      instance['container'](this.elementId);
      // If instance is a chart
      if (typeof instance['draw'] === "function") {
        instance['draw']();

        // after draw callback processing
        let afterDraw = this.get("afterDraw");
        if (typeof afterDraw === "function") {
          instance['listenOnce']("chartdraw", function() {
            instance.animation(false);
            afterDraw(instance);
          });
        }
      }
    }
  }
});
