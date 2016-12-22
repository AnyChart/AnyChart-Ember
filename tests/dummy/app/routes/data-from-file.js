import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //let data = this.get('store').findAll('chart-data');

    // let data = Ember.$.getJSON("/data/chart-data.json");
    // console.log(data);
    return [];
  }
});
