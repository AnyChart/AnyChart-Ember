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

    // map loaded data for the ohlc series
    let mapping = dataTable.mapAs({'open': 1, 'high': 2, 'low': 3, 'close': 4});

    // create stock chart
    this.chart = anychart.stock();

    // create first plot on the chart
    let plot = this.chart.plot(0);
    plot.xGrid().enabled(true);
    plot.yGrid().enabled(true);
    plot.xMinorGrid().enabled(true);
    plot.yMinorGrid().enabled(true);

    // create EMA indicators with period 50
    plot.ema(dataTable.mapAs({'value': 4})).series().stroke('1.5 #455a64');

    let series = plot.candlestick(mapping).name('CSCO');
    series.legendItem().iconType('risingfalling');

    // create scroller series with mapped data
    this.chart.scroller().candlestick(mapping);

    // set chart selected date/time range
    this.chart.selectRange('2007-01-03', '2007-05-20');

    return this.chart;
  },

  afterChartDraw: function(chart){
    // create range picker
    let rangePicker = anychart.ui.rangePicker();
    // init range picker
    rangePicker.render(chart);

    // create range selector
    let rangeSelector = anychart.ui.rangeSelector();
    // init range selector
    rangeSelector.render(chart);
  }

});
