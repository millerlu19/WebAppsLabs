// scoreController.spec.js

import Score from '../js/score.js';
import ScoreController from '../js/scoreController.js';

export default class ScorecardController {
	describe('ScoreController instances', () => {
		let score;
		let controller;
		beforeEach(function() {
	    	score = new Score();
	    	controller = new ScoreController(score);
		});
		it('register to listen to score changes', () => {

		});
	});
}

