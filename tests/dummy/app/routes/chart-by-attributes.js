import Ember from 'ember';

export default Ember.Route.extend({
  // Chart instance
  chart: undefined,

  model(){
    return {
      data: [["one", 3], ["two", 6], ["three", 54], ["four", 20]],
      type: 'pie',
      title: "Custom title of a chart",

      //After draw callback
      afterDraw: function(chart){
        this.chart = chart;
        let oldTitle = this.chart.title().text();
        this.chart.title(oldTitle + "!!!");
      }
    };
  }
});
