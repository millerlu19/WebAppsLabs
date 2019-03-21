// scoreController.js

export default class ScorecardController {

	constructor(score, ui) {
		this.score = score;
		this.ui = ui;
		this.ui.initialize(score);
		this.score.on('change', (property, value) => this.modelChanged(property, value));
	}
	
}