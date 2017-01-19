import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('simple');
  this.route('stage');
  this.route('dynamic');
  this.route('data-from-file');
  this.route('streaming');
  this.route('chart-by-attributes');
  this.route('gantt');
});

export default Router;
