import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['player'],
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
	autoplay: false,
	loop: true,
	//////////////////////////

	frames: [], 	// passed-in, array of (escaped?) strings, see examples in model
	current: Ember.computed('ticks','frames', function () {
		return this.get('frames')[this.get('ticks')];
	}),

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
				if(this.get('loop')) {
					if (this.get('ticks') < this.get('framecount') - 1) {
						this.incrementProperty('ticks');
					} else {
						this.set('ticks', 0);		// reset loop
					}
				} else {
					this.incrementProperty('ticks');
				}
			}
		}, this.get('interval'));
	}.observes('ticks'),

	init() {
		this._super();
		if (this.get('autoplay')) {
			this.set('ticking', true);
			if (this.get('ticking')) { this.tick(); }
		}
	},

	actions: {

		play() {
			this.set('ticking', true);
			if (this.get('ticking')) { this.tick(); }
		},

		pause() {
			this.set('ticking', false);
		},

		stop() {
			this.set('ticking', false);
			if(!this.get('ticking')) { this.set('ticks', 0); }
		},

		slow() {
			this.set('interval', 50 + this.get('interval'));
		},

		speed() {
			this.set('interval', -50 + this.get('interval'));
		}
	}
});
