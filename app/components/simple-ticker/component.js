import Ember from 'ember';

export default Ember.Component.extend({
	ticks: 0,
	ticking: true, // autoruns
	interval: 250, // millisecons

	tick: function() {
		Ember.run.later(this, function() {
			if (this.get('ticking')) {
				this.incrementProperty('ticks');
			}
		}, this.get('interval'));
	}.observes('ticks').on('init'),

});
