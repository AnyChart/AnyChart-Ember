import Ember from 'ember';

export default Ember.Route.extend({
  // stage instance
  stage: undefined,

  // Charts instances
  chart1: undefined,
  chart2: undefined,

  model() {
    if (this.stage === undefined) {
      // Create stage
      this.stage = anychart.graphics.create();

      // Create first chart
      this.chart1 = anychart.column();

      // turn on chart1 animation
      this.chart1.animation(true);

      // set chart1 title text settings
      this.chart1.title('Top 10 Cosmetic Products by Revenue');

      // create area series with passed data
      let series = this.chart1.column([
        ['Rouge', '80540'],
        ['Foundation', '94190'],
        ['Mascara', '102610'],
        ['Lip gloss', '110430'],
        ['Pomade', '128000'],
        ['Nail polish', '143760'],
        ['Eyebrow pencil', '170670'],
        ['Eyeliner', '213210'],
        ['Eyeshadows', '249980']
      ]);

      // set series tooltip settings
      series.tooltip().titleFormatter(function () {
        return this.x;
      });

      series.tooltip().textFormatter(function () {
        return '$' + parseInt(this.value).toLocaleString();
      });
      series.tooltip().position('top').anchor('bottom').offsetX(0).offsetY(5);

      // set scale minimum
      this.chart1.yScale().minimum(0);

      // set yAxis labels formatter
      this.chart1.yAxis().labels().textFormatter("${%Value}");

      // tooltips position and interactivity settings
      this.chart1.tooltip().positionMode('point');
      this.chart1.interactivity().hoverMode('byX');

      // axes titles
      this.chart1.xAxis().title('Product');
      this.chart1.yAxis().title('Revenue');

      // set stage as container the first chart
      this.chart1.container(this.stage);

      // initiate chart1 drawing
      this.chart1.width(800);
      this.chart1.height(300);
      this.chart1.draw();

      // create second chart
      this.chart2 = anychart.pie([
        ['Department Stores', 6371664],
        ['Discount Stores', 7216301],
        ['Men\'s/Women\'s Stores', 1486621],
        ['Juvenile Specialty Stores', 786622],
        ['All other outlets', 900000]
      ]);

      //set chart radius
      this.chart2.radius('43%');

      // create empty area in pie chart
      this.chart2.innerRadius('30%');

      // set stage as container the second chart
      this.chart2.container(this.stage);

      // initiate chart2 drawing
      this.chart2.width(800);
      this.chart2.height(300);
      this.chart2.top(300);
      this.chart2.draw();
    }

    // return our stage instance as route's model
    return {
      stage: this.stage
    };
  }
});
