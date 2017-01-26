import Ember from 'ember';

export default Ember.Route.extend({
  // stage instance
  stage: undefined,

  // Charts instances
  chart1: undefined,
  chart2: undefined,

  model() {
    if (this.stage === undefined) {
      let data = [
        ['Rouge', '80540'],
        ['Foundation', '94190'],
        ['Mascara', '102610'],
        ['Lip gloss', '110430'],
        ['Pomade', '128000'],
        ['Nail polish', '143760'],
        ['Eyebrow pencil', '170670'],
        ['Eyeliner', '213210'],
        ['Eyeshadows', '249980']
      ];

      // Create stage
      this.stage = anychart.graphics.create();

      // Create first chart
      this.chart1 = anychart.column();

      // turn on chart1 animation
      this.chart1.animation(true);

      // set chart1 title text settings
      this.chart1.title('Top 10 Cosmetic Products by Revenue');

      // tooltips position and interactivity settings
      this.chart1.tooltip().positionMode('point').position('top').anchor('bottom').offsetX(0).offsetY(5);
      this.chart1.interactivity().hoverMode('byX');

      // set scale minimum
      this.chart1.yScale().minimum(0);

      // axes titles
      this.chart1.xAxis().title('Product');
      this.chart1.yAxis().title('Revenue');

      // set yAxis labels formatter
      this.chart1.yAxis().labels().textFormatter("${%Value}");

      // create area series with passed data
      let series = this.chart1.column(data);

      // set series tooltip settings
      series.tooltip().textFormatter("${%Value}{groupsSeparator:\\,}");

      // set up chart's size
      this.chart1.width(800);
      this.chart1.height(300);

      // create second chart
      this.chart2 = anychart.pie(data);

      // turn on chart2 animation
      this.chart2.animation(true);

      //set chart radius
      this.chart2.radius('43%');

      // set up chart2 legend
      this.chart2.legend().enabled(true).position("left").align("top").itemsLayout("vertical");

      this.chart2.width(800);
      this.chart2.height(300);
      this.chart2.top(300);

      // set stage as container for the both of charts and initiate drawing
      this.chart1.container(this.stage);
      this.chart2.container(this.stage);

      this.chart1.draw();
      this.chart2.draw();
    }

    // return our stage instance as route's model
    return {
      stage: this.stage
    };
  }
});
