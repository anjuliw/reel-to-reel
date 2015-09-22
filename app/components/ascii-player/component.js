import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['tank', 'player'],
	ticks: 0,
	ticking: false,

	/////////////////////////
	// SETTINGS: 
	//   (can set these when the component is called in template)
	//
	interval: 250, 	// in milliseconds
	framecount: Ember.computed('frames.[]', function() {
		return this.get('frames').length;
	}),

	playcontrols: true,
	displayconsole: false,
	speedcontrols: false, 
	// autoplay: false,
	// loop: true,
	//////////////////////////

	frames: [], 	// passed-in, array of (escaped?) strings, see examples in model

	ticker: Ember.computed('ticks', function() {
		return this.get('ticks') + ' ticks';
	}),
	console: Ember.computed('ticker', 'ticking', 'displayconsole', function() {
		if (this.get('displayconsole')) {
			return this.get('ticker') + ' | | ' + this.get('interval') + ' ms';
		} else {
			return null;
		}
	}),

	tick: function() {
		Ember.run.later(this, function() {
			if (this.get('ticking')) {
				if (this.get('ticks') < this.get('framecount') - 1) {
					this.incrementProperty('ticks');
				} else {
					this.set('ticks', 0);
				}
			}
		}, this.get('interval'));
	}.observes('ticks'),

	current: Ember.computed('ticks', function () {
		return this.get('frames')[this.get('ticks')];
	}),

	actions: {
		reset() {
			this.set('ticking', false);
			this.set('ticks', 0);
		},

		play() {
			this.set('ticking', true);
			this.incrementProperty('ticks');
		},

		stop() {
			this.set('ticking', false);
		},

		slow() {
			this.set('interval', 50 + this.get('interval'));
		},

		speed() {
			this.set('interval', -50 + this.get('interval'));
		}
	}
});
