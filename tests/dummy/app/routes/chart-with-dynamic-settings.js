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

    this.chart.yAxis().labels().format("${%Value}");

    // set titles for Y-axis
    this.chart.yAxis().title('Revenue');

    // set up tooltip position and text formatter
    this.chart.tooltip().position('top').anchor('bottom').offsetX(0).offsetY(5).positionMode('point');
    this.chart.tooltip().format("{%SeriesName}: ${%Value}{groupsSeparator:\\,}");

    // turn on legend and tune it
    this.chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

    // interactivity settings
    this.chart.interactivity().hoverMode('single');

    // helper function to setup label settings for all series
    let setupSeries = function(series, name) {
      series.name(name);
      series.hovered().labels().enabled(false);

      let seriesLabels = series.labels();
      seriesLabels.enabled(true).position('top').anchor('bottom').format("${%Value}{groupsSeparator:\\,}");
    };

    // create first series with mapped data
    let series_1 = this.chart.column(seriesData_1);
    setupSeries(series_1, 'Florida');

    // create second series with mapped data
    let series_2 = this.chart.column(seriesData_2);
    setupSeries(series_2, 'Texas');

    // create third series with mapped data
    let series_3 = this.chart.column(seriesData_3);
    setupSeries(series_3, 'Arizona');

    // create fourth series with mapped data
    let series_4 = this.chart.column(seriesData_4);
    setupSeries(series_4, 'Nevada');

    // set up chart palette as 'defaultPalette'
    this.chart.palette(anychart.palettes.defaultPalette);

    return {chart: this.chart};
  }
});
