import Ember from 'ember';

export default Ember.Route.extend({
  // chart instance
  chart: undefined,

  model() {
    // create data set on our data
    let dataSet = anychart.data.set([
      ['Nail polish', 6814, 3054, 4376, 4229],
      ['Eyebrow pencil', 7012, 5067, 8987, 3932],
      ['Pomade', 8814, 9054, 4376, 9256]
    ]);

    // map data for the first series, take x from the zero column and value from the first column of data set
    let seriesData_1 = dataSet.mapAs({x: [0], value: [1]});

    // map data for the second series, take x from the zero column and value from the second column of data set
    let seriesData_2 = dataSet.mapAs({x: [0], value: [2]});

    // map data for the third series, take x from the zero column and value from the third column of data set
    let seriesData_3 = dataSet.mapAs({x: [0], value: [3]});

    // map data for the fourth series, take x from the zero column and value from the fourth column of data set
    let seriesData_4 = dataSet.mapAs({x: [0], value: [4]});

    // create column chart
    this.chart = anychart.column();

    // turn on chart animation
    this.chart.animation(true);

    // set chart title text settings
    this.chart.title('Top 3 Products with Region Sales Data');

    this.chart.yAxis().labels().textFormatter("${%Value}");

    // set titles for Y-axis
    this.chart.yAxis().title('Revenue');

    // helper function to setup label settings for all series
    let setupSeriesLabels = function (series, name) {
      let seriesLabels = series.labels();
      series.hoverLabels().enabled(false);
      seriesLabels.enabled(true);
      seriesLabels.position('top');
      seriesLabels.textFormatter(function () {
        return '$' + this.value.toLocaleString();
      });
      series.name(name);
      seriesLabels.anchor('bottom');
      series.tooltip().titleFormatter(function () {
        return this.x;
      });
      series.tooltip().textFormatter(function () {
        return this.seriesName + ': $' + parseInt(this.value).toLocaleString();
      });
      series.tooltip().position('top').anchor('bottom').offsetX(0).offsetY(5);
    };

    // temp letiable to store series instance
    let series;

    // create first series with mapped data
    series = this.chart.column(seriesData_1);
    setupSeriesLabels(series, 'Florida');

    // create second series with mapped data
    series = this.chart.column(seriesData_2);
    setupSeriesLabels(series, 'Texas');

    // create third series with mapped data
    series = this.chart.column(seriesData_3);
    setupSeriesLabels(series, 'Arizona');

    // create fourth series with mapped data
    series = this.chart.column(seriesData_4);
    setupSeriesLabels(series, 'Nevada');

    // turn on legend and tune it
    this.chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

    // interactivity settings and tooltip position
    this.chart.interactivity().hoverMode('single');
    this.chart.tooltip().positionMode('point');

    // set up chart palette as 'defaultPalette'
    this.chart.palette(anychart.palettes.defaultPalette);

    return {chart: this.chart};
  }
});
