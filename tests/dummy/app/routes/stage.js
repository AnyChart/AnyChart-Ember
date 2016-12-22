import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // создаем стедж с графиками и настраиваем как обычно
    let stage = anychart.graphics.create();

// create column chart
    let chart1 = anychart.column();

// turn on chart1 animation
    chart1.animation(true);

// set chart1 title text settings
    chart1.title('Top 10 Cosmetic Products by Revenue');

// create area series with passed data
    let series = chart1.column([
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
    series.tooltip().titleFormatter(function() {
      return this.x;
    });

    series.tooltip().textFormatter(function() {
      return '$' + parseInt(this.value).toLocaleString();
    });
    series.tooltip().position('top').anchor('bottom').offsetX(0).offsetY(5);

// set scale minimum
    chart1.yScale().minimum(0);

// set yAxis labels formatter
    chart1.yAxis().labels().textFormatter("${%Value}");

// tooltips position and interactivity settings
    chart1.tooltip().positionMode('point');
    chart1.interactivity().hoverMode('byX');

// axes titles
    chart1.xAxis().title('Product');
    chart1.yAxis().title('Revenue');

// set container id for the chart1
    chart1.container(stage);

// initiate chart1 drawing
    chart1.width(800);
    chart1.height(300);
    chart1.draw();

// create pie chart with passed data
    let chart2 = anychart.pie([
      ['Department Stores', 6371664],
      ['Discount Stores', 7216301],
      ['Men\'s/Women\'s Stores', 1486621],
      ['Juvenile Specialty Stores', 786622],
      ['All other outlets', 900000]
    ]);

//set chart radius
    chart2.radius('43%');

// create empty area in pie chart
    chart2.innerRadius('30%');

// set container id for the chart
    chart2.container(stage);

// initiate chart drawing
// initiate chart1 drawing
    chart2.width(800);
    chart2.height(300);
    chart2.top(300);
    chart2.draw();

    return stage;
  }
});
