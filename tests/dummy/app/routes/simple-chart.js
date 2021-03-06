import Ember from 'ember';

export default Ember.Route.extend({
  // chart instance
  chart: undefined,

  model() {
    if (this.chart === undefined) {
      // We have some data
      let data = [
        ['1986', 3.6, 2.3, 2.8, 11.5],
        ['1987', 7.1, 4.0, 4.1, 14.1],
        ['1988', 8.5, 6.2, 5.1, 17.5],
        ['1989', 9.2, 11.8, 6.5, 18.9],
        ['1990', 10.1, 13.0, 12.5, 20.8],
        ['1991', 11.6, 13.9, 18.0, 22.9],
        ['1992', 16.4, 18.0, 21.0, 25.2],
        ['1993', 18.0, 23.3, 20.3, 27.0],
        ['1994', 13.2, 24.7, 19.2, 26.5],
        ['1995', 12.0, 18.0, 14.4, 25.3],
        ['1996', 3.2, 15.1, 9.2, 23.4],
        ['1997', 4.1, 11.3, 5.9, 19.5],
        ['1998', 6.3, 14.2, 5.2, 17.8],
        ['1999', 9.4, 13.7, 4.7, 16.2],
        ['2000', 11.5, 9.9, 4.2, 15.4],
        ['2001', 13.5, 12.1, 1.2, 14.0],
        ['2002', 14.8, 13.5, 5.4, 12.5],
        ['2003', 16.6, 15.1, 6.3, 10.8],
        ['2004', 18.1, 17.9, 8.9, 8.9],
        ['2005', 17.0, 18.9, 10.1, 8.0],
        ['2006', 16.6, 20.3, 11.5, 6.2],
        ['2007', 14.1, 20.7, 12.2, 5.1],
        ['2008', 15.7, 21.6, 10, 3.7],
        ['2009', 12.0, 22.5, 8.9, 1.5]
      ];

      // create data set with our data
      let dataSet = anychart.data.set(data);

      // map data for the first series, take x from the zero column and value from the first column of data set
      let seriesData_1 = dataSet.mapAs({x: [0], value: [1]});

      // map data for the second series, take x from the zero column and value from the second column of data set
      let seriesData_2 = dataSet.mapAs({x: [0], value: [2]});

      // map data for the third series, take x from the zero column and value from the third column of data set
      let seriesData_3 = dataSet.mapAs({x: [0], value: [3]});

      // create line chart
      this.chart = anychart.line();

      // turn on chart animation
      this.chart.animation(true);

      // turn on the crosshair
      this.chart.crosshair().enabled(true).yLabel().enabled(false);
      this.chart.crosshair().yStroke(null);

      // set up tooltip
      this.chart.tooltip().positionMode('point').position('right').anchor('left').offsetX(5).offsetY(5);

      // set chart title text settings
      this.chart.title('Trend of Sales of the Most Popular Products of ACME Corp.');
      this.chart.title().padding([0, 0, 5, 0]);

      // set yAxis title
      this.chart.yAxis().title('Number of Bottles Sold (thousands)');
      this.chart.xAxis().labels().padding([5]);

      // create first series with mapped data
      let series_1 = this.chart.line(seriesData_1);
      series_1.name('Brandy');
      series_1.hovered().markers().enabled(true).type('circle').size(4);

      // create second series with mapped data
      let series_2 = this.chart.line(seriesData_2);
      series_2.name('Whiskey');
      series_2.hovered().markers().enabled(true).type('circle').size(4);

      // create third series with mapped data
      let series_3 = this.chart.line(seriesData_3);
      series_3.name('Tequila');
      series_3.hovered().markers().enabled(true).type('circle').size(4);

      // turn the legend on
      this.chart.legend().enabled(true).fontSize(13).padding([0, 0, 10, 0]);

      // set up paddings
      this.chart.padding([10, 20, 5, 20]);
    }

    // return our chart instance as route's model
    return {
      chart: this.chart
    };
  }
});
