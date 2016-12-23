import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["ember-anychart"],

  // Instance of chart or stage object
  instance: undefined,

  didReceiveAttrs() {
    this._super(...arguments);

    let attributes = arguments[0]["newAttrs"];
    // Processing instance
    if(!("instance" in attributes)) {
      let acType = this.get("type") || "line"; 
      this.set("instance", anychart[acType]());
    }

    let attr;
    for (attr in attributes) {
      let value = attributes[attr]['value'];
      console.log(attr, value);
    }
  },

  didInsertElement: function() {
    this._super(...arguments);

    let instance = this.get("instance");
    if (typeof instance === "object") {
      instance.container(this.elementId);
      // If instance is a chart
      if (typeof instance.draw === "function") {
        instance.draw();

        // after draw callback processing
        let afterDraw = this.get("after-draw");
        if (typeof afterDraw === "function") {
          instance.listenOnce("chartdraw", function() {
            instance.animation(false);
            afterDraw(instance);
          });
        }
      }
    }
  },
});
