import Ember from 'ember';

export default Ember.Route.extend({
  // Chart instance
  chart: undefined,

  model(){
    let self = this;
    return {
      data: [["one", 3], ["two", 6], ["three", 54], ["four", 20]],
      type: 'pie',
      title: "Custom title of a chart",

      //After draw callback
      afterDraw: function(chart){
        self.chart = chart;
        let oldTitle = self.chart.title().text();
        self.chart.title(oldTitle + "!!!");
      }
    };
  }
});
