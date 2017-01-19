import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return {
      data: [["one", 3], ["two", 6], ["three", 54], ["four", 20]],
      type: 'pie',
      title: "Custom title of a chart",

      //After draw callback
      afterDraw: function(chart){
        let oldTitle = chart.title().text();
        chart.title(oldTitle + "!!!");
      }
    };
  }
});
