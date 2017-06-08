import Ember from 'ember';

export default Ember.Route.extend({
  init() {
    this._super(...arguments);
    this.transitionTo('home');
  },
  actions: {
    transitionToHome() {
      this.transitionTo('home');
    }
  }

});
