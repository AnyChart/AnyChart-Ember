import Ember from 'ember';

export default Ember.Route.extend({
  // Chart instance
  chart: undefined,

  model(){
    let self = this;
    return {
      data: [["Pen", 3], ["Pineapple", 9], ["Apple", 5], ["Pen", 3]],
      type: 'pie',
      title: "Chart title text",

      //After draw callback
      afterDraw: function(chart){
        self.chart = chart;
        let oldTitle = self.chart.title().text();
        self.chart.title(oldTitle + "!!!");
      }
    };
  }
});
