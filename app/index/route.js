import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		enter() {
			this.transitionTo('front');
		}
	}
});
