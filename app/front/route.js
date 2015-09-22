import Ember from 'ember';
import Solofish from 'reel-to-reel/models/solofish';
import Plantfish from 'reel-to-reel/models/plantfish';

var solofish = Solofish.create();
var plantfish = Plantfish.create();

export default Ember.Route.extend({
	model() {
		return {
			solofish: solofish,
			plantfish: plantfish
		}
	}
});
