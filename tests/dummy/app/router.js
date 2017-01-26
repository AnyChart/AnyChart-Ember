import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('simple-chart');
  this.route('chart-with-custom-settings');
  this.route('simple-dashboard');
  this.route('chart-with-dynamic-settings');
  this.route('data-streaming');
  this.route('simple-stock-chart');
  this.route('geographical-colored-map');
  this.route('simple-gantt-chart');
});

export default Router;
