import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      data: [1, 5, 10, -3, 50, 4, 5, 15, -40]
    }
  }
});
