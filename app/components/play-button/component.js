// NOTE: {{yield}} content should just be a simple string

import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['play'],
	text: 'play', // passed-in
	tchar: '-',		// top repeating character
	bchar: '=',		// bottom repeating character

	width: Ember.computed('text', function() {
		return this.get('text').length + 2;
	}),
	top: Ember.computed('width','tchar', function() {
		var ch = this.get('tchar');
		return '+' + ch.repeat(this.get('width')) + '+';
	}),
	bottom: Ember.computed('width', 'bchar', function() {
		var ch = this.get('bchar');
		return '+' + ch.repeat(this.get('width')) + '+';
	}),
	center: Ember.computed('text', function() {
		return '| ' + this.get('text') + ' |';
	}),

	click() {
		this.sendAction();
	}
});