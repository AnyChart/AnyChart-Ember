import Ember from 'ember';

export default Ember.Route.extend({
  chart: undefined,
  dataSet: undefined,

  beforeModel(){
    if (!this.chart) {
      // create line chart
      this.chart = anychart.line();

      // turn the legend on
      this.chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

      // Here we create initial data for dataSet
      let data = [];
      for (let i = 0; i < 50; i++) {
        data.push([
          this._getRandomInt(180, 350),
          this._getRandomInt(20, 150)
        ]);
      }

      // create data set on our data
      this.dataSet = anychart.data.set(data);

      // map data for the first series, takes value from the first column of data set
      let seriesData_1 = this.dataSet.mapAs({value: [0]});

      // create first series with mapped data
      let series_1 = this.chart.stepLine(seriesData_1);
      series_1.color('#ff0e09').name('Red');
      series_1.selectMarkers().enabled(false);

      // map data for the second series, takes value from the second column of data set
      let seriesData_2 = this.dataSet.mapAs({value: [1]});

      // create second series with mapped data
      let series_2 = this.chart.splineArea(seriesData_2);
      series_2.fill('#00a0ff 0.4').name('Blue');
      series_2.selectMarkers().enabled(false);
    }
  },

  model() {
    // Now we've got some new data
    let newData = [
      [
        this._getRandomInt(180, 350),
        this._getRandomInt(20, 150)
      ], [
        this._getRandomInt(180, 350),
        this._getRandomInt(20, 150)
      ]
    ];

    // Adding new data to dataSet, and removing same amount of rows of older data
    for (let i in newData) {
      // Just removing the most old row of data
      this.dataSet.remove(0);
      // Add new row
      this.dataSet.append(newData[i]);
    }

    return {chart: this.chart};
  },
  afterModel() {
    // Set timer to reload model
    let self = this;
    Ember.run.later((function () {
      self.refresh();
    }), 500);
  },

  // Helper utility function to get random integer
  _getRandomInt(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
})
;
