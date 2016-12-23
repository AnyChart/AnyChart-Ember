import Ember from 'ember';

let paletteOptions = [
  'defaultPalette',
  'blue',
  'coffee',
  'earth',
  'glamour',
  'monochrome',
  'morning',
  'pastel',
  'provence',
  'sea',
  'turquoise',
  'v6',
];

export default Ember.Controller.extend({
  paletteOptions: paletteOptions,
  actions: {
    changePalette(palette) {
      this.model.chart.palette(anychart.palettes[palette]);
    }
  }
});
