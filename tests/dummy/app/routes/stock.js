import Ember from 'ember';

export default Ember.Route.extend({
  // chart instance
  chart: undefined,

  model: function() {
    let self = this;

    // load data from file
    return Ember.$.getJSON("stock-data.json").then(function(data) {
      return {
        chart: self._createChart(data),
        afterDraw: self.afterChartDraw
      };
    });
  },

  _createChart: function(data){
    // create data table on loaded data
    let dataTable = anychart.data.table();
    dataTable.addData(data);

    // map loaded data
    let firstMapping = dataTable.mapAs({'low': 2, 'high': 3, 'value': 4});
    let secondMapping = dataTable.mapAs({'low': 11, 'high': 12, value: 13});

    // create stock chart
    this.chart = anychart.stock();

    // create first plot on the chart with column series
    let firstPlot = this.chart.plot(0);
    firstPlot.rangeStepArea(firstMapping).name('Temperature').tooltip().useHtml(true).textFormatter(function() {
      return this.seriesName +
        '<br/><span style="color: #ccc">Max</span>: ' + this.high + '&deg;' +
        '<br/><span style="color: #ccc">Avg.</span>: ' + this.getDataValue('value') + '&deg;' +
        '<br/><span style="color: #ccc">Min</span>: ' + this.low + '&deg;';
    });
    firstPlot.marker(firstMapping).name('Average').type('diamond').tooltip(null);
    firstPlot.xAxis().background().enabled(true);
    firstPlot.grid().enabled(true);
    firstPlot.grid(1).enabled(true).layout('vertical');
    firstPlot.minorGrid().enabled(true);
    firstPlot.minorGrid(1).enabled(true).layout('vertical');

    // create second plot on the chart with column series
    let secondPlot = this.chart.plot(1);
    secondPlot.rangeArea(secondMapping).name('Wind')
      .fill('#ffd54f 0.65')
      .lowStroke('1.5 #ffd54f')
      .highStroke('1.5 #ffd54f')
      .tooltip().useHtml(true).textFormatter(function() {
      return '<br/><br/>' + this.seriesName +
        '<br/><span style="color: #ccc">Max</span>: ' + this.high + ' m/s' +
        '<br/><span style="color: #ccc">Avg.</span>: ' + this.getDataValue('value') + ' m/s' +
        '<br/><span style="color: #ccc">Min</span>: ' + this.low + ' m/s';
    });
    secondPlot.marker(secondMapping).name('Average').fill('#ef6c00 0.8').stroke('#ef6c00').type('pentagon').tooltip(null);
    secondPlot.height('30%');
    secondPlot.xAxis().background().enabled(true);

    // create scroller series with mapped data
    this.chart.scroller().rangeStepArea(firstMapping);

    // set chart selected date/time range
    this.chart.selectRange('2007-01-03', '2007-05-20');

    this.chart.tooltip().useHtml(true);
    return this.chart;
  },

  afterChartDraw: function(chart){
    // // create range picker
    let rangePicker = anychart.ui.rangePicker();
    // init range picker
    rangePicker.render(chart);

    // create range selector
    let rangeSelector = anychart.ui.rangeSelector();
    // init range selector
    rangeSelector.render(chart);
  }

});
