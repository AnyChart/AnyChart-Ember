import Ember from 'ember';

export default Ember.Route.extend({
  // chart instance
  chart: undefined,


  model: function() {
    let self = this;

    // load data from file
    return Ember.$.getJSON("united_states_of_america.topo.json").then(function(data) {
      return {
        chart: self._createChart(data)
      };
    });
  },

  _createChart: function(data){
    this.chart = anychart.map();

    //set map title settings using html
    this.chart.title().padding(10, 0).hAlign('center').fontFamily("'Verdana', Helvetica, Arial, sans-serif");
    this.chart.title().enabled(true);
    this.chart.title().text(
      '<span style="color:#7c868e; font-size: 18px"> The States That ' +
      'Love Wine The Most.</span>' + ' <br>' +
      '<span style="color:#545f69; font-size: 14px">Litres of wine ' +
      'per person each state consumed in 2013.</span>'
    ).useHtml(true);

    //set map Geo data
    this.chart.geoData(data);

    let colorRange = this.chart.colorRange();
    colorRange.enabled(true).padding([20, 0, 0, 0]);
    colorRange.labels().padding(3);
    colorRange.colorLineSize(10);

    colorRange.stroke('#B9B9B9');
    colorRange.ticks().stroke('#B9B9B9').position('outside').length(10).enabled(true);
    colorRange.minorTicks().stroke('#B9B9B9').position('outside').length(5).enabled(true);
    colorRange.marker().size(7);

    let dataSet = anychart.data.set([
      {id: 'US.MN', name: "Minnesota", 'value': 8.4},
      {id: 'US.MT', name: "Montana", 'value': 8.5},
      {id: 'US.ND', name: "North Dakota", 'value': 5.1},
      {id: 'US.ID', name: "Idaho", 'value': 8.0},
      {id: 'US.WA', name: "Washington", 'value': 13.1},
      {id: 'US.AZ', name: "Arizona", 'value': 9.7},
      {id: 'US.CA', name: "California", 'value': 14.0},
      {id: 'US.CO', name: "Colorado", 'value': 8.7},
      {id: 'US.NV', name: "Nevada", 'value': 14.7},
      {id: 'US.NM', name: "New Mexico", 'value': 6.9},
      {id: 'US.OR', name: "Oregon", 'value': 12.2},
      {id: 'US.UT', name: "Utah", 'value': 3.2},
      {id: 'US.WY', name: "Wyoming", 'value': 5.2},
      {id: 'US.AR', name: "Arkansas", 'value': 4.2},
      {id: 'US.IA', name: "Iowa", 'value': 4.7},
      {id: 'US.KS', name: "Kansas", 'value': 3.2},
      {id: 'US.MO', name: "Missouri", 'value': 7.2},
      {id: 'US.NE', name: "Nebraska", 'value': 5.0},
      {id: 'US.OK', name: "Oklahoma", 'value': 4.5},
      {id: 'US.SD', name: "South Dakota", 'value': 5.0},
      {id: 'US.LA', name: "Louisiana", 'value': 5.7},
      {id: 'US.TX', name: "Texas", 'value': 5.0},
      {id: 'US.CT', name: "Connecticut", 'value': 14.4, labels: false},
      {id: 'US.MA', name: "Massachusetts", 'value': 16.9, labels: false},
      {id: 'US.NH', name: "New Hampshire", 'value': 19.6},
      {id: 'US.RI', name: "Rhode Island", 'value': 14.0, labels: false},
      {id: 'US.VT', name: "Vermont", 'value': 17.5},
      {id: 'US.AL', name: "Alabama", 'value': 6.0},
      {id: 'US.FL', name: "Florida", 'value': 12.4},
      {id: 'US.GA', name: "Georgia", 'value': 5.9},
      {id: 'US.MS', name: "Mississippi", 'value': 2.8},
      {id: 'US.SC', name: "South Carolina", 'value': 6.1},
      {id: 'US.IL', name: "Illinois", 'value': 10.2},
      {id: 'US.IN', name: "Indiana", 'value': 6.1},
      {id: 'US.KY', name: "Kentucky", 'value': 3.9},
      {id: 'US.NC', name: "North Carolina", 'value': 6.6},
      {id: 'US.OH', name: "Ohio", 'value': 7.2},
      {id: 'US.TN', name: "Tennessee", 'value': 5.4},
      {id: 'US.VA', name: "Virginia", 'value': 10.7},
      {id: 'US.WI', name: "Wisconsin", 'value': 9.1},
      {id: 'US.WY', name: "Wyoming", 'value': 5.2, labels: false},
      {id: 'US.WV', name: "West Virginia", 'value': 2.4},
      {id: 'US.DE', name: "Delaware", 'value': 13.5, labels: false},
      {id: 'US.DC', name: "District of Columbia", 'value': 25.7, labels: false},
      {id: 'US.MD', name: "Maryland", 'value': 8.9, labels: false},
      {id: 'US.NJ', name: "New Jersey", 'value': 14.9, labels: false},
      {id: 'US.NY', name: "New York", 'value': 11.9},
      {id: 'US.PA', name: "Pennsylvania", 'value': 5.6},
      {id: 'US.ME', name: "Maine", 'value': 10.4},
      {id: 'US.HI', name: "Hawaii", 'value': 13.1},
      {id: 'US.AK', name: "Alaska", 'value': 10.9},
      {id: 'US.MI', name: "Michigan", 'value': 7.6}
    ]);

    let series = this.chart.choropleth(dataSet);
    series.hovered().fill('#f48fb1');
    series.hovered().stroke(anychart.color.darken('#f48fb1'));
    series.selected().fill('#c2185b');
    series.selected().stroke(anychart.color.darken('#c2185b'));

    series.tooltip().useHtml(true);
    series.tooltip().format(function () {
      return '<span style="font-size: 13px">' + this.value + ' litres per capita</span>';
    });
    series.colorScale(anychart.scales.linearColor('#c2e9fb', '#81d4fa', '#01579b', '#002746'));

    return this.chart;
  },
});
