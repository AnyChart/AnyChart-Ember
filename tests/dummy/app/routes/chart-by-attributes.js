import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      data: [["one", 3], ["two", 6], ["three", 54], ["four", 20]],
      type: 'pie',
      title: "Custom title of a chart"
    };
  }
});
